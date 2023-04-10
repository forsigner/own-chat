import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { css } from '@fower/core'
import { Box } from '@fower/react'
import {
  CheckCircleSolid,
  ExclamationCircleSolid,
  InformationCircleSolid,
  XCircleSolid,
} from '@bone-ui/icons'
import { Spinner } from '@bone-ui/spinner'
import { useToast } from './toast.store'
import { Toast } from './types'

const Z_INDEX = 5000

function getIcon(type: string) {
  const maps: Record<string, any[]> = {
    info: [InformationCircleSolid, 'blue500'],
    warning: [ExclamationCircleSolid, 'orange500'],
    success: [CheckCircleSolid, 'green500'],
    error: [XCircleSolid, 'red500'],
    loading: [Spinner],
  }

  return maps[type] ? maps[type] : [null, null]
}

function ToastItem({ toast, index }: { toast: Toast; index: number }) {
  const [Icon, color] = getIcon(toast.type as any)
  const iconProps: any = Icon?.isBoneIcon ? { size: 20, color } : {}
  if (toast.type === 'loading') iconProps.square = 16

  return (
    <motion.div
      className={css(
        'bgWhite',
        'px3',
        'py3',
        'mb0',
        'inlineFlex',
        'rounded-8',
        'toCenterY',
        'spaceX2',
        {
          boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05) ',
        },
      )}
      initial={{ opacity: 0, y: index * 0 }}
      animate={{ opacity: 1, y: (index + 1) * 10 }}
      exit={{ opacity: 0, y: 0, transition: { duration: 0.2 } }}
    >
      {Icon && <Icon {...iconProps}></Icon>}
      <Box inlineFlex>{typeof toast.msg === 'function' ? toast.msg() : toast.msg}</Box>
    </motion.div>
  )
}

function Layer() {
  const { toasts } = useToast()
  const find = toasts.find((i) => i.showLayer)
  if (!find) return null
  return (
    <Box
      className="bone-toast-layer"
      bgRed100
      fixed
      top0
      right0
      left0
      bottom0
      toCenter
      bgWhite--T60
      zIndex={Z_INDEX - 1}
    />
  )
}

export const ToastContainer = () => {
  const { toasts } = useToast()
  return (
    <>
      <Layer></Layer>
      <Box fixed top0 zIndex={Z_INDEX} left-50p translateX="-50%" black>
        <Box column toCenterX>
          <AnimatePresence initial={false}>
            {toasts.map((item, index) => (
              <ToastItem key={index} toast={item} index={index}></ToastItem>
            ))}
          </AnimatePresence>
        </Box>
      </Box>
    </>
  )
}
