import { Options, query } from "stook-graphql";
import { Api, Bot, Collaborator, Log, RunnerStrategy, Strategy, Token, ExitRule, Order, Todo, NotifierCreateObject, Orders, LoginSuccessPayload, Runner, SyncOrdersRes, User, TradeRecord, Balance, BotParamsPayload, CliLoginStatus, ExitRulesConnection, GridOrder, Notifier, Orderbook, OrdersConnection, GridParamsPayload, Signal, SpotOrder, Stats, StrategysConnection, AddApiInput, AddBotInput, AddCollaboratorInput, AddLogInput, AddRunnerStrategyInput, AddStrategyInput, AddTokenInput, MutationClearLogsArgs, MutationClosePositionArgs, CliLoginInput, CreateApiInput, CreateExitRuleInput, CreateOrderInput, SpotOrderInput, CreateTodoInput, CreateNotifierInput, DeleteApiInput, DeleteBotInput, DeleteExitRuleInput, DeleteOrderInput, DeleteNotifierInput, DeleteTodoInput, DeleteTokenInput, DepositByCodeInput, ForgotPasswordInput, FuturesOrderInput, GenerateBotStopByPasswordLinkInput, GenerateSetStopPasswordLinkInput, MutationGetOrdersArgs, IncreaseDurationInput, LoginByCliInput, LoginByEmailInput, MutationLoginByGithubArgs, MutationLoginByGoogleArgs, MutationLoginByPersonalTokenArgs, VerifySignMessageInput, MatchOrderInput, ModifyApiInput, ModifyPasswordInput, ModifyStrategyInput, PublishBotEventInput, RegenerateBotApiKeyInput, RegenerateStrategyTokenInput, RegisterByEmailInput, RegisterRunnerInput, RemoveApiInput, RemoveCollaboratorInput, RemoveKvInput, RemoveRunnerInput, RemoveRunnerStrategyInput, RemoveStrategyInput, ResetPasswordInput, RunBacktestInput, RunBotInput, SetKvInput, SetStopBotPasswordInput, StopBacktestInput, StopBotInput, StopBotByPasswordInput, StorageRemoveInput, StorageSetInput, StorageSetAllInput, MutationSyncSpotOrderArgs, SyncStrategyInput, UpdateApiInput, UpdateBotInput, UpdateBotNameInput, UpdateBotParamsInput, UpdateEmailInput, UpdateExitRuleInput, UpdateManyOrderInput, UpdateOrderInput, UpdateRunnerInput, UpdateRunnerHeartbeatInput, UpdateStrategyInput, UpdateStrategyCodeInput, UpdateTodoInput, UpdateUiCodeInput, UpdateUserInput, UpdateNotifierInput, QueryAggTradesArgs, QueryApiArgs, QueryBalanceArgs, QueryBotArgs, QueryBotParamsArgs, QueryCheckPersonalTokenArgs, QueryCheckResetPasswordTokenArgs, QueryCheckVerifyEmailTokenArgs, QueryCliLoginStatusArgs, QueryExitRuleArgs, QueryExitRulesArgs, QueryExitRulesConnectionArgs, GenerateDepositCodeInput, QueryGridOrdersArgs, QueryIsStopPasswordEmptyArgs, QueryKvArgs, QueryKvsArgs, QueryNonceArgs, QueryNotifierArgs, QueryOpenedOrdersArgs, QueryOrderArgs, QueryOrderbooksArgs, QueryOrdersArgs, QueryOrdersConnectionArgs, QueryRecommendedGridParamsArgs, QuerySaveSymbolsArgs, SetLeverageInput, QuerySpotOrdersArgs, QueryStorageGetArgs, QueryStrategyArgs, QueryStrategyCodeArgs, QueryStrategysConnectionArgs, QuerySymbolLeverageArgs, QuerySymbolPriceArgs, QueryUiCodeArgs, QueryUsableRunnersArgs, QueryVerifyPasswordLinkTokenArgs } from "./types";
import { ADD_API, ADD_BOT, ADD_COLLABORATOR, ADD_LOG, ADD_RUNNER_STRATEGY, ADD_STRATEGY, ADD_TOKEN, CLEAR_LOGS, CLOSE_POSITION, CONFIRM_CLI_LOGIN, CREATE_API, CREATE_EXIT_RULE, CREATE_ORDER, CREATE_SPOT_ORDER, CREATE_TODO, CREATE_VALIDATED_NOTIFIER, DELETE_API, DELETE_BOT, DELETE_EXIT_RULE, DELETE_MANY_ORDERS, DELETE_NOTIFIER, DELETE_TODO, DELETE_TOKEN, DEPOSIT_BY_CODE, FORGOT_PASSWORD, FUTURES_ORDER, GENERATE_BOT_STOP_BY_PASSWORD_LINK, GENERATE_SET_STOP_PASSWORD_LINK, GET_ORDERS, INCREASE_DURATION, LOGIN_BY_CLI, LOGIN_BY_EMAIL, LOGIN_BY_GITHUB, LOGIN_BY_GOOGLE, LOGIN_BY_PERSONAL_TOKEN, LOGIN_BY_WALLET, MATCH_ORDER, MODIFY_API, MODIFY_PASSWORD, MODIFY_STRATEGY, PUBLISH_BOT_EVENT, REGENERATE_BOT_API_KEY, REGENERATE_STRATEGY_TOKEN, REGISTER_BY_EMAIL, REGISTER_RUNNER, REMOVE_API, REMOVE_COLLABORATOR, REMOVE_K_V, REMOVE_RUNNER, REMOVE_RUNNER_STRATEGY, REMOVE_STRATEGY, RESET_PASSWORD, RUN_BACKTEST, RUN_BOT, SET_K_V, SET_STOP_BOT_PASSWORD, STOP_BACKTEST, STOP_BOT, STOP_BOT_BY_PASSWORD, STORAGE_CLEAR, STORAGE_REMOVE, STORAGE_SET, STORAGE_SET_ALL, SYNC_SPOT_ORDER, SYNC_STRATEGY, UPDATE_API, UPDATE_BOT, UPDATE_BOT_NAME, UPDATE_BOT_PARAMS, UPDATE_EMAIL, UPDATE_EXIT_RULE, UPDATE_MANY_ORDERS, UPDATE_ORDER, UPDATE_RUNNER, UPDATE_RUNNER_HEARTBEAT, UPDATE_STRATEGY, UPDATE_STRATEGY_CODE, UPDATE_TODO, UPDATE_UI_CODE, UPDATE_USER, UPDATE_VALIDATED_NOTIFIER, AGG_TRADES, API, BALANCE, BOT, BOT_PARAMS, CHECK_PERSONAL_TOKEN, CHECK_RESET_PASSWORD_TOKEN, CHECK_VERIFY_EMAIL_TOKEN, CLI_LOGIN_STATUS, EXIT_RULE, EXIT_RULES, EXIT_RULES_CONNECTION, GENERATE_DEPOSIT_CODE, GRID_ORDERS, IS_STOP_PASSWORD_EMPTY, KV, KVS, NONCE, NOTIFIER, OPENED_ORDERS, ORDER, ORDERBOOKS, ORDERS, ORDERS_CONNECTION, OWNED_APIS, OWNED_NOTIFIERS, OWNED_RUNNERS, RECOMMENDED_GRID_PARAMS, SAVE_SYMBOLS, SET_LEVERAGE, SIGNALS, SPOT_ORDERS, STATS, STORAGE_GET, STORAGE_GET_ALL, STRATEGY, STRATEGY_CODE, STRATEGYS_CONNECTION, SYMBOL_LEVERAGE, SYMBOL_PRICE, UI_CODE, USABLE_RUNNERS, VERIFY_PASSWORD_LINK_TOKEN } from "./gql";

