import { withIronSessionSsr } from 'iron-session/next'
import { sessionOptions } from '@common/session'
import { Stats } from '@one-chat/api-sdk'
import { Home } from '@one-chat/shared'

interface Props {
  stats: Stats
}

export default function PageHome({ stats }: Props) {
  return <Home />
}

export const getServerSideProps = withIronSessionSsr(async function ({ req, res, locale = '' }) {
  const { payload } = req.session

  return {
    props: {
      locale,
    },
  }
}, sessionOptions)
