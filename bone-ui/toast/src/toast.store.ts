import { getState, useStore } from 'stook'
import { Toast } from './types'

export const key = '__bone_ui_toast__'

export function useToast() {
  const [toasts, setToasts] = useStore<Toast[]>(key, [])
  return { toasts, setToasts }
}

export function getToasts(): Toast[] {
  return getState(key)
}
