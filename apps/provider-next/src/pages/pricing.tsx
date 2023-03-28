import { withIronSessionSsr } from 'iron-session/next'
import { sessionOptions } from '@common/session'

export default function PagePlans() {
  // return <Plans />
  return <div>wip..</div>
}

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
