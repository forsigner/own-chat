import { ReactNode } from 'react'
import { mutate } from 'stook'
import { key } from './toast.store'
import { Options, Toast } from './types'

function show(type: any) {
  return (msg: ReactNode, options = {} as Options) => {
    const duration = options.duration ?? 2000
    let id: number

    function dismiss(id: number) {
      mutate(key, (toasts: Toast[]) => {
        const index = toasts.findIndex((i) => i.id === id - 1)
        toasts.splice(index, 1)
      })
    }

    mutate(key, (toasts: Toast[]) => {
      id = toasts.push({
        ...options,
        type,
        id: toasts.length,
        msg,
      })

      if (type !== 'loading') {
        setTimeout(() => {
          dismiss(id)
        }, duration)
      }
    })
    return {
      dismiss() {
        dismiss(id)
      },
      update(msg: ReactNode, options?: Options) {
        mutate(key, (toasts: Toast[]) => {
          const index = toasts.findIndex((i) => i.id === id - 1)
          toasts[index] = { ...toasts[index], msg, ...options }
        })

        const d = options?.duration ?? duration
        setTimeout(() => {
          dismiss(id)
        }, d)
      },
    }
  }
}

export function toast(msg: ReactNode, options?: Options) {
  return show('')(msg, options)
}

toast.info = (msg: ReactNode, options?: Options) => {
  return show('info')(msg, options)
}

toast.success = (msg: ReactNode, options?: Options) => {
  return show('success')(msg, options)
}

toast.error = (msg: ReactNode, options?: Options) => {
  return show('error')(msg, options)
}

toast.warning = (msg: ReactNode, options?: Options) => {
  return show('warning')(msg, options)
}

toast.loading = (msg: ReactNode, options?: Options) => {
  return show('loading')(msg, options)
}
