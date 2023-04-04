import { FomirPlugin } from 'fomir'
import { DatePicker } from './DatePicker'
import { DateRangePicker } from './DateRangePicker'
import { PercentInput } from './PercentInput'
import { PlanInterval } from './PlanInterval'
import { ProviderSelect } from './ProviderSelect'

export const FomirCustom: FomirPlugin = {
  components: {
    DatePicker,
    DateRangePicker,
    PercentInput,
    PlanInterval,
    ProviderSelect,
  },
  validators: {
    moreThan(value, validator, { form }) {
      const [prop, msg] = validator
      const target = form.getValues<any>()?.[prop]
      return Number(value) > Number(target) ? '' : msg
    },
    isJSON: (value: any, msg) => {
      try {
        JSON.parse(value)
        return undefined
      } catch (error) {
        return msg
      }
    },
  },
}

export default FomirCustom
