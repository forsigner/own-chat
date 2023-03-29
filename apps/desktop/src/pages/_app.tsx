import { Fragment } from 'react'
import type { AppProps } from 'next/app'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { ToastContainer } from 'bone-ui'
import { EasyModalProvider } from '@owned-chat/easy-modal'
import { init } from '@owned-chat/shared'
import '../styles/globals.css'

init()

interface Props extends AppProps {
  Component: AppProps['Component'] & { Layout: any }
}

export default function App({ Component, pageProps }: Props) {
  const Layout = Component.Layout ? Component.Layout : Fragment

  return (
    <>
      <EasyModalProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </EasyModalProvider>
      <ToastContainer />
    </>
  )
}
