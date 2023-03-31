import { FC, PropsWithChildren } from 'react'
import { Box } from '@fower/react'
import { Logo } from '../../components/Logo'
import { ModeToggle } from '../../components/ModeToggle'
import { Nav } from './Nav'
import { LocaleSelect } from '../../components/LocaleSelect'
import { Footer } from './Footer'

export const BasicLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box black bgWhite bgGray900--dark>
      <Box container mx-auto column>
        <Box className="nav" toBetween py3>
          <Logo />
          <Nav />
          <Box toCenterY spaceX2>
            <LocaleSelect></LocaleSelect>
            <ModeToggle></ModeToggle>
          </Box>
        </Box>
        <Box flex-1 minH-90vh w-100p toCenter>
          {children}
        </Box>
        <Footer></Footer>
      </Box>
    </Box>
  )
}
