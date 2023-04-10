import React, { FC } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { MenuItem, MenuItemProps } from '@bone-ui/menu'

export interface DropdownMenuItemProps extends MenuItemProps {
  hideOnClick?: boolean
  close?: () => void
}

export const DropdownMenuItem: FC<DropdownMenuItemProps> = forwardRef(
  (props: DropdownMenuItemProps, ref) => {
    const { hideOnClick = true, close, ...rest } = props

    return (
      <MenuItem
        ref={ref}
        className="bone-dropdown-menu-item"
        onClick={hideOnClick ? close : undefined}
        {...rest}
      />
    )
  },
)
