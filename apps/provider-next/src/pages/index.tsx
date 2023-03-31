import { withIronSessionSsr } from 'iron-session/next'
import { Modal, ModalOverlay, ModalContent } from 'bone-ui'
import { useState } from 'react'
import { sessionOptions } from '@common/session'
import { ChatLayout, Home } from '../../../../packages/shared/src'
import { Login } from '@components/Login'

interface Props {
  authorizationCode: string
}

export default function PageHome({ authorizationCode }: Props) {
  const [visible, setVisible] = useState(!authorizationCode)

  if (!authorizationCode) {
    return (
      <>
        <Home />
        <Modal isOpen={visible} onClose={() => setVisible(false)} closeOnOverlayClick={false}>
          <ModalOverlay />
          <ModalContent>
            <Login onLoginSuccess={() => setVisible(false)} />
          </ModalContent>
        </Modal>
      </>
    )
  }
  return <Home />
}

PageHome.Layout = ChatLayout

export const getServerSideProps = withIronSessionSsr(async function ({ req, res, locale = '' }) {
  const { authorizationCode = '' } = req?.session || {}
  return {
    props: {
      locale,
      authorizationCode,
    },
  }
}, sessionOptions)
