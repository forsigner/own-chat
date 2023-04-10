import React from 'react'
import { Box } from '@fower/react'
import { SearchOutline, XCircleSolid } from '@bone-ui/icons'
import { Input, InputElement, InputGroup } from '@bone-ui/input'
import { RenderSearch } from './types'

export const defaultRenderSearch: RenderSearch = ({ setValue, ...searchProps }) => (
  <Box p2>
    <InputGroup>
      <InputElement>
        <SearchOutline size={20} gray500 />
      </InputElement>
      <Input variant="filled" {...searchProps} />
      <InputElement>
        {searchProps.value && (
          <XCircleSolid
            onClick={() => setValue('')}
            gray400
            gray500--hover
            size={16}
            cursorPointer
          />
        )}
      </InputElement>
    </InputGroup>
  </Box>
)
