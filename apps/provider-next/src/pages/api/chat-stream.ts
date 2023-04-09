import { NextApiResponse } from 'next'
import { NextRequest } from 'next/server'
import { createParser, ParseEvent } from 'eventsource-parser'

class ChatGPTError extends Error {
  statusCode?: number
  statusText?: string
  reason?: string
}

export const config = {
  runtime: 'edge',
  /**
   * https://vercel.com/docs/concepts/edge-network/regions#region-list
   * disable hongkong
   * only for vercel
   */
  regions: [
    'cdg1',
    'arn1',
    'dub1',
    'lhr1',
    'iad1',
    'sfo1',
    'pdx1',
    'cle1',
    'gru1',
    'hnd1',
    'icn1',
    'kix1',
    'sin1',
    'bom1',
    'syd1',
    'fra1',
    'cpt1',
  ],
}

// # https://platform.openai.com/docs/api-reference/chat/create
async function createStream(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const urlApiKey = searchParams.get('apiKey')
  const urlAuthorizationCode = searchParams.get('authorizationCode')

  // api from url first
  const apiKey = urlApiKey || process.env.OPENAI_API_KEY
  const authorizationCode = process.env.AUTHORIZATION_CODE

  if (!urlApiKey && authorizationCode !== urlAuthorizationCode) {
    throw 'Authorization Code for this provider is invalid'
  }

  const encoder = new TextEncoder()
  const decoder = new TextDecoder()

  const endpoint = 'https://api.openai.com/v1/chat/completions'
  // const endpoint = 'https://chatgpt-api.shn.hk/v1/'

  const result = await fetch(endpoint, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    method: 'POST',
    body: req.body,
  })

  const { status, statusText } = result

  // Handle error
  if (status !== 200) {
    const json = await result.json()
    let reason = ''
    try {
      reason = json?.error?.message
    } catch (err) {
      reason = result.statusText
    }
    const msg = `ChatGPT error ${status}: ${reason}`
    const error = new ChatGPTError(msg, { cause: json })
    error.statusCode = status
    error.statusText = statusText
    error.reason = msg
    throw error
  }

  const stream = new ReadableStream({
    async start(controller) {
      function onParse(event: ParseEvent) {
        if (event.type === 'event') {
          const data = event.data
          if (data === '[DONE]') {
            controller.close()
            return
          }

          try {
            const json = JSON.parse(data)
            const text = json.choices[0].delta.content
            console.log('text:', text)
            const queue = encoder.encode(text)

            controller.enqueue(queue)
          } catch (e) {
            controller.error(e)
          }
        }
      }

      const parser = createParser(onParse)

      for await (const chunk of result.body as any) {
        parser.feed(decoder.decode(chunk))
      }
    },
  })

  return stream
}

const handler = async (req: NextRequest, _: NextApiResponse) => {
  try {
    const stream = await createStream(req)
    return new Response(stream)
  } catch (error: any) {
    const response = new Response(error, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response
  }
}

export default handler
