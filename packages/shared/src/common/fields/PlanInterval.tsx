import { FC } from 'react'
import { NodeProps } from 'fomir'
import { RadioGroup } from 'bone-ui'
import { Box } from '@fower/react'
import { PlanInterval as PlanIntervalType } from '@own-chat/api-sdk'
import { PlanIntervalNode } from '../../custom-types'
import { FormField } from '../fomir-bone-ui'

export const PlanInterval: FC<NodeProps<PlanIntervalNode>> = (props) => {
  const { node } = props
  const { value } = props.node

  return (
    <FormField node={node}>
      <RadioGroup
        options={[
          { label: 'Pay yearly', value: PlanIntervalType.Yearly },
          { label: 'Pay monthly', value: PlanIntervalType.Monthly },
        ]}
        flex
        value={value}
        onChange={(v) => props.handler.handleChange(v)}
        renderItem={({ item, defaultRadio, checked }) => (
          <Box
            px3
            py3
            toCenterY
            minW-180
            border
            transitionAll
            borderColor={checked ? 'brand500' : 'gray200'}
            rounded-8
          >
            {defaultRadio}
            <Box ml-16>
              <Box textBase fontSemibold>
                {item.label}
              </Box>
              <Box gray400>{item.desc}</Box>
            </Box>
          </Box>
        )}
      />
    </FormField>
  )
}
