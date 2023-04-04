import { FC } from 'react'
import { NodeProps } from 'fomir'
import { RadioGroup } from 'bone-ui'
import { Box } from '@fower/react'
import { ProviderSelectNode } from '../../custom-types'
import { FormField } from '../fomir-bone-ui'

export const ProviderSelect: FC<NodeProps<ProviderSelectNode>> = (props) => {
  const { node } = props
  const { value, options } = props.node

  return (
    <FormField node={node}>
      <RadioGroup
        options={options}
        column
        rowGap-12
        value={value}
        onChange={(v) => props.handler.handleChange(v)}
        renderItem={({ item, defaultRadio, checked }) => (
          <Box
            px3
            py3
            toCenterY
            flex-1
            W={['100p', '100p', 600]}
            border
            transitionAll
            borderColor={checked ? 'brand500' : 'gray200'}
            rounded-8
          >
            {defaultRadio}
            <Box ml-16 column rowGap-4>
              <Box textBase fontSemibold>
                {item.label}
              </Box>
              <Box gray600>{item.desc}</Box>
              <Box gray400 textXS>
                {item.tips}
              </Box>
            </Box>
          </Box>
        )}
      />
    </FormField>
  )
}
