import { Box } from '@fower/react'
import { ThirdPartyLogin } from './ThirdPartyLogin'
import { useTranslation } from 'react-i18next'

export function WebHome() {
  const { t } = useTranslation('home')

  return (
    <Box toCenter column mb-80 minH-70vh>
      <Box mb-40 mt-40 text6XL text5XL--sm text9XL--md fontBlack textCenter leading="1.1em">
        <Box
          inlineFlex
          // bgGradientX={['green500', 'blue500']}
          bgClipText
          transparent
          bgGradientX={['blue500', 'purple500']}
        >
          {t('slogan.prefix')}
        </Box>

        <Box gray800 text5XL text4XL--sm text8XL--md>
          {t('slogan.postfix')}
        </Box>
      </Box>

      <Box column toCenterX rowGap-8 mb4>
        <Box gray600 textXL w-60p textCenter>
          {t('intro')}
        </Box>
      </Box>

      <ThirdPartyLogin />
    </Box>
  )
}
