import { Box } from '@fower/react'
import { Button } from 'bone-ui'
import { CodeOutline } from '@bone-ui/icons'
import { Title } from './Title'
import { apiService, Hooks, Refetcher } from '@own-chat/api-sdk'
import { Field, Form, useForm } from 'fomir'
import { DeleteTokenPopover } from './DeleteTokenPopover'
import { useUser } from '../../stores'

function TokenList() {
  const { user } = useUser()
  const { data = [], loading } = Hooks.useTokens({ where: { userId: user.id } })

  if (loading) return null

  return (
    <Box spaceY3>
      {data.map((item) => (
        <Box key={item.id} toCenterY toBetween columnGap-12>
          <Box toCenterY spaceX2>
            <Box>{item.description}</Box>
            <Box gray600>{item.value}</Box>
          </Box>
          <DeleteTokenPopover token={item} />
        </Box>
      ))}
    </Box>
  )
}

interface Values {
  description: string
}

function AddTokenForm() {
  const { user } = useUser()
  const form = useForm<Values>({
    layout: 'horizontal',
    async onSubmit(values) {
      console.log('values:', values)
      try {
        form.setSubmitting(true)
        await apiService.addToken(values)
        Refetcher.refetchTokens({ where: { userId: user.id } })
        form.resetForm()
      } catch (error) {
        form.setSubmitting(false)
      }
    },
  })
  return (
    <Box w-100p>
      <Form form={form}>
        <Box toCenterY spaceX2>
          <Box flex-1>
            <Field
              name="description"
              component="Input"
              validators={{ required: 'Description is required' }}
              componentProps={{
                w: '100p',
                flex: 1,
              }}
            />
          </Box>

          <Button mb-20 type="submit" variant="light">
            Add
          </Button>
        </Box>
      </Form>
    </Box>
  )
}

export const PersonalToken = () => {
  return (
    <Box>
      <Title text="PERSONAL TOKEN" icon={CodeOutline} />

      <Box>
        <Box spaceY2 mb4>
          <Box>This is your personal API key. </Box>
          <Box>Your personal API key has access to all the data.</Box>
        </Box>
        <Box gray400>
          To limit the access of a third-party service, consider following these instructions to
          create a read-only API key and sharing that key instead.
        </Box>
        <Box mt4>
          <AddTokenForm></AddTokenForm>
          <TokenList />
        </Box>
      </Box>
    </Box>
  )
}
