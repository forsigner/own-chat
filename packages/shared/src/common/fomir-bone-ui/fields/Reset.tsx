import { FormField } from '../FormField'
import { Button } from '@bone-ui/button'
import { NodeProps, useFormContext } from 'fomir'

export const Reset = ({ node }: NodeProps<any>) => {
  const { text, componentProps } = node
  const form = useFormContext()
  return (
    <FormField node={node}>
      <Button type="submit" {...componentProps} onClick={() => form.resetForm()}>
        {text}
      </Button>
    </FormField>
  )
}
