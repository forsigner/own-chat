import { Button } from 'bone-ui'
import { Box } from '@fower/react'
import { apiService } from '@own-chat/api-sdk'
import { Popover, PopoverContent, PopoverTrigger, toast, usePopoverContext } from 'bone-ui'
import { PencilSolid } from '@bone-ui/icons'
import { Form, useForm } from 'fomir'
import { useUser } from '../../stores'

export const EditEmailPopover = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Box gray400 toCenterY spaceX1 cursorPointer>
          <PencilSolid square4 />
          <Box>Edit email</Box>
        </Box>
      </PopoverTrigger>
      <PopoverContent p5 w-320>
        <Box textXL fontBold mb4>
          Update your email address
        </Box>
        <Box>
          <EditEmailForm />
        </Box>
      </PopoverContent>
    </Popover>
  )
}

interface Values {
  email: string
  password: string
}

function EditEmailForm() {
  const { user, setUser } = useUser()
  const { close } = usePopoverContext()
  const form = useForm<Values>({
    async onSubmit(values) {
      const toaster = toast.loading('Updating...', {})
      await apiService.updateEmail(values)
      setUser({ ...user, email: values.email })

      toaster.update('Updated', { type: 'success' })
      close()
    },
    children: [
      {
        label: 'New email address',
        component: 'Input',
        name: 'email',
        value: '',
        validators: {
          required: 'Please input email',
        },
      },
      {
        label: 'Current password',
        component: 'Input',
        name: 'password',
        value: '',
        validators: {
          required: 'Please input current password',
        },
      },
    ],
  })

  return (
    <Form
      form={form}
      suffix={
        <Box toCenterY toRight spaceX2>
          <Button variant="light" onClick={close}>
            取消
          </Button>
          <Button type="submit">保存</Button>
        </Box>
      }
    />
  )
}
