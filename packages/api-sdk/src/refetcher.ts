import { RefetchOptions, fetcher } from "stook-graphql";
import { TradeRecord, Bot, BotParamsPayload, BotStats, DepositCode, ExitRule, ExitRulesConnection, GridOrder, Log, Notifier, Order, Orderbook, OrdersConnection, Api, Runner, Strategy, RunnerStrategy, User, SpotOrder, StrategysConnection, Symbol, Todo, Token, TwitterUser, Wallet, QueryAggTradesArgs, QueryBotArgs, QueryBotApiKeyArgs, QueryBotParamsArgs, QueryBotStatsArgs, QueryBotsArgs, QueryDepositCodesArgs, QueryExitRulesArgs, QueryExitRulesConnectionArgs, QueryGridOrdersArgs, QueryLogArgs, QueryLogsArgs, QueryNotifierArgs, QueryNotifiersArgs, QueryOpenedOrdersArgs, QueryOrderbooksArgs, QueryOrdersArgs, QueryOrdersConnectionArgs, QueryOwnedBotsArgs, QueryRunnerStrategysArgs, QuerySearchUsersArgs, QuerySpotOrdersArgs, QueryStorageGetArgs, QueryStrategyArgs, QueryStrategyCodeArgs, QueryStrategysArgs, QueryStrategysConnectionArgs, QuerySymbolArgs, QuerySymbolLeverageArgs, QuerySymbolPriceArgs, QuerySymbolsArgs, QueryTodosArgs, QueryTokensArgs, QueryTwitterUserByUsernameArgs, QueryUiCodeArgs, QueryUsableRunnersArgs, QueryWalletArgs } from "./types";
import { AGG_TRADES, BOT, BOT_API_KEY, BOT_PARAMS, BOT_STATS, BOTS, DEPOSIT_CODES, EXIT_RULES, EXIT_RULES_CONNECTION, GRID_ORDERS, LOG, LOGS, NOTIFIER, NOTIFIERS, OPENED_ORDERS, ORDERBOOKS, ORDERS, ORDERS_CONNECTION, OWNED_APIS, OWNED_BOTS, OWNED_NOTIFIERS, OWNED_RUNNERS, OWNED_STRATEGIES, PUBLIC_BOTS, PUBLIC_STRATEGIES, RUNNER_STRATEGYS, SEARCH_USERS, SPOT_ORDERS, STORAGE_GET, STORAGE_GET_ALL, STRATEGY, STRATEGY_CODE, STRATEGYS, STRATEGYS_CONNECTION, SYMBOL, SYMBOL_LEVERAGE, SYMBOL_PRICE, SYMBOLS, TODOS, TOKENS, TWITTER_USER_BY_USERNAME, UI_CODE, USABLE_RUNNERS, WALLET } from "./gql";