class ApiService {
  async addApi(args: AddApiInput = {} as AddApiInput, opt: Options = {}) {
    return await query<Api>(ADD_API, { ...opt, variables: { input: args } })
  }

  async addBot(args: AddBotInput = {} as AddBotInput, opt: Options = {}) {
    return await query<Bot>(ADD_BOT, { ...opt, variables: { input: args } })
  }

  async addCollaborator(args: AddCollaboratorInput = {} as AddCollaboratorInput, opt: Options = {}) {
    return await query<Collaborator>(ADD_COLLABORATOR, { ...opt, variables: { input: args } })
  }

  async addLog(args: AddLogInput = {} as AddLogInput, opt: Options = {}) {
    return await query<Log>(ADD_LOG, { ...opt, variables: { input: args } })
  }

  async addRunnerStrategy(args: AddRunnerStrategyInput = {} as AddRunnerStrategyInput, opt: Options = {}) {
    return await query<RunnerStrategy>(ADD_RUNNER_STRATEGY, { ...opt, variables: { input: args } })
  }

  async addStrategy(args: AddStrategyInput = {} as AddStrategyInput, opt: Options = {}) {
    return await query<Strategy>(ADD_STRATEGY, { ...opt, variables: { input: args } })
  }

  async addToken(args: AddTokenInput = {} as AddTokenInput, opt: Options = {}) {
    return await query<Token>(ADD_TOKEN, { ...opt, variables: { input: args } })
  }

