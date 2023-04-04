import { Box } from '@fower/react'
import { Button } from 'bone-ui'
import { useModal } from '@own-chat/easy-modal'
import { Field, Form } from 'fomir'
import { ProviderType } from '@own-chat/api-sdk'
import { useUpdateTeamForm } from '../../hooks/useUpdateTeamForm'
import { Title } from './Title'

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
        componentProps={{ w: 300 }}
        validators={{ required: 'Name is required' }}
      />

      <Title text="Provider" subtitle="Choose a suitable provider" mb4 />

      <Field
        component="ProviderSelect"
        name="providerType"
        value={data?.providerType}
        options={[
          {
            label: (
              <Box toCenterY spaceX2>
                <Box>API Key</Box>
                <Button
                  as="a"
                  px2
                  size={28}
                  variant="light"
                  href="https://platform.openai.com/account/api-keys"
                  target="_blank"
                >
                  去获取 Openai API Key
                </Button>
              </Box>
            ),
            value: ProviderType.ApiKey,
            desc: '使用自己的 API Key, OwnChat 将提供服务器节点',
            tips: '如果你有自己的 API Key, 不想折腾私有化部署，那你可以选择这种方案',
          },
          {
            label: (
              <Box toCenterY spaceX2>
                <Box>Self-hosted</Box>
                <Button
                  as="a"
                  px2
                  size={28}
                  variant="light"
                  href="https://github.com/forsigner/own-chat#one-click-to-deploy"
                  target="_blank"
                >
                  去一键部署
                </Button>
              </Box>
            ),
            value: ProviderType.SelfHosted,
            desc: '使用自己部署的 ChatGPT 服务, 无效暴露 key 给 OwnChat',
            tips: '如果你是一个极客，有程序部署部署能力，那你可以选择这种方案',
          },
          {
            label: 'OwnChat Official',
            value: ProviderType.Official,
            desc: '直接使用 OwnChat 官方提供的 token，按 token 量付费，省心省力',
            tips: '如果你方便且最低时间成本使用 ChatGPT, 不想折腾翻墙、帐号注册、外国信用卡等繁琐的事情，请选择这种方案',
          },
        ]}
        componentProps={{
          placeholder: 'Please select a type',
        }}
        validators={{
          required: 'Type is required',
        }}
        onFieldInit={({ value }) => {
          form.setFieldState('apiKey', { visible: value === ProviderType.ApiKey })
          form.setFieldState('authorizationCode', { visible: value === ProviderType.SelfHosted })
          form.setFieldState('endpoint', { visible: value === ProviderType.SelfHosted })
        }}
        onValueChange={({ value }) => {
          form.setFieldState('apiKey', { visible: value === ProviderType.ApiKey })
          form.setFieldState('authorizationCode', { visible: value === ProviderType.SelfHosted })
          form.setFieldState('endpoint', { visible: value === ProviderType.SelfHosted })
        }}
      />

      <Field
        label="apiKey"
        component="Input"
        name="apiKey"
        value={data?.apiKey || ''}
        visible={false}
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
