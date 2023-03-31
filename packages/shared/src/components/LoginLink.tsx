import { useMounted } from '../hooks/useMounted'
import { useUser } from '../stores'
import { StyledLink } from './StyledLink'

export const LoginLink = () => {
  const { mounted } = useMounted()
  const { user } = useUser()

  if (!mounted) return null
  if (user) return null

  return (
    <StyledLink href="/login">
      <a>Login</a>
    </StyledLink>
  )
}
