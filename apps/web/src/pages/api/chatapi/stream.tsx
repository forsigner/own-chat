import { NextApiResponse } from 'next';
import { NextRequest } from 'next/server';
import { createParser } from "eventsource-parser";

type ResponseData = {
  message: string
}

export const config = {
  runtime: 'edge'
}

// # https://platform.openai.com/docs/api-reference/chat/create
async function createStream(req: NextRequest) {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  let apiKey = "xxx";

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    method: "POST",
    body: req.body,
  });

  const stream = new ReadableStream({
    async start(controller) {
      function onParse(event: any) {
        if (event.type === "event") {
          const data = event.data;
          if (data === "[DONE]") {
            controller.close();
            return;
          }
          try {
            const json = JSON.parse(data);
            const text = json.choices[0].delta.content;
            const queue = encoder.encode(text);
            controller.enqueue(queue);
          } catch (e) {
            controller.error(e);
          }
        }
      }

      const parser = createParser(onParse);
      for await (const chunk of res.body as any) {
        parser.feed(decoder.decode(chunk));
      }
    },
  });
  return stream;
}


const handler = async (req: NextRequest, res: NextApiResponse<ResponseData>) => {
  try {
    if (req.method === 'POST') {
      const stream = await createStream(req);
      return new Response(stream);
    } else {
      console.log('other HTTP method')
    }
  } catch (err: any) {
    console.log('error:', err)
    res.status(500).send({ message: err })
  }
};

export default handler;