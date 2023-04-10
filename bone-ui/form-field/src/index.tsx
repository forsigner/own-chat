import React, { FC, ReactNode } from 'react'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/core'
import { forwardRef } from '@bone-ui/utils'

export interface FormFieldProps extends FowerHTMLProps<'div'> {
  orientation?: 'horizontal' | 'vertical'

  label?: ReactNode

  error?: string
}

export const FormField: FC<FormFieldProps> = forwardRef((props: FormFieldProps, ref) => {
  const { orientation = 'vertical', children, error, label, ...rest } = props
  const isHorizontal = orientation === 'horizontal'

  return (
    <Box className="bone-form-field" ref={ref} relative column={!isHorizontal} {...rest}>
      {label && (
        <Box
          className="bone-form-field-label"
          text-16
          toRight={isHorizontal}
          toLeft={!isHorizontal}
          toCenterY
          w-80={isHorizontal}
          pr-8
          py2
        >
          {label}
        </Box>
      )}
      <Box className="bone-form-field-control" column flex-1 mb-28={!error}>
        <Box toCenterY toLeft>
          {children}
        </Box>
        {error && (
          <Box h-28 red400>
            {error}
          </Box>
        )}
      </Box>
    </Box>
  )
}) as any
