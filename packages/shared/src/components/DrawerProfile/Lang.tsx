import { Box } from '@fower/react'
import { TranslateOutline } from '@bone-ui/icons'
import { Form, useForm } from 'fomir'
import { Title } from './Title'
import { useLang } from '../../hooks/useLang'
import { useTranslation } from 'react-i18next'

export const Lang = () => {
  const { lang, setLang } = useLang()
  const { t } = useTranslation('common')
  const form = useForm({
    children: [
      {
        name: 'theme',
        component: 'Select',
        options: [
          { label: 'English', value: 'en' },
          { label: '简体中文', value: 'zh-CN' },
        ],
        value: lang,
        onValueChange({ value }) {
          console.log('value:', value)

          setLang(value)
        },
        componentProps: {
          width: 200,
          w: 200,
        },
      },
    ],
  })
  return (
    <Box>
      <Title text={t('language')} icon={TranslateOutline} />
      <Box>
        <Form form={form} />
      </Box>
    </Box>
  )
}
