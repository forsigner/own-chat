import { NextApiRequest, NextApiResponse } from 'next'
import httpProxyMiddleware from 'next-http-proxy-middleware'

export const config = {
  api: {
    // Enable `externalResolver` option in Next.js
    externalResolver: true,
  },
}

export default async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  // res.json({ foo: '11' })
  // return
  req.headers['content-type'] = 'application/json'

  return httpProxyMiddleware(req, res, {
    target: 'https://jsonplaceholder.typicode.com',

    pathRewrite: [
      {
        patternStr: '^/api/backend-api/conversation',
        replaceStr: '/todos/1',
      },
    ],
  })
}
