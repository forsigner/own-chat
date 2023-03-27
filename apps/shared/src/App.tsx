import { Box } from '@fower/react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const App = ({ children, ...rest }: ButtonProps) => {
  return (
    <Box>
      <Box>App</Box>
    </Box>
  )
}
