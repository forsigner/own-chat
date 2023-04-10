import { FC, forwardRef, ReactNode } from 'react'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/core'
import { useFormContext, Node } from 'fomir'
import { InformationCircleSolid } from '@bone-ui/icons'
import { Tooltip, TooltipTrigger, TooltipContent } from '@bone-ui/tooltip'

export interface FormFieldProps extends FowerHTMLProps<'div'> {
  showLabel?: boolean
  node: Node
  renderLabel?: () => ReactNode
}

export const FormField: FC<FormFieldProps> = forwardRef(function FormFieldComp(
  props: FormFieldProps,
  ref,
) {
  const { children, node, showLabel = true, renderLabel, ...rest } = props
  const { schema } = useFormContext()
  const { layout = 'vertical' } = schema
  const { error, label, description, touched, wrapper } = node || {}

  if (!wrapper) return <>{children}</>
  return (
    <Box
      className="bone-form-field"
      ref={ref as any}
      relative
      flex
      mb6
      hidden={!node.display}
      // w-100p
      column={layout === 'vertical'}
      {...rest}
    >
      {renderLabel?.()}
      {showLabel && label && (
        <Box
          toCenterY
          spaceX1
          mb2={layout === 'vertical'}
          toRight={layout === 'horizontal'}
          pr2={layout !== 'vertical'}
          w-100={layout === 'horizontal'}
        >
          {label && (
            <Box as="label" className="bone-form-field-label" leading-1em toCenterY>
              {label}
            </Box>
          )}

          {description && (
            <Tooltip>
              <TooltipTrigger>
                <InformationCircleSolid gray600 cursorPointer size={20} />
              </TooltipTrigger>
              <TooltipContent>{description}</TooltipContent>
            </Tooltip>
          )}
        </Box>
      )}
      <Box className="bone-form-field-control" column flex-1 relative>
        <Box toCenterY toLeft>
          {children}
        </Box>
        {error && touched && (
          <Box h-1em red400 bottom="-1.1em" left0 text="0.9em" absolute>
            {error}
          </Box>
        )}
      </Box>
    </Box>
  )
}) as any
