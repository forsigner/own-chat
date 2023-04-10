import React, { FC } from 'react'
import { FowerHTMLProps } from '@fower/core'
import { forwardRef } from '@bone-ui/utils'
import { Popover } from '@bone-ui/popover'

export interface DropdownMenuProps extends FowerHTMLProps<'div'> {}

export const DropdownMenu: FC<DropdownMenuProps> = forwardRef((props, ref) => {
  return <Popover ref={ref} className="bone-dropdown-menu" placement="bottom" {...props} />
})
