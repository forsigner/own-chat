import { withIronSessionSsr } from 'iron-session/next'
import { sessionOptions } from '@common/session'
import { PageChat } from '../../../../packages/shared/src'

export default PageChat

export const getServerSideProps = withIronSessionSsr(async ({ req }) => {
  const { payload } = req.session

  if (payload) {
    return {
      props: { payload },
    }
  }

  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  }
}, sessionOptions)
