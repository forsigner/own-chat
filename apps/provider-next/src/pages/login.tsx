import { withIronSessionSsr } from 'iron-session/next'
import { Modal, ModalOverlay, ModalContent } from 'bone-ui'
import { useState } from 'react'
import { sessionOptions } from '@common/session'
import { ChatLayout, ProviderChat } from '@own-chat/shared'
import { Login } from '@components/Login'

export default function PageHome() {
  const [visible, setVisible] = useState(true)
  return (
    <>
      <ProviderChat />
      <Modal isOpen={visible} onClose={() => setVisible(false)} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <Login />
        </ModalContent>
      </Modal>
    </>
  )
}

PageHome.Layout = ChatLayout

export const getServerSideProps = withIronSessionSsr(async function ({ req, res, locale = '' }) {
  const { authorizationCode = '' } = req.session

  if (!authorizationCode) {
    return {
      props: {
        locale,
        authorizationCode,
      },
    }
  }

  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  }
}, sessionOptions)