  async clearLogs(args: MutationClearLogsArgs = {} as MutationClearLogsArgs, opt: Options = {}) {
    return await query<boolean>(CLEAR_LOGS, { ...opt, variables: args })
  }

  async closePosition(args: MutationClosePositionArgs = {} as MutationClosePositionArgs, opt: Options = {}) {
    return await query<boolean>(CLOSE_POSITION, { ...opt, variables: args })
  }

  async confirmCliLogin(args: CliLoginInput = {} as CliLoginInput, opt: Options = {}) {
    return await query<boolean>(CONFIRM_CLI_LOGIN, { ...opt, variables: { input: args } })
  }

  async createApi(args: CreateApiInput = {} as CreateApiInput, opt: Options = {}) {
    return await query<Api>(CREATE_API, { ...opt, variables: { input: args } })
  }

  async createExitRule(args: CreateExitRuleInput = {} as CreateExitRuleInput, opt: Options = {}) {
    return await query<ExitRule>(CREATE_EXIT_RULE, { ...opt, variables: { input: args } })
  }

  async createOrder(args: CreateOrderInput = {} as CreateOrderInput, opt: Options = {}) {
    return await query<Order>(CREATE_ORDER, { ...opt, variables: { input: args } })
  }

  async createSpotOrder(args: SpotOrderInput = {} as SpotOrderInput, opt: Options = {}) {
    return await query<boolean>(CREATE_SPOT_ORDER, { ...opt, variables: { input: args } })
  }

  async createTodo(args: CreateTodoInput = {} as CreateTodoInput, opt: Options = {}) {
    return await query<Todo>(CREATE_TODO, { ...opt, variables: { input: args } })
  }

  async createValidatedNotifier(args: CreateNotifierInput = {} as CreateNotifierInput, opt: Options = {}) {
    return await query<NotifierCreateObject>(CREATE_VALIDATED_NOTIFIER, { ...opt, variables: { input: args } })
  }

  async deleteApi(args: DeleteApiInput = {} as DeleteApiInput, opt: Options = {}) {
    return await query<boolean>(DELETE_API, { ...opt, variables: { input: args } })
  }

  async deleteBot(args: DeleteBotInput = {} as DeleteBotInput, opt: Options = {}) {
    return await query<boolean>(DELETE_BOT, { ...opt, variables: { input: args } })
  }

  async deleteExitRule(args: DeleteExitRuleInput = {} as DeleteExitRuleInput, opt: Options = {}) {
    return await query<boolean>(DELETE_EXIT_RULE, { ...opt, variables: { input: args } })
  }

  async deleteManyOrders(args: DeleteOrderInput = {} as DeleteOrderInput, opt: Options = {}) {
    return await query<number>(DELETE_MANY_ORDERS, { ...opt, variables: { input: args } })
  }

  async deleteNotifier(args: DeleteNotifierInput = {} as DeleteNotifierInput, opt: Options = {}) {
    return await query<boolean>(DELETE_NOTIFIER, { ...opt, variables: { input: args } })
  }

  async deleteTodo(args: DeleteTodoInput = {} as DeleteTodoInput, opt: Options = {}) {
    return await query<boolean>(DELETE_TODO, { ...opt, variables: { input: args } })
  }

  async deleteToken(args: DeleteTokenInput = {} as DeleteTokenInput, opt: Options = {}) {
    return await query<boolean>(DELETE_TOKEN, { ...opt, variables: { input: args } })
  }

  async depositByCode(args: DepositByCodeInput = {} as DepositByCodeInput, opt: Options = {}) {
    return await query<boolean>(DEPOSIT_BY_CODE, { ...opt, variables: { input: args } })
  }

  async forgotPassword(args: ForgotPasswordInput = {} as ForgotPasswordInput, opt: Options = {}) {
    return await query<boolean>(FORGOT_PASSWORD, { ...opt, variables: { input: args } })
  }

