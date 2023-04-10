import React, { FC } from 'react'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/core'
import { forwardRef } from '@bone-ui/utils'
import { useTableContext } from './context'

export interface TableRowProps extends FowerHTMLProps<'tr'> {
  isDeep?: boolean
  isBody?: boolean
}

export const TableRow: FC<TableRowProps> = forwardRef((props: TableRowProps, ref) => {
  const { isDeep, isBody, ...rest } = props
  const ctx = useTableContext()
  const { colorScheme } = ctx

  return (
    <Box
      ref={ref as any}
      as="tr"
      className="bone-table-row"
      borderBottom-1
      bg={isDeep && colorScheme}
      css={{
        ':hover': {
          bg: isBody && colorScheme,
        },
      }}
      {...rest}
    />
  )
})
