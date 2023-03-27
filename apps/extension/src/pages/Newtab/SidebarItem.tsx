import React, { FC, PropsWithChildren } from 'react'
import { Box } from '@fower/react'
import { usePage } from './hooks/usePage'
import { PageIds } from './constants'

interface ItemProps {
  to: PageIds
  icon?: any
}

export const SidebarItem: FC<PropsWithChildren<ItemProps>> = ({ icon: Icon, to, children }) => {
  const { id, setPage } = usePage()
  const active = id === to
  return (
    <Box
      toCenterY
      spaceX2
      cursorPointer
      p2
      textBase
      rounded-6
      black
      fontNormal
      transitionCommon
      black--hover
      bgGray100--hover
      bgGray200--hover
      gray100--dark--hover
      bgSlate700--dark--hover
      bgGray200={active}
      bgSlate700--dark={active}
      brand500={active}
      onClick={() => {
        setPage(to)
      }}
    >
      {Icon && <Icon gray800 brand500={active} size={22} />}
      <Box>{children}</Box>
    </Box>
  )
}
