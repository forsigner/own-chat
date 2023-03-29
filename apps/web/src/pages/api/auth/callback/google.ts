import { withIronSessionApiRoute } from 'iron-session/next'
import { setCookie } from 'cookies-next'
import { sessionOptions } from '@common/session'
import { graphqlClient } from '@common/query'
import { LoginSuccessPayload, LOGIN_BY_GOOGLE } from '@own-chat/api-sdk'

export default withIronSessionApiRoute(async (req, res) => {
  const { code } = req.query
  try {
    const data: any = await graphqlClient.query(LOGIN_BY_GOOGLE, {
      code,
    })

    const payload: LoginSuccessPayload = data.loginByGoogle

    req.session.payload = payload
    setCookie('planType', payload.user.planType, { req, res })
    await req.session.save()

    res.redirect('/dashboard/strategies-square?from=third-party-login')

    // res.json({ foo: code })
  } catch (e) {
    const error: any = e
    res.status(500).json(error.errors[0])
  }
}, sessionOptions)
