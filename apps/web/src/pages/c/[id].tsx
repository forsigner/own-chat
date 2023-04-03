import { withIronSessionSsr } from 'iron-session/next'
import { sessionOptions } from '@common/session'
import { ApiError, SessionDetail } from '@own-chat/shared'
import { Session, apiService } from '@own-chat/api-sdk'

interface Props {
  session: Session
  error: ApiError
}

export default function PageSession({ session, error }: Props) {
  return <SessionDetail session={session} error={error} />
}

export const getServerSideProps = withIronSessionSsr(async ({ req, query }) => {
  const id = query.id as string

  let props: {
    session?: Session
    error?: any
    [key: string]: any
  } = {}

  try {
    const { payload } = req.session || {}

    const session = await apiService.sessionBySlug(
      { slug: id },
      {
        headers: { authorization: `bearer ${payload?.token || ''}` },
      },
    )

    props.session = session
  } catch (error) {
    props.error = error as any
  }

  return { props }
}, sessionOptions)
