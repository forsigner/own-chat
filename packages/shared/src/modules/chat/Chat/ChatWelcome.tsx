import { Box } from '@fower/react'
import { useTranslation } from 'react-i18next'
import { EasyModal } from '@own-chat/easy-modal'
import { Button, InformationCircleSolid, KeyOutline, QrcodeOutline } from 'bone-ui'
import { Tooltip, TooltipTrigger, TooltipContent } from '@bone-ui/tooltip'
import { ModalTeamSettings } from '../modals/ModalTeamSettings'

const Guide = () => {
  const { t } = useTranslation('common')
  return (
    <Box pt6>
      <Box text2XL fontBold pt4 mb4>
        {t('get-started')}
      </Box>

      <Box leadingRelaxed py1>
        <Box textBase fontMedium toCenterY spaceX2 mb2>
          {t('get-started-text-1')}
        </Box>
        <Box toCenterY gray600 textBase spaceX3>
          <Box toCenterY spaceX1>
            <Box>{t('get-started-text-2')}</Box>
            <Tooltip>
              <TooltipTrigger>
                <InformationCircleSolid size={20} cursorPointer />
              </TooltipTrigger>
              <TooltipContent>
                <Box>
                  <Box>{t('get-started-text-3')}</Box>
                  <Box>{t('get-started-text-4')}</Box>
                </Box>
              </TooltipContent>
            </Tooltip>
            <Box>:</Box>
          </Box>
          <Button
            px2
            size={28}
            variant="light"
            colorScheme="brand500"
            onClick={() => {
              EasyModal.show(ModalTeamSettings)
            }}
          >
            {t('configure-provider')}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

const FAQ = () => {
  const list = [
    {
      name: '什么是 Provider？',
      desc: (
        <Box>
          <Box>Provider 是 OwnChat 中 ChatGPA 数据源服务，当前有两种 provider:</Box>
          <Box mb2>
            <Box as="li">
              <Box as="span" black>
                API Key
              </Box>
            </Box>
            <Box textSM>
              这是最方便的使用方式, 直接配置 API Key 即可使用，不需要动任何代码相关的东西
            </Box>
          </Box>
          <Box>
            <Box as="li">
              <Box as="span" black>
                Self-Hosted ChatGPT Server
              </Box>
            </Box>
            <Box>
              如果你不想把 API Key 存在 OwnChat 的服务中，你可以一键部署一个自己 ChatGPT
              服务，然后作为 OwnChat 的一个 Provider, 例如这就是一个 Provider 服务：
              <Box as="a" href="https://own-chat-official-provider.vercel.app" target="_blank">
                https://own-chat-official-provider.vercel.app
              </Box>
              。如何部署一个 Self-hosted provider:{' '}
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
              。
            </Box>
          </Box>
        </Box>
      ),
    },
    // { name: '需要翻墙吗？', desc: '服务器部署在可调用OpenAI SDK的地区，所有客户端免翻墙' },
  ]

  return (
    <Box pt4>
      <Box text2XL fontBold pt4 mb4>
        常见问题
      </Box>
      <Box>
        {list.map((item, index) => (
          <Box key={item.name} leadingRelaxed py1>
            <Box textBase fontMedium toCenterY spaceX2>
              <Box>{item.name}</Box>
            </Box>
            <Box gray600 textBase>
              {item.desc}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

function ConfigKey() {
  const { t } = useTranslation('common')

  return (
    <Box mt6>
      <Box text2XL fontBold mb3>
        {t('start-to-use')}
      </Box>
      <Button
        leftIcon={<KeyOutline size={20} />}
        colorScheme="black"
        roundedFull
        onClick={() => {
          EasyModal.show(ModalTeamSettings)
        }}
      >
        {t('configure-api-key')}
      </Button>
    </Box>
  )
}

function Wechat() {
  const { t, i18n } = useTranslation('common')

  if (i18n.language === 'en') return null

  return (
    <Box mt8>
      <Box textBase fontBold mb3 toCenterY gray400 columnGap-12>
        <Box>遇到问题？加入微信交流群</Box>

        <Tooltip>
          <TooltipTrigger cursorPointer>
            <QrcodeOutline cursorPointer black />
          </TooltipTrigger>
          <TooltipContent maxW="max-content">
            <Box as="img" src="/images/wx.jpg" maxW-420 />
          </TooltipContent>
        </Tooltip>
      </Box>
    </Box>
  )
}

export const ChatWelcome = () => {
  return (
    <Box pt10 column>
      <Box text4XL fontBold mb4>
        Welcome to
        <Box as="span" brand500>
          {' '}
          OwnChat
        </Box>
      </Box>
      <Box textLG gray500>
        Own Chat is tool to help you create your own chatGPT, Our mission is to make everyone to own
        a ai assistant easily.
      </Box>
      <Guide />
      <ConfigKey />
      <Wechat />
      {/* <FAQ /> */}
    </Box>
  )
}
