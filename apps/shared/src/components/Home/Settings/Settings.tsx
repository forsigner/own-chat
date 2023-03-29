import { Box } from '@fower/react'
import { Divider } from 'bone-ui'
import { Field, Form, useForm } from 'fomir'
import { SettingItem } from './SettingItem'
import { Title } from './Title'

export const Settings = () => {
  const form = useForm({
    layout: 'horizontal',
    watch: {
      '*.value': (values) => {
        console.log('values:', values)
      },
    },
    onSubmit(values) {
      console.log('==========:', values)
    },
  })
  return (
    <Box pb8>
      <Form form={form}>
        <Title>ChatGPT</Title>
        <Box>
          <SettingItem name="API Key" desc="You openai API key">
            <Field
              component="Input"
              value=""
              name="apiKey"
              wrapper={false}
              componentProps={{
                placeholder: 'sk-......',
              }}
            />
          </SettingItem>

          <SettingItem name="Model" desc="选择一个 Openai 的模型">
            <Field
              component="Select"
              value="3.5"
              name="model"
              wrapper={false}
              options={[
                { label: '3.5', value: '3.5' },
                { label: '4.0', value: '4.0' },
              ]}
              componentProps={{ width: 200 }}
            />
          </SettingItem>

          <SettingItem name="Max token" desc="单次交互所用的最大 Token 数">
            <Field
              component="Input"
              value="2000"
              name="maxToken"
              wrapper={false}
              componentProps={{
                placeholder: '',
              }}
            />
          </SettingItem>

          <SettingItem name="Show estimated token count" desc="">
            <Field component="Switch" value="2000" name="showTokenCount" wrapper={false} />
          </SettingItem>
        </Box>

        <Divider my4 />

        <Title>外观</Title>
        <Box>
          <SettingItem name="Dark Mode">
            <Field
              component="Select"
              value="light"
              name="theme"
              wrapper={false}
              options={[
                { label: 'Light', value: 'light' },
                { label: 'Dark', value: 'dark' },
              ]}
              componentProps={{ width: 120 }}
            />
          </SettingItem>

          <SettingItem name="主题色">红色</SettingItem>
        </Box>

        <Divider my4 />

        <Title>其他</Title>
        <Box>
          <SettingItem name="Language">
            <Field
              component="Select"
              value="en"
              name="lang"
              wrapper={false}
              options={[
                { label: 'English', value: 'en' },
                { label: '简体中文', value: 'zh_CN' },
              ]}
              componentProps={{ width: 120 }}
            />
          </SettingItem>
        </Box>
      </Form>
    </Box>
  )
}
