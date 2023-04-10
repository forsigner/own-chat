import React from 'react'
import { Box, BoxComponent } from '@fower/react'
import { forwardRef } from '@bone-ui/utils'

export interface BreadcrumbLinkProps {
  isCurrent?: boolean
  href?: string
}

export const BreadcrumbLink: BoxComponent<'span' | 'a', BreadcrumbLinkProps> = forwardRef(
  (props: BreadcrumbLinkProps, ref) => {
    const { isCurrent, href, ...rest } = props
    if (isCurrent) {
      return <Box ref={ref} className="bone-breadcrumb-link" as="span" {...rest} />
    } else {
      return (
        <Box
          ref={ref}
          className="bone-breadcrumb-link"
          as="a"
          href={href}
          gray400
          underline--hover
          {...rest}
        />
      )
    }
  },
)
