import React, { FC, ReactNode, cloneElement, Fragment } from 'react'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/core'
import { forwardRef } from '@bone-ui/utils'
import { getValidChildren } from '@bone-ui/utils'
import { BreadcrumbSeparator } from './BreadcrumbSeparator'
import { BreadcrumbLink } from './BreadcrumbLink'

export interface BreadcrumbItemProps extends FowerHTMLProps<'li'> {
  isCurrent?: boolean
  hasSeparator?: boolean
  separator?: ReactNode
  children?: ReactNode
}

export const BreadcrumbItem: FC<BreadcrumbItemProps> = forwardRef(
  (props: BreadcrumbItemProps, ref) => {
    const { isCurrent, hasSeparator, children, separator, ...rest } = props
    const validChildren = getValidChildren(children)

    return (
      <Box
        ref={ref}
        className="bone-breadcrumb-item"
        as="li"
        inlineBlock
        leadingNormal
        mr="0.5em"
        {...(rest as any)}
      >
        {validChildren.map((child, index) => {
          if (child.type === BreadcrumbLink) {
            return <Fragment key={index}>{cloneElement(child, { isCurrent })}</Fragment>
          }
          return child
        })}
        {hasSeparator && <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>}
      </Box>
    )
  },
)
