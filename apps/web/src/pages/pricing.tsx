import { withIronSessionSsr } from 'iron-session/next'
import { sessionOptions } from '@common/session'
import { BasicLayout, LOGIN_SUCCESS_REDIRECT_URL, Plan } from '@own-chat/shared'

export default function PagePricing() {
  return <Plan />
}

PagePricing.Layout = BasicLayout

export const getServerSideProps = withIronSessionSsr(async function ({ req, res, locale = '' }) {
  const { payload } = req.session

  if (!payload) {
    return {
      props: {
        locale,
      },
    }
  }

  return {
    redirect: {
      destination: LOGIN_SUCCESS_REDIRECT_URL,
      permanent: false,
    },
  }
}, sessionOptions)