  async futuresOrder(args: FuturesOrderInput = {} as FuturesOrderInput, opt: Options = {}) {
    return await query<boolean>(FUTURES_ORDER, { ...opt, variables: { input: args } })
  }

  async generateBotStopByPasswordLink(args: GenerateBotStopByPasswordLinkInput = {} as GenerateBotStopByPasswordLinkInput, opt: Options = {}) {
    return await query<string>(GENERATE_BOT_STOP_BY_PASSWORD_LINK, { ...opt, variables: { input: args } })
  }

  async generateSetStopPasswordLink(args: GenerateSetStopPasswordLinkInput = {} as GenerateSetStopPasswordLinkInput, opt: Options = {}) {
    return await query<string>(GENERATE_SET_STOP_PASSWORD_LINK, { ...opt, variables: { input: args } })
  }

  async getOrders(args: MutationGetOrdersArgs = {} as MutationGetOrdersArgs, opt: Options = {}) {
    return await query<Orders>(GET_ORDERS, { ...opt, variables: args })
  }

  async increaseDuration(args: IncreaseDurationInput = {} as IncreaseDurationInput, opt: Options = {}) {
    return await query<boolean>(INCREASE_DURATION, { ...opt, variables: { input: args } })
  }

  async loginByCli(args: LoginByCliInput = {} as LoginByCliInput, opt: Options = {}) {
    return await query<LoginSuccessPayload>(LOGIN_BY_CLI, { ...opt, variables: { input: args } })
  }

  async loginByEmail(args: LoginByEmailInput = {} as LoginByEmailInput, opt: Options = {}) {
    return await query<LoginSuccessPayload>(LOGIN_BY_EMAIL, { ...opt, variables: { input: args } })
  }

  async loginByGithub(args: MutationLoginByGithubArgs = {} as MutationLoginByGithubArgs, opt: Options = {}) {
    return await query<LoginSuccessPayload>(LOGIN_BY_GITHUB, { ...opt, variables: args })
  }

  async loginByGoogle(args: MutationLoginByGoogleArgs = {} as MutationLoginByGoogleArgs, opt: Options = {}) {
    return await query<LoginSuccessPayload>(LOGIN_BY_GOOGLE, { ...opt, variables: args })
  }

  async loginByPersonalToken(args: MutationLoginByPersonalTokenArgs = {} as MutationLoginByPersonalTokenArgs, opt: Options = {}) {
    return await query<LoginSuccessPayload>(LOGIN_BY_PERSONAL_TOKEN, { ...opt, variables: args })
  }

  async loginByWallet(args: VerifySignMessageInput = {} as VerifySignMessageInput, opt: Options = {}) {
    return await query<LoginSuccessPayload>(LOGIN_BY_WALLET, { ...opt, variables: { input: args } })
  }

  async matchOrder(args: MatchOrderInput = {} as MatchOrderInput, opt: Options = {}) {
    return await query<boolean>(MATCH_ORDER, { ...opt, variables: { input: args } })
  }

  async modifyApi(args: ModifyApiInput = {} as ModifyApiInput, opt: Options = {}) {
    return await query<Api>(MODIFY_API, { ...opt, variables: { input: args } })
  }

  async modifyPassword(args: ModifyPasswordInput = {} as ModifyPasswordInput, opt: Options = {}) {
    return await query<boolean>(MODIFY_PASSWORD, { ...opt, variables: { input: args } })
  }

  async modifyStrategy(args: ModifyStrategyInput = {} as ModifyStrategyInput, opt: Options = {}) {
    return await query<boolean>(MODIFY_STRATEGY, { ...opt, variables: { input: args } })
  }

  async publishBotEvent(args: PublishBotEventInput = {} as PublishBotEventInput, opt: Options = {}) {
    return await query<boolean>(PUBLISH_BOT_EVENT, { ...opt, variables: { input: args } })
  }

  async regenerateBotApiKey(args: RegenerateBotApiKeyInput = {} as RegenerateBotApiKeyInput, opt: Options = {}) {
    return await query<boolean>(REGENERATE_BOT_API_KEY, { ...opt, variables: { input: args } })
  }

  async regenerateStrategyToken(args: RegenerateStrategyTokenInput = {} as RegenerateStrategyTokenInput, opt: Options = {}) {
    return await query<boolean>(REGENERATE_STRATEGY_TOKEN, { ...opt, variables: { input: args } })
  }

