import { Options, useQuery, useMutation } from "stook-graphql";
import { LoginSuccessPayload, Bot, Strategy, TradeRecord, Api, Balance, BotParamsPayload, BotStats, DepositCode, ExitRule, ExitRulesConnection, GridOrder, Log, Notifier, Order, Orderbook, OrdersConnection, Runner, GridParamsPayload, RunnerStrategy, User, Signal, SpotOrder, Stats, StrategysConnection, Symbol, Todo, Token, TwitterUser, Wallet, MutationClearLogsArgs, GenerateBotStopByPasswordLinkInput, MutationGenerateBotStopByPasswordLinkArgs, GenerateSetStopPasswordLinkInput, MutationGenerateSetStopPasswordLinkArgs, VerifySignMessageInput, MutationLoginByWalletArgs, ModifyStrategyInput, MutationModifyStrategyArgs, RunBacktestInput, MutationRunBacktestArgs, RunBotInput, MutationRunBotArgs, StopBacktestInput, MutationStopBacktestArgs, StopBotInput, MutationStopBotArgs, UpdateBotInput, MutationUpdateBotArgs, UpdateStrategyInput, MutationUpdateStrategyArgs, QueryAggTradesArgs, QueryApiArgs, QueryBalanceArgs, QueryBotArgs, QueryBotApiKeyArgs, QueryBotParamsArgs, QueryBotStatsArgs, QueryBotsArgs, QueryCheckResetPasswordTokenArgs, QueryCheckVerifyEmailTokenArgs, QueryDepositCodesArgs, QueryExitRuleArgs, QueryExitRulesArgs, QueryExitRulesConnectionArgs, QueryGridOrdersArgs, QueryIsStopPasswordEmptyArgs, QueryKvArgs, QueryKvsArgs, QueryLogArgs, QueryLogsArgs, QueryNonceArgs, QueryNotifierArgs, QueryNotifiersArgs, QueryOpenedOrdersArgs, QueryOrderArgs, QueryOrderbooksArgs, QueryOrdersArgs, QueryOrdersConnectionArgs, QueryOwnedBotsArgs, QueryRecommendedGridParamsArgs, QueryRunnerStrategysArgs, QuerySearchUsersArgs, QuerySpotOrdersArgs, QueryStorageGetArgs, QueryStrategyArgs, QueryStrategyCodeArgs, QueryStrategysArgs, QueryStrategysConnectionArgs, QuerySymbolArgs, QuerySymbolLeverageArgs, QuerySymbolPriceArgs, QuerySymbolsArgs, QueryTodosArgs, QueryTokensArgs, QueryTwitterUserByUsernameArgs, QueryUiCodeArgs, QueryUsableRunnersArgs, QueryWalletArgs } from "./types";
import { CLEAR_LOGS, GENERATE_BOT_STOP_BY_PASSWORD_LINK, GENERATE_SET_STOP_PASSWORD_LINK, LOGIN_BY_WALLET, MODIFY_STRATEGY, RUN_BACKTEST, RUN_BOT, STOP_BACKTEST, STOP_BOT, UPDATE_BOT, UPDATE_STRATEGY, AGG_TRADES, API, BALANCE, BOT, BOT_API_KEY, BOT_PARAMS, BOT_STATS, BOTS, CHECK_RESET_PASSWORD_TOKEN, CHECK_VERIFY_EMAIL_TOKEN, DEPOSIT_CODES, EXIT_RULE, EXIT_RULES, EXIT_RULES_CONNECTION, GRID_ORDERS, IS_STOP_PASSWORD_EMPTY, KV, KVS, LOG, LOGS, NONCE, NOTIFIER, NOTIFIERS, OPENED_ORDERS, ORDER, ORDERBOOKS, ORDERS, ORDERS_CONNECTION, OWNED_APIS, OWNED_BOTS, OWNED_NOTIFIERS, OWNED_RUNNERS, OWNED_STRATEGIES, PUBLIC_BOTS, PUBLIC_STRATEGIES, RECOMMENDED_GRID_PARAMS, RUNNER_STRATEGYS, SEARCH_USERS, SIGNALS, SPOT_ORDERS, STATS, STORAGE_GET, STORAGE_GET_ALL, STRATEGY, STRATEGY_CODE, STRATEGYS, STRATEGYS_CONNECTION, SYMBOL, SYMBOL_LEVERAGE, SYMBOL_PRICE, SYMBOLS, TODOS, TOKENS, TWITTER_USER_BY_USERNAME, UI_CODE, USABLE_RUNNERS, WALLET } from "./gql";

