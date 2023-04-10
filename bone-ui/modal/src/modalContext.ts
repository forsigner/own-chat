import { createContext } from 'react'
import { ModalContext } from './types'

export const modalContext = createContext({} as ModalContext)

export const ModalProvider = modalContext.Provider
