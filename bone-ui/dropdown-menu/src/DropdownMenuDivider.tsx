import React, { FC } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { Divider, DividerProps } from '@bone-ui/divider'

export type DropdownMenuDividerProps = DividerProps

export const DropdownMenuDivider: FC<DropdownMenuDividerProps> = forwardRef(
  (props: DropdownMenuDividerProps, ref) => {
    return <Divider className="bone-dropdown-menu-divider" ref={ref} {...props} />
  },
)
