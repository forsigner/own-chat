import React, { cloneElement, FC, Fragment } from 'react'
import { FowerHTMLProps } from '@fower/core'
import { Box } from '@fower/react'
import { forwardRef } from '@bone-ui/utils'
import { PopoverContent } from '@bone-ui/popover'
import { getValidChildren } from '@bone-ui/utils'

export interface DropdownMenuListProps extends FowerHTMLProps<'div'> {
  useTriggerWidth?: boolean
  width?: number
  containerMaxHeight?: string | number
}

export const DropdownMenuList: FC<DropdownMenuListProps> = forwardRef(
  (props: DropdownMenuListProps, ref) => {
    const {
      useTriggerWidth = true,
      containerMaxHeight = 250,
      width = 180,
      children,
      ...rest
    } = props

    const validChildren = getValidChildren(children)

    return (
      <Box className="bone-dropdown-menu-list" ref={ref} {...rest}>
        <PopoverContent
          overflowYAuto
          w={width}
          useTriggerWidth={useTriggerWidth}
          maxH={containerMaxHeight}
        >
          {(option) => {
            return validChildren.map((child, index) => {
              return <Fragment key={index}>{cloneElement(child, { option })}</Fragment>
            })
          }}
        </PopoverContent>
      </Box>
    )
  },
)
