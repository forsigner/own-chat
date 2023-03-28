import React, { useState } from 'react'
import { Box } from '@fower/react'
import { Button, Input } from 'bone-ui'
import { requestChatStream } from '@common/request'
import { ChatCompletionResponseMessageRoleEnum } from "openai"

export const DemoRequest = () => {
  const [context, setContext] = useState('')
  const [value, setValue] = useState('')

  const onSend = () => {
    if (!value) return

    const sendMessages = [
      {
        content: value,
        date: '',
        role: ChatCompletionResponseMessageRoleEnum.User,
      }
    ]
    requestChatStream(sendMessages, {
      onMessage(text, done) {
        if (done) {
          console.log("onMessage==:", text)
          setContext(context + text)
          // get().onNewMessage(botMessage);
          // ControllerPool.remove(sessionIndex, messageIndex);
        } else {
          console.log('content not end:', text)
          // botMessage.content = content;
          // set(() => ({}));
        }
      },
      onError(error) {
        console.log('ereor', error)
      },
      onController(controller) {
        // collect controller for stop/retry
        // ControllerPool.addController(
        //   sessionIndex,
        //   messageIndex,
        //   controller
        // );
        console.log('controller', controller)
      },
      // filterBot: !get().config.sendBotMessages,
      // modelConfig: get().config.modelConfig,
    });
  }

  const onChange = (e: any) => {
    setValue(e.target.value)
  }

  return (
    <Box flex column toCenter>
      <Input onChange={onChange} value={value} w='300px' mb='10px' />
      <Button onClick={onSend}>send</Button>
      <Box>
        {context}
      </Box>
    </Box>
  )
}