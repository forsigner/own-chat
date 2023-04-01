import { ChatCompletionResponseMessage } from 'openai'
import { TIME_OUT_MS } from './chatService'

export interface Result {
  code: string | number
  message: string
  data?: any
}

interface ChatParams {
  model: string
  messages: ChatCompletionResponseMessage[]
  // https://platform.openai.com/docs/api-reference/chat/create#chat/create-stream
  stream: boolean
  // https://platform.openai.com/docs/api-reference/chat/create#chat/create-max_tokens
  // Optional Defaults to inf
  max_tokens?: number
  // https://platform.openai.com/docs/api-reference/chat/create#chat/create-temperature
  // Optional Defaults to 1
  /**
   * OpenAI文档建议在Temperature和Top P之间只使用一个函数，所以当使用其中一个时，确保另一个被设置为1。
   */
  temperature?: number
  // https://platform.openai.com/docs/api-reference/chat/create#chat/create-top_p
  // Optional Defaults to 1
  top_p?: number
  // https://platform.openai.com/docs/api-reference/completions/create#completions/create-presence_penalty
  // Number between -2.0 and 2.0. ,Optional Defaults to 0
  presence_penalty?: number
}

interface Options {
  params: ChatParams
  onMessage: (message: string, done: boolean) => void
  onError?: (error: Error) => void
  onController?: (controller: AbortController) => void
  baseURL?: string
  token?: string
}

export async function fetchChatStream(options: Options) {
  const { params, onMessage, onError, onController, baseURL = '', token = '' } = options
  const controller = new AbortController()
  const reqTimeoutId = setTimeout(() => controller.abort(), TIME_OUT_MS)

  try {
    const result = await fetch(`${baseURL}/api/chat-stream`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `bearer ${token}`,
      },
      body: JSON.stringify(params),
      signal: controller.signal,
    })

    clearTimeout(reqTimeoutId)

    let responseText = ''

    const finish = () => {
      onMessage(responseText, true)
      controller.abort()
    }

    if (result.ok) {
      const reader = result.body?.getReader()
      const decoder = new TextDecoder()

      onController && onController(controller)

      while (true) {
        // handle time out, will stop if no response in 10 secs
        const resTimeoutId = setTimeout(() => finish(), TIME_OUT_MS)
        const content = await reader?.read()
        clearTimeout(resTimeoutId)
        const text = decoder.decode(content?.value)
        responseText += text
        const done = !content || content.done
        onMessage(responseText, false)
        if (done) {
          break
        }
      }
      finish()
    } else if (result.status === 401) {
      console.error('Anauthorized')
      responseText = 'Unauthorized access, please enter access code in settings page.'
      finish()
    } else {
      console.error('Stream Error')
      onError && onError(new Error('Stream Error'))
    }
  } catch (error) {
    console.error('NetWork Error', error)
    onError && onError(error as Error)
  }
}

export async function fetchBalance(): Promise<any> {
  try {
    return await fetch('/api/balance', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('NetWork Error', error)
    return {
      code: 0,
      message: error,
    }
  }
}

export async function fetchModels(): Promise<any> {
  try {
    return await fetch('/api/models', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('NetWork Error', error)
    return {
      code: 0,
      message: error,
    }
  }
}

export async function fetchCompletions(params: any): Promise<any> {
  try {
    return await fetch('/api/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    })
  } catch (error) {
    console.error('NetWork Error', error)
    return {
      code: 0,
      message: error,
    }
  }
}

export async function fetchChatCompletions(params: any): Promise<any> {
  try {
    return await fetch('/api/chat-completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    })
  } catch (error) {
    console.error('NetWork Error', error)
    return {
      code: 0,
      message: error,
    }
  }
}
