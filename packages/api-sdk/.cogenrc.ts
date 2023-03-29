import { CogenConfig } from '@cogen/cli'
import { join } from 'path'
import { StookGraphqlConfig, ConfigItem } from 'cogen-stook-graphql'

const { NODE_ENV } = process.env
const isProd = NODE_ENV === 'production'

export const getEndpoint = () => {
  if (isProd) return 'https://www.boter.app/graphql'
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
