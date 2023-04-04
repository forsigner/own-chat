import { config, applyMiddleware } from 'stook-graphql'
import { request } from '@boter/request'
import { config as configRest } from 'stook-rest'
import { getToken, mutateToken } from '../stores/token.store'
import { isApiError } from './type-guard'
import { toast } from 'bone-ui'
import { baseURL, subscriptionsEndpoint } from './constants'
import { mutateUser } from '../stores'
import { isServer } from './utils'

const manualCodes: string[] = ['MemberExceed']

export function initStookGraphql() {
  applyMiddleware(async (ctx, next) => {
    const token = getToken()
    if (token) {
      ctx.headers.authorization = `bearer ${token}`
    }

    await next()

    if (typeof ctx.body !== 'object') return

    if (isApiError(ctx.body)) {
      if (ctx.body.code === 'TokenError') {
        try {
          await request('/api/logout')
          mutateUser(null)
          mutateToken(null)
        } catch {}
        // TODO:
        // location.href = '/'
        return
      }
    }

    if (ctx.body?.errors) {
      const error = ctx.body.errors[0]

      // 全局错误处理
      if (isApiError(error) && !manualCodes.includes(error.code)) {
        if (error.code !== 'TokenError' && !isServer) {
          toast.error(error.message, {
            type: 'error',
          })
        }
      }

      ctx.body = error
      return
    }

    if (Object.keys(ctx.body || {}).length === 1) {
      ctx.body = ctx.body[Object.keys(ctx.body)[0]]
    }
  })

  config({
    endpoint: baseURL + '/graphql',
    subscriptionsEndpoint,
  })

  configRest({
    baseURL,
  })
}
