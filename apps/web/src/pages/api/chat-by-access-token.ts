import { sessionOptions } from '@common/session'
import { cors, runMiddleware } from '@common/utils'
import { withIronSessionApiRoute } from 'iron-session/next'
import httpProxyMiddleware from 'next-http-proxy-middleware'

export const config = {
  api: {
    // Enable `externalResolver` option in Next.js
    externalResolver: true,
  },
}

export default withIronSessionApiRoute(async function loginRoute(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors)

  return httpProxyMiddleware(req, res, {
    target: 'https://bypass.churchless.tech',
    pathRewrite: [
      {
        patternStr: '^/api/chat-by-access-token',
        replaceStr: '/api/conversation',
      },
    ],
  })
}, sessionOptions)
