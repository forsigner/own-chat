import React, { FC, cloneElement, ReactNode, Fragment } from 'react'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/core'
import { forwardRef } from '@bone-ui/utils'
import { getValidChildren } from '@bone-ui/utils'

export interface BreadcrumbProps extends FowerHTMLProps<'nav'> {
  separator?: ReactNode
  children?: ReactNode
}

export const Breadcrumb: FC<BreadcrumbProps> = forwardRef((props: BreadcrumbProps, ref) => {
  const { separator = '/', children, ...rest } = props
  const validChildren = getValidChildren(children)

  return (
    <Box ref={ref} className="bone-breadcrumb" as="nav" {...(rest as any)}>
      <Box as="ol" listNone>
        {validChildren.map((child, index) => {
          const isLastChild = validChildren.length === index + 1
          return (
            <Fragment key={index}>
              {cloneElement(child, {
                separator,
                hasSeparator: !isLastChild,
              })}
            </Fragment>
          )
        })}
      </Box>
    </Box>
  )
})
