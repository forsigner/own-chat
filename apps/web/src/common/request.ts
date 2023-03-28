import { ChatRequest, filterConfig, Message, ModelConfig, TIME_OUT_MS } from "./api-util";

const makeRequestParam = (
  messages: Message[],
  options?: {
    filterBot?: boolean;
    stream?: boolean;
  }
): ChatRequest => {
  let sendMessages = messages.map((v) => ({
    role: v.role,
    content: v.content,
  }));

  if (options?.filterBot) {
    sendMessages = sendMessages.filter((m) => m.role !== "assistant");
  }

  return {
    model: "gpt-3.5-turbo",
    messages: sendMessages,
    stream: options?.stream,
  };
};

export async function requestChatStream(
  messages: Message[],
  options?: {
    filterBot?: boolean;
    modelConfig?: ModelConfig;
    onMessage: (message: string, done: boolean) => void;
    onError: (error: Error) => void;
    onController?: (controller: AbortController) => void;
  }
) {
  const req = makeRequestParam(messages, {
    stream: true,
    filterBot: options?.filterBot,
  });

  // valid and assign model config
  if (options?.modelConfig) {
    Object.assign(req, filterConfig(options.modelConfig));
  }

  const controller = new AbortController();
  const reqTimeoutId = setTimeout(() => controller.abort(), TIME_OUT_MS);
  try {
    const res = await fetch("/api/chatapi/stream", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
      signal: controller.signal,
    });
    clearTimeout(reqTimeoutId);

    let responseText = "";

    const finish = () => {
      options?.onMessage(responseText, true);
      controller.abort();
    };

    if (res.ok) {
      const reader = res.body?.getReader();
      const decoder = new TextDecoder();

      options?.onController?.(controller);

      while (true) {
        // handle time out, will stop if no response in 10 secs
        const resTimeoutId = setTimeout(() => finish(), TIME_OUT_MS);
        const content = await reader?.read();
        clearTimeout(resTimeoutId);
        const text = decoder.decode(content?.value);
        responseText += text;
        const done = !content || content.done;
        options?.onMessage(responseText, false);

        if (done) {
          break;
        }
      }

      finish();
    } else if (res.status === 401) {
      console.error("Anauthorized");
      responseText = 'Unauthorized access, please enter access code in settings page.';
      finish();
    } else {
      console.error("Stream Error");
      options?.onError(new Error("Stream Error"));
    }
  } catch (err) {
    console.error("NetWork Error", err);
    options?.onError(err as Error);
  }
}
