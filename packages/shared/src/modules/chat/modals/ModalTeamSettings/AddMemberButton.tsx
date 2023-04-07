import { Box } from '@fower/react'
import { Button, PlusOutline, Popover, PopoverBody, PopoverContent, PopoverTrigger } from 'bone-ui'
import { useIsOwner } from '../../hooks/useIsOwner'
import AddMemberContainer from './AddMemberContainer'
import { useTranslation } from 'react-i18next'

export function AddMemberButton() {
  const { t } = useTranslation('common')
  const { isOwner } = useIsOwner()
  if (!isOwner) return null
  return (
    <Popover>
      <PopoverTrigger>
        <Box inlineFlex cursorPointer toCenterY columnGap-4 gray400 gray500--hover>
          <Button
            size="sm"
            borderDashed
            variant="light"
            colorScheme="gray500"
            icon={<PlusOutline />}
            roundedFull
          />
          <Box textSM>{t('add-member')}</Box>
        </Box>
      </PopoverTrigger>
      <PopoverContent w-300>
        <PopoverBody>
          <Box text2XL fontMedium mb2>
            {t('add-member')}
          </Box>
          <AddMemberContainer />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
