import { type ChatCompletionResponseMessage } from 'openai';

import type {
  CreateChatCompletionRequest,
  CreateChatCompletionResponse,
} from 'openai';

export type ChatRequest = CreateChatCompletionRequest;
export type ChatReponse = CreateChatCompletionResponse;

export const TIME_OUT_MS = 30000;
const ENABLE_GPT4 = true;
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
];

export type Message = ChatCompletionResponseMessage & {
  date: string;
  streaming?: boolean;
};


export interface ModelConfig {
  model: string;
  temperature: number;
  max_tokens: number;
  presence_penalty: number;
};

function isValidModel(name: string) {
  return ALL_MODELS.some((m) => m.name === name && m.available);
}

function isValidNumber(x: number, min: number, max: number) {
  return typeof x === 'number' && x <= max && x >= min;
}

export function filterConfig(config: ModelConfig): Partial<ModelConfig> {
  const validator: {
    [k in keyof ModelConfig]: (x: ModelConfig[keyof ModelConfig]) => boolean;
  } = {
    model(x) {
      return isValidModel(x as string);
    },
    max_tokens(x) {
      return isValidNumber(x as number, 100, 4000);
    },
    presence_penalty(x) {
      return isValidNumber(x as number, -2, 2);
    },
    temperature(x) {
      return isValidNumber(x as number, 0, 1);
    },
  };

  Object.keys(validator).forEach((k) => {
    const key = k as keyof ModelConfig;
    if (!validator[key](config[key])) {
      delete config[key];
    }
  });

  return config;
}
