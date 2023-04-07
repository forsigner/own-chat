export const ONE_SECOND = 1000 // 一秒
export const ONE_MINUTE = ONE_SECOND * 60 // 一分钟
export const ONE_HOUR = ONE_MINUTE * 60 // 一小时
export const ONE_DAY = ONE_HOUR * 24 // 一天
export const ONE_YEAR = ONE_DAY * 365 // 一年

export const isProd = process.env.NODE_ENV === 'production'
export const isDesktop = process.env.NEXT_PUBLIC_PLATFORM === 'DESKTOP'
export const baseURL = process.env.NEXT_PUBLIC_API_HOST as string

export const host = process.env.NEXT_PUBLIC_HOST

export const subscriptionsEndpoint = isProd ? `wss://${host}/graphql` : `ws://${host}/graphql`

const githubClientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID

export const HOST =
  process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'https://www.ownchat.me'

const githubRedirectUri = `${HOST}/api/auth/callback/github`
const googleRedirectUri = `${HOST}/api/auth/callback/google`

export const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${githubClientId}&redirect_uri=${githubRedirectUri}`
export const googleAuthUrl =
  `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=${googleRedirectUri}` +
  `&scope=profile email&client_id=${googleClientId}`

export const CHAT_URL = '/chat'

export const LOGIN_SUCCESS_REDIRECT_URL = CHAT_URL

export const NAV_HEIGHT = 56
export const SIDEBAR_WIDTH = 260
export const CHAT_WIDTH = 720

export const THIRD_PARTY_LOGIN_TAG = 't'

export const THEME_KEY = 'fower-mode'
export const LANGUAGE_KEY = 'own-chat-language'
