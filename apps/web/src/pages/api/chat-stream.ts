import { NextApiRequest, NextApiResponse } from 'next'
import httpProxyMiddleware from 'next-http-proxy-middleware'

export const config = {
  api: {
    // Enable `externalResolver` option in Next.js
    externalResolver: true,
  },
}

export default async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  return httpProxyMiddleware(req, res, {
    target: 'http://localhost:4001',
    pathRewrite: [
      {
        patternStr: '^/api/chat-stream',
        replaceStr: '/api/chat-stream',
      },
    ],
  })
}
