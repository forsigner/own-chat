export enum Role {
  assistant,
  user,
}

type Message = {
  content: string
  date: string
  role: Role
}

export const useMessages = () => {
  const messages: Message[] = [
    // {
    //   content: '有什么可以帮你的吗',
    //   date: '2023/3/27 22:31:29',
    //   role: Role.assistant,
    // },
    {
      content: '珠海多大',
      date: '2023/3/27 22:31:29',
      role: Role.user,
    },
    {
      content:
        '珠海是一个中国的城市，位于广东省的珠江口东岸，是一个美丽的滨海城市。根据2020年的数据，珠海市总面积为1,724.58平方公里，常住人口为980.7万人。珠海是一个中国的城市，位于广东省的珠江口东岸，是一个美丽的滨海城市。根据2020年的数据，珠海市总面积为1,724.58平方公里，常住人口为980.7万人。',
      date: '2023/3/27 22:31:29',
      role: Role.assistant,
    },
    {
      content: '珠海邮编多少？',
      date: '2023/3/27 22:31:29',
      role: Role.user,
    },
    {
      content: '珠海市的邮政编码为519000。',
      date: '2023/3/27 22:31:29',
      role: Role.assistant,
    },
  ]
  return {
    messages: [
      ...messages,
      ...messages,
      ...messages,
      ...messages,
      ...messages,
      ...messages,
      ...messages,
    ],
  }
}
