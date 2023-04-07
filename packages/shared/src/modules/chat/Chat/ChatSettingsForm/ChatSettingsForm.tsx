import { Box } from '@fower/react'
import { ChatSettings } from '@own-chat/api-sdk'
import { Field, Form, useForm } from 'fomir'
import { useUpdateChatSettings } from '../../hooks/useUpdateChatSettings'
import { SettingItem } from './SettingItem'
import 'rc-slider/assets/index.css'

interface Values {
  model: string
  maxToken: string
  showTokenCount: string
  followUpMessageLength: number

  temperature: number
  top_p: number
  frequencyPenalty: number
  presencePenalty: number
}

interface Props {
  chatSettings: ChatSettings
}

export const ChatSettingsForm = ({ chatSettings }: Props) => {
  const { updateChatSettings } = useUpdateChatSettings()
  const form = useForm<Values>({
    layout: 'horizontal',
    watch: {
      '*.value': (values: any) => {
        console.log('values:', values)
        updateChatSettings(values)
      },
    },
    onSubmit(values) {
      console.log('==========:', values)
    },
  })

  return (
    <Box pb8>
      <Form form={form}>
        <Box>
          <SettingItem name="Model" desc="选择一个 Openai 的模型">
            <Field
              component="Select"
              value={chatSettings.model || 'gpt-3.5-turbo'}
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
            desc="1个token约4个字符或者0.75个单词,值越小响应回复文本越短并且速度越快"
          >
            <Field
              component="NumberInput"
              value={chatSettings.maxToken || 4000}
              name="maxToken"
              wrapper={false}
              componentProps={{
                placeholder: '',
              }}
            />
          </SettingItem>

          <SettingItem
            name="Attached history messages"
            desc="发送给模型的历史对话，值越高模型将根据更多的历史消息上下文进行响应，同时也将消耗更多的token"
          >
            <Field
              component="CounterInput"
              name="followUpMessageLength"
              value={chatSettings.followUpMessageLength || 8}
              wrapper={false}
              componentProps={{
                min: 1,
                placeholder: '',
              }}
            />
          </SettingItem>

          {/* <SettingItem name="Show estimated token count" desc="">
            <Field component="Switch" value="2000" name="showTokenCount" wrapper={false} />
          </SettingItem> */}
        </Box>
      </Form>
    </Box>
  )
}
