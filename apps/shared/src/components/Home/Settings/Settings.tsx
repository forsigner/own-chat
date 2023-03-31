import { useState } from 'react'
import { Box } from '@fower/react'
import { Divider } from 'bone-ui'
import { Field, Form, useForm } from 'fomir'
import { useSettings } from '../../../hooks'
import { SettingItem } from './SettingItem'
import { Title } from './Title'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

interface Values {
  apiKey: string
  lang: string
  maxToken: string
  model: string
  showTokenCount: string
  theme: string
  temperature: number
  top_p: number
  frequencyPenalty: number
  presencePenalty: number
}

export const Settings = () => {
  const { settings, setSettings } = useSettings()
  const [temperature, setTemperature] = useState<number>(0.5)
  const [top_p, setTop_p] = useState<number>(0.5)
  const [frequencyPenalty, setFrequencyPenalty] = useState<number>(0.5)
  const [presencePenalty, setPresencePenalty] = useState<number>(0.5)

  const form = useForm<Values>({
    layout: 'horizontal',
    watch: {
      '*.value': (values: any) => {
        console.log('values:', values)
        values.temperature = temperature
        values.top_p = top_p
        values.frequencyPenalty = frequencyPenalty
        values.presencePenalty = presencePenalty
        setSettings(values)
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

          <SettingItem name="Temperature" desc="随机数">
            <Box w="100%">
              <Box text={16} mb="6px">
                {temperature}
              </Box>
              <Slider
                min={0}
                max={1}
                step={0.1}
                defaultValue={0.5}
                onChange={(e) => setTemperature(e as number)}
                handleStyle={{ opacity: 1 }}
                trackStyle={{ background: '#20c997' }}
              />
            </Box>
          </SettingItem>

          <SettingItem name="Top P" desc="Frequency penalty">
            <Box w="100%">
              <Box text={16} mb="6px">
                {top_p}
              </Box>
              <Slider
                min={0}
                max={1}
                step={0.1}
                defaultValue={0.5}
                onChange={(e) => setTop_p(e as number)}
                handleStyle={{ opacity: 1 }}
                trackStyle={{ background: '#20c997' }}
              />
            </Box>
          </SettingItem>

          <SettingItem name="Frequency penalty" desc="Frequency penalty">
            <Box w="100%">
              <Box text={16} mb="6px">
                {frequencyPenalty}
              </Box>
              <Slider
                min={0}
                max={2}
                step={0.1}
                defaultValue={1}
                onChange={(e) => setFrequencyPenalty(e as number)}
                handleStyle={{ opacity: 1 }}
                trackStyle={{ background: '#20c997' }}
              />
            </Box>
          </SettingItem>

          <SettingItem name="Presence penalty" desc="Presence penalty">
            <Box w="100%">
              <Box text={16} mb="6px">
                {presencePenalty}
              </Box>
              <Slider
                min={0}
                max={2}
                step={0.1}
                defaultValue={1}
                onChange={(e) => setPresencePenalty(e as number)}
                handleStyle={{ opacity: 1 }}
                trackStyle={{ background: '#20c997' }}
              />
            </Box>
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
