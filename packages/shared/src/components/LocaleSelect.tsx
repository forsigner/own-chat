import { Select } from 'bone-ui'
import { TranslateOutline } from '@bone-ui/icons'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { Box } from '@fower/react'

export const LocaleSelect = () => {
  const router = useRouter()
  const { i18n } = useTranslation('common')
  const [lang, setLang] = useState(i18n.language)

  return (
    <Select
      value={lang}
      width={100}
      useTriggerWidth={false}
      renderTrigger={({ item }) => {
        return (
          <Box cursorPointer toCenterY columnGap-8>
            <TranslateOutline square5 gray600 />
          </Box>
        )
      }}
      onChange={(v: string) => {
        const { pathname, asPath, query } = router
        router.push({ pathname, query }, asPath, { locale: v })
        setLang(v)
      }}
      options={[
        { label: 'English', value: 'en' },
        { label: '简体中文', value: 'zh-CN' },
      ]}
    />
  )
}
