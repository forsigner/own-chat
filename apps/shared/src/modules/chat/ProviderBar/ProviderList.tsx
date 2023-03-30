import { Box } from '@fower/react'
import { Refetcher } from '@own-chat/api-sdk'
import { Avatar, Spinner, Tooltip } from 'bone-ui'
import { useUser } from '../../../stores'
import { useProviders } from '../hooks/useProviders'
import { updateActiveProviderId, useSetting } from '../hooks/useSetting'

export const ProviderList = () => {
  const { user } = useUser()
  const { setting } = useSetting()
  const { providers, activeProvider, loading } = useProviders()

  if (loading) {
    return (
      <Box toCenter>
        <Spinner />
      </Box>
    )
  }

  return (
    <Box column toCenterX rowGap-12 mt4>
      {providers.map((item) => {
        const selected = item.id === activeProvider?.id

        return (
          <Box
            key={item.id}
            cursorPointer
            onClick={async () => {
              await updateActiveProviderId(setting.id, item.id)
              await Refetcher.refetchSessions({
                where: {
                  userId: user.id,
                  providerId: item.id,
                },
              })
            }}
            w-100p
            toBetween
          >
            <Box toCenterY visible={selected} invisible={!selected}>
              <Box h-32 w-3 bgBrand500 />
            </Box>

            <Tooltip placement="right-start" content={item.name}>
              <Avatar
                size={selected ? 42 : 36}
                name={item.name}
                rounded2XL
                shadow2XL--hover
                // scale-110--hover={!selected}
                transitionCommon
              />
            </Tooltip>
            <Box></Box>
          </Box>
        )
      })}
    </Box>
  )
}
