import React, { cloneElement, FC, Fragment } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { MenuGroup, MenuGroupProps } from '@bone-ui/menu'
import { PopoverRenderProps } from '@bone-ui/popover'
import { getValidChildren } from '@bone-ui/utils'

export interface DropdownMenuGroupProps extends MenuGroupProps {
  option: PopoverRenderProps
}

export const DropdownMenuGroup: FC<DropdownMenuGroupProps> = forwardRef(
  (props: DropdownMenuGroupProps, ref) => {
    const { option, children, ...rest } = props

    const { close } = option

    const validChildren = getValidChildren(children)

    return (
      <MenuGroup ref={ref} className="bone-dropdown-menu-group" {...rest}>
        {validChildren.map((child, index) => {
          return <Fragment key={index}>{cloneElement(child, { close })}</Fragment>
        })}
      </MenuGroup>
    )
  },
)
