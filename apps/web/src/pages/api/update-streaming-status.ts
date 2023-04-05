import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '@common/session'
import { cors, redis, runMiddleware } from '@common/utils'
import { getStreamingKey, isProd } from '@own-chat/shared'

export const config = {
  api: {
    // Enable `externalResolver` option in Next.js
    externalResolver: true,
  },
}

export default withIronSessionApiRoute(async function loginRoute(req, res) {
  const { key, ended } = req.body

  // Run the middleware
  await runMiddleware(req, res, cors)

  if (isProd) {
    if (ended) {
      await redis.del(key)
    } else {
      await redis.set(key, 1, 'EX', 60)
    }
  }

  res.json({
    success: true,
    ...req.body,
  })
}, sessionOptions)
