import type { IronSessionOptions } from 'iron-session'

export const sessionOptions: IronSessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieName: 'provider-next-session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    // secure: false,
  },
}

// This is where we specify the typings of req.session.*
declare module 'iron-session' {
  interface IronSessionData {
    authorizationCode: string
  }
}