class HooksService {
  useClearLogs(args?: MutationClearLogsArgs | (() => MutationClearLogsArgs), opt: Options = {}) {
    return useMutation<boolean, MutationClearLogsArgs>(CLEAR_LOGS, { ...opt, variables: args })
  }

  useGenerateBotStopByPasswordLink(args?: GenerateBotStopByPasswordLinkInput | (() => GenerateBotStopByPasswordLinkInput), opt: Options = {}) {

    return useMutation<string, MutationGenerateBotStopByPasswordLinkArgs>(GENERATE_BOT_STOP_BY_PASSWORD_LINK, {
      ...opt, variables: () => {
        const params = typeof args === 'function' ? args() : args
        return { input: params } as any
      }
    })

  }

  useGenerateSetStopPasswordLink(args?: GenerateSetStopPasswordLinkInput | (() => GenerateSetStopPasswordLinkInput), opt: Options = {}) {

    return useMutation<string, MutationGenerateSetStopPasswordLinkArgs>(GENERATE_SET_STOP_PASSWORD_LINK, {
      ...opt, variables: () => {
        const params = typeof args === 'function' ? args() : args
        return { input: params } as any
      }
    })

  }

  useLoginByWallet(args?: VerifySignMessageInput | (() => VerifySignMessageInput), opt: Options = {}) {

    return useMutation<LoginSuccessPayload, MutationLoginByWalletArgs>(LOGIN_BY_WALLET, {
      ...opt, variables: () => {
        const params = typeof args === 'function' ? args() : args
        return { input: params } as any
      }
    })

  }

  useModifyStrategy(args?: ModifyStrategyInput | (() => ModifyStrategyInput), opt: Options = {}) {

    return useMutation<boolean, MutationModifyStrategyArgs>(MODIFY_STRATEGY, {
      ...opt, variables: () => {
        const params = typeof args === 'function' ? args() : args
        return { input: params } as any
      }
    })

  }

  useRunBacktest(args?: RunBacktestInput | (() => RunBacktestInput), opt: Options = {}) {

    return useMutation<boolean, MutationRunBacktestArgs>(RUN_BACKTEST, {
      ...opt, variables: () => {
        const params = typeof args === 'function' ? args() : args
        return { input: params } as any
      }
    })

  }

  useRunBot(args?: RunBotInput | (() => RunBotInput), opt: Options = {}) {

    return useMutation<boolean, MutationRunBotArgs>(RUN_BOT, {
      ...opt, variables: () => {
        const params = typeof args === 'function' ? args() : args
        return { input: params } as any
      }
    })

  }

  useStopBacktest(args?: StopBacktestInput | (() => StopBacktestInput), opt: Options = {}) {

    return useMutation<boolean, MutationStopBacktestArgs>(STOP_BACKTEST, {
      ...opt, variables: () => {
        const params = typeof args === 'function' ? args() : args
        return { input: params } as any
      }
    })

  }

  useStopBot(args?: StopBotInput | (() => StopBotInput), opt: Options = {}) {

    return useMutation<boolean, MutationStopBotArgs>(STOP_BOT, {
      ...opt, variables: () => {
        const params = typeof args === 'function' ? args() : args
        return { input: params } as any
      }
    })

  }

  useUpdateBot(args?: UpdateBotInput | (() => UpdateBotInput), opt: Options = {}) {

    return useMutation<Bot, MutationUpdateBotArgs>(UPDATE_BOT, {
      ...opt, variables: () => {
        const params = typeof args === 'function' ? args() : args
        return { input: params } as any
      }
    })

  }

  useUpdateStrategy(args?: UpdateStrategyInput | (() => UpdateStrategyInput), opt: Options = {}) {

    return useMutation<Strategy, MutationUpdateStrategyArgs>(UPDATE_STRATEGY, {
      ...opt, variables: () => {
        const params = typeof args === 'function' ? args() : args
        return { input: params } as any
      }
    })

  }

  useAggTrades(args?: QueryAggTradesArgs | (() => QueryAggTradesArgs), opt: Options = {}) {
    return useQuery<TradeRecord[], QueryAggTradesArgs>(AGG_TRADES, { ...opt, variables: args })
  }

  useApi(args?: QueryApiArgs | (() => QueryApiArgs), opt: Options = {}) {
    return useQuery<Api, QueryApiArgs>(API, { ...opt, variables: args })
  }

