import { createContext, useContext, FC, PropsWithChildren } from 'react'
import { useStore, mutate } from 'stook'

export type ModalState = {
  id: ID
  data: any
  visible: boolean
}

type ContextType = ModalState
type RegisterType = 'antd' | 'bone-ui' | 'mui' | (string & {})
type ID = any

const STORE_KEY = '__modal__store_key__'
const context = createContext({} as ContextType)
const ModalProvider = context.Provider
const useModalContext = () => useContext(context)

const setVisible = (id: ID, visible: boolean) => {
  mutate(STORE_KEY, (list: ModalState[]) => {
    const item = list.find((i) => i.id === id)
    if (item && item.visible !== visible) {
      item.visible = visible
    }
  })
}

export function useModal<T = any>() {
  const { id, visible, data } = useModalContext()
  const hide = () => setVisible(id, false)
  const show = () => setVisible(id, true)
  return {
    visible,
    data: data as T,
    hide,
    show,
    register(type?: RegisterType) {
      const typeMaps: Record<RegisterType, any> = {
        antd: { visible, onClose: hide },
        'bone-ui': { isOpen: visible, onClose: hide },
        mui: { open: visible, onClose: hide },
      }

      return typeMaps[type!]
        ? typeMaps[type!]
        : Object.keys(typeMaps).reduce<Record<string, any>>(
            (acc, cur) => ({ ...acc, ...typeMaps[cur] }),
            {},
          )
    },
  }
}

const EasyModalContainer = () => {
  const [list] = useStore<ModalState[]>(STORE_KEY, [])

  return (
    <>
      {list.map((item, index) => {
        const Component = item.id
        if (!item.visible) return null
        return (
          <ModalProvider value={item} key={index}>
            <Component />
          </ModalProvider>
        )
      })}
    </>
  )
}

export const EasyModalProvider: FC<PropsWithChildren> = ({ children }) => (
  <>
    {children}
    <EasyModalContainer />
  </>
)

export class EasyModal {
  static show(id: ID, data?: any) {
    mutate(STORE_KEY, (list: ModalState[]) => {
      const item = list.find((i) => i.id === id)
      const visible = true
      if (item) {
        item.visible = visible
        item.data = data
      } else {
        list.push({ visible, data, id })
      }
    })
  }

  static hide(id: ID) {
    mutate(STORE_KEY, (list: ModalState[]) => {
      const item = list.find((i) => i.id === id)
      if (item) item.visible = false
    })
  }
}
