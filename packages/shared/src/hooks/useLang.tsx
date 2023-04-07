import { setCookie, getCookie } from 'cookies-next'
import { useState, useEffect } from 'react'
import { LANGUAGE_KEY } from '../common'
import { useTranslation } from 'react-i18next'

export function useLang() {
  const { i18n } = useTranslation('common')
  const [state, setState] = useState<string>(i18n.language)

  useEffect(() => {
    const lang = getCookie(LANGUAGE_KEY) as string
    if (lang == state) {
      setLang(lang)
    }
  }, [state])

  function setLang(lang: string) {
    setState(lang)
    setCookie(LANGUAGE_KEY, lang)
  }

  return { lang: state, setLang }
}
