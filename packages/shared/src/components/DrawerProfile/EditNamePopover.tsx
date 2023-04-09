import { Button } from 'bone-ui'
import { Box } from '@fower/react'
import { apiService } from '@own-chat/api-sdk'
import { toast } from 'bone-ui'
import { Popover, PopoverContent, PopoverTrigger, usePopoverContext } from '@bone-ui/popover'
import { PencilSolid } from '@bone-ui/icons'
import { Form, useForm } from 'fomir'
import { useUser } from '../../stores'
import { isApiError } from '../../common/type-guard'
import { useTranslation } from 'react-i18next'

export const EditNamePopover = () => {
  const { t } = useTranslation('common')
  return (
    <Popover>
      <PopoverTrigger>
        <Box gray400 toCenterY spaceX1 cursorPointer>
          <PencilSolid square4 />
          <Box>{t('edit-nickname-button-text')}</Box>
        </Box>
      </PopoverTrigger>
      <PopoverContent p5 w-320>
        <Box textXL fontBold mb4>
          What’s your name?
        </Box>
        <Box>
          <EditNameForm />
        </Box>
      </PopoverContent>
    </Popover>
  )
}

interface Values {
  nickname: string
}

function EditNameForm() {
  const { user, setUser } = useUser()
  const { close } = usePopoverContext()
  const form = useForm<Values>({
    async onSubmit({ nickname }) {
      const toaster = toast.loading('Updating...', { showLayer: true })
      try {
        const data = await apiService.updateUser({ where: { id: user.id }, data: { nickname } })
        console.log('data:', data)

        setUser(data)

        toaster.update('Updated', { type: 'success' })
        close()
      } catch (error) {
        if (isApiError(error)) {
          toaster.update(error.message, { type: 'error' })
        }
      }
    },
    children: [
      {
        component: 'Input',
        name: 'nickname',
        value: user.nickname,
        validators: {
          required: 'Please input nickname',
        },
      },
    ],
  })

  return (
    <Form
      form={form}
      suffix={
        <Box toCenterY toRight spaceX2>
          <Button size="sm" variant="light" onClick={close}>
            Cancel
          </Button>
          <Button size="sm" type="submit">
            Save
          </Button>
        </Box>
      }
    />
  )
}
