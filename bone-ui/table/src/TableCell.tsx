import React, { FC } from 'react'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/core'
import { forwardRef } from '@bone-ui/utils'
import { useTableContext } from './context'

export type TableCellProps = FowerHTMLProps<'td'>

export const TableCell: FC<TableCellProps> = forwardRef((props: TableCellProps, ref) => {
  const ctx = useTableContext()
  const { isBordered } = ctx

  return (
    <Box
      ref={ref}
      as="td"
      className="bone-table-cell"
      py-1rem
      px-1rem
      borderRight-1={isBordered}
      {...(props as any)}
    />
  )
})
