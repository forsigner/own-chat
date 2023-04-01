import { Button, toast } from 'bone-ui'
import { Box } from '@fower/react'
import { Popover, PopoverContent, PopoverTrigger } from 'bone-ui'
import { apiService, Refetcher, Token } from '@own-chat/api-sdk'
import { useTranslation } from 'react-i18next'
import { useUser } from '../../stores'
import { isApiError } from '../../common/type-guard'

type Props = {
  token: Token
}

export const DeleteTokenPopover = ({ token }: Props) => {
  const { t } = useTranslation('common')
  const { user } = useUser()

  async function deleteToken(close: any) {
    const toaster = toast.loading('Delete...')
    try {
      await apiService.deleteToken({ id: token.id })
      Refetcher.refetchTokens({ where: { userId: user.id } })
      toaster.update('Deleted', { type: 'success' })
      close()
    } catch (error) {
      if (isApiError(error)) {
        toaster.update(error.message, { type: 'error' })
      }
    }
  }
  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <Button size="sm" variant="light" colorScheme="red500">
          Delete
        </Button>
      </PopoverTrigger>
      <PopoverContent p5 w-200>
        {({ close }) => (
          <Box>
            <Box mb4 leadingNormal>
              Are you sure you want to delete this personal token?
            </Box>
            <Box>
              <Box toCenterY toRight spaceX2>
                <Button colorScheme="white" size="sm" variant="light" onClick={close}>
                  {t('cancel')}
                </Button>
                <Button
                  colorScheme="red500"
                  size="sm"
                  type="submit"
                  onClick={() => deleteToken(close)}
                >
                  {t('delete')}
                </Button>
              </Box>
            </Box>
          </Box>
        )}
      </PopoverContent>
    </Popover>
  )
}
