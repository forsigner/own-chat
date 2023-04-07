import { Box } from '@fower/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, Button } from 'bone-ui'
import { useModal } from '@own-chat/easy-modal'
import { Form } from 'fomir'
import { useAddTeamForm } from '../hooks/useAddTeamForm'
import { Logo } from '../../../components'
import { useTranslation } from 'react-i18next'

export const ModalAddTeam = () => {
  const { t } = useTranslation('common')
  const { register, hide, data } = useModal()
  const form = useAddTeamForm()

  return (
    <Modal {...register('bone-ui')}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Box toCenterY spaceX2>
            <Logo showText={false} size={24}></Logo>
            <Box>{t('create-team-title')}</Box>
          </Box>
        </ModalHeader>
        <ModalBody>
          <Form
            form={form}
            suffix={
              <Box toRight spaceX2>
                <Button type="button" variant="ghost" colorScheme="gray600" onClick={hide}>
                  {t('cancel')}
                </Button>
                <Button type="submit">{t('submit')}</Button>
              </Box>
            }
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