  async registerByEmail(args: RegisterByEmailInput = {} as RegisterByEmailInput, opt: Options = {}) {
    return await query<boolean>(REGISTER_BY_EMAIL, { ...opt, variables: { input: args } })
  }

  async registerRunner(args: RegisterRunnerInput = {} as RegisterRunnerInput, opt: Options = {}) {
    return await query<Runner>(REGISTER_RUNNER, { ...opt, variables: { input: args } })
  }

  async removeApi(args: RemoveApiInput = {} as RemoveApiInput, opt: Options = {}) {
    return await query<boolean>(REMOVE_API, { ...opt, variables: { input: args } })
  }

  async removeCollaborator(args: RemoveCollaboratorInput = {} as RemoveCollaboratorInput, opt: Options = {}) {
    return await query<Collaborator>(REMOVE_COLLABORATOR, { ...opt, variables: { input: args } })
  }

  async removeKV(args: RemoveKvInput = {} as RemoveKvInput, opt: Options = {}) {
    return await query<boolean>(REMOVE_K_V, { ...opt, variables: { input: args } })
  }

  async removeRunner(args: RemoveRunnerInput = {} as RemoveRunnerInput, opt: Options = {}) {
    return await query<boolean>(REMOVE_RUNNER, { ...opt, variables: { input: args } })
  }

  async removeRunnerStrategy(args: RemoveRunnerStrategyInput = {} as RemoveRunnerStrategyInput, opt: Options = {}) {
    return await query<RunnerStrategy>(REMOVE_RUNNER_STRATEGY, { ...opt, variables: { input: args } })
  }

  async removeStrategy(args: RemoveStrategyInput = {} as RemoveStrategyInput, opt: Options = {}) {
    return await query<boolean>(REMOVE_STRATEGY, { ...opt, variables: { input: args } })
  }

  async resetPassword(args: ResetPasswordInput = {} as ResetPasswordInput, opt: Options = {}) {
    return await query<boolean>(RESET_PASSWORD, { ...opt, variables: { input: args } })
  }

  async runBacktest(args: RunBacktestInput = {} as RunBacktestInput, opt: Options = {}) {
    return await query<boolean>(RUN_BACKTEST, { ...opt, variables: { input: args } })
  }

  async runBot(args: RunBotInput = {} as RunBotInput, opt: Options = {}) {
    return await query<boolean>(RUN_BOT, { ...opt, variables: { input: args } })
  }

  async setKV(args: SetKvInput = {} as SetKvInput, opt: Options = {}) {
    return await query<boolean>(SET_K_V, { ...opt, variables: { input: args } })
  }

  async setStopBotPassword(args: SetStopBotPasswordInput = {} as SetStopBotPasswordInput, opt: Options = {}) {
    return await query<boolean>(SET_STOP_BOT_PASSWORD, { ...opt, variables: { input: args } })
  }

  async stopBacktest(args: StopBacktestInput = {} as StopBacktestInput, opt: Options = {}) {
    return await query<boolean>(STOP_BACKTEST, { ...opt, variables: { input: args } })
  }

  async stopBot(args: StopBotInput = {} as StopBotInput, opt: Options = {}) {
    return await query<boolean>(STOP_BOT, { ...opt, variables: { input: args } })
  }

  async stopBotByPassword(args: StopBotByPasswordInput = {} as StopBotByPasswordInput, opt: Options = {}) {
    return await query<boolean>(STOP_BOT_BY_PASSWORD, { ...opt, variables: { input: args } })
  }

  async storageClear(args: any = {} as any, opt: Options = {}) {
    return await query<boolean>(STORAGE_CLEAR, { ...opt, variables: args })
  }

  async storageRemove(args: StorageRemoveInput = {} as StorageRemoveInput, opt: Options = {}) {
    return await query<boolean>(STORAGE_REMOVE, { ...opt, variables: { input: args } })
  }

  async storageSet(args: StorageSetInput = {} as StorageSetInput, opt: Options = {}) {
    return await query<boolean>(STORAGE_SET, { ...opt, variables: { input: args } })
  }

  async storageSetAll(args: StorageSetAllInput = {} as StorageSetAllInput, opt: Options = {}) {
    return await query<boolean>(STORAGE_SET_ALL, { ...opt, variables: { input: args } })
  }

  async syncSpotOrder(args: MutationSyncSpotOrderArgs = {} as MutationSyncSpotOrderArgs, opt: Options = {}) {
    return await query<SyncOrdersRes>(SYNC_SPOT_ORDER, { ...opt, variables: args })
  }

