import React, { FC } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/core'
import { AlertType, getTypeStyles } from './typeStyles'
import { AlertProvider } from './alertContext'

export interface AlertProps extends Omit<FowerHTMLProps<'div'>, 'type'> {
  variant?: 'outline' | 'filled'
  type?: AlertType
}

export const Alert: FC<AlertProps> = forwardRef((props: AlertProps, ref) => {
  const { type = 'default', variant = 'filled', ...rest } = props

  const isOutline = variant === 'outline'
  return (
    <AlertProvider value={{ type } as any}>
      <Box
        className="bone-alert"
        ref={ref}
        px4
        py4
        rounded-4
        toCenter
        relative
        border={isOutline}
        {...getTypeStyles(type, isOutline)}
        {...rest}
      ></Box>
    </AlertProvider>
  )
})
