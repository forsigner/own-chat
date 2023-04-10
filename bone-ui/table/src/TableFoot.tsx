import React, { FC } from 'react'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/core'
import { forwardRef } from '@bone-ui/utils'

export type TableFootProps = FowerHTMLProps<'tfoot'>

export const TableFoot: FC<TableFootProps> = forwardRef((props: TableFootProps, ref) => {
  return <Box ref={ref} as="tfoot" className="bone-table-foot" bg="gray100" {...props as any} />
})
