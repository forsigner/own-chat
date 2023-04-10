import React, { FC, ReactNode, useEffect, useState } from 'react'
import { Box } from '@fower/react'
import { FowerHTMLProps, FowerColor } from '@fower/core'
import { forwardRef } from '@bone-ui/utils'
import { ArrowCircleUpSolid } from '@bone-ui/icons'

export interface BackTopProps extends FowerHTMLProps<'div'> {
  target?: () => HTMLElement
  visibilityHeight?: number
  duration?: number
  colorScheme?: FowerColor
  onClick?: React.MouseEventHandler<HTMLDivElement>
  onFinish?: () => void
  children?: ReactNode
}

export const BackTop: FC<BackTopProps> = forwardRef((props: BackTopProps, ref) => {
  const {
    target,
    visibilityHeight = 300,
    duration = 400,
    colorScheme = 'brand500',
    onClick,
    onFinish,
    children,
    ...rest
  } = props

  const [visible, setVisible] = useState(false)

  const getEl = target || (() => document.documentElement)
  const getContainer = target || (() => document)

  useEffect(() => {
    const el = getEl()
    const container = getContainer()
    const onScroll = () => {
      if (el?.scrollTop >= visibilityHeight) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
    container?.addEventListener('scroll', onScroll)
    return () => container?.removeEventListener('scroll', onScroll)
  })

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    scrollToTop()
    onClick?.(e)
  }

  const scrollToTop = () => {
    const el = getEl()
    const from = el.scrollTop
    const to = 0
    const difference = Math.abs(from - to)
    const step = Math.ceil((difference / duration) * 50)

    const scroll = (start: number, end: number, step: number) => {
      if (start === end) {
        onFinish?.()
        return
      }
      let d = start + step > end ? end : start + step
      if (start > end) {
        d = start - step < end ? end : start - step
      }
      if (!target) {
        window.scrollTo(d, d)
      } else {
        el.scrollTop = d
      }
      requestAnimationFrame(() => scroll(d, end, step))
    }

    scroll(from, to, step)
  }

  return (
    <Box
      ref={ref}
      className="bone-back-top"
      fixed
      bottom-40
      right-40
      zIndex-5
      onClick={handleClick}
      {...rest}
    >
      {visible ? (
        children ? (
          children
        ) : (
          <Box w-40 h-40 shadow roundedFull cursorPointer toCenter bgTrueGray100--hover>
            <ArrowCircleUpSolid color={colorScheme} />
          </Box>
        )
      ) : null}
    </Box>
  )
})
