import { Button } from 'bone-ui'
import { EasyModal } from '@owned-chat/easy-modal'
import { FC, PropsWithChildren } from 'react'
import { ModalSign } from '../modules/home/ModalSign'
import { mutateSignStatus } from '../modules/home/ModalSign/hooks/sign-status.store'

export const LoginButton: FC<PropsWithChildren> = (props) => {
  return (
    <Button
      px8
      size="lg"
      w40
      bgGradientX={['green500', 'yellow500']}
      onClick={(e) => {
        e.preventDefault()
        EasyModal.show(ModalSign)
        mutateSignStatus('login')
      }}
      {...props}
    />
  )
}
