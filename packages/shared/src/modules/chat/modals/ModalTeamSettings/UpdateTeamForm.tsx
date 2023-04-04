import { Box } from '@fower/react'
import { Button } from 'bone-ui'
import { useModal } from '@own-chat/easy-modal'
import { Field, Form } from 'fomir'
import { useUpdateTeamForm } from '../../hooks/useUpdateTeamForm'
import { Title } from './Title'
import { ProviderType } from '@own-chat/api-sdk'

export const UpdateTeamForm = () => {
  const form = useUpdateTeamForm()
  const { hide, data } = useModal()

  return (
    <Form
      form={form}
      suffix={
        <Box toLeft spaceX2>
          <Button type="submit">Update</Button>
          <Button type="button" variant="ghost" colorScheme="gray600" onClick={hide}>
            Cancel
          </Button>
        </Box>
      }
    >
      <Title text="Team Name" subtitle="This is your team's visible name within OwnChat." mb4 />
      <Field
        component="Input"
        name="name"
        value={data?.name || ''}
        validators={{ required: 'Name is required' }}
      />

      <Title text="Provider" subtitle="Select a provider" mb4 />

      <Field
        component="Select"
        name="providerType"
        value={data?.providerType}
        options={[
          { label: 'Official', value: ProviderType.Official },
          { label: 'API Key', value: ProviderType.ApiKey },
          { label: 'Self host', value: ProviderType.SelfHost },
        ]}
        componentProps={{
          placeholder: 'Please select a type',
        }}
        validators={{
          required: 'Type is required',
        }}
        onFieldInit={({ value }) => {
          form.setFieldState('apiKey', { visible: value === ProviderType.ApiKey })
          form.setFieldState('authorizationCode', { visible: value === ProviderType.SelfHost })
          form.setFieldState('endpoint', { visible: value === ProviderType.SelfHost })
        }}
        onValueChange={({ value }) => {
          form.setFieldState('apiKey', { visible: value === ProviderType.ApiKey })
          form.setFieldState('authorizationCode', { visible: value === ProviderType.SelfHost })
          form.setFieldState('endpoint', { visible: value === ProviderType.SelfHost })
        }}
      />

      <Field
        label="apiKey"
        component="Input"
        name="apiKey"
        value={data?.apiKey || ''}
        visible={false}
        componentProps={{
          placeholder: 'sk-...',
        }}
      />

      <Field
        label="authorizationCode"
        component="Input"
        name="authorizationCode"
        value={data?.authorizationCode || ''}
        visible={false}
      />

      <Field
        label="endpoint"
        component="Input"
        name="endpoint"
        value={data?.endpoint || ''}
        visible={false}
      />
    </Form>
  )
}
