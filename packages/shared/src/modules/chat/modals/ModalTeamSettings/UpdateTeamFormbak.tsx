import { useTeams } from '../../hooks/useTeams'
import { useUpdateTeamForm } from '../../hooks/useUpdateTeamForm'
import { Title } from './Title'
import { Box } from '@fower/react'
import { ProviderType } from '@own-chat/api-sdk'
import { useModal } from '@own-chat/easy-modal'
import { Button } from 'bone-ui'
import { Field, Form } from 'fomir'

export const UpdateTeamForm = () => {
  const form = useUpdateTeamForm()
  const { hide } = useModal()
  const { activeTeam } = useTeams()

  function handleProviderChange(value: any) {
    form.setFieldState('apiKey', { visible: value === ProviderType.ApiKey })
    form.setFieldState('accessToken', { visible: value === ProviderType.AccessToken })
    form.setFieldState('authorizationCode', { visible: value === ProviderType.SelfHosted })
    form.setFieldState('endpoint', { visible: value === ProviderType.SelfHosted })
  }

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
        value={activeTeam?.name || ''}
        componentProps={{ w: 300 }}
        validators={{ required: 'Name is required' }}
      />
      <Title text="Provider" subtitle="Choose a suitable provider" mb4 />
      <Field
        component="ProviderSelect"
        name="providerType"
        value={activeTeam?.providerType || ''}
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
                <Box>Access Token</Box>
                <Button
                  as="a"
                  px2
                  size={28}
                  variant="light"
                  href="https://chat.openai.com/api/auth/session"
                  target="_blank"
                >
                  去获取 Access Token
                </Button>
              </Box>
            ),
            value: ProviderType.AccessToken,
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
          handleProviderChange(value)
        }}
        onValueChange={({ value }) => {
          handleProviderChange(value)
        }}
      />
      <Field
        label="OpenAI API Key"
        component="Input"
        name="apiKey"
        value={activeTeam?.apiKey || ''}
        visible={false}
        componentProps={{
          placeholder: 'sk-...',
        }}
      />
      <Field
        label="Self-Hosted Server"
        component="Input"
        name="endpoint"
        value={activeTeam?.endpoint}
        visible={false}
        componentProps={{
          placeholder: 'eg: https://own-chat-official-provider.vercel.app',
          autoComplete: 'new-password',
          // autoComplete: 'off',
        }}
        validators={{
          required: 'Please input Self-Hosted Server',
        }}
      />
      <Field
        label="Authorization Code"
        component="PasswordInput"
        name="authorizationCode"
        componentProps={{
          autoComplete: 'new-password',
          // autoComplete: 'off',
        }}
        value={activeTeam?.authorizationCode || ''}
        visible={false}
      />

      <Field
        label="Access Token"
        component="Input"
        name="accessToken"
        componentProps={{
          autoComplete: 'new-password',
        }}
        value={activeTeam?.accessToken || ''}
        visible={false}
      />
    </Form>
  )
}
