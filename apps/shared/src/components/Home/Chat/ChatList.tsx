import { format } from 'date-fns'
import { Box } from '@fower/react'
import { UserOutline } from 'bone-ui'
import IconChatgpt from './icon-chatgpt.svg'
import { Role, useMessages } from '../../../hooks'

export const ChatList = () => {
  const { messages } = useMessages()
  return (
    <Box column>
      {messages.map((item, index) => (
        <Box key={index} toLeft py3>
          <Box mr-10>
            {item.role === Role.assistant && <IconChatgpt style={{ width: 32 }} />}
            {item.role === Role.user && (
              <Box square-32 toCenter bgSlate100 rounded>
                <UserOutline gray400 square-24 />
              </Box>
            )}
          </Box>

          <Box>
            <Box mb2 toLeft columnGap-8>
              <Box>
                {item.role === Role.assistant && <Box fontMedium>AI</Box>}
                {item.role === Role.user && <Box fontMedium>User</Box>}
              </Box>
              <Box textXS gray400 selfBottom>
                {format(new Date(item.date), 'yyyy-MM-dd HH:mm:ss')}
              </Box>
            </Box>

            <Box leadingRelaxed>{item.content}</Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}
