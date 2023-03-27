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
  /** Todo App example by crud api */
  { name: 'todos', actions: ['useQuery', 'refetch'] },
  { name: 'createTodo', actions: ['query'] },
  { name: 'updateTodo', actions: ['query'] },
  { name: 'deleteTodo', actions: ['query'] },

  { name: 'syncSpotOrder', actions: ['query'] },
  { name: 'getOrders', actions: ['query'] },
  { name: 'ordersConnection', actions: ['query', 'useQuery', 'refetch'] },

  { name: 'strategysConnection', actions: ['query', 'useQuery', 'refetch'] },
  {
    name: 'ownedStrategies',
    actions: ['useQuery', 'refetch'],
    excludes: ['ownedStrategies.docs'],
  },
  {
    name: 'publicStrategies',
    actions: ['useQuery', 'refetch'],
    excludes: ['publicStrategies.docs'],
  },
  { name: 'strategyCode', actions: ['useQuery', 'query', 'refetch'] },
  { name: 'updateStrategyCode', actions: ['query'] },
  { name: 'uiCode', actions: ['useQuery', 'query', 'refetch'] },
  { name: 'updateUiCode', actions: ['query'] },

  { name: 'tickers', actions: ['useQuery', 'refetch', 'query'] },
  { name: 'candles', actions: ['useQuery', 'refetch', 'query'] },
  { name: 'aggTrades', actions: ['useQuery', 'refetch', 'query'] },

  { name: 'registerByEmail', actions: ['query'] },
  { name: 'loginByEmail', actions: ['query'] },
  { name: 'logout', actions: ['query', 'useMutation'] },
  { name: 'loginByGithub', actions: ['query'] },
  { name: 'loginByGoogle', actions: ['query'] },
  { name: 'loginByPersonalToken', actions: ['query'] },

  { name: 'nonce', actions: ['query', 'useQuery'] },
  { name: 'loginByWallet', actions: ['query', 'useMutation'] },

  { name: 'wallet', actions: ['useQuery', 'refetch'] },
  { name: 'searchUsers', actions: ['useQuery', 'refetch'] },
  { name: 'updateUser', actions: ['query'] },
  { name: 'modifyPassword', actions: ['query'] },
  { name: 'setActiveApi', actions: ['query'] },
  { name: 'addCollaborator', actions: ['query'] },
  { name: 'removeCollaborator', actions: ['query'] },

  { name: 'tokens', actions: ['useQuery', 'refetch'] },
  { name: 'addToken', actions: ['query'] },
  { name: 'deleteToken', actions: ['query'] },

  { name: 'ownedApis', actions: ['query', 'useQuery', 'refetch'] },
  { name: 'api', actions: ['useQuery', 'query'] },
  { name: 'balance', actions: ['useQuery', 'query'] },
  { name: 'createApi', actions: ['query'] },
  { name: 'addApi', actions: ['query'] },
  { name: 'deleteApi', actions: ['query'] },
  { name: 'updateApi', actions: ['query'] },
  { name: 'modifyApi', actions: ['query'] },
  { name: 'removeApi', actions: ['query'] },

  { name: 'strategy', actions: ['useQuery', 'refetch', 'mutator', 'query'], depthLimit: 3 },
  { name: 'strategys', actions: ['useQuery', 'refetch'] },
  { name: 'addStrategy', actions: ['query'] },
  { name: 'updateStrategy', actions: ['query', 'useMutation'] },
  { name: 'modifyStrategy', actions: ['query', 'useMutation'] },
  { name: 'syncStrategy', actions: ['query'] },
  { name: 'removeStrategy', actions: ['query'] },
  { name: 'regenerateStrategyToken', actions: ['query'] },

  { name: 'symbol', actions: ['useQuery', 'refetch'] },
  { name: 'symbols', actions: ['useQuery', 'refetch'] },
  { name: 'saveSymbols', actions: ['query'] },

  { name: 'runBacktest', actions: ['query', 'useMutation'] },
  { name: 'stopBacktest', actions: ['query', 'useMutation'] },
  { name: 'backtestStatusSubscription' },
  { name: 'backtestResultSubscription' },
  { name: 'botStorageSubscription' },
  { name: 'botEventSubscription' },
  { name: 'publishBotEvent', actions: ['query'] },

  {
    name: 'ownedBots',
    actions: ['useQuery', 'refetch', 'mutator'],
    excludes: ['ownedBots.strategy.docs'],
  },
  { name: 'publicBots', actions: ['useQuery', 'refetch'] },

  {
    name: 'bots',
    actions: ['useQuery', 'refetch', 'mutator'],
    excludes: ['bots.strategy.docs'],
  },
  {
    name: 'bot',
    actions: ['useQuery', 'refetch', 'mutator', 'query'],
    excludes: ['bot.strategy.docs'],
  },
  { name: 'botStats', actions: ['useQuery', 'refetch'] },
  { name: 'addBot', actions: ['query'] },
  { name: 'deleteBot', actions: ['query'] },
  { name: 'updateBot', actions: ['query', 'useMutation'] },
  { name: 'runBot', actions: ['query', 'useMutation'] },
  { name: 'stopBot', actions: ['query', 'useMutation'] },
  { name: 'updateBotParams', actions: ['query'] },
  { name: 'updateBotName', actions: ['query'] },

  { name: 'botApiKey', actions: ['useQuery', 'refetch'] },
  { name: 'regenerateBotApiKey', actions: ['query'] },

  { name: 'symbolPrice', actions: ['useQuery', 'refetch', 'query'] },
  { name: 'symbolPriceSubscription' },
  { name: 'recommendedGridParams', actions: ['query', 'useQuery'] },
  { name: 'spotOrders', actions: ['useQuery', 'refetch', 'query'] },

  { name: 'logs', actions: ['useQuery', 'refetch'] },
  { name: 'log', actions: ['useQuery', 'refetch'] },
  { name: 'addLogSubscription' },
  { name: 'addLog', actions: ['query'] },
  { name: 'clearLogs', actions: ['useMutation', 'query'] },

  { name: 'orders', actions: ['query', 'useQuery', 'refetch'] },
  { name: 'openedOrders', actions: ['query', 'useQuery', 'refetch'] },
  { name: 'order', actions: ['query', 'useQuery'] },
  { name: 'createOrder', actions: ['query'] },
  { name: 'updateOrder', actions: ['query'] },
  { name: 'updateManyOrders', actions: ['query'] },
  { name: 'deleteManyOrders', actions: ['query'] },

  { name: 'orderbooks', actions: ['query', 'useQuery', 'refetch'] },
  { name: 'orderbooksSubscription' },
  { name: 'tradesSubscription' },

  { name: 'futuresOrder', actions: ['query'] },

  { name: 'storageGet', actions: ['query', 'useQuery', 'refetch'] },
  { name: 'storageGetAll', actions: ['query', 'useQuery', 'refetch'] },
  { name: 'storageSet', actions: ['query'] },
  { name: 'storageSetAll', actions: ['query'] },
  { name: 'storageRemove', actions: ['query'] },
  { name: 'storageClear', actions: ['query'] },

  { name: 'kv', actions: ['query', 'useQuery'] },
  { name: 'kvs', actions: ['query', 'useQuery'] },
  { name: 'setKV', actions: ['query'] },
  { name: 'removeKV', actions: ['query'] },

  { name: 'botParams', actions: ['query', 'useQuery', 'refetch'] },
  { name: 'increaseDuration', actions: ['query'] },

  { name: 'gridOrders', actions: ['query', 'useQuery', 'refetch'] },
  { name: 'matchOrder', actions: ['query'] },
  { name: 'futuresSymbolPrecisions', actions: ['query', 'useQuery', 'refetch'] },
  { name: 'symbolLeverage', actions: ['query', 'useQuery', 'refetch'] },
  { name: 'setLeverage', actions: ['query'] },

  { name: 'usableRunners', actions: ['query', 'useQuery', 'refetch'] },
  { name: 'ownedRunners', actions: ['query', 'useQuery', 'refetch'] },
  { name: 'removeRunner', actions: ['query'] },
  { name: 'registerRunner', actions: ['query'] },
  { name: 'updateRunner', actions: ['query'] },
  { name: 'addRunnerStrategy', actions: ['query'] },
  { name: 'removeRunnerStrategy', actions: ['query'] },
  { name: 'runnerStrategys', actions: ['useQuery', 'refetch'] },
  { name: 'updateRunnerHeartbeat', actions: ['query'] },

  { name: 'ownedNotifiers', actions: ['query', 'useQuery', 'refetch'] },
  { name: 'notifiers', actions: ['useQuery', 'refetch'] },
  { name: 'notifier', actions: ['query', 'useQuery', 'refetch'] },
  // { name: 'createNotifier', actions: ['query'] },
  // { name: 'updateNotifier', actions: ['query'] },
  { name: 'createValidatedNotifier', actions: ['query'] },
  { name: 'updateValidatedNotifier', actions: ['query'] },
  { name: 'deleteNotifier', actions: ['query'] },

  { name: 'forgotPassword', actions: ['query'] },
  { name: 'checkResetPasswordToken', actions: ['query', 'useQuery'] },
  { name: 'checkVerifyEmailToken', actions: ['query', 'useQuery'] },
  { name: 'resetPassword', actions: ['query'] },
  { name: 'checkPersonalToken', actions: ['query'] },
  { name: 'updateEmail', actions: ['query'] },

  { name: 'depositCodes', actions: ['useQuery', 'refetch'] },
  { name: 'generateDepositCode', actions: ['query'] },
  { name: 'depositByCode', actions: ['query'] },

  { name: 'stats', actions: ['useQuery', 'query'] },

  { name: 'twitterUserByUsername', actions: ['useQuery', 'refetch'] },

  { name: 'createSpotOrder', actions: ['query'] },
  { name: 'closePosition', actions: ['query'] },

  { name: 'signals', actions: ['query', 'useQuery'] },

  { name: 'generateSetStopPasswordLink', actions: ['query', 'useMutation'] },
  { name: 'generateBotStopByPasswordLink', actions: ['query', 'useMutation'] },
  { name: 'verifyPasswordLinkToken', actions: ['query'] },
  { name: 'setStopBotPassword', actions: ['query'] },
  { name: 'stopBotByPassword', actions: ['query'] },
  { name: 'isStopPasswordEmpty', actions: ['useQuery', 'query'] },

  { name: 'exitRulesConnection', actions: ['useQuery', 'query', 'refetch'] },
  { name: 'exitRules', actions: ['useQuery', 'query', 'refetch'] },
  { name: 'exitRule', actions: ['useQuery', 'query'] },
  { name: 'createExitRule', actions: ['query'] },
  { name: 'updateExitRule', actions: ['query'] },
  { name: 'deleteExitRule', actions: ['query'] },

  { name: 'confirmCliLogin', actions: ['query'] },
  { name: 'cliLoginStatus', actions: ['query'] },
  { name: 'loginByCli', actions: ['query'] },
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
