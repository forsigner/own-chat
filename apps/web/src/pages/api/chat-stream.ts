import httpProxyMiddleware from 'next-http-proxy-middleware'
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '@common/session'
import { graphqlClient } from '@common/query'
import { ACTIVE_PROVIDER, LoginSuccessPayload, Provider, PROVIDER } from '@own-chat/api-sdk'

export const config = {
  api: {
    // Enable `externalResolver` option in Next.js
    externalResolver: true,
  },
}

export default withIronSessionApiRoute(async function loginRoute(req, res) {
  const { payload } = req.session
  const data: any = await graphqlClient.query(
    ACTIVE_PROVIDER,
    {},
    { headers: { authorization: `bearer ${payload?.token}` } },
  )
  const provider: Provider = data.activeProvider

  console.log('token:', payload?.token)
  console.log('provider:', provider)

  return httpProxyMiddleware(req, res, {
    target: provider.endpoint!,
    pathRewrite: [
      {
        patternStr: '^/api/chat-stream',
        replaceStr: '/api/chat-stream',
      },
    ],
  })
}, sessionOptions)
