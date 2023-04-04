import { Box } from '@fower/react'
import { Button, Tag } from 'bone-ui'
import { Field, Form, useFieldState } from 'fomir'
import { useUpgradeForm } from '../../hooks/useUpgradeForm'
import { PlanInterval } from '@own-chat/api-sdk'
import { useMembers } from '../../hooks/useMembers'
import { useMemo } from 'react'

function Total() {
  const price = 2
  const planInterval = useFieldState('planInterval')
  const seats = useFieldState('seats')

  const amount = useMemo(() => {
    if (!planInterval?.value || !seats?.value) return ''
    if (planInterval?.value === PlanInterval.Monthly) {
      return price * seats.value
    }

    return price * seats.value * 12
  }, [planInterval?.value, seats?.value])

  return (
    <Box maxW-370 toBetween toCenterY mb4>
      <Box textLG>{planInterval?.value} total</Box>

      {amount && (
        <Box toCenterY spaceX2>
          <Box fontBold text3XL>
            ${amount || ''}
          </Box>

          <Box gray500> / {planInterval?.value === PlanInterval.Monthly ? 'month' : 'year'}</Box>
        </Box>
      )}
    </Box>
  )
}

interface Props {
  onCancel(): any
}

export const UpgradeForm = ({ onCancel }: Props) => {
  const form = useUpgradeForm()
  const { members, loading } = useMembers()
  if (loading) return null
  return (
    <Form
      form={form}
      suffix={
        <Box toLeft spaceX2>
          <Button type="submit">Upgrade</Button>

          <Button
            type="button"
            variant="ghost"
            colorScheme="gray600"
            onClick={() => {
              onCancel()
            }}
          >
            Cancel
          </Button>
        </Box>
      }
    >
      <Box toCenterY spaceX2 mb8>
        <Box text3XL fontSemibold>
          Upgrade your Team plan to
        </Box>
        <Tag size="lg" colorScheme="brand500">
          Plus
        </Tag>
      </Box>

      <Field
        label={
          <Box fontSemibold textLG mb3>
            How often do you want to be billed?
          </Box>
        }
        value={PlanInterval.Yearly}
        component="PlanInterval"
        name="planInterval"
      />

      <Field
        label={
          <Box fontSemibold textLG mb3>
            How many seats do you want to include?
          </Box>
        }
        component="CounterInput"
        value={members.length}
        name="seats"
        componentProps={{
          min: members.length,
        }}
        validators={{
          min: [members.length, 'Invalid seats'],
        }}
        intercept={(value: string, node) => {
          if (value === '') return value
          if (!/^[1-9]+$/.test(value)) return node.value
          return value
        }}
        transform={(v) => {
          return Number(v) as any
        }}
      />

      <Total />
    </Form>
  )
}
