import React, { FC } from 'react'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/core'
import { forwardRef } from '@bone-ui/utils'
import { useTableContext } from './context'

export type TableHeadCellProps = FowerHTMLProps<'th'>

export const TableHeadCell: FC<TableHeadCellProps> = forwardRef(
  (props: TableHeadCellProps, ref) => {
    const ctx = useTableContext()
    const { isBordered } = ctx

    return (
      <Box
        ref={ref as any}
        as="th"
        className="bone-table-head-cell"
        py-1rem
        px-1rem
        borderRight-1={isBordered}
        {...props}
      />
    )
  },
)
