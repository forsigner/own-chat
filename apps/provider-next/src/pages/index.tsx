import { withIronSessionSsr } from 'iron-session/next'
import { sessionOptions } from '@common/session'
import { ChatLayout, ProviderChat } from '@own-chat/shared'

export default function PageHome() {
  return <ProviderChat />
}

PageHome.Layout = ChatLayout

export const getServerSideProps = withIronSessionSsr(async function ({ req, res, locale = '' }) {
  const { authorizationCode = '' } = req.session

  if (!authorizationCode) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: {
      locale,
      authorizationCode,
    },
  }
}, sessionOptions)
