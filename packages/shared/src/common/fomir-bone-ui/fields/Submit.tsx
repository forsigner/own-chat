import { NodeProps } from 'fomir'
import { Button } from '@bone-ui/button'
import { FormField } from '../FormField'
import { SubmitNode } from '../bone-ui-node'

export const Submit = ({ node }: NodeProps<SubmitNode>) => {
  const { text, componentProps } = node
  return (
    <FormField node={node}>
      <Button type="submit" w={['100%', '100%']} {...componentProps}>
        {text}
      </Button>
    </FormField>
  )
}
