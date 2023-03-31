import { Box as FowerBox } from '@fower/react'
import { css } from '@fower/core'
import { NodeProps } from 'fomir'
import type { BoxNode } from '../bone-ui-node'

export const Box = ({ node }: NodeProps<BoxNode>) => {
  if (!node.visible) return null

  return (
    <FowerBox className={css(node.css || '')}>
      {node.text ? node.text : node.renderChildren?.(node)}
    </FowerBox>
  )
}
