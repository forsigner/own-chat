import '../styles/globals.css'
import { ToastContainer } from 'bone-ui'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import { Fragment, useEffect } from 'react'
import { EasyModalProvider } from '@owned-chat/easy-modal'
import { init } from '@owned-chat/shared'
import { mutate } from 'stook'

interface Props extends AppProps {
  Component: AppProps['Component'] & { Layout: any }
}

init()

function MyApp({ Component, pageProps }: Props) {
  const Layout = Component.Layout ? Component.Layout : Fragment

  useEffect(() => {
    mutate('ROUTER_NAVIGATE', Router)
  }, [])

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

export default MyApp
