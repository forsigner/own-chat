import { CogenConfig } from '@cogen/cli'
import { StookGraphqlConfig, ConfigItem } from 'cogen-stook-graphql'
import { join } from 'path'

const { NODE_ENV } = process.env
const isProd = NODE_ENV === 'production'

export const getEndpoint = () => {
  if (isProd) return 'https://www.ownchat.me/graphql'
  return 'http://localhost:5001/graphql'
}

const gqlConfig: ConfigItem[] = [
  { name: 'logout', actions: ['query', 'useMutation'] },
  { name: 'loginByGithub', actions: ['query'] },
  { name: 'loginByGoogle', actions: ['query'] },
  { name: 'loginByPersonalToken', actions: ['query'] },

  { name: 'tokens', actions: ['useQuery', 'refetch'] },
  { name: 'addToken', actions: ['query'] },
  { name: 'deleteToken', actions: ['query'] },

  { name: 'searchUsers', actions: ['useQuery', 'refetch'] },
  { name: 'updateUser', actions: ['query'] },

  { name: 'members', actions: ['useQuery', 'refetch'] },
  { name: 'addMember', actions: ['query'] },
  { name: 'removeMember', actions: ['query'] },
  { name: 'exitMember', actions: ['query'] },

  { name: 'visit', actions: ['useQuery', 'refetch', 'mutator'] },
  { name: 'updateVisit', actions: ['query'] },

  { name: 'chatSettings', actions: ['useQuery', 'refetch', 'mutator'] },
  { name: 'updateChatSettings', actions: ['query'] },

  { name: 'team', actions: ['query', 'useQuery', 'refetch'] },
  { name: 'activeTeam', actions: ['query', 'useQuery', 'refetch'] },
  { name: 'myTeams', actions: ['useQuery', 'refetch'] },
  { name: 'updateTeam', actions: ['query'] },
  { name: 'addTeam', actions: ['query'] },

  {
    name: 'sessions',
    actions: ['useQuery', 'refetch', 'mutator'],
    excludes: ['sessions.messages'],
  },
  {
    name: 'sessionBySlug',
    actions: ['query', 'useQuery', 'refetch'],
  },
  { name: 'addSession', actions: ['query'], excludes: ['addSession.messages'] },
  { name: 'updateSession', actions: ['query'], excludes: ['updateSession.messages'] },
  { name: 'removeSession', actions: ['query'] },

  { name: 'messages', actions: ['useQuery', 'refetch', 'mutator'] },
  { name: 'addMessage', actions: ['query'] },
  { name: 'updateMessage', actions: ['query'] },
  { name: 'removeMessagePair', actions: ['query'] },

  { name: 'providers', actions: ['useQuery', 'refetch', 'mutator'] },
  { name: 'updateProvider', actions: ['query'] },
  { name: 'activeProvider', actions: ['query', 'useQuery', 'refetch'] },
]

const dirName = 'src'

const generatedDir = join(process.cwd(), dirName)

const config: CogenConfig = {
  generatedDir: join(process.cwd(), dirName),
  plugins: ['cogen-stook-graphql'],

  stookGraphql: {
    httpModule: 'stook-graphql',
    gql: gqlConfig,
    codegen: {
      schema: [
        {
          [getEndpoint()]: {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjAsImlhdCI6MTU3ODM4MjMxNywiZXhwIjoxNTgwOTc0MzE3fQ.-du3lqLdO2TEkM4_YwqgTtS99d0F_48Se4ZOW0j6w0o',
            },
          },
        },
      ],
      generates: {
        [`${generatedDir}/types.ts`]: {
          plugins: ['typescript'],
        },
        [`${generatedDir}/schema.graphql`]: {
          plugins: ['schema-ast'],
        },
      },
    },
  } as StookGraphqlConfig,
}

export default config
