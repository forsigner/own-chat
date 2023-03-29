import { NextApiResponse } from 'next';

interface Permission {
  id: string
  object: string
  created: string
  allow_create_engine: boolean
  allow_sampling: boolean
  allow_logprobs: boolean
  allow_search_indices: boolean
  allow_view: boolean
  allow_fine_tuning: boolean
  organization: string
  group: null
  is_blocking: false
}

interface ModelType {
  id: string,
  object: string,
  created: number,
  owned_by: string,
  permission: Permission[],
  root: string,
  parent: null
}

export interface Result {
  code: string | number
  message: string
  data?: any
}

export const config = {
  runtime: 'edge'
}

// https://platform.openai.com/docs/api-reference/models/list
const handler = async (_: any, res: NextApiResponse<Result>) => {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    const result = await fetch('https://api.openai.com/v1/models', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      method: 'GET',
    });
    res.setHeader('Content-Type', 'application/json')
    res.status(200)
    const json = await result.json()
    const isList = json?.object
    if (isList === 'list') {
      const owned_by_openai = json.data.filter((model: ModelType) => {
        return model.owned_by !== 'openai-dev'
      })
      owned_by_openai.sort((a: ModelType, b: ModelType) => b.created - a.created);
      res.json({ code: 1, message: 'ok', data: owned_by_openai });
    } else {
      /**
       * error: {
       * message: 'Incorrect API key provided: undefined. You can find your API key at https://platform.openai.com/account/api-keys.',
       * type: 'invalid_request_error',
       * param: null,
       * code: 'invalid_api_key'
       * }
      */
      res.json(json?.error || json);
    }
  } catch (err: any) {
    console.log('error:', err)
    res.status(500).send({ code: 0, message: err })
  }
};

export default handler;