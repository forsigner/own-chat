import { Button } from 'bone-ui'
import { Box } from '@fower/react'
import { useTranslation } from 'react-i18next'
import { IconGitHub } from '../../icons/IconGitHub'
import { IconGoogle } from '../../icons/IconGoogle'
import { githubAuthUrl, googleAuthUrl } from '../../common'

export function ThirdPartyLogin() {
  const { t } = useTranslation('home')

  return (
    <Box spaceX4 toCenterY>
      <Button
        as="a"
        href={githubAuthUrl}
        w-100p
        variant="outline"
        colorScheme="black"
        border-2
        size="lg"
        leftIcon={<IconGitHub mr2 />}
      >
        {t('login-with-github')}
      </Button>

      <Button
        w-100p
        as="a"
        href={googleAuthUrl}
        border-2
        variant="outline"
        colorScheme="black"
        size="lg"
        leftIcon={<IconGoogle mr2 />}
      >
        {t('login-with-google')}
      </Button>
    </Box>
  )
}
