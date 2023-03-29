import { withIronSessionSsr } from 'iron-session/next'
import { sessionOptions } from '@common/session'
import { WebHome, BasicLayout } from '@own-chat/shared'

export default function PageHome() {
  return <WebHome />
}

PageHome.Layout = BasicLayout

export const getServerSideProps = withIronSessionSsr(async function({ req, res, locale = '' }) {
  return {
    props: {
      locale,
    },
  }
}, sessionOptions)
