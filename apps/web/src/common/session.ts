import { LoginSuccessPayload } from '@owned-chat/api-sdk'
import type { IronSessionOptions } from 'iron-session'

export const sessionOptions: IronSessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieName: 'boter-session',
  cookieOptions: {
    // secure: process.env.NODE_ENV === 'production',
    secure: false,
  },
}

// This is where we specify the typings of req.session.*
declare module 'iron-session' {
  interface IronSessionData {
    // user?: User
    payload?: LoginSuccessPayload
  }
}
