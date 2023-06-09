import { Box } from '@fower/react'
import { ProviderType } from '@own-chat/api-sdk'
import { Button, CheckOutline, Tag } from 'bone-ui'
import { useState } from 'react'
import { Title } from './Title'
import { UpdateProviderForm } from './UpdateProviderForm'
import { useTeams } from '../../hooks/useTeams'
import { useUpdateTeam } from '../../hooks/useUpdateTeam'
import { useTranslation } from 'react-i18next'

export const ProviderList = () => {
  const { t } = useTranslation('common')
  const { loading, activeTeam } = useTeams()
  const { updateTeam } = useUpdateTeam()
  const [providerId, setProviderId] = useState<Number>(activeTeam.activeProviderId)

  if (loading) return null

  const { providers } = activeTeam

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
            {t('get-api-key')}
          </Button>
        </Box>
      ),
      desc: t('provider-api-key-tips-1'),
      tips: t('provider-api-key-tips-2'),
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
            {t('one-click-to-deploy')}
          </Button>
        </Box>
      ),
      desc: t('provider-self-hosted-tips-1'),
      tips: t('provider-self-hosted-tips-2'),
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

          if (item.type === ProviderType.Official) return null

          return (
            <Box
              key={item.id}
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
              <Box
                roundedFull
                bgBrand500={checked}
                bgGray300={!checked}
                square6
                toCenter
                cursorPointer
                onClick={async () => {
                  setProviderId(item.id)
                  await updateTeam({ activeProviderId: item.id })
                }}
              >
                <CheckOutline white size={18} />
              </Box>

              <Box ml-16 column rowGap-4 flex-1>
                <Box toBetween toCenterY>
                  <Box textBase fontSemibold>
                    {info.label}
                  </Box>
                  {checked && <Tag colorScheme="green500">{t('using')}</Tag>}
                </Box>
                <Box gray600>{info.desc}</Box>
                <Box gray400 textXS>
                  {info.tips}
                </Box>
                <Box mt3>
                  <UpdateProviderForm provider={item} />
                </Box>
              </Box>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
