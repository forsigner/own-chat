import { Button } from 'bone-ui'
import { Box } from '@fower/react'
import { useTranslation } from 'react-i18next'
import { IconGitHub } from '../../icons/IconGitHub'
import { IconGoogle } from '../../icons/IconGoogle'
import { githubAuthUrl, googleAuthUrl, isProd } from '../../common'

export function ThirdPartyLogin() {
  const { t } = useTranslation('home')

  return (
    <Box
      columnGap-8
      rowGap-8
      toCenterY
      flexDirection={['column', 'row']}
      w={['100p', isProd ? 230 : 460]}
      px={[24, 0]}
      mt-40
    >
      <Box flex-1>
        <Button
          w-100p
          as="a"
          href={googleAuthUrl}
          border-2
          variant="outline"
          colorScheme="black"
          size="lg"
          flex-1
          leftIcon={<IconGoogle mr2 />}
        >
          {t('login-with-google')}
        </Button>
      </Box>

      {!isProd && (
        <Box flex-1>
          <Button
            as="a"
            href={githubAuthUrl}
            w-100p
            variant="outline"
            colorScheme="black"
            border-2
            flex-1
            size="lg"
            leftIcon={<IconGitHub mr2 />}
          >
            {t('login-with-github')}
          </Button>
        </Box>
      )}
    </Box>
  )
}
