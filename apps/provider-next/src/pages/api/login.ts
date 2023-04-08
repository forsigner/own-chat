import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '@common/session'

export default withIronSessionApiRoute(async function loginRoute(req, res) {
  const { authorizationCode } = req.body

  if (!authorizationCode) {
    res.status(400).json({
      success: false,
      message: 'Authorization code is required',
    })
    return
  }

  if (process.env.AUTHORIZATION_CODE !== authorizationCode) {
    res.status(400).json({
      success: false,
      message: 'Authorization code is wrong',
    })
    return
  }

  const payload = authorizationCode

  // get user from database then:
  req.session.authorizationCode = payload

  console.log('-req.session:', req.session)

  await req.session.save()

  res.json(payload)
}, sessionOptions)
