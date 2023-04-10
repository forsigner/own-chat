import { getLocalStorage } from 'stook-localstorage'
import * as types from './types'

const CHATGPT_MODEL = 'gpt-3.5-turbo'
export const TIME_OUT_MS = 60 * 1000

export class ChatGPTAPI {
  protected _apiKey: string
  protected _apiBaseUrl: string
  protected _debug: boolean

  protected _systemMessage: string
  protected _completionParams: Omit<types.openai.CreateChatCompletionRequest, 'messages' | 'n'>
  protected _maxModelTokens: number
  protected _maxResponseTokens: number

  /**
   * Creates a new client wrapper around OpenAI's chat completion API, mimicing the official ChatGPT webapp's functionality as closely as possible.
   *
   * @param apiKey - OpenAI API key (required).
   * @param apiBaseUrl - Optional override for the OpenAI API base URL.
   * @param debug - Optional enables logging debugging info to stdout.
   * @param completionParams - Param overrides to send to the [OpenAI chat completion API](https://platform.openai.com/docs/api-reference/chat/create). Options like `temperature` and `presence_penalty` can be tweaked to change the personality of the assistant.
   * @param maxModelTokens - Optional override for the maximum number of tokens allowed by the model's context. Defaults to 4096.
   * @param maxResponseTokens - Optional override for the minimum number of tokens allowed for the model's response. Defaults to 1000.
   * @param getMessageById - Optional function to retrieve a message by its ID. If not provided, the default implementation will be used (using an in-memory `messageStore`).
   * @param upsertMessage - Optional function to insert or update a message. If not provided, the default implementation will be used (using an in-memory `messageStore`).
   * @param fetch - Optional override for the `fetch` implementation to use. Defaults to the global `fetch` function.
   */
  constructor(opts: types.ChatGPTAPIOptions) {
    const {
      apiKey,
      apiBaseUrl = 'https://api.openai.com/v1',
      debug = false,
      completionParams,
      systemMessage,
      maxModelTokens = 4000,
      maxResponseTokens = 1000,
    } = opts

    this._apiKey = apiKey || ''
    this._apiBaseUrl = apiBaseUrl
    this._debug = !!debug

    this._completionParams = {
      model: CHATGPT_MODEL,
      temperature: 0.8,
      top_p: 1.0,
      presence_penalty: 1.0,
      ...completionParams,
    }

    this._systemMessage = systemMessage! // TODO:

    if (this._systemMessage === undefined) {
      const currentDate = new Date().toISOString().split('T')[0]
      this._systemMessage = `You are ChatGPT, a large language model trained by OpenAI. Answer as concisely as possible.\nKnowledge cutoff: 2021-09-01\nCurrent date: ${currentDate}`
    }

    this._maxModelTokens = maxModelTokens
    this._maxResponseTokens = maxResponseTokens
  }

  /**
   * Sends a message to the OpenAI chat completions endpoint, waits for the response
   * to resolve, and returns the response.
   *
   * Set `debug: true` in the `ChatGPTAPI` constructor to log more info on the full prompt sent to the OpenAI chat completions API. You can override the `systemMessage` in `opts` to customize the assistant's instructions.
   *
   * @param message - The prompt message to send
   * @param opts.conversationId - Optional ID of the conversation (defaults to `undefined`)
   * @param opts.messageId - Optional ID of the message to send (defaults to a random UUID)
   * @param opts.systemMessage - Optional override for the chat "system message" which acts as instructions to the model (defaults to the ChatGPT system message)
   * @param opts.timeoutMs - Optional timeout in milliseconds (defaults to no timeout)
   * @param opts.abortSignal - Optional callback used to abort the underlying `fetch` call using an [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
   * @param completionParams - Optional overrides to send to the [OpenAI chat completion API](https://platform.openai.com/docs/api-reference/chat/create). Options like `temperature` and `presence_penalty` can be tweaked to change the personality of the assistant.
   *
   * @returns The response from ChatGPT
   */
  async sendMessage(
    opts = {} as types.SendMessageOptions & {
      baseURL?: string
      token?: string
      abortController?: AbortController
    },
  ): Promise<any> {
    const {
      onMessage,
      stream = onMessage ? true : false,
      completionParams,
      baseURL = '',
      token = '',
    } = opts

    const controller = opts.abortController || new AbortController()
    const messages = opts.messages

    return new Promise<string>(async (resolve, reject) => {
      const reqTimeoutId = setTimeout(() => controller.abort(), TIME_OUT_MS)

      const authorizationCode = getLocalStorage('authorizationCode')

      let urlParams = ''

      // for provider
      if (authorizationCode) urlParams = `?authorizationCode=${authorizationCode}`

      let responseText = ''

      try {
        const result = await fetch(`${baseURL}/api/chat-stream${urlParams}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization: `bearer ${token}`,
          },
          body: JSON.stringify({
            ...completionParams,
            stream,
            messages,
          }),
          signal: controller.signal,
        })

        clearTimeout(reqTimeoutId)

        if (result.ok) {
          const reader = result.body!.getReader()
          const decoder = new TextDecoder()
          // onController && onController(controller)
          while (true) {
            // handle time out, will stop if no response in 10 secs
            const resTimeoutId = setTimeout(() => {
              controller.abort()
            }, TIME_OUT_MS)

            const { done, value } = await reader.read()
            clearTimeout(resTimeoutId)
            const text = decoder.decode(value)
            responseText += text

            onMessage?.(responseText)
            if (done) {
              break
            }
          }
          resolve(responseText)
        } else if (result.status === 401) {
          responseText = 'Unauthorized access, please enter access code in settings page.'
          reject(responseText)
        } else {
          reject('Error!')
          console.error('Stream Error')
        }
      } catch (error) {
        // handle abort()
        if ((error as any)?.name == 'AbortError') {
          resolve(responseText)
          return
        }

        reject(`NetWork Error ${error}`)
      }
    })
  }

  get apiKey(): string {
    return this._apiKey
  }

  set apiKey(apiKey: string) {
    this._apiKey = apiKey
  }
}
