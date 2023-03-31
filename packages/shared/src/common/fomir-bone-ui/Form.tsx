import React, { FC, forwardRef, PropsWithChildren } from 'react'
import { FormRegisterProps, useFormContext } from 'fomir'
import { Box } from '@fower/react'

export const Form: FC<PropsWithChildren<FormRegisterProps>> = forwardRef<
  HTMLFormElement,
  PropsWithChildren<FormRegisterProps>
>(function FormNode({ children, submitForm }, ref) {
  const form = useFormContext()
  const { layout = 'vertical' } = form.schema

  return (
    <Box
      as="form"
      className={`bone-ui-form-${layout}`}
      onSubmit={submitForm}
      ref={ref as any}
      display={layout === 'inline' ? 'flex' : 'block'}
      toCenterY={layout === 'inline'}
      spaceX5={layout === 'inline'}
      flexWrap={layout === 'inline'}
    >
      {children}
    </Box>
  )
})
