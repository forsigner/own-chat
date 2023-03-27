import React, { FC, useMemo } from 'react'
import { NodeProps } from 'fomir'
import { ArrowRightOutline } from '@bone-ui/icons'
import { Tag } from 'bone-ui'
import Picker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Box } from '@fower/react'
import { css } from '@fower/core'
import { DateRangePickerNode } from '../../custom-types'
import { FormField } from '../fomir-bone-ui'
import { ONE_DAY } from '../constants'

const inputClassName = css(
  'placeholderGray500',
  'borderNone',
  'outlineNone',
  'h-100p',
  'w-100p',
  'black',
  'outlineNone-focus',
  'px2',
  {
    'gray100--dark': true,
    'bgTransparent--dark': true,
  },
)

const TimeType: Record<string, string> = {
  OneDay: 'One day',
  OneWeek: 'One week',
  OneMonth: 'One month',
}

export const DateRangePicker: FC<NodeProps<DateRangePickerNode>> = (props) => {
  const { value = [] } = props.node
  const [startDate, endDate] = value

  function setDate(t: string) {
    let startDate: Date = new Date()
    if (t === TimeType.OneDay) startDate = new Date(Date.now() - ONE_DAY)
    if (t === TimeType.OneWeek) startDate = new Date(Date.now() - ONE_DAY * 7)
    if (t === TimeType.OneMonth) startDate = new Date(Date.now() - ONE_DAY * 30)

    props.handler.handleChange([startDate, new Date()])
  }

  const timeTags = (
    <Box toCenterY spaceX2>
      {Object.keys(TimeType).map((i) => (
        <Tag key={i} cursorPointer variant="outline" onClick={() => setDate(TimeType[i])}>
          {TimeType[i]}
        </Tag>
      ))}
    </Box>
  )

  return (
    <FormField
      node={{
        ...props.node,
        label: (
          <Box toCenterY toBetween w-100p>
            <Box mr3>{props.node.label}</Box>
            {timeTags}
          </Box>
        ),
      }}
    >
      <Box toBetween border borderGray700--dark borderGray200--T30 rounded h-40 overflowHidden>
        <Picker
          // dateFormat="yyyy/MM/dd HH:mm"
          // showTimeSelect
          // timeFormat="HH:mm"
          // timeIntervals={60}
          // timeCaption="time"
          selected={startDate}
          wrapperClassName="fomir-date-range-picker-wrapper"
          className={inputClassName}
          onChange={(date) => {
            props.handler.handleChange([date, endDate])
          }}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="开始日期"
        />
        <Box toCenter px2 bgTransparent--dark>
          {/* <ArrowNarrowRightSolid square4 /> */}
          <ArrowRightOutline square4 gray400 />
        </Box>
        <Picker
          // showTimeSelect
          // timeFormat="HH:mm"
          // timeIntervals={60}
          // timeCaption="time"
          // dateFormat="yyyy/MM/dd HH:mm"
          selected={endDate}
          wrapperClassName="fomir-date-range-picker-wrapper"
          className={inputClassName}
          placeholderText="结束日期"
          onChange={(date) => {
            props.handler.handleChange([startDate, date])
          }}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </Box>
    </FormField>
  )
}
