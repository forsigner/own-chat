import { withIronSessionSsr } from 'iron-session/next'
import { sessionOptions } from '@common/session'
import { BasicLayout, LOGIN_SUCCESS_REDIRECT_URL, Plan } from '@own-chat/shared'
import { Box } from '@fower/react'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation('common')
  const list = [
    {
      name: t('feature-1-title'),
      desc: t('feature-1-desc'),
    },
    {
      name: t('feature-2-title'),
      desc: t('feature-2-desc'),
    },
    {
      name: t('feature-3-title'),
      desc: t('feature-3-desc'),
    },
    {
      name: t('feature-4-title'),
      desc: t('feature-4-desc'),
    },
    {
      name: t('feature-5-title'),
      desc: t('feature-5-desc'),
    },
  ]

  return (
    <Box>
      <Box text2XL fontBold pt4 mb2>
        {t('core-feature')}
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
  const { t, i18n } = useTranslation('common')
  console.log('i18n:', i18n.language)

  return (
    <Box mt10 maxW-680 mx-auto>
      <Box textCenter text4XL fontBold mb10>
        {t('about-own-chat')}
      </Box>
      <Box textCenter mt6 text3XL fontSemibold>
        Own a Chat AI with collaboration
      </Box>

      <Box leadingRelaxed spaceY4 mt-30 textLG gray700>
        <Box>{t('own-chat-intro')}</Box>
        <Features />
      </Box>

      <Box textCenter mt10 text3XL fontSemibold>
        {t('about-maker')}
      </Box>

      <Box leadingRelaxed spaceY4 mt-30 textLG gray700>
        <Box>{t('about-maker-1')}</Box>
        <Box>{t('about-maker-2')}</Box>

        {i18n.language === 'en' && (
          <Box>
            Get in touch with me via
            <Box as="a" href="https://twitter.com/forsigner" target="_blank">
              {` Twitter `}
            </Box>
            {` or `}
            <Box as="a" href="mailto:forsigner@gmail.com">
              Email
            </Box>
            。
          </Box>
        )}

        {i18n.language === 'zh-CN' && (
          <Box>
            联系我：
            <Box as="a" href="https://twitter.com/forsigner" target="_blank">
              {` Twitter `}
            </Box>
            {` 或者 `}
            <Box as="a" href="mailto:forsigner@gmail.com">
              Email
            </Box>
            , 或者加我的微信 <Box as="span">ziyi-314</Box>。
          </Box>
        )}
      </Box>

      <Box textCenter mt10 text3XL fontSemibold>
        {t('open-source-project-title')}
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
