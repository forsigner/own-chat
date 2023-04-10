import { createContext, ReactNode, useContext } from 'react'
import { FowerColor } from '@fower/core'

export interface MenuContext {
  colorScheme?: FowerColor

  showCheckIcon?: boolean

  checkIcon?: ReactNode
}

export const menuContext = createContext<MenuContext>({} as MenuContext)

export const MenuProvider = menuContext.Provider

export function useMenuContext() {
  return useContext(menuContext)
}
