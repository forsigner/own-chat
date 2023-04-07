import { Box } from '@fower/react'
import { useTranslation } from 'react-i18next'
import { Button, Input } from 'bone-ui'
import { useState } from 'react'
import { useLoginByToken } from '../../hooks/useLoginByToken'
import { BasicLayout } from '../../layouts'
import { Logo } from '../../components'
import { LocaleSelect } from '../../components/LocaleSelect'
import { ModeToggle } from '../../components/ModeToggle'

export function DesktopHome() {
  const { t } = useTranslation('home')
  const [token, setToken] = useState('')
  const { login } = useLoginByToken()

  return (
    <Box bgWhite black bgGray900--dark minH-100vh pt4>
      <Box container mx-auto className="nav" toBetween py3 px={[18, 0]}>
        <Logo to="/" />
        <Box toCenterY spaceX2>
          <LocaleSelect></LocaleSelect>
          <ModeToggle></ModeToggle>
        </Box>
      </Box>
      <Box toCenter column mb-80 minH-70vh>
        <Box fontBold text3XL mb6>
          Login to OwnChat
        </Box>

        <Box column toCenterX rowGap-8 mb4>
          <Box gray600 textXL w-60p textCenter>
            {t('desktop-login-tips')}
          </Box>
        </Box>

        <Box column rowGap-12 mb4 toCenter w-360 mt8>
          <Input
            size="lg"
            placeholder="Your personal token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
          <Button
            size="lg"
            w-100p
            onClick={async () => {
              await login(token)
            }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
