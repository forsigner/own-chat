import type { CreateChatCompletionRequest, CreateChatCompletionResponse } from 'openai'

export type ChatRequest = CreateChatCompletionRequest
export type ChatResponse = CreateChatCompletionResponse

export const TIME_OUT_MS = 30000
const ENABLE_GPT4 = true
export const ALL_MODELS = [
  {
    name: 'gpt-4',
    available: ENABLE_GPT4,
  },
  {
    name: 'gpt-4-0314',
    available: ENABLE_GPT4,
  },
  {
    name: 'gpt-4-32k',
    available: ENABLE_GPT4,
  },
  {
    name: 'gpt-4-32k-0314',
    available: ENABLE_GPT4,
  },
  {
    name: 'gpt-3.5-turbo',
    available: true,
  },
  {
    name: 'gpt-3.5-turbo-0301',
    available: true,
  },
]
