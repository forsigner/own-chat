import React, { FC } from 'react'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/core'
import { forwardRef } from '@bone-ui/utils'

export type TableHeadProps = FowerHTMLProps<'thead'>

export const TableHead: FC<TableHeadProps> = forwardRef((props: TableHeadProps, ref) => {
  return <Box ref={ref as any} as="thead" className="bone-table-head" bg="gray100" {...props} />
})
