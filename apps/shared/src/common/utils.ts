import { ExchangeType } from '@owned-chat/api-sdk'
import { nanoid } from 'nanoid'
import reactFastCompare from 'react-fast-compare'
import { FieldNode, Node } from 'fomir'
import { ONE_DAY, ONE_HOUR, ONE_MINUTE, ONE_SECOND } from './constants'

export const isServer = typeof window === 'undefined'

export const isEqual = reactFastCompare

export function genId() {
  return nanoid()
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function toFloorFixed(input: number, precision: number): number {
  const p = Number('1' + Array(precision).fill(0).join(''))
  const str = (Math.floor(input * p) / p).toFixed(precision)
  return Number(str)
}

export function getClickEvent(t = 150) {
  let timer: NodeJS.Timer = null as any

  return {
    onSingleClick(cb: any) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(cb, t)
    },
    onDoubleClick(cb: any) {
      if (timer) clearTimeout(timer)
      cb()
    },
  }
}

/**
 * 获取前景色
 */
export function calculateForeColor(color = '') {
  const weightString = color.substr(-2, 2)
  const colorWeight = Number(weightString)
  const colorType = color.replace(weightString, '')
  const base = colorType === 'yellow' ? 40 : 30
  return colorWeight > base ? 'white' : 'gray80'
}

export function getExchangeIcon(exchange: ExchangeType) {
  const maps: any = {
    [ExchangeType.Binance]: '/images/binance.png',
    [ExchangeType.Okx]: '/images/okex.png',
  }
  return maps[exchange]
}

/**
 * To Readable time
 * @param ms
 * @returns
 */
export function timestampToReadable(ms: number) {
  const list: [number, string][] = [
    [ONE_DAY, 'Day'],
    [ONE_HOUR, 'Hour'],
    [ONE_MINUTE, 'Minute'],
    [ONE_SECOND, 'Second'],
  ]

  let result = ''
  for (const [type, unit] of list) {
    if (ms > type) {
      const remainder = ms % type
      const tmp = ms - remainder
      if (tmp > 0) {
        result += tmp / type + unit
        ms = remainder
      }
    }
  }

  return result
}

export function formatFieldNodes(nodes: (FieldNode & { children?: FieldNode[] })[]): FieldNode[] {
  if (!nodes?.length) return []

  return nodes.map((node) => {
    if (node.children?.length) {
      return {
        ...node,
        children: formatFieldNodes(node.children),
      }
    } else {
      if (['NumberInput', 'PercentInput'].includes(node.component)) {
        node.transform = (value) => (value ? (Number(value) as any) : value)
        node.intercept = (value: any, prevState) => {
          if (value === '') return value
          if (!/^[\d.]+$/.test(value)) return prevState.value
          return value
        }
      }

      return node
    }
  })
}
