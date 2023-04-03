import { withIronSessionSsr } from 'iron-session/next'
import { sessionOptions } from '@common/session'
import { BasicLayout, LOGIN_SUCCESS_REDIRECT_URL, Plan } from '@own-chat/shared'
import { Box } from '@fower/react'

const OpenSourceList = () => {
  const list = [
    { name: 'own-chat', desc: 'Own a Chat AI with collaboration' },
    { name: 'fower', desc: 'A utility-first CSS in JS library.' },
    { name: 'fexo', desc: 'A minimalist design theme for hexo.' },
    { name: 'stook', desc: 'A minimalist design state management library for React.' },
    { name: 'tie', desc: 'A Node.js Framework based on TypeScript and Express.' },
    { name: 'bone-ui', desc: 'A high customizable component library for React.' },
  ]

  return (
    <Box>
      {list.map((i) => (
        <Box key={i.name} leadingRelaxed py1>
          <Box
            as="a"
            textBase
            fontBold
            href={`https://github.com/forsigner/${i.name}`}
            target="_blank"
          >
            {i.name}
          </Box>
          <Box gray600 textBase>
            {i.desc}
          </Box>
        </Box>
      ))}
    </Box>
  )
}

const Features = () => {
  const list = [
    {
      name: '团队协作',
      desc: '针对单个 key，可以让团队安全地多人使用',
    },
    {
      name: '支持多端',
      desc: '可以浏览器、桌面App、手机App中使用',
    },
    { name: '不需要VPN，不需要翻墙', desc: '服务器部署在可调用OpenAI SDK的地区，所有客户端免翻墙' },

    { name: '对话一键分享', desc: '一键分享您的ChatGPT聊天记录' },
    {
      name: '优雅地界面设计',
      desc: '更加优雅地界面设计和交互',
    },
  ]

  return (
    <Box>
      <Box text2XL fontBold pt4 mb2>
        OwnChat 的核心功能
      </Box>
      <Box>
        {list.map((i) => (
          <Box key={i.name} leadingRelaxed py1>
            <Box textLG fontBold>
              {i.name}
            </Box>
            <Box gray600 textBase>
              {i.desc}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default function PageAbout() {
  return (
    <Box mt10 maxW-680 mx-auto>
      <Box textCenter text4XL fontBold mb10>
        About OwnChat
      </Box>
      <Box textCenter mt6 text3XL fontSemibold>
        Own a Chat AI with collaboration
      </Box>

      <Box leadingRelaxed spaceY4 mt-30 textLG gray700>
        <Box>
          ChatGPT 逐渐成为一个极大提高生产力的工具，用好这个相关的 AI
          工具，能极大提高我们的工作效率。为了让更多人(可能是非程序员)更好更方便地使用
          ChatGPT，我开发了 OwnChat 这个工具。
        </Box>

        <Features />
      </Box>

      <Box textCenter mt10 text3XL fontSemibold>
        About the maker
      </Box>

      <Box leadingRelaxed spaceY4 mt-30 textLG gray700>
        <Box>{"G'day, I'm Forsigner. 👋"}</Box>
        <Box>
          I become a full-time independent developer since this year(2023), I started OwnChat as a
          passion project. {`There's`} no massive team, no investors looking for growth at any cost,
          just me, running a sustainable business.
        </Box>

        <Box>
          Get in touch with me via
          <Box as="a" href="https://twitter.com/forsigner" target="_blank">
            {` Twitter `}
          </Box>
          {` or `}
          <Box as="a" href="mailto:max@onlineornot.com">
            Email
          </Box>
          。
        </Box>
      </Box>

      <Box textCenter mt10 text3XL fontSemibold>
        Some my open source projects
      </Box>
      <OpenSourceList />
    </Box>
  )
}

PageAbout.Layout = BasicLayout

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
