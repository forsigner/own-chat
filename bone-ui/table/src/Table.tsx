import React, { FC } from 'react'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/core'
import { forwardRef } from '@bone-ui/utils'
import { TableProvider, TableContext } from './context'

export interface TableProps extends TableContext, FowerHTMLProps<'table'> {}

export const Table: FC<TableProps> = forwardRef((props: TableProps, ref) => {
  const { isBordered = false, isStriped = false, colorScheme = 'gray100', ...rest } = props

  return (
    <TableProvider
      value={{
        isBordered,
        isStriped,
        colorScheme,
      }}
    >
      <Box
        className="bone-table-wrapper"
        overflow="hidden"
        borderTop-1={isBordered}
        borderLeft-1={isBordered}
        roundedSM={isBordered}
      >
        <Box
          ref={ref}
          as="table"
          className="bone-table"
          w="100%"
          textLeft
          css={{
            borderCollapse: 'collapse',
          }}
          {...rest as any}
        />
      </Box>
    </TableProvider>
  )
})
