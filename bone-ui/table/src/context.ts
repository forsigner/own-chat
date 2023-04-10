import { createContext, useContext } from 'react'
import { FowerColor } from '@fower/core'

export interface TableContext {
  isBordered?: boolean
  isStriped?: boolean
  colorScheme?: FowerColor
}
export const tableContext = createContext<TableContext>({} as TableContext)

export const TableProvider = tableContext.Provider

export const useTableContext = () => useContext(tableContext)
