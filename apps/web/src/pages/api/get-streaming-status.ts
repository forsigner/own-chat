import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '@common/session'
import { cors, redis, runMiddleware } from '@common/utils'

export const config = {
  api: {
    // Enable `externalResolver` option in Next.js
    externalResolver: true,
  },
}

export default withIronSessionApiRoute(async function loginRoute(req, res) {
  const { key } = req.body

  // Run the middleware
  await runMiddleware(req, res, cors)

  res.json({
    success: true,
    streaming: await redis.get(key),
  })
}, sessionOptions)