  async syncStrategy(args: SyncStrategyInput = {} as SyncStrategyInput, opt: Options = {}) {
    return await query<boolean>(SYNC_STRATEGY, { ...opt, variables: { input: args } })
  }

  async updateApi(args: UpdateApiInput = {} as UpdateApiInput, opt: Options = {}) {
    return await query<Api>(UPDATE_API, { ...opt, variables: { input: args } })
  }

  async updateBot(args: UpdateBotInput = {} as UpdateBotInput, opt: Options = {}) {
    return await query<Bot>(UPDATE_BOT, { ...opt, variables: { input: args } })
  }

  async updateBotName(args: UpdateBotNameInput = {} as UpdateBotNameInput, opt: Options = {}) {
    return await query<boolean>(UPDATE_BOT_NAME, { ...opt, variables: { input: args } })
  }

  async updateBotParams(args: UpdateBotParamsInput = {} as UpdateBotParamsInput, opt: Options = {}) {
    return await query<boolean>(UPDATE_BOT_PARAMS, { ...opt, variables: { input: args } })
  }

  async updateEmail(args: UpdateEmailInput = {} as UpdateEmailInput, opt: Options = {}) {
    return await query<boolean>(UPDATE_EMAIL, { ...opt, variables: { input: args } })
  }

  async updateExitRule(args: UpdateExitRuleInput = {} as UpdateExitRuleInput, opt: Options = {}) {
    return await query<ExitRule>(UPDATE_EXIT_RULE, { ...opt, variables: { input: args } })
  }

  async updateManyOrders(args: UpdateManyOrderInput = {} as UpdateManyOrderInput, opt: Options = {}) {
    return await query<boolean>(UPDATE_MANY_ORDERS, { ...opt, variables: { input: args } })
  }

  async updateOrder(args: UpdateOrderInput = {} as UpdateOrderInput, opt: Options = {}) {
    return await query<Order>(UPDATE_ORDER, { ...opt, variables: { input: args } })
  }

  async updateRunner(args: UpdateRunnerInput = {} as UpdateRunnerInput, opt: Options = {}) {
    return await query<Runner>(UPDATE_RUNNER, { ...opt, variables: { input: args } })
  }

  async updateRunnerHeartbeat(args: UpdateRunnerHeartbeatInput = {} as UpdateRunnerHeartbeatInput, opt: Options = {}) {
    return await query<Runner>(UPDATE_RUNNER_HEARTBEAT, { ...opt, variables: { input: args } })
  }

  async updateStrategy(args: UpdateStrategyInput = {} as UpdateStrategyInput, opt: Options = {}) {
    return await query<Strategy>(UPDATE_STRATEGY, { ...opt, variables: { input: args } })
  }

  async updateStrategyCode(args: UpdateStrategyCodeInput = {} as UpdateStrategyCodeInput, opt: Options = {}) {
    return await query<boolean>(UPDATE_STRATEGY_CODE, { ...opt, variables: { input: args } })
  }

  async updateTodo(args: UpdateTodoInput = {} as UpdateTodoInput, opt: Options = {}) {
    return await query<Todo>(UPDATE_TODO, { ...opt, variables: { input: args } })
  }

  async updateUiCode(args: UpdateUiCodeInput = {} as UpdateUiCodeInput, opt: Options = {}) {
    return await query<boolean>(UPDATE_UI_CODE, { ...opt, variables: { input: args } })
  }

  async updateUser(args: UpdateUserInput = {} as UpdateUserInput, opt: Options = {}) {
    return await query<User>(UPDATE_USER, { ...opt, variables: { input: args } })
  }

  async updateValidatedNotifier(args: UpdateNotifierInput = {} as UpdateNotifierInput, opt: Options = {}) {
    return await query<NotifierCreateObject>(UPDATE_VALIDATED_NOTIFIER, { ...opt, variables: { input: args } })
  }

  async aggTrades(args: QueryAggTradesArgs = {} as QueryAggTradesArgs, opt: Options = {}) {
    return await query<TradeRecord[]>(AGG_TRADES, { ...opt, variables: args })
  }

  async api(args: QueryApiArgs = {} as QueryApiArgs, opt: Options = {}) {
    return await query<Api>(API, { ...opt, variables: args })
  }