  useBalance(args?: QueryBalanceArgs | (() => QueryBalanceArgs), opt: Options = {}) {
    return useQuery<Balance, QueryBalanceArgs>(BALANCE, { ...opt, variables: args })
  }

  useBot(args?: QueryBotArgs | (() => QueryBotArgs), opt: Options = {}) {
    return useQuery<Bot, QueryBotArgs>(BOT, { ...opt, variables: args })
  }

  useBotApiKey(args?: QueryBotApiKeyArgs | (() => QueryBotApiKeyArgs), opt: Options = {}) {
    return useQuery<string, QueryBotApiKeyArgs>(BOT_API_KEY, { ...opt, variables: args })
  }

  useBotParams(args?: QueryBotParamsArgs | (() => QueryBotParamsArgs), opt: Options = {}) {
    return useQuery<BotParamsPayload, QueryBotParamsArgs>(BOT_PARAMS, { ...opt, variables: args })
  }

  useBotStats(args?: QueryBotStatsArgs | (() => QueryBotStatsArgs), opt: Options = {}) {
    return useQuery<BotStats, QueryBotStatsArgs>(BOT_STATS, { ...opt, variables: args })
  }

  useBots(args?: QueryBotsArgs | (() => QueryBotsArgs), opt: Options = {}) {
    return useQuery<Bot[], QueryBotsArgs>(BOTS, { ...opt, variables: args })
  }

  useCheckResetPasswordToken(args?: QueryCheckResetPasswordTokenArgs | (() => QueryCheckResetPasswordTokenArgs), opt: Options = {}) {
    return useQuery<boolean, QueryCheckResetPasswordTokenArgs>(CHECK_RESET_PASSWORD_TOKEN, { ...opt, variables: args })
  }

  useCheckVerifyEmailToken(args?: QueryCheckVerifyEmailTokenArgs | (() => QueryCheckVerifyEmailTokenArgs), opt: Options = {}) {
    return useQuery<LoginSuccessPayload, QueryCheckVerifyEmailTokenArgs>(CHECK_VERIFY_EMAIL_TOKEN, { ...opt, variables: args })
  }

  useDepositCodes(args?: QueryDepositCodesArgs | (() => QueryDepositCodesArgs), opt: Options = {}) {
    return useQuery<DepositCode[], QueryDepositCodesArgs>(DEPOSIT_CODES, { ...opt, variables: args })
  }

  useExitRule(args?: QueryExitRuleArgs | (() => QueryExitRuleArgs), opt: Options = {}) {
    return useQuery<ExitRule, QueryExitRuleArgs>(EXIT_RULE, { ...opt, variables: args })
  }

  useExitRules(args?: QueryExitRulesArgs | (() => QueryExitRulesArgs), opt: Options = {}) {
    return useQuery<ExitRule[], QueryExitRulesArgs>(EXIT_RULES, { ...opt, variables: args })
  }

  useExitRulesConnection(args?: QueryExitRulesConnectionArgs | (() => QueryExitRulesConnectionArgs), opt: Options = {}) {
    return useQuery<ExitRulesConnection, QueryExitRulesConnectionArgs>(EXIT_RULES_CONNECTION, { ...opt, variables: args })
  }

  useGridOrders(args?: QueryGridOrdersArgs | (() => QueryGridOrdersArgs), opt: Options = {}) {
    return useQuery<GridOrder[], QueryGridOrdersArgs>(GRID_ORDERS, { ...opt, variables: args })
  }

  useIsStopPasswordEmpty(args?: QueryIsStopPasswordEmptyArgs | (() => QueryIsStopPasswordEmptyArgs), opt: Options = {}) {
    return useQuery<boolean, QueryIsStopPasswordEmptyArgs>(IS_STOP_PASSWORD_EMPTY, { ...opt, variables: args })
  }

  useKv(args?: QueryKvArgs | (() => QueryKvArgs), opt: Options = {}) {
    return useQuery<any, QueryKvArgs>(KV, { ...opt, variables: args })
  }

  useKvs(args?: QueryKvsArgs | (() => QueryKvsArgs), opt: Options = {}) {
    return useQuery<any, QueryKvsArgs>(KVS, { ...opt, variables: args })
  }

  useLog(args?: QueryLogArgs | (() => QueryLogArgs), opt: Options = {}) {
    return useQuery<Log, QueryLogArgs>(LOG, { ...opt, variables: args })
  }

