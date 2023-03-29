import { PlusOutline, XCircleSolid } from '@bone-ui/icons'
import { Hooks, Notifier } from '@owned-chat/api-sdk'
import { Popover, PopoverContent, PopoverTrigger, Menu, MenuItem } from 'bone-ui'
import { Box } from '@fower/react'
import { notifierIconMap } from '../common'

interface Props {
  value: Notifier[]
  onChange: (notifiers: Notifier[]) => void
}

export const NotifierSelect = ({ value = [], onChange }: Props) => {
  const { loading, data = [] } = Hooks.useOwnedNotifiers()
  const size = 48

  const set = new Set(value.map((i) => i.id))

  function remove(item: Notifier) {
    const newValue = value.filter((i) => i.id !== item.id)
    onChange(newValue)
  }

  function select(item: Notifier) {
    if (set.has(item.id)) {
      remove(item)
    } else {
      onChange([...value, item])
    }
  }

  if (loading) return null

  return (
    <Box bgSlate100 toCenterY inlineFlex roundedFull py2 px4 columnGap-6 flexWrap rowGap-6>
      {!value.length && (
        <Box gray500 textXS>
          Select notification
        </Box>
      )}
      {value.map((item) => {
        const Icon = notifierIconMap[item.type]
        return (
          <Box
            key={item.id}
            bgWhite
            roundedFull
            toCenterY
            px3
            h={0.8 * size}
            columnGap-4
            relative
            cursorPointer
          >
            <Icon size={20} />
            <Box flexShrink-0 textXS>
              {item.name}
            </Box>
            <XCircleSolid
              absolute
              right--8
              top--2
              cursorPointer
              gray400--T20
              gray500--hover
              transitionCommon
              size={20}
              onClick={() => {
                remove(item)
              }}
            />
          </Box>
        )
      })}
      <Popover>
        <PopoverTrigger>
          <Box bgSlate200 square-32 toCenter roundedFull bgWhite shadow cursorPointer>
            <PlusOutline gray500 size={20} />
          </Box>
        </PopoverTrigger>
        <PopoverContent>
          {() => (
            <Menu>
              {data.map((item) => {
                const Icon = notifierIconMap[item.type]
                return (
                  <MenuItem key={item.id} onClick={() => select(item)} selected={set.has(item.id)}>
                    <Icon></Icon>
                    <Box>{item.name}</Box>
                  </MenuItem>
                )
              })}
            </Menu>
          )}
        </PopoverContent>
      </Popover>
    </Box>
  )
}
