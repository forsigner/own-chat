import { Box } from '@fower/react'
import { Button, LinkOutline, RadioGroup, toast } from 'bone-ui'
import { Popover, PopoverContent, PopoverTrigger } from 'bone-ui'
import { Session, SessionAccessType } from '@own-chat/api-sdk'
import { HOST } from '../../../common'
import { useUpdateSession } from '../hooks/useUpdateSession'
import { useCopyToClipboard } from '../../../hooks'
import { useTranslation } from 'react-i18next'

interface Props {
  session: Session
}

export function ShareButton({ session }: Props) {
  const { t } = useTranslation('common')
  const options = [
    {
      label: SessionAccessType.Private,
      value: SessionAccessType.Private,
      desc: t('access-private-tips'),
    },
    {
      label: SessionAccessType.Member,
      value: SessionAccessType.Member,
      desc: t('access-member-tips'),
    },
    {
      label: SessionAccessType.Public,
      value: SessionAccessType.Public,
      desc: t('access-public-tips'),
    },
  ]

  const { updateSession } = useUpdateSession()
  const { copy } = useCopyToClipboard()
  const link = `${HOST}/c/${session?.slug || ''}`

  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <Button size={28} colorScheme="gray400" variant="light">
          {t('share')}
        </Button>
      </PopoverTrigger>
      <PopoverContent onClick={(e) => e.stopPropagation()}>
        {({ close }) => (
          <Box column p4>
            <Box mb2 fontBold>
              {t('chat-page-visit-permission')}
            </Box>
            <RadioGroup
              options={options}
              column
              spaceY-8
              flex
              value={session.accessType}
              onChange={async (v: SessionAccessType) => {
                await updateSession({
                  where: { id: session.id },
                  data: { accessType: v },
                })
              }}
              renderItem={({ item, defaultRadio, checked }) => (
                <Box
                  p2
                  toCenterY
                  border
                  transitionAll
                  borderColor={checked ? 'brand500' : 'gray200'}
                  rounded-8
                  w-400
                >
                  {defaultRadio}
                  <Box ml-16>
                    <Box>{item.label}</Box>
                    <Box gray400>{item.desc}</Box>
                  </Box>
                </Box>
              )}
            />

            <Box mt4 toBetween toCenterY>
              <Box gray500 textXS flexShrink-0>
                {link}
              </Box>
              <Button
                variant="ghost"
                size="sm"
                px2
                leftIcon={<LinkOutline size={16} />}
                onClick={() => {
                  close()
                  copy(link)
                  toast.info(t('copied-tips'))
                }}
              >
                {t('copy-link')}
              </Button>
            </Box>
          </Box>
        )}
      </PopoverContent>
    </Popover>
  )
}
