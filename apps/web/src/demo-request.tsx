import React, { useState } from 'react'
import { Box } from '@fower/react'
import { Button, Input } from 'bone-ui'
import { fetchChatCompletions, fetchChatStream, fetchCompletions } from '@common/request'
import { ChatCompletionResponseMessageRoleEnum } from "openai"

export const DemoRequest = () => {
  const [context, setContext] = useState('')

  const [value, setValue] = useState('Say this is a test')

  const onSend = async () => {
    if (!value) return
    const messages = [
      { "role": "system", "content": "You are a helpful, pattern-following assistant that translates corporate jargon into plain English." },
      { "role": "system", "name": "example_user", "content": "New synergies will help drive top-line growth." },
      { "role": "system", "name": "example_assistant", "content": "Things working well together will increase revenue." },
      { "role": "system", "name": "example_user", "content": "Let's circle back when we have more bandwidth to touch base on opportunities for increased leverage." },
      { "role": "system", "name": "example_assistant", "content": "Let's talk later when we're less busy about how to do better." },
      { "role": "user", "content": "This late pivot means we don't have time to boil the ocean for the client deliverable." },
    ]
    const messages2 = [
      {
        "role": "system",
        "content": "继续刚才关于地方的话题"
      },
      {
        "role": "assistant",
        "content": "好的，请问您需要什么样的对话呢？"
      },
      {
        "role": "assistant",
        "content": "您好，我是一名AI助手，很高兴为您服务。关于广东的介绍，我可以为您提供一些基本信息。广东省位于中国南方，东临南海，南接海南岛，是中国最富裕、最开放的省份之一。广东省的地理位置独特，辐射亚洲乃至全球经济圈，面积17.8万平方公里，人口近1亿。该省是中国珠江三角洲经济区的核心区域，以其强劲的经济实力、开放的商贸环境、优越的地理位置和多元文化素质成为了中外商贸交流的重要门户之一。同时，广东也是美食之都、文化名城和旅游胜地。其中著名景点有珠海澳门、广州南沙、深圳华侨城等。希望能为您提供帮助。"
      },
    ] as any

    const params2 = {
      // model: "gpt-3.5-turbo",
      model: 'gpt-3.5-turbo-0301',
      messages: messages2,
      presence_penalty: 0,
      stream: false,
      // stream: true,
      temperature: 1,
      top_p: 1
    }
    // const res = await fetchCompletions(params2)
    // const res = await fetchChatCompletions(params2)
  }

  const onSend2 = async () => {
    if (!value) return
    const sendMessages = [
      {
        content: value,
        date: '',
        role: ChatCompletionResponseMessageRoleEnum.User,
      }
    ]

    const messages2 = [
      {
        "role": "system",
        "content": "继续刚才关于地方的话题"
      },
      {
        "role": "assistant",
        "content": "好的，请问您需要什么样的对话呢？"
      },
      {
        "role": "assistant",
        "content": "您好，我是一名AI助手，很高兴为您服务。关于广东的介绍，我可以为您提供一些基本信息。广东省位于中国南方，东临南海，南接海南岛，是中国最富裕、最开放的省份之一。广东省的地理位置独特，辐射亚洲乃至全球经济圈，面积17.8万平方公里，人口近1亿。该省是中国珠江三角洲经济区的核心区域，以其强劲的经济实力、开放的商贸环境、优越的地理位置和多元文化素质成为了中外商贸交流的重要门户之一。同时，广东也是美食之都、文化名城和旅游胜地。其中著名景点有珠海澳门、广州南沙、深圳华侨城等。希望能为您提供帮助。"
      },
    ] as any

    const messages4 = [
      {
        "role": "system",
        "content": "写一个js循环"
      }
    ] as any

    const params3 = {
      model: "gpt-3.5-turbo",
      messages: messages4,
      presence_penalty: 0,
      stream: true,
      temperature: 1,
      top_p: 1,
      max_tokens: 2000
    }

    const res = await fetchChatStream(params3, (text: any, done: any) => {
      if (done) {
        console.log("onMessage==:", text)
        setContext(context + text)
      } else {
        console.log('content not end:', text)
      }
    }, (error) => {
      console.log('ereor', error)
    }, (controller) => {
      console.log('controller', controller)
    })

    console.log('res:', res)
  }

  const onChange = (e: any) => {
    setValue(e.target.value)
  }

  return (
    <Box flex column toCenter>
      <Input onChange={onChange} value={value} w='300px' mb='10px' />
      <Button onClick={onSend}>send</Button>
      <Button mt='10' onClick={onSend2}>send2</Button>
      <Box>
        {context}
      </Box>
    </Box>
  )
}