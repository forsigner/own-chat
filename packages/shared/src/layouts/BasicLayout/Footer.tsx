import { Box } from '@fower/react'
import { StyledLink } from '../../components/StyledLink'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
  const { t } = useTranslation('common')

  const navData = [
    { text: t('docs'), to: 'docs' },
    { text: t('blog'), to: 'blog' },
    { text: t('about'), to: 'about' },
    { text: t('pricing'), to: 'pricing' },
    { text: t('contact'), to: 'contact' },
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