  async balance(args: QueryBalanceArgs = {} as QueryBalanceArgs, opt: Options = {}) {
    return await query<Balance>(BALANCE, { ...opt, variables: args })
  }

  async bot(args: QueryBotArgs = {} as QueryBotArgs, opt: Options = {}) {
    return await query<Bot>(BOT, { ...opt, variables: args })
  }

  async botParams(args: QueryBotParamsArgs = {} as QueryBotParamsArgs, opt: Options = {}) {
    return await query<BotParamsPayload>(BOT_PARAMS, { ...opt, variables: args })
  }

  async checkPersonalToken(args: QueryCheckPersonalTokenArgs = {} as QueryCheckPersonalTokenArgs, opt: Options = {}) {
    return await query<User>(CHECK_PERSONAL_TOKEN, { ...opt, variables: args })
  }

  async checkResetPasswordToken(args: QueryCheckResetPasswordTokenArgs = {} as QueryCheckResetPasswordTokenArgs, opt: Options = {}) {
    return await query<boolean>(CHECK_RESET_PASSWORD_TOKEN, { ...opt, variables: args })
  }

  async checkVerifyEmailToken(args: QueryCheckVerifyEmailTokenArgs = {} as QueryCheckVerifyEmailTokenArgs, opt: Options = {}) {
    return await query<LoginSuccessPayload>(CHECK_VERIFY_EMAIL_TOKEN, { ...opt, variables: args })
  }

  async cliLoginStatus(args: QueryCliLoginStatusArgs = {} as QueryCliLoginStatusArgs, opt: Options = {}) {
    return await query<CliLoginStatus>(CLI_LOGIN_STATUS, { ...opt, variables: args })
  }

  async exitRule(args: QueryExitRuleArgs = {} as QueryExitRuleArgs, opt: Options = {}) {
    return await query<ExitRule>(EXIT_RULE, { ...opt, variables: args })
  }

  async exitRules(args: QueryExitRulesArgs = {} as QueryExitRulesArgs, opt: Options = {}) {
    return await query<ExitRule[]>(EXIT_RULES, { ...opt, variables: args })
  }

  async exitRulesConnection(args: QueryExitRulesConnectionArgs = {} as QueryExitRulesConnectionArgs, opt: Options = {}) {
    return await query<ExitRulesConnection>(EXIT_RULES_CONNECTION, { ...opt, variables: args })
  }

  async generateDepositCode(args: GenerateDepositCodeInput = {} as GenerateDepositCodeInput, opt: Options = {}) {
    return await query<boolean>(GENERATE_DEPOSIT_CODE, { ...opt, variables: { input: args } })
  }

  async gridOrders(args: QueryGridOrdersArgs = {} as QueryGridOrdersArgs, opt: Options = {}) {
    return await query<GridOrder[]>(GRID_ORDERS, { ...opt, variables: args })
  }

  async isStopPasswordEmpty(args: QueryIsStopPasswordEmptyArgs = {} as QueryIsStopPasswordEmptyArgs, opt: Options = {}) {
    return await query<boolean>(IS_STOP_PASSWORD_EMPTY, { ...opt, variables: args })
  }

  async kv(args: QueryKvArgs = {} as QueryKvArgs, opt: Options = {}) {
    return await query<any>(KV, { ...opt, variables: args })
  }

  async kvs(args: QueryKvsArgs = {} as QueryKvsArgs, opt: Options = {}) {
    return await query<any>(KVS, { ...opt, variables: args })
  }

  async nonce(args: QueryNonceArgs = {} as QueryNonceArgs, opt: Options = {}) {
    return await query<string>(NONCE, { ...opt, variables: args })
  }

  async notifier(args: QueryNotifierArgs = {} as QueryNotifierArgs, opt: Options = {}) {
    return await query<Notifier>(NOTIFIER, { ...opt, variables: args })
  }

  async openedOrders(args: QueryOpenedOrdersArgs = {} as QueryOpenedOrdersArgs, opt: Options = {}) {
    return await query<Order[]>(OPENED_ORDERS, { ...opt, variables: args })
  }

  async order(args: QueryOrderArgs = {} as QueryOrderArgs, opt: Options = {}) {
    return await query<Order>(ORDER, { ...opt, variables: args })
  }

  async orderbooks(args: QueryOrderbooksArgs = {} as QueryOrderbooksArgs, opt: Options = {}) {
    return await query<Orderbook[]>(ORDERBOOKS, { ...opt, variables: args })
  }

