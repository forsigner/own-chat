import React from 'react'
import { Box } from '@fower/react'
import { ChipOutline, Divider } from 'bone-ui'
import { useTranslation } from 'react-i18next'
import { IconDocument, IconGitHub, IconTelegram, Logo } from '@one-chat/shared'
import { SidebarItem } from './SidebarItem'
import { PageIds } from './constants'

export const Sidebar = () => {
  const { t } = useTranslation('dashboard')
  return (
    <Box
      w-280
      h-100vh
      column
      toBetween
      display={['none', 'none', 'flex']}
      pt-20
      // bgGreen900--D25
      // bgGray100--D5
      // bgWhite
      // borderRight-1
      // borderGray200--T40
      // borderGray800--dark--i
      bg="#fafafa"
      bgSlate800--dark
    >
      <Box>
        <Box pl6 toCenterY spaceX1 pb4>
          <Logo />
        </Box>

        <Box pl6 fontMedium gray500 mt4 py1 pr4 mb2 toBetween toCenterY>
          <Box>{t('my-bots')}</Box>
        </Box>
        {/* <BotList /> */}
        <Box>TODO</Box>
      </Box>
      <Box flex-1 column toBottom>
        <Box>
          <Box pl6 fontMedium gray500 mt4 py1 mb2>
            {t('create-bot')}
          </Box>

          <Box column rowGap-8 textLG fontBold>
            <SidebarItem to={PageIds.PageStrategies} icon={IconDocument}>
              {t('my-strategies')}
            </SidebarItem>

            <SidebarItem to={PageIds.PageDiscoverStrategy} icon={IconDocument}>
              {t('discover-strategies')}
            </SidebarItem>

            <SidebarItem to={PageIds.PageDiscoverBot} icon={ChipOutline}>
              {t('discover-bots')}
            </SidebarItem>
          </Box>

          <Box toCenter my4>
            <Divider w-80p />
          </Box>

          <Box column rowGap-8 px4 textLG fontBold>
            <SidebarItem to={PageIds.PageRunners} icon={ChipOutline}>
              {t('runners')}
            </SidebarItem>

            <SidebarItem to={PageIds.PageNotifiers} icon={ChipOutline}>
              {t('notification-channels')}
            </SidebarItem>

            {/* <BotHistory /> */}
          </Box>
        </Box>

        <Box w-100p p4>
          {/* <Box toBetween toCenterY spaceX2>
          <DownloadIOSButton />
          <DownloadAndroidButton />
        </Box> */}
          <Box spaceX2 pt2 toCenter>
            {/* <Box textXS>Contact：</Box> */}
            <Box as="a" href="https://twitter.com/forsigner" target="_blank">
              {/* <IconTwitter cursorPointer fillGray600 size={24} /> */}
            </Box>
            <IconTelegram cursorPointer fillGray600 size={24} />
            <IconGitHub cursorPointer fillGray600 size={22} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
