// import { ChatGPTAPI } from './src/chatgpt-api'
import { ChatGPTAPI } from 'chatgpt'

async function run() {
  const api = new ChatGPTAPI({ apiKey: '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' })

  // send a message and wait for the response
  let res = await api.sendMessage('珠海的邮编是什么？')
  console.log(res.text)

  // send a follow-up
  res = await api.sendMessage('河源呢？', {
    parentMessageId: res.id,
  })
  console.log(res.text)

  // send another follow-up
  res = await api.sendMessage('中山呢？', {
    parentMessageId: res.id,
  })
  console.log(res.text)
}

run()