  useLogs(args?: QueryLogsArgs | (() => QueryLogsArgs), opt: Options = {}) {
    return useQuery<Log[], QueryLogsArgs>(LOGS, { ...opt, variables: args })
  }

  useNonce(args?: QueryNonceArgs | (() => QueryNonceArgs), opt: Options = {}) {
    return useQuery<string, QueryNonceArgs>(NONCE, { ...opt, variables: args })
  }

  useNotifier(args?: QueryNotifierArgs | (() => QueryNotifierArgs), opt: Options = {}) {
    return useQuery<Notifier, QueryNotifierArgs>(NOTIFIER, { ...opt, variables: args })
  }

  useNotifiers(args?: QueryNotifiersArgs | (() => QueryNotifiersArgs), opt: Options = {}) {
    return useQuery<Notifier[], QueryNotifiersArgs>(NOTIFIERS, { ...opt, variables: args })
  }

  useOpenedOrders(args?: QueryOpenedOrdersArgs | (() => QueryOpenedOrdersArgs), opt: Options = {}) {
    return useQuery<Order[], QueryOpenedOrdersArgs>(OPENED_ORDERS, { ...opt, variables: args })
  }

  useOrder(args?: QueryOrderArgs | (() => QueryOrderArgs), opt: Options = {}) {
    return useQuery<Order, QueryOrderArgs>(ORDER, { ...opt, variables: args })
  }

  useOrderbooks(args?: QueryOrderbooksArgs | (() => QueryOrderbooksArgs), opt: Options = {}) {
    return useQuery<Orderbook[], QueryOrderbooksArgs>(ORDERBOOKS, { ...opt, variables: args })
  }

  useOrders(args?: QueryOrdersArgs | (() => QueryOrdersArgs), opt: Options = {}) {
    return useQuery<Order[], QueryOrdersArgs>(ORDERS, { ...opt, variables: args })
  }

  useOrdersConnection(args?: QueryOrdersConnectionArgs | (() => QueryOrdersConnectionArgs), opt: Options = {}) {
    return useQuery<OrdersConnection, QueryOrdersConnectionArgs>(ORDERS_CONNECTION, { ...opt, variables: args })
  }

  useOwnedApis(args?: any | (() => any), opt: Options = {}) {
    return useQuery<Api[], any>(OWNED_APIS, { ...opt, variables: args })
  }

  useOwnedBots(args?: QueryOwnedBotsArgs | (() => QueryOwnedBotsArgs), opt: Options = {}) {
    return useQuery<Bot[], QueryOwnedBotsArgs>(OWNED_BOTS, { ...opt, variables: args })
  }

  useOwnedNotifiers(args?: any | (() => any), opt: Options = {}) {
    return useQuery<Notifier[], any>(OWNED_NOTIFIERS, { ...opt, variables: args })
  }

  useOwnedRunners(args?: any | (() => any), opt: Options = {}) {
    return useQuery<Runner[], any>(OWNED_RUNNERS, { ...opt, variables: args })
  }

  useOwnedStrategies(args?: any | (() => any), opt: Options = {}) {
    return useQuery<Strategy[], any>(OWNED_STRATEGIES, { ...opt, variables: args })
  }

  usePublicBots(args?: any | (() => any), opt: Options = {}) {
    return useQuery<Bot[], any>(PUBLIC_BOTS, { ...opt, variables: args })
  }

  usePublicStrategies(args?: any | (() => any), opt: Options = {}) {
    return useQuery<Strategy[], any>(PUBLIC_STRATEGIES, { ...opt, variables: args })
  }

  useRecommendedGridParams(args?: QueryRecommendedGridParamsArgs | (() => QueryRecommendedGridParamsArgs), opt: Options = {}) {
    return useQuery<GridParamsPayload, QueryRecommendedGridParamsArgs>(RECOMMENDED_GRID_PARAMS, { ...opt, variables: args })
  }

  useRunnerStrategys(args?: QueryRunnerStrategysArgs | (() => QueryRunnerStrategysArgs), opt: Options = {}) {
    return useQuery<RunnerStrategy[], QueryRunnerStrategysArgs>(RUNNER_STRATEGYS, { ...opt, variables: args })
  }

  useSearchUsers(args?: QuerySearchUsersArgs | (() => QuerySearchUsersArgs), opt: Options = {}) {
    return useQuery<User[], QuerySearchUsersArgs>(SEARCH_USERS, { ...opt, variables: args })
  }

  useSignals(args?: any | (() => any), opt: Options = {}) {
    return useQuery<Signal[], any>(SIGNALS, { ...opt, variables: args })
  }

