import { ToastContainer } from 'bone-ui'
import type { AppProps } from 'next/app'
import { Fragment, useEffect } from 'react'
import { EasyModalProvider } from '@own-chat/easy-modal'
import { LANGUAGE_KEY, init } from '@own-chat/shared'
import { useTranslation, withTranslation } from 'react-i18next'
import { getCookie } from 'cookies-next'
import '../styles/globals.css'

interface Props extends AppProps {
  Component: AppProps['Component'] & { Layout: any }
}

init()

function MyApp({ Component, pageProps }: Props) {
  const Layout = Component.Layout ? Component.Layout : Fragment

  const { i18n } = useTranslation('common')

  useEffect(() => {
    const lang = getCookie(LANGUAGE_KEY) as string

    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang)
    }
  }, [i18n])

  return (
    <>
      <EasyModalProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </EasyModalProvider>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default withTranslation()(MyApp)
