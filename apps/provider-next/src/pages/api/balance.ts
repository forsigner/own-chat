import { NextApiResponse } from 'next';
import { Result } from './models';

export const config = {
  runtime: 'edge'
}

const handler = async (_: any, res: NextApiResponse<Result>) => {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    const result = await fetch('https://api.openai.com/dashboard/billing/credit_grants', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      method: 'GET',
    });
    res.status(200)
    res.setHeader('Content-Type', 'application/json')
    const json = await result.json()
    if (!json?.error) {
      // grants
      let grants = {}
      if (json?.grants?.object === 'list') {
        grants = json?.grants?.data[0] || {}
      }
      res.json({
        code: 1, message: 'ok', data: {
          object: json?.object,
          total_granted: json?.total_granted,
          total_used: json?.total_used,
          total_available: json?.total_available,
          grants,
        }
      });
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