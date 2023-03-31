import { InboxOutline } from '@bone-ui/icons'
import { Box } from '@fower/react'

interface Props {
  text?: string
}
export function EmptyDataTip({ text = 'No data' }: Props) {
  return (
    <Box toCenter columnGap-4 gray400>
      <InboxOutline stroke-1 square8 />
      <Box text2XL fontLight>
        {text}
      </Box>
    </Box>
  )
}
