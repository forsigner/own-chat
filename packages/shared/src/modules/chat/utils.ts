import { isProd } from '../../common'

export function getOpenaiProxy() {
  if (isProd) return 'https://www.ownchat.me'
  return 'http://localhost:4000'
}
