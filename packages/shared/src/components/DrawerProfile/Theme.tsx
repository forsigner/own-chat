import { Box } from '@fower/react'
import { MoonOutline } from '@bone-ui/icons'
import { Form, useForm } from 'fomir'
import { Title } from './Title'
import { useMode } from '../../hooks'

export const Theme = () => {
  const { mode, setMode } = useMode()
  const form = useForm({
    children: [
      {
        name: 'theme',
        component: 'Select',
        options: [
          { label: 'Light', value: 'light' },
          { label: 'Dark', value: 'dark' },
          // { label: 'System theme', value: 'system' },
        ],
        value: mode,
        onValueChange({ value }) {
          if (['light', 'dark'].includes(value)) {
            setMode(value)
          }
        },
        componentProps: {
          width: 200,
          w: 200,
        },
      },
    ],
  })
  return (
    <Box>
      <Title text="Theme" icon={MoonOutline} />

      <Box>
        <Form form={form} />
      </Box>
    </Box>
  )
}
