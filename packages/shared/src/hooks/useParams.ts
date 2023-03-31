import { useRouter } from 'next/router'

export const useParams = () => {
  const { query } = useRouter()
  const botId = Number(query.id)
  return { botId }
}