  useSpotOrders(args?: QuerySpotOrdersArgs | (() => QuerySpotOrdersArgs), opt: Options = {}) {
    return useQuery<SpotOrder[], QuerySpotOrdersArgs>(SPOT_ORDERS, { ...opt, variables: args })
  }

  useStats(args?: any | (() => any), opt: Options = {}) {
    return useQuery<Stats, any>(STATS, { ...opt, variables: args })
  }

  useStorageGet(args?: QueryStorageGetArgs | (() => QueryStorageGetArgs), opt: Options = {}) {
    return useQuery<any, QueryStorageGetArgs>(STORAGE_GET, { ...opt, variables: args })
  }

  useStorageGetAll(args?: any | (() => any), opt: Options = {}) {
    return useQuery<any, any>(STORAGE_GET_ALL, { ...opt, variables: args })
  }

  useStrategy(args?: QueryStrategyArgs | (() => QueryStrategyArgs), opt: Options = {}) {
    return useQuery<Strategy, QueryStrategyArgs>(STRATEGY, { ...opt, variables: args })
  }

  useStrategyCode(args?: QueryStrategyCodeArgs | (() => QueryStrategyCodeArgs), opt: Options = {}) {
    return useQuery<string, QueryStrategyCodeArgs>(STRATEGY_CODE, { ...opt, variables: args })
  }

  useStrategys(args?: QueryStrategysArgs | (() => QueryStrategysArgs), opt: Options = {}) {
    return useQuery<Strategy[], QueryStrategysArgs>(STRATEGYS, { ...opt, variables: args })
  }

  useStrategysConnection(args?: QueryStrategysConnectionArgs | (() => QueryStrategysConnectionArgs), opt: Options = {}) {
    return useQuery<StrategysConnection, QueryStrategysConnectionArgs>(STRATEGYS_CONNECTION, { ...opt, variables: args })
  }

  useSymbol(args?: QuerySymbolArgs | (() => QuerySymbolArgs), opt: Options = {}) {
    return useQuery<Symbol, QuerySymbolArgs>(SYMBOL, { ...opt, variables: args })
  }

  useSymbolLeverage(args?: QuerySymbolLeverageArgs | (() => QuerySymbolLeverageArgs), opt: Options = {}) {
    return useQuery<number, QuerySymbolLeverageArgs>(SYMBOL_LEVERAGE, { ...opt, variables: args })
  }

  useSymbolPrice(args?: QuerySymbolPriceArgs | (() => QuerySymbolPriceArgs), opt: Options = {}) {
    return useQuery<number, QuerySymbolPriceArgs>(SYMBOL_PRICE, { ...opt, variables: args })
  }

  useSymbols(args?: QuerySymbolsArgs | (() => QuerySymbolsArgs), opt: Options = {}) {
    return useQuery<Symbol[], QuerySymbolsArgs>(SYMBOLS, { ...opt, variables: args })
  }

  useTodos(args?: QueryTodosArgs | (() => QueryTodosArgs), opt: Options = {}) {
    return useQuery<Todo[], QueryTodosArgs>(TODOS, { ...opt, variables: args })
  }

  useTokens(args?: QueryTokensArgs | (() => QueryTokensArgs), opt: Options = {}) {
    return useQuery<Token[], QueryTokensArgs>(TOKENS, { ...opt, variables: args })
  }

  useTwitterUserByUsername(args?: QueryTwitterUserByUsernameArgs | (() => QueryTwitterUserByUsernameArgs), opt: Options = {}) {
    return useQuery<TwitterUser, QueryTwitterUserByUsernameArgs>(TWITTER_USER_BY_USERNAME, { ...opt, variables: args })
  }

  useUiCode(args?: QueryUiCodeArgs | (() => QueryUiCodeArgs), opt: Options = {}) {
    return useQuery<string, QueryUiCodeArgs>(UI_CODE, { ...opt, variables: args })
  }

  useUsableRunners(args?: QueryUsableRunnersArgs | (() => QueryUsableRunnersArgs), opt: Options = {}) {
    return useQuery<Runner[], QueryUsableRunnersArgs>(USABLE_RUNNERS, { ...opt, variables: args })
  }

  useWallet(args?: QueryWalletArgs | (() => QueryWalletArgs), opt: Options = {}) {
    return useQuery<Wallet, QueryWalletArgs>(WALLET, { ...opt, variables: args })
  }
}

export const Hooks = new HooksService();
