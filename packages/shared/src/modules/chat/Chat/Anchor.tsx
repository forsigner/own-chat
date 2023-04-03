import { useEffect, useRef } from 'react'
import { Box } from '@fower/react'

export const Anchor = () => {
  const anchorRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const dom = anchorRef.current
    if (dom) {
      setTimeout(() => {
        dom.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        })
      }, 100)
    }
  }, [])

  return <Box as="div" ref={anchorRef} h4 bgTransparent />
}
