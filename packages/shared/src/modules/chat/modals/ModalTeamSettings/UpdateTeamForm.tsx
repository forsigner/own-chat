import { useTeams } from '../../hooks/useTeams'
import { useUpdateTeamForm } from '../../hooks/useUpdateTeamForm'
import { Title } from './Title'
import { Box } from '@fower/react'
import { Button } from 'bone-ui'
import { Field, Form } from 'fomir'

export const UpdateTeamForm = () => {
  const form = useUpdateTeamForm()
  const { activeTeam } = useTeams()

  return (
    <Form
      form={form}
      suffix={
        <Box toLeft spaceX2>
          <Button type="submit">Update</Button>
        </Box>
      }
    >
      <Title text="Team Name" subtitle="This is your team's visible name within OwnChat." mb4 />
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
