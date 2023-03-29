import { Strategy } from '@own-chat/api-sdk'
import { Button, ButtonProps } from 'bone-ui'
import { PlusSolid } from '@bone-ui/icons'
import { EasyModal } from '@own-chat/easy-modal'
import { useTranslation } from 'react-i18next'
import { DrawerAddBot } from '../modules/strategies/DrawerAddBot'
interface Props extends ButtonProps {
  strategy: Strategy
}

export const CreateBotButton = (props: Props) => {
  const { t } = useTranslation('dashboard')
  const { strategy, ...rest } = props
  return (
    <Button
      size="sm"
      variant="light"
      colorScheme="brand500"
      leftIcon={<PlusSolid ml--8></PlusSolid>}
      onClick={async () => {
        EasyModal.show(DrawerAddBot, { strategy })
      }}
      roundedFull
      {...rest}
    >
      {t('create-bot')}
    </Button>
  )
}
