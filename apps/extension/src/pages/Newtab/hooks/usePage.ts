import {} from '@owned-chat/shared'
import { useMemo } from 'react'
import { useStore } from 'stook'
import { PageIds } from '../constants'

interface PageStore {
  id: PageIds
  params: Record<string, any>
}

export const PageMap: Record<PageIds, any> = {} as any

export function usePage() {
  const [page, set] = useStore<PageStore>('$one_chat_page', {} as PageStore)
  function setPage(id: PageIds, params = {} as Record<string, any>) {
    set({ id, params })
  }
  const id = useMemo(() => page?.id, [page])
  return {
    page,
    id,
    params: page?.params,
    setPage,
    PageComponent: id ? PageMap[id] : null,
  }
}
