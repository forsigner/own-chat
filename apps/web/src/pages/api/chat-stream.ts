import httpProxyMiddleware from 'next-http-proxy-middleware'
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '@common/session'
import { graphqlClient } from '@common/query'
import { ProviderType, ACTIVE_PROVIDER, Provider } from '@own-chat/api-sdk'
import { getStreamingKey, isProd, sleep } from '@own-chat/shared'
import { cors, redis, runMiddleware } from '@common/utils'

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

  let endpoint: string = provider.endpoint || ''
  let replaceStr = '/api/chat-stream'

  if (isProd) {
    const key = getStreamingKey(provider)

    while (await redis.get(key)) {
      await sleep(100)
    }

    await redis.set(key, 1, 'EX', 60)
  }

  if (provider.type === ProviderType.ApiKey) {
    // endpoint = 'http://localhost:4001'
    // endpoint = 'https://own-chat-official-provider.vercel.app'
    // endpoint = 'https://styli.js.org'
    endpoint = provider.proxyHost || 'https://styli.js.org'
    replaceStr = `${replaceStr}?apiKey=${provider.apiKey}`
  }

  if (provider.type === ProviderType.SelfHosted) {
    replaceStr = `${replaceStr}?authorizationCode=${provider.authorizationCode}`
  }

  // console.log('endpoint:', endpoint)

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
