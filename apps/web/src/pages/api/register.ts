import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '@common/session'
import { graphqlClient } from '@common/query'
import { REGISTER_BY_EMAIL } from '@owned-chat/api-sdk'
import { LoginSuccessPayload } from '@owned-chat/api-sdk'

declare module 'iron-session' {
  interface IronSessionData {
    payload?: LoginSuccessPayload
  }
}

export default withIronSessionApiRoute(async function loginRoute(req, res) {
  const { email, password } = req.body
  try {
    const data: any = await graphqlClient.query(REGISTER_BY_EMAIL, { input: { email, password } })

    const payload = data.registerByEmail

    // get user from database then:
    req.session.payload = payload

    await req.session.save()

    res.json(payload)
  } catch (error: any) {
    console.log('error:', error)
    res.status(500).json(error.errors[0])
  }
}, sessionOptions)
