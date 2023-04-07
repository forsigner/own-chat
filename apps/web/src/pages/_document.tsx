import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'
import { getAtomIds, getCssString } from '@fower/react'
import { setCookie, getCookie } from 'cookies-next'
import { LANGUAGE_KEY } from '@own-chat/shared'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    const cookieTheme = getCookie('fower-mode', ctx) as string
    const cookieLanguage = getCookie(LANGUAGE_KEY, ctx) as string

    if (!cookieTheme) {
      setCookie('fower-mode', 'light', { req: ctx.req, res: ctx.res })
    }

    if (!cookieLanguage) {
      setCookie(LANGUAGE_KEY, 'en', { req: ctx.req, res: ctx.res })
    }

    let theme: string = getCookie('fower-mode', ctx) as string

    ;(initialProps as any).theme = theme
    ;(initialProps as any).lang = getCookie(LANGUAGE_KEY, ctx)

    return initialProps
  }
  render() {
    const theme = (this.props as any).theme

    return (
      // <Html className="dark">
      <Html lang="en" className={theme || 'light'}>
        <Head>
          <style data-fower={getAtomIds()} dangerouslySetInnerHTML={{ __html: getCssString() }} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