class RefetcherService {
  async refetchAggTrades(args: QueryAggTradesArgs = {} as QueryAggTradesArgs, opt: RefetchOptions = {}): Promise<TradeRecord[]> {

    const key = opt.key ? opt.key : AGG_TRADES
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchBot(args: QueryBotArgs = {} as QueryBotArgs, opt: RefetchOptions = {}): Promise<Bot> {

    const key = opt.key ? opt.key : BOT
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchBotApiKey(args: QueryBotApiKeyArgs = {} as QueryBotApiKeyArgs, opt: RefetchOptions = {}): Promise<string> {

    const key = opt.key ? opt.key : BOT_API_KEY
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchBotParams(args: QueryBotParamsArgs = {} as QueryBotParamsArgs, opt: RefetchOptions = {}): Promise<BotParamsPayload> {

    const key = opt.key ? opt.key : BOT_PARAMS
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchBotStats(args: QueryBotStatsArgs = {} as QueryBotStatsArgs, opt: RefetchOptions = {}): Promise<BotStats> {

    const key = opt.key ? opt.key : BOT_STATS
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchBots(args: QueryBotsArgs = {} as QueryBotsArgs, opt: RefetchOptions = {}): Promise<Bot[]> {

    const key = opt.key ? opt.key : BOTS
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchDepositCodes(args: QueryDepositCodesArgs = {} as QueryDepositCodesArgs, opt: RefetchOptions = {}): Promise<DepositCode[]> {

    const key = opt.key ? opt.key : DEPOSIT_CODES
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchExitRules(args: QueryExitRulesArgs = {} as QueryExitRulesArgs, opt: RefetchOptions = {}): Promise<ExitRule[]> {

    const key = opt.key ? opt.key : EXIT_RULES
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchExitRulesConnection(args: QueryExitRulesConnectionArgs = {} as QueryExitRulesConnectionArgs, opt: RefetchOptions = {}): Promise<ExitRulesConnection> {

    const key = opt.key ? opt.key : EXIT_RULES_CONNECTION
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchGridOrders(args: QueryGridOrdersArgs = {} as QueryGridOrdersArgs, opt: RefetchOptions = {}): Promise<GridOrder[]> {

    const key = opt.key ? opt.key : GRID_ORDERS
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchLog(args: QueryLogArgs = {} as QueryLogArgs, opt: RefetchOptions = {}): Promise<Log> {

    const key = opt.key ? opt.key : LOG
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchLogs(args: QueryLogsArgs = {} as QueryLogsArgs, opt: RefetchOptions = {}): Promise<Log[]> {

    const key = opt.key ? opt.key : LOGS
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchNotifier(args: QueryNotifierArgs = {} as QueryNotifierArgs, opt: RefetchOptions = {}): Promise<Notifier> {

    const key = opt.key ? opt.key : NOTIFIER
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchNotifiers(args: QueryNotifiersArgs = {} as QueryNotifiersArgs, opt: RefetchOptions = {}): Promise<Notifier[]> {

    const key = opt.key ? opt.key : NOTIFIERS
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchOpenedOrders(args: QueryOpenedOrdersArgs = {} as QueryOpenedOrdersArgs, opt: RefetchOptions = {}): Promise<Order[]> {

    const key = opt.key ? opt.key : OPENED_ORDERS
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchOrderbooks(args: QueryOrderbooksArgs = {} as QueryOrderbooksArgs, opt: RefetchOptions = {}): Promise<Orderbook[]> {

    const key = opt.key ? opt.key : ORDERBOOKS
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchOrders(args: QueryOrdersArgs = {} as QueryOrdersArgs, opt: RefetchOptions = {}): Promise<Order[]> {

    const key = opt.key ? opt.key : ORDERS
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchOrdersConnection(args: QueryOrdersConnectionArgs = {} as QueryOrdersConnectionArgs, opt: RefetchOptions = {}): Promise<OrdersConnection> {

    const key = opt.key ? opt.key : ORDERS_CONNECTION
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchOwnedApis(args: any = {} as any, opt: RefetchOptions = {}): Promise<Api[]> {

    const key = opt.key ? opt.key : OWNED_APIS
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchOwnedBots(args: QueryOwnedBotsArgs = {} as QueryOwnedBotsArgs, opt: RefetchOptions = {}): Promise<Bot[]> {

    const key = opt.key ? opt.key : OWNED_BOTS
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchOwnedNotifiers(args: any = {} as any, opt: RefetchOptions = {}): Promise<Notifier[]> {

    const key = opt.key ? opt.key : OWNED_NOTIFIERS
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchOwnedRunners(args: any = {} as any, opt: RefetchOptions = {}): Promise<Runner[]> {

    const key = opt.key ? opt.key : OWNED_RUNNERS
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchOwnedStrategies(args: any = {} as any, opt: RefetchOptions = {}): Promise<Strategy[]> {

    const key = opt.key ? opt.key : OWNED_STRATEGIES
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchPublicBots(args: any = {} as any, opt: RefetchOptions = {}): Promise<Bot[]> {

    const key = opt.key ? opt.key : PUBLIC_BOTS
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchPublicStrategies(args: any = {} as any, opt: RefetchOptions = {}): Promise<Strategy[]> {

    const key = opt.key ? opt.key : PUBLIC_STRATEGIES
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchRunnerStrategys(args: QueryRunnerStrategysArgs = {} as QueryRunnerStrategysArgs, opt: RefetchOptions = {}): Promise<RunnerStrategy[]> {

    const key = opt.key ? opt.key : RUNNER_STRATEGYS
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchSearchUsers(args: QuerySearchUsersArgs = {} as QuerySearchUsersArgs, opt: RefetchOptions = {}): Promise<User[]> {

    const key = opt.key ? opt.key : SEARCH_USERS
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchSpotOrders(args: QuerySpotOrdersArgs = {} as QuerySpotOrdersArgs, opt: RefetchOptions = {}): Promise<SpotOrder[]> {

    const key = opt.key ? opt.key : SPOT_ORDERS
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchStorageGet(args: QueryStorageGetArgs = {} as QueryStorageGetArgs, opt: RefetchOptions = {}): Promise<any> {

    const key = opt.key ? opt.key : STORAGE_GET
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchStorageGetAll(args: any = {} as any, opt: RefetchOptions = {}): Promise<any> {

    const key = opt.key ? opt.key : STORAGE_GET_ALL
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchStrategy(args: QueryStrategyArgs = {} as QueryStrategyArgs, opt: RefetchOptions = {}): Promise<Strategy> {

    const key = opt.key ? opt.key : STRATEGY
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchStrategyCode(args: QueryStrategyCodeArgs = {} as QueryStrategyCodeArgs, opt: RefetchOptions = {}): Promise<string> {

    const key = opt.key ? opt.key : STRATEGY_CODE
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchStrategys(args: QueryStrategysArgs = {} as QueryStrategysArgs, opt: RefetchOptions = {}): Promise<Strategy[]> {

    const key = opt.key ? opt.key : STRATEGYS
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchStrategysConnection(args: QueryStrategysConnectionArgs = {} as QueryStrategysConnectionArgs, opt: RefetchOptions = {}): Promise<StrategysConnection> {

    const key = opt.key ? opt.key : STRATEGYS_CONNECTION
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchSymbol(args: QuerySymbolArgs = {} as QuerySymbolArgs, opt: RefetchOptions = {}): Promise<Symbol> {

    const key = opt.key ? opt.key : SYMBOL
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchSymbolLeverage(args: QuerySymbolLeverageArgs = {} as QuerySymbolLeverageArgs, opt: RefetchOptions = {}): Promise<number> {

    const key = opt.key ? opt.key : SYMBOL_LEVERAGE
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchSymbolPrice(args: QuerySymbolPriceArgs = {} as QuerySymbolPriceArgs, opt: RefetchOptions = {}): Promise<number> {

    const key = opt.key ? opt.key : SYMBOL_PRICE
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchSymbols(args: QuerySymbolsArgs = {} as QuerySymbolsArgs, opt: RefetchOptions = {}): Promise<Symbol[]> {

    const key = opt.key ? opt.key : SYMBOLS
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchTodos(args: QueryTodosArgs = {} as QueryTodosArgs, opt: RefetchOptions = {}): Promise<Todo[]> {

    const key = opt.key ? opt.key : TODOS
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchTokens(args: QueryTokensArgs = {} as QueryTokensArgs, opt: RefetchOptions = {}): Promise<Token[]> {

    const key = opt.key ? opt.key : TOKENS
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchTwitterUserByUsername(args: QueryTwitterUserByUsernameArgs = {} as QueryTwitterUserByUsernameArgs, opt: RefetchOptions = {}): Promise<TwitterUser> {

    const key = opt.key ? opt.key : TWITTER_USER_BY_USERNAME
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchUiCode(args: QueryUiCodeArgs = {} as QueryUiCodeArgs, opt: RefetchOptions = {}): Promise<string> {

    const key = opt.key ? opt.key : UI_CODE
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchUsableRunners(args: QueryUsableRunnersArgs = {} as QueryUsableRunnersArgs, opt: RefetchOptions = {}): Promise<Runner[]> {

    const key = opt.key ? opt.key : USABLE_RUNNERS
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchWallet(args: QueryWalletArgs = {} as QueryWalletArgs, opt: RefetchOptions = {}): Promise<Wallet> {

    const key = opt.key ? opt.key : WALLET
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }
}

export const Refetcher = new RefetcherService();
