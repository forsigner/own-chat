import React, { FC, cloneElement, Fragment } from 'react'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/core'
import { forwardRef } from '@bone-ui/utils'
import { useTableContext } from './context'
import { getValidChildren } from '@bone-ui/utils'

export type TableBodyProps = FowerHTMLProps<'tbody'>

export const TableBody: FC<TableBodyProps> = forwardRef((props: TableBodyProps, ref) => {
  const { children, ...rest } = props
  const ctx = useTableContext()
  const { isStriped } = ctx
  const validChildren = getValidChildren(children)

  return (
    <Box ref={ref} as="tbody" className="bone-table-body" {...(rest as any)}>
      {validChildren.map((child, index) => {
        return (
          <Fragment key={index}>
            {cloneElement(child, {
              isDeep: isStriped && index % 2 !== 0,
              isBody: true,
            })}
          </Fragment>
        )
      })}
    </Box>
  )
})
