import { BotStatus, Hooks } from '@own-chat/api-sdk'

export function useOwnedBots(status = BotStatus.Running) {
  const result = Hooks.useOwnedBots(() => {
    if (!status) return { status: BotStatus.Running }
    return { status }
  })

  const { data: bots = [] } = result

  return {
    bots,
    ...result,
  }
}

export function useStoppedBots() {
  const result = Hooks.useOwnedBots({ status: BotStatus.Stopped }, { key: 'STOPPED_BOT' })

  const { data: bots = [] } = result

  return {
    bots,
    ...result,
  }
}
