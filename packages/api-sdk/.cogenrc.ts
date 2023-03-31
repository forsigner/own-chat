import { CogenConfig } from '@cogen/cli'
import { join } from 'path'
import { StookGraphqlConfig, ConfigItem } from 'cogen-stook-graphql'

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

  { name: 'setting', actions: ['useQuery', 'refetch', 'mutator'] },
  { name: 'updateSetting', actions: ['query'] },

  { name: 'provider', actions: ['query', 'useQuery', 'refetch'] },
  { name: 'activeProvider', actions: ['query', 'useQuery', 'refetch'] },
  { name: 'myProviders', actions: ['useQuery', 'refetch'] },
  { name: 'updateProvider', actions: ['query'] },
  { name: 'addProvider', actions: ['query'] },

  { name: 'sessions', actions: ['useQuery', 'refetch'] },
  { name: 'addSession', actions: ['query'] },
  { name: 'updateSession', actions: ['query'] },

  { name: 'messages', actions: ['useQuery', 'refetch', 'mutator'] },
  { name: 'addMessage', actions: ['query'] },
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
