import React from 'react'
import { RadioRenderProps, DefaultRender } from '@bone-ui/radio'
import { MenuItem } from '@bone-ui/menu'
import { Box } from '@fower/react'

export const defaultRenderItem: DefaultRender = ({ checked, disabled, item }: RadioRenderProps) => {
  const props: any = {}
  if (item?.icon && typeof item?.icon === 'string') {
    props.icon = <Box as="img" src={item.icon} h-100p />
  }
  return (
    <MenuItem
      w-100p
      cursorNotAllowed={disabled}
      opacity-50={disabled}
      selected={checked}
      h={48}
      {...props}
    >
      {item?.label}
    </MenuItem>
  )
}
