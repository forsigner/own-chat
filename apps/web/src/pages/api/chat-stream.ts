import httpProxyMiddleware from 'next-http-proxy-middleware'
import { withIronSessionApiRoute } from 'iron-session/next'
import Cors from 'cors'
import Redis from 'ioredis'
import { sessionOptions } from '@common/session'
import { graphqlClient } from '@common/query'
import { ACTIVE_TEAM, Team, ProviderType } from '@own-chat/api-sdk'
import { NextApiRequest, NextApiResponse } from 'next'

const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
})

const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PASSWORD),
  password: process.env.REDIS_PASSWORD,
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
    ACTIVE_TEAM,
    {},
    { headers: { authorization: `bearer ${token}` } },
  )

  const team: Team = data.activeTeam

  let endpoint: string = team.endpoint || ''
  let replaceStr = '/api/chat-stream'

  if (team.providerType === ProviderType.ApiKey) {
    // endpoint = 'http://localhost:4001'
    endpoint = 'https://own-chat-official-provider.vercel.app'
    replaceStr = `${replaceStr}?apiKey=${team.apiKey}`
  }

  return httpProxyMiddleware(req, res, {
    target: endpoint,
    pathRewrite: [
      {
        patternStr: '^/api/chat-stream',
        replaceStr,
      },
    ],
  })
}, sessionOptions)
