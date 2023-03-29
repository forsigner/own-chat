import { NextRequest } from 'next/server';
import { Result } from './models';
import { NextApiResponse } from 'next';

export const config = {
  runtime: 'edge'
}

const handler = async (req: NextRequest, res: NextApiResponse<Result>) => {
  try {
    res.status(200)
    res.setHeader('Content-Type', 'application/json')
    const apiKey = process.env.OPENAI_API_KEY;
    const result = await fetch('https://api.openai.com/v1/chat/completions', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      method: 'POST',
      body: JSON.stringify(req.body),
    });

    const json = await result.json()
    if (!json?.error) {
      res.json(json)
    } else {
      res.json(json?.error || json);
    }
  } catch (err: any) {
    console.log('completions error:', err)
    res.status(500).send({ code: 0, message: err })
  }
};

export default handler;