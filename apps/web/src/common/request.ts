import { TIME_OUT_MS } from "../../../provider-next/src/common/api-util";
import { ChatCompletionResponseMessage } from "openai"

export interface Result {
  code: string | number
  message: string
  data?: any
}

interface ChatParams {
  model: string
  messages: ChatCompletionResponseMessage[],
  presence_penalty: number,
  stream: boolean
  temperature: number
  top_p: number
  max_tokens: number
}

export async function fetchChatStream(
  params: ChatParams,
  onMessage: (message: string, done: boolean) => void,
  onError?: (error: Error) => void,
  onController?: (controller: AbortController) => void,
) {
  const controller = new AbortController();
  const reqTimeoutId = setTimeout(() => controller.abort(), TIME_OUT_MS);
  try {
    const result = await fetch("/api/chat-stream", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
      signal: controller.signal,
    });

    console.log('res===>test:', result)

    clearTimeout(reqTimeoutId);

    let responseText = "";

    const finish = () => {
      onMessage(responseText, true);
      controller.abort();
    };

    if (result.ok) {
      const reader = result.body?.getReader();
      const decoder = new TextDecoder();

      onController && onController(controller);

      while (true) {
        // handle time out, will stop if no response in 10 secs
        const resTimeoutId = setTimeout(() => finish(), TIME_OUT_MS);
        const content = await reader?.read();
        clearTimeout(resTimeoutId);
        const text = decoder.decode(content?.value);
        responseText += text;
        const done = !content || content.done;
        onMessage(responseText, false);
        if (done) {
          break;
        }
      }
      finish();
    } else if (result.status === 401) {
      console.error("Anauthorized");
      responseText = 'Unauthorized access, please enter access code in settings page.';
      finish();
    } else {
      console.error("Stream Error");
      onError && onError(new Error("Stream Error"));
    }
  } catch (error) {
    console.error("NetWork Error", error);
    onError && onError(error as Error);
  }
}

export async function fetchBalance(): Promise<any> {
  try {
    return await fetch("/api/balance", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    console.error("NetWork Error", error);
    return {
      code: 0,
      message: error
    }
  }
}

export async function fetchModels(): Promise<any> {
  try {
    return await fetch("/api/models", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    console.error("NetWork Error", error);
    return {
      code: 0,
      message: error
    }
  }
}

export async function fetchCompletions(params: any): Promise<any> {
  console.log('params:', params)
  try {
    return await fetch("/api/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: params,
      body: JSON.stringify(params),
    });
  } catch (error: any) {
    console.error("NetWork Error", error);
    return {
      code: 0,
      message: error
    }
  }
}

export async function fetchChatCompletions(params: any): Promise<any> {
  console.log('params:', params)
  try {
    return await fetch("/api/chat-completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: params,
      body: JSON.stringify(params),
    });
  } catch (error: any) {
    console.error("NetWork Error", error);
    return {
      code: 0,
      message: error
    }
  }
}