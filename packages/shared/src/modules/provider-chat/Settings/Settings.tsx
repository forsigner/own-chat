import { Box } from '@fower/react'
import { Divider } from 'bone-ui'
import { Field, Form, useForm } from 'fomir'
import { SettingItem } from './SettingItem'
import { Title } from './Title'
import { useSettings } from '../hooks'
import { Lang } from '../../../components/DrawerProfile/Lang'
import { Theme } from '../../../components/DrawerProfile/Theme'

interface Values {
  lang: string
  maxToken: string
  model: string
  showTokenCount: string
  theme: string
  followUpMessageLength: number
  temperature: number
  top_p: number
  frequencyPenalty: number
  presencePenalty: number
}

export const Settings = () => {
  const { settings, setSettings } = useSettings()
  // console.log('settings:', settings)

  const form = useForm<Values>({
    layout: 'horizontal',
    watch: {
      '*.value': (values: any) => {
        // console.log('values:', values)
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
          <SettingItem name="Model">
            <Field
              component="Select"
              value={settings.model || 'gpt-3.5-turbo'}
              name="model"
              wrapper={false}
              options={[
                { label: 'GPT-3.5-TURBO(Default)', value: 'gpt-3.5-turbo' },
                { label: 'GPT-4(Limit Beta)', value: 'gpt-4' },
              ]}
              componentProps={{ width: 240 }}
            />
          </SettingItem>

          <SettingItem
            name="Max token"
            // desc="1个token约4个字符或者0.75个单词,值越小响应回复文本越短并且速度越快"
          >
            <Field
              component="NumberInput"
              value={settings.maxToken || 4000}
              name="maxToken"
              wrapper={false}
              componentProps={{
                placeholder: '',
              }}
            />
          </SettingItem>

          <SettingItem
            name="Attached history messages"
            // desc="发送给模型的历史对话，值越高模型将根据更多的历史消息上下文进行响应，同时也将消耗更多的token"
          >
            <Field
              component="CounterInput"
              name="followUpMessageLength"
              value={settings.followUpMessageLength || 4}
              wrapper={false}
              componentProps={{
                min: 1,
                placeholder: '',
              }}
            />
          </SettingItem>

          {/* <SettingItem
            name="Temperature"
            desc="值越低,输出更保守接近于训练数据,值越高模型会去评估可能适合上下文的响应，生成的文本也会更加多样化"
          >
            <Box w="100%">
              <Box text={16} mb="6px">
                {temperature}
              </Box>
              <Slider
                min={0}
                max={1}
                step={0.1}
                defaultValue={temperature}
                onChange={(e) => setTemperature(e as number)}
                handleStyle={{ opacity: 1 }}
                trackStyle={{ background: '#20c997' }}
              />
            </Box>
          </SettingItem> */}

          {/* <SettingItem
            name="Top P"
            desc="值越低，会返回较为准确的答案，同时会限制返回值的多样性。值越高能帮助我们获得更多见解，同时结果准确率会有所降低"
          >
            <Box w="100%">
              <Box text={16} mb="6px">
                {top_p}
              </Box>
              <Slider
                min={0}
                max={1}
                step={0.1}
                defaultValue={top_p}
                onChange={(e) => setTop_p(e as number)}
                handleStyle={{ opacity: 1 }}
                trackStyle={{ background: '#20c997' }}
              />
            </Box>
          </SettingItem> */}

          {/* <SettingItem
            name="Presence penalty"
            desc="调整模型使其返回更加新颖的词语，值越高将减少同一词语在不同回答中出现的次数"
          >
            <Box w="100%">
              <Box text={16} mb="6px">
                {presencePenalty}
              </Box>
              <Slider
                min={-2}
                max={2}
                step={0.1}
                defaultValue={presencePenalty}
                onChange={(e) => setPresencePenalty(e as number)}
                handleStyle={{ opacity: 1 }}
                trackStyle={{ background: '#20c997' }}
              />
            </Box>
          </SettingItem> */}

          {/* <SettingItem
            name="Frequency penalty"
            desc="正值使模型不太可能重复常用单词和短语，从而使输出更加多样和富有创造性;负值使模型更可能重复常用单词和短语，从而产生与训练数据更相似的输出"
          >
            <Box w="100%">
              <Box text={16} mb="6px">
                {frequencyPenalty}
              </Box>
              <Slider
                min={-2}
                max={2}
                step={0.1}
                defaultValue={frequencyPenalty}
                onChange={(e) => setFrequencyPenalty(e as number)}
                handleStyle={{ opacity: 1 }}
                trackStyle={{ background: '#20c997' }}
              />
            </Box>
          </SettingItem> */}

          {/* <SettingItem name="Show estimated token count" desc="">
            <Field component="Switch" value="2000" name="showTokenCount" wrapper={false} />
          </SettingItem> */}
        </Box>
      </Form>

      <Divider mt6 />

      <Box toBetween>
        <Lang></Lang>
        <Theme></Theme>
      </Box>
    </Box>
  )
}
