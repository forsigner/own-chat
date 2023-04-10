import React, { FC } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { Button, ButtonProps } from '@bone-ui/button'
import { PopoverTrigger } from '@bone-ui/popover'

export type DropdownMenuButtonProps = ButtonProps

export const DropdownMenuButton: FC<DropdownMenuButtonProps> = forwardRef(
  (props: DropdownMenuButtonProps, ref) => {
    return (
      <PopoverTrigger h-100p>
        <Button className="bone-dropdown-menu-button" ref={ref} {...props} />
      </PopoverTrigger>
    )
  },
)
