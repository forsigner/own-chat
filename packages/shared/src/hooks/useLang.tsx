import { setCookie, getCookie } from 'cookies-next'
import { useState, useEffect, useCallback } from 'react'
import { LANGUAGE_KEY } from '../common'
import { useTranslation } from 'react-i18next'

export function useLang() {
  const { i18n } = useTranslation('common')
  const [state, setState] = useState<string>(i18n.language)

  const setLang = useCallback(
    (lang: string) => {
      setState(lang)
      i18n.changeLanguage(lang)
      setCookie(LANGUAGE_KEY, lang)
    },
    [setState, i18n],
  )

  useEffect(() => {
    const lang = getCookie(LANGUAGE_KEY) as string
    if (lang == state) {
      setLang(lang)
    }
  }, [state, setLang])

  return { lang: state, setLang }
}
