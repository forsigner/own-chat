import { Box } from '@fower/react'
import { Hooks, Provider } from '@own-chat/api-sdk'
import { Avatar, Spinner, Tooltip } from 'bone-ui'
import { useState } from 'react'

export const ProviderList = () => {
  const [provider, setProvider] = useState<Provider>()
  const { data = [], loading } = Hooks.useMyProviders(
    {},
    {
      onUpdate({ data }) {
        if (!data?.length) return
        if (!provider) {
          setProvider(data[0])
        }
      },
    },
  )
  if (loading)
    return (
      <Box toCenter>
        <Spinner />
      </Box>
    )

  return (
    <Box column toCenterX rowGap-12 mt4>
      {data.map((item) => {
        const selected = item.id === provider?.id

        return (
          <Box
            key={item.id}
            cursorPointer
            onClick={() => {
              setProvider(item)
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
