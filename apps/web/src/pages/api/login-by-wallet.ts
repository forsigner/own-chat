import { withIronSessionApiRoute } from 'iron-session/next'
import { setCookie } from 'cookies-next'
import { sessionOptions } from '@common/session'
import { graphqlClient } from '@common/query'
import { LOGIN_BY_WALLET } from '@own-chat/api-sdk'
import { LoginSuccessPayload } from '@own-chat/api-sdk'

declare module 'iron-session' {
  interface IronSessionData {
    payload?: LoginSuccessPayload
  }
}

export default withIronSessionApiRoute(async function loginByWallet(req, res) {
  const { message, signature } = req.body
  try {
    const data: any = await graphqlClient.query(LOGIN_BY_WALLET, {
      input: { message, signature },
    })

    const payload: LoginSuccessPayload = data.loginByWallet

    // get user from database then:
    req.session.payload = payload
    setCookie('planType', payload.user.planType, { req, res })

    await req.session.save()

    res.json(payload)
  } catch (error: any) {
    console.log('error:', error)

    res.status(500).json(error.errors[0])
  }
}, sessionOptions)
