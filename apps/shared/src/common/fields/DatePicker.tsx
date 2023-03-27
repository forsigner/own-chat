import React, { FC } from 'react'
import { NodeProps } from 'fomir'
import Picker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FormField } from '../fomir-bone-ui'

export const DatePicker: FC<NodeProps<any>> = (props) => {
  const { value = new Date() } = props.node
  const years = [2018, 2019, 2020, 2021, 2022]
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  return (
    <FormField node={props.node}>
      <Picker
        dateFormat="yyyy/MM/dd"
        className="fomir-date-picker"
        onChange={props.handler.handleChange}
        selected={value}
      />
    </FormField>
  )
}
