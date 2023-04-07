import { Select } from 'bone-ui'
import { TranslateOutline } from '@bone-ui/icons'
import { useTranslation } from 'react-i18next'
import { Box } from '@fower/react'
import { useLang } from '../hooks/useLang'

export const LocaleSelect = () => {
  const { i18n } = useTranslation('common')
  const { lang, setLang } = useLang()

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
        console.log('v--:', v)
        setLang(v)
        i18n.changeLanguage(v)
      }}
      options={[
        { label: 'English', value: 'en' },
        { label: '简体中文', value: 'zh-CN' },
      ]}
    />
  )
}
