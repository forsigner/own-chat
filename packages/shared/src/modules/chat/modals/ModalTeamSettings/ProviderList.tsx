import { Box } from '@fower/react'
import { ProviderType } from '@own-chat/api-sdk'
import { Button, Dot, Tag } from 'bone-ui'
import { useState } from 'react'
import { useProviders } from '../../hooks/useProviders'
import { useSetting } from '../../hooks/useSetting'
import { Title } from './Title'

export const ProviderList = () => {
  const { setting } = useSetting()
  const { loading, providers } = useProviders()
  const [providerId, setProviderId] = useState<Number>(setting.activeProviderId!)
  if (loading) return null

  const maps = {
    [ProviderType.ApiKey]: {
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
      desc: '使用自己的 API Key, OwnChat 将提供服务器节点',
      tips: '如果你有自己的 API Key, 不想折腾私有化部署，那你可以选择这种方案',
    },
    [ProviderType.SelfHosted]: {
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
      desc: '使用自己部署的 ChatGPT 服务, 无效暴露 key 给 OwnChat',
      tips: '如果你是一个极客，有程序部署部署能力，那你可以选择这种方案',
    },
    [ProviderType.Official]: {
      label: 'OwnChat Official',
      desc: '直接使用 OwnChat 官方提供的 token，按 token 量付费，省心省力',
      tips: '如果你方便且最低时间成本使用 ChatGPT, 不想折腾翻墙、帐号注册、外国信用卡等繁琐的事情，请选择这种方案',
    },
    [ProviderType.AccessToken]: {
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
      desc: '使用自己的 API Key, OwnChat 将提供服务器节点',
      tips: '如果你有自己的 API Key, 不想折腾私有化部署，那你可以选择这种方案',
    },
  }

  return (
    <Box mt8>
      <Title text="Provider" subtitle="Choose a suitable provider" mb4 />
      <Box column rowGap-12 mt4>
        {providers.map((item) => {
          const checked = item.id === providerId
          const info = maps[item.type]

          return (
            <Box
              key={item.id}
              px3
              py3
              toCenterY
              flex-1
              cursorPointer
              W={['100p', '100p', 600]}
              border
              transitionAll
              borderColor={checked ? 'brand500' : 'gray200'}
              rounded-8
              onClick={() => {
                setProviderId(item.id)
              }}
            >
              <Dot bgBrand500={checked} bgGray300={!checked} square6 />

              <Box ml-16 column rowGap-4 flex-1>
                <Box toBetween toCenterY>
                  <Box textBase fontSemibold>
                    {info.label}
                  </Box>
                  {checked && <Tag colorScheme="green500">使用中</Tag>}
                </Box>
                <Box gray600>{info.desc}</Box>
                <Box gray400 textXS>
                  {info.tips}
                </Box>
              </Box>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
