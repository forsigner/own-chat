import { Box } from '@fower/react'
import { StyledLink } from '../../components/StyledLink'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
  const { t } = useTranslation('common')

  const navData = [
    // { text: t('docs'), to: 'https://boter.app/docs/intro', isExternal: true },
    // { text: 'Blog', to: 'blog' },
    { text: t('download'), to: 'download' },
    // { text: t('pricing'), to: 'pricing' },
    { text: t('about'), to: 'about' },
    {
      text: t('feedback'),
      to: 'https://github.com/forsigner/own-chat/issues/new',
      isExternal: true,
    },
    {
      text: t('github'),
      to: 'https://github.com/forsigner/own-chat',
      isExternal: true,
    },
    // { text: 'Contact', to: 'contact' },
    // { text: 'Feedback', to: 'https://github.com/forsigner/boter/issues', isExternal: true },
  ]

  return (
    <Box toCenter py6>
      <Box mr5 gray500>
        © 2023 OwnChat
      </Box>
      <Box toCenterY spaceX2 textSM display={['none', 'flex']}>
        {navData.map((item) => (
          <StyledLink key={item.text} href={item.to} gray500 gray900--hover transitionCommon>
            {item.text}
          </StyledLink>
        ))}
      </Box>
    </Box>
  )
}
