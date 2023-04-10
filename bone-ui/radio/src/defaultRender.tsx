import React from 'react'
import { Box } from '@fower/react'
import { DefaultRender } from './types'

export const defaultRender: DefaultRender = ({ checked, colorScheme = 'brand500' }) => {
  const atomicProps: any = {}
  if (checked) {
    atomicProps.borderColor = colorScheme
  }
  return (
    <Box toCenter circle-20 border-1 borderGray400={!checked} overflowHidden {...atomicProps}>
      <Box circle-8 bg={colorScheme} hidden={!checked}></Box>
    </Box>
  )
}
