import { Button } from 'bone-ui'
import { FC, PropsWithChildren } from 'react'
import { EasyModal } from '@owned-chat/easy-modal'
import { ModalSign } from '../modules/home/ModalSign'
import { mutateSignStatus } from '../modules/home/ModalSign/hooks/sign-status.store'

export const RegisterButton: FC<PropsWithChildren> = (props) => {
  return (
    <Button
      variant="light"
      colorScheme="teal500"
      size="lg"
      w40
      onClick={(e) => {
        e.preventDefault()
        mutateSignStatus('register')
        EasyModal.show(ModalSign)
      }}
      {...props}
    />
  )
}
