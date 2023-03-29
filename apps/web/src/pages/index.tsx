import { withIronSessionSsr } from 'iron-session/next'
import { sessionOptions } from '@common/session'
import { Stats } from '@one-chat/api-sdk'
import { Box } from '@fower/react'
import { DemoRequest } from '../../demo-request'

interface Props {
  stats: Stats
}

export default function PageHome({ stats }: Props) {
  return <Box>home
    <DemoRequest />
  </Box>
}

export const getServerSideProps = withIronSessionSsr(async function ({ req, res, locale = '' }) {
  return {
    props: {
      locale,
    },
  }
}, sessionOptions)
