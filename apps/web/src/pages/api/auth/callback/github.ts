import { withIronSessionApiRoute } from 'iron-session/next'
import { setCookie } from 'cookies-next'
import { sessionOptions } from '@common/session'
import { graphqlClient } from '@common/query'
import { LoginSuccessPayload, LOGIN_BY_GITHUB } from '@owned-chat/api-sdk'

export default withIronSessionApiRoute(async (req, res) => {
  const { code } = req.query
  try {
    const data: any = await graphqlClient.query(LOGIN_BY_GITHUB, { code })

    const payload: LoginSuccessPayload = data.loginByGithub

    req.session.payload = payload
    setCookie('planType', payload.user.planType, { req, res })
    await req.session.save()

    res.redirect('/dashboard/strategies-square?from=third-party-login')
  } catch (e) {
    const error: any = e
    res.status(500).json(error.errors[0])
  }
}, sessionOptions)
