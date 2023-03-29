import { Box } from '@fower/react'
import { ThirdPartyLogin } from './ThirdPartyLogin'
import { useTranslation } from 'react-i18next'

export function WebHome() {
  const { t } = useTranslation('home')

  return (
    <Box toCenter column px={[20, 0]} mb-80>
      <Box mb-40 mt-40 text6XL text5XL--sm text9XL--md fontBlack textCenter leading="1.1em">
        <Box inlineFlex bgGradientX={['green500', 'blue500']} bgClipText transparent>
          {t('slogan.prefix')}
        </Box>

        <Box bgGradientX={['blue500', 'purple500']} bgClipText transparent>
          {t('slogan.postfix')}
        </Box>
      </Box>

      <Box column toCenterX rowGap-8 mb4>
        <Box gray600 textXL w-60p textCenter>
          {t('intro')}
        </Box>
      </Box>

      <Box toCenter mt4 spaceX4>
        <ThirdPartyLogin />
      </Box>
    </Box>
  )
}
