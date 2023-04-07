import { useTranslation } from 'react-i18next'
import { useTeams } from '../../hooks/useTeams'
import { useUpdateTeamForm } from '../../hooks/useUpdateTeamForm'
import { Title } from './Title'
import { Box } from '@fower/react'
import { Button } from 'bone-ui'
import { Field, Form } from 'fomir'

export const UpdateTeamForm = () => {
  const form = useUpdateTeamForm()
  const { t } = useTranslation('common')
  const { activeTeam } = useTeams()

  return (
    <Form
      form={form}
      suffix={
        <Box toLeft spaceX2>
          <Button type="submit">{t('update')}</Button>
        </Box>
      }
    >
      <Title text={t('team-name')} subtitle={t('provider-subtitle')} mb4 />
      <Field
        component="Input"
        name="name"
        value={activeTeam?.name || ''}
        componentProps={{ w: 300 }}
        validators={{ required: 'Name is required' }}
      />
    </Form>
  )
}
