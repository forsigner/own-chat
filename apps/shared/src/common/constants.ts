import { NotifierType } from '@own-chat/api-sdk'
import { MailSolid } from '@bone-ui/icons'
import { IconDiscord } from '../icons/IconDiscord'
import { IconTelegram } from '../icons/IconTelegram'
import { IconTwitter } from '../icons/IconTwitter'
import { IconDingtalk } from '../icons/IconDingtalk'
import { IconFeishu } from '../icons/IconFeishu'

export const PERIODS = [
  '1m',
  '3m',
  '5m',
  '15m',
  '30m',
  '1h',
  '2h',
  '4h',
  '6h',
  '8h',
  '12h',
  '1d',
  '3d',
  '1w',
  '1M',
]

export const ONE_SECOND = 1000 // 一秒
export const ONE_MINUTE = ONE_SECOND * 60 // 一分钟
export const ONE_HOUR = ONE_MINUTE * 60 // 一小时
export const ONE_DAY = ONE_HOUR * 24 // 一天
export const ONE_YEAR = ONE_DAY * 365 // 一年

export const isProd = process.env.NODE_ENV === 'production'
export const baseURL = process.env.NEXT_PUBLIC_API_HOST as string

const host = process.env.NEXT_PUBLIC_HOST

export const subscriptionsEndpoint = isProd ? `wss://${host}/graphql` : `ws://${host}/graphql`

export enum Paths {
  STRATEGIES = '/dashboard/strategies',
  STRATEGIES_DETAIL = '/dashboard/strategies/[id]',
  BOTS = '/dashboard/bots',
  RUNNER = '/dashboard/runners',
  EXCHANGES = '/dashboard/exchanges',
  PLANS = '/dashboard/plans',
  STRATEGIES_SQUARE = '/dashboard/strategies-square',
  BOTS_SQUARE = '/dashboard/bots-square',
  SIGNALS = '/dashboard/signals',
  NOTIFIERS = '/dashboard/notifiers',
  BOT_DETAIL = '/dashboard/bots/[id]/detail',
  TRADE_TERMINAL = '/dashboard/trade-terminal',
}

export const notifierIconMap = {
  [NotifierType.Telegram]: IconTelegram,
  [NotifierType.Dingtalk]: IconDingtalk,
  [NotifierType.Discord]: IconDiscord,
  [NotifierType.Slack]: IconDiscord,
  [NotifierType.Feishu]: IconFeishu,
  [NotifierType.Twitter]: IconTwitter,
  [NotifierType.Email]: MailSolid,
}

export enum SourceCodeFiles {
  ui = 'ui.html',
  strategy = 'strategy.js',
  paramsSchema = 'params-schema.json',
}

const githubClientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID

const HOST =
  process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'https://www.onechat.dev'

const githubRedirectUri = `${HOST}/api/auth/callback/github`
const googleRedirectUri = `${HOST}/api/auth/callback/google`

export const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${githubClientId}&redirect_uri=${githubRedirectUri}`
export const googleAuthUrl =
  `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=${googleRedirectUri}` +
  `&scope=profile email&client_id=${googleClientId}`
