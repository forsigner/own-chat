import httpProxyMiddleware from 'next-http-proxy-middleware'
import { withIronSessionApiRoute } from 'iron-session/next'
import Cors from 'cors'
import { sessionOptions } from '@common/session'
import { graphqlClient } from '@common/query'
import { ACTIVE_PROVIDER, LoginSuccessPayload, Provider, PROVIDER } from '@own-chat/api-sdk'
import { NextApiRequest, NextApiResponse } from 'next'

const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
})

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: Function) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export const config = {
  api: {
    // Enable `externalResolver` option in Next.js
    externalResolver: true,
  },
}

export default withIronSessionApiRoute(async function loginRoute(req, res) {
  const { payload } = req.session

  // Run the middleware
  await runMiddleware(req, res, cors)

  function getToken() {
    const { authorization = '' } = req.headers
    const token = authorization.split(/\s{1,}/)[1]
    if (token) return token
    return payload?.token || ''
  }

  const token = getToken()

  const data: any = await graphqlClient.query(
    ACTIVE_PROVIDER,
    {},
    { headers: { authorization: `bearer ${token}` } },
  )
  const provider: Provider = data.activeProvider

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
