import { withIronSessionSsr } from 'iron-session/next'
import { sessionOptions } from '@common/session'
import { BasicLayout, LOGIN_SUCCESS_REDIRECT_URL } from '@own-chat/shared'
import { Box } from '@fower/react'
import { Button, Checkbox, toast } from 'bone-ui'
import { useTranslation } from 'react-i18next'

interface RoadmapItem {
  title: string
  done: boolean
}

export default function PageRoadmap() {
  const { t } = useTranslation('common')
  const list: RoadmapItem[] = [
    { title: 'User Account System', done: true },
    { title: 'Team collaboration: support invite members to share one API key', done: true },
    { title: 'Provider: support multiple providers as data source', done: true },
    { title: 'One-click sharing of chat records', done: true },
    { title: 'Prompt library: make prompt usage easily ', done: false },
    { title: 'Desk App: Mac and Windows desktop App', done: false },
    { title: 'Mobile App: Android and iOS App', done: false },
    { title: 'Team member API Key usage management', done: false },
  ]

  return (
    <Box column mb-80 maxW-720 mx-auto px5>
      <Box mt-100 mb10>
        <Box text5XL fontBold>
          Roadmap
        </Box>
        <Box text2XL gray400>
          <Box>I will build OwnChat in public In the future time</Box>
        </Box>
      </Box>

      <Box column toCenterY rowGap-20>
        {list.map((item) => (
          <Box key={item.title} toCenterY spaceX2>
            <Checkbox defaultChecked={item.done} />
            <Box>{item.title}</Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

PageRoadmap.Layout = BasicLayout

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
