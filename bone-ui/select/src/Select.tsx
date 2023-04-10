import React, { useState, FC, useEffect } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { ChevronDownOutline } from '@bone-ui/icons'
import { Radio, RadioGroupProvider, RadioProps } from '@bone-ui/radio'
import { SelectProps, SelectSize } from './types'
import { defaultRenderItem } from './defaultRenderItem'
import { Box } from '@fower/react'
import { Popover, PopoverContent, PopoverTrigger } from '@bone-ui/popover'
import { defaultRenderSearch } from './defaultRenderSearch'
import { Spinner } from '@bone-ui/spinner'

const sizes: Record<SelectSize, number> = {
  sm: 32,
  md: 40,
  lg: 48,
}

export const Select: FC<SelectProps> = forwardRef((props: SelectProps, ref) => {
  const {
    children,
    onChange,
    value,
    options = [],
    maxOptionsRenderLength,
    searchPlaceholder,
    renderSearch,
    renderItem = defaultRenderItem,
    renderTrigger,
    width = '100%',
    size = 'md',
    loading,
    icon,
    useTriggerWidth = true,
    containerMaxHeight = 250,
    placeholder,
    ...rest
  } = props

  const [selectedValue, setSelectedValue] = useState<any>(value)
  const [searchValue, setSearchValue] = useState<any>('')

  useEffect(() => {
    if (selectedValue !== value) {
      setSelectedValue(value)
    }
  }, [value, setSelectedValue, selectedValue])

  function setValue(value: any) {
    setSelectedValue(value)
    onChange && onChange(value)
  }

  const ctxValue = {
    value: selectedValue,
    setValue,
    renderItem,
  }

  if (renderItem) ctxValue.renderItem = renderItem

  const option = options.find((i) => i.value === selectedValue)

  let filteredOptions = options.filter((i) => {
    const reg = new RegExp(`${searchValue}`, 'i')
    return (
      reg.test((i.value || '').toString().toLowerCase()) ||
      (typeof i.label === 'string' && reg.test(i.label.toLowerCase()))
    )
  })

  /** 为了性能 */
  if (maxOptionsRenderLength) {
    filteredOptions = filteredOptions.slice(0, maxOptionsRenderLength)
  }

  const searchProps = {
    placeholder: searchPlaceholder,
    value: searchValue,
    setValue: setSearchValue,
    onChange: (e: any) => setSearchValue(e.target.value),
  }

  const height: any = sizes[size] || size

  return (
    <RadioGroupProvider value={ctxValue as any}>
      <Popover placement="bottom">
        <PopoverTrigger h-100p asChild>
          {({ isOpen }) => {
            if (renderTrigger) return renderTrigger({ isOpen, item: option })

            return (
              <Box
                ref={ref}
                toBetween
                toCenterY
                pl-12
                pr-8
                borderGray200--T30
                borderGray700--dark
                border
                ringBrand500-2={isOpen}
                rounded-8
                style={{ width }}
                h={height}
                cursorPointer
                {...rest}
              >
                {loading && (
                  <Box toCenterY>
                    <Spinner square={height * 0.4} />
                  </Box>
                )}
                {!loading && (
                  <>
                    <Box flex-1 toCenterY spaceX2 h-100p black>
                      {!option && <Box gray400>{placeholder}</Box>}
                      {option?.icon && typeof option?.icon === 'string' && (
                        <Box as="img" src={option.icon} rounded h-60p />
                      )}
                      <Box>{option?.label}</Box>
                    </Box>
                    {!!icon ? icon : <ChevronDownOutline size={16} />}
                  </>
                )}
              </Box>
            )
          }}
        </PopoverTrigger>
        <PopoverContent
          w={width}
          maxH={containerMaxHeight}
          overflowYAuto
          useTriggerWidth={useTriggerWidth}
        >
          {({ close }) => (
            <>
              {typeof renderSearch === 'function' && renderSearch(searchProps)}
              {renderSearch === true && defaultRenderSearch(searchProps)}

              {filteredOptions.map((item, index) => {
                const radioProps: RadioProps = { disabled: item.disabled, value: item.value }

                if (renderItem) {
                  radioProps.render = (state) => {
                    const defaultRadio = defaultRenderItem({ ...state, item })
                    return renderItem({ ...state, defaultRadio, item, index })
                  }
                }

                return (
                  <Radio key={index} onClick={close} {...radioProps} render={radioProps.render} />
                )
              })}
              {!filteredOptions.length && children}
            </>
          )}
        </PopoverContent>
      </Popover>
    </RadioGroupProvider>
  )
})
