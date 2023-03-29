import { ExternalLinkOutline } from '@bone-ui/icons'
import { Box } from '@fower/react'
import { useTranslation } from 'react-i18next'
import { StyledLink } from '../../components/StyledLink'

export const Nav = () => {
  const { t } = useTranslation('common')
  const navData = [
    { text: t('docs'), to: 'https://boter.app/docs/intro', isExternal: true },
    // { text: 'Blog', to: 'blog' },
    { text: t('pricing'), to: 'pricing' },
    { text: t('about'), to: 'about' },
    // { text: 'Contact', to: 'contact' },
    // { text: 'Feedback', to: 'https://github.com/forsigner/boter/issues', isExternal: true },
  ]

  return (
    <Box as="ul" listNone toCenterY spaceX6 textBase display={['none', 'flex']}>
      {navData.map((item) => {
        if (item.isExternal) {
          return (
            <Box as="li" key={item.text}>
              <Box
                as="a"
                href={item.to}
                target="_blank"
                gray600
                toCenterY
                spaceX1
                brand500--hover
                transitionCommon
              >
                <Box>{item.text}</Box>
                <ExternalLinkOutline size={16} />
              </Box>
            </Box>
          )
        }
        return (
          <Box as="li" key={item.text}>
            <StyledLink href={item.to} gray600 brand500--hover transitionCommon>
              {item.text}
            </StyledLink>
          </Box>
        )
      })}
    </Box>
  )
}