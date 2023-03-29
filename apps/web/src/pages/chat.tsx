import { withIronSessionSsr } from 'iron-session/next'
import { sessionOptions } from '@common/session'
import { PageChat } from '@own-chat/shared'

export default PageChat

export const getServerSideProps = withIronSessionSsr(async ({ req }) => {
  const { payload } = req.session

  if (payload) {
    return {
      props: {},
    }
  }

  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  }
}, sessionOptions)