  async orders(args: QueryOrdersArgs = {} as QueryOrdersArgs, opt: Options = {}) {
    return await query<Order[]>(ORDERS, { ...opt, variables: args })
  }

  async ordersConnection(args: QueryOrdersConnectionArgs = {} as QueryOrdersConnectionArgs, opt: Options = {}) {
    return await query<OrdersConnection>(ORDERS_CONNECTION, { ...opt, variables: args })
  }

  async ownedApis(args: any = {} as any, opt: Options = {}) {
    return await query<Api[]>(OWNED_APIS, { ...opt, variables: args })
  }

  async ownedNotifiers(args: any = {} as any, opt: Options = {}) {
    return await query<Notifier[]>(OWNED_NOTIFIERS, { ...opt, variables: args })
  }

  async ownedRunners(args: any = {} as any, opt: Options = {}) {
    return await query<Runner[]>(OWNED_RUNNERS, { ...opt, variables: args })
  }

  async recommendedGridParams(args: QueryRecommendedGridParamsArgs = {} as QueryRecommendedGridParamsArgs, opt: Options = {}) {
    return await query<GridParamsPayload>(RECOMMENDED_GRID_PARAMS, { ...opt, variables: args })
  }

  async saveSymbols(args: QuerySaveSymbolsArgs = {} as QuerySaveSymbolsArgs, opt: Options = {}) {
    return await query<boolean>(SAVE_SYMBOLS, { ...opt, variables: args })
  }

  async setLeverage(args: SetLeverageInput = {} as SetLeverageInput, opt: Options = {}) {
    return await query<boolean>(SET_LEVERAGE, { ...opt, variables: { input: args } })
  }

  async signals(args: any = {} as any, opt: Options = {}) {
    return await query<Signal[]>(SIGNALS, { ...opt, variables: args })
  }

  async spotOrders(args: QuerySpotOrdersArgs = {} as QuerySpotOrdersArgs, opt: Options = {}) {
    return await query<SpotOrder[]>(SPOT_ORDERS, { ...opt, variables: args })
  }

  async stats(args: any = {} as any, opt: Options = {}) {
    return await query<Stats>(STATS, { ...opt, variables: args })
  }

  async storageGet(args: QueryStorageGetArgs = {} as QueryStorageGetArgs, opt: Options = {}) {
    return await query<any>(STORAGE_GET, { ...opt, variables: args })
  }

  async storageGetAll(args: any = {} as any, opt: Options = {}) {
    return await query<any>(STORAGE_GET_ALL, { ...opt, variables: args })
  }

  async strategy(args: QueryStrategyArgs = {} as QueryStrategyArgs, opt: Options = {}) {
    return await query<Strategy>(STRATEGY, { ...opt, variables: args })
  }

  async strategyCode(args: QueryStrategyCodeArgs = {} as QueryStrategyCodeArgs, opt: Options = {}) {
    return await query<string>(STRATEGY_CODE, { ...opt, variables: args })
  }

  async strategysConnection(args: QueryStrategysConnectionArgs = {} as QueryStrategysConnectionArgs, opt: Options = {}) {
    return await query<StrategysConnection>(STRATEGYS_CONNECTION, { ...opt, variables: args })
  }

  async symbolLeverage(args: QuerySymbolLeverageArgs = {} as QuerySymbolLeverageArgs, opt: Options = {}) {
    return await query<number>(SYMBOL_LEVERAGE, { ...opt, variables: args })
  }

  async symbolPrice(args: QuerySymbolPriceArgs = {} as QuerySymbolPriceArgs, opt: Options = {}) {
    return await query<number>(SYMBOL_PRICE, { ...opt, variables: args })
  }

  async uiCode(args: QueryUiCodeArgs = {} as QueryUiCodeArgs, opt: Options = {}) {
    return await query<string>(UI_CODE, { ...opt, variables: args })
  }

  async usableRunners(args: QueryUsableRunnersArgs = {} as QueryUsableRunnersArgs, opt: Options = {}) {
    return await query<Runner[]>(USABLE_RUNNERS, { ...opt, variables: args })
  }

  async verifyPasswordLinkToken(args: QueryVerifyPasswordLinkTokenArgs = {} as QueryVerifyPasswordLinkTokenArgs, opt: Options = {}) {
    return await query<Bot>(VERIFY_PASSWORD_LINK_TOKEN, { ...opt, variables: args })
  }
}

export const apiService = new ApiService();
