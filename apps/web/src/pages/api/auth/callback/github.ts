import { withIronSessionApiRoute } from 'iron-session/next'
import { setCookie } from 'cookies-next'
import { sessionOptions } from '@common/session'
import { graphqlClient } from '@common/query'
import { LoginSuccessPayload, LOGIN_BY_GITHUB } from '@own-chat/api-sdk'
import { LOGIN_SUCCESS_REDIRECT_URL, THIRD_PARTY_LOGIN_TAG } from '@own-chat/shared'

export default withIronSessionApiRoute(async (req, res) => {
  const { code } = req.query
  try {
    const data: any = await graphqlClient.query(LOGIN_BY_GITHUB, { code })

    const payload: LoginSuccessPayload = data.loginByGithub

    req.session.payload = payload
    await req.session.save()

    res.redirect(`${LOGIN_SUCCESS_REDIRECT_URL}?from=${THIRD_PARTY_LOGIN_TAG}`)
  } catch (e) {
    const error: any = e
    console.log('error:', e)

    res.status(500).json(error.errors[0])
  }
}, sessionOptions)
