import { Box } from '@fower/react'
import { Button, LinkOutline, RadioGroup, toast } from 'bone-ui'
import { Popover, PopoverContent, PopoverTrigger } from 'bone-ui'
import { Session, SessionAccessType } from '@own-chat/api-sdk'
import { HOST } from '../../../common'
import { useUpdateSession } from '../hooks/useUpdateSession'
import { useCopyToClipboard } from '../../../hooks'

interface Props {
  session: Session
}

export function ShareButton({ session }: Props) {
  const options = [
    { label: SessionAccessType.Private, value: SessionAccessType.Private, desc: '仅仅自己可访问' },
    { label: SessionAccessType.Member, value: SessionAccessType.Member, desc: '内部成员可以访问' },
    { label: SessionAccessType.Public, value: SessionAccessType.Public, desc: '互联网所有人可见' },
  ]

  const { updateSession } = useUpdateSession()
  const { copy } = useCopyToClipboard()
  const link = `${HOST}/c/${session?.slug || ''}`

  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <Button size={28} colorScheme="gray400" variant="light">
          Share
        </Button>
      </PopoverTrigger>
      <PopoverContent onClick={(e) => e.stopPropagation()}>
        {({ close }) => (
          <Box column p4>
            <Box mb2 fontBold>
              对话页面访问权限
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
                  toast.info('Copied to clipboard')
                }}
              >
                Copy link
              </Button>
            </Box>
          </Box>
        )}
      </PopoverContent>
    </Popover>
  )
}
