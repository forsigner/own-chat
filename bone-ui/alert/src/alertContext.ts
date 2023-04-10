import { createContext } from 'react'
import { AlertType } from './typeStyles'

interface AlertContext {
  type?: AlertType
}

export const alertContext = createContext<AlertContext>({} as AlertContext)

export const AlertProvider = alertContext.Provider
