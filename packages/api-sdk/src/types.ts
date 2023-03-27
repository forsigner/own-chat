export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
};

/** 创建API */
export type AddApiInput = {
  /** apiKey */
  apiKey: Scalars['String'];
  /** 交易所类型 */
  exchange: ExchangeType;
  /** 该 Api 名字 */
  name: Scalars['String'];
  /** secretKey */
  secretKey: Scalars['String'];
};

/** 新增机器人 */
export type AddBotInput = {
  /** api ID */
  apiId?: InputMaybe<Scalars['Int']>;
  /** 机器人名字 */
  name: Scalars['String'];
  /** 参数 */
  params: Scalars['JSON'];
  /** 策略ID */
  strategyId: Scalars['Int'];
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 新增Collaborator */
export type AddCollaboratorInput = {
  /** 角色类型 */
  roleType: RoleType;
  /** 策略ID */
  strategyId: Scalars['Int'];
  /** 用户ID */
  userId: Scalars['Int'];
};

export type AddLogInput = {
  /** 机器人ID */
  botId: Scalars['Int'];
  /** 日志内容 */
  content: Scalars['String'];
  /** 类型 */
  type?: InputMaybe<Scalars['String']>;
};

/** 新增RunnerStrategy */
export type AddRunnerStrategyInput = {
  /** Runner ID */
  runnerId: Scalars['Int'];
  /** 策略ID */
  strategyId: Scalars['Int'];
};

/** 创建策略 */
export type AddStrategyInput = {
  /** 介绍 */
  intro?: InputMaybe<Scalars['String']>;
  /** 策略显示名字 */
  name?: InputMaybe<Scalars['String']>;
  /** 策略唯一名字 */
  slug: Scalars['String'];
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 添加 access token */
export type AddTokenInput = {
  /** description */
  description: Scalars['String'];
  /** type */
  type?: InputMaybe<Scalars['String']>;
};

/** 交易所Api */
export type Api = {
  __typename?: 'Api';
  createdAt?: Maybe<Scalars['DateTime']>;
  /** 交易所类型 */
  exchange: ExchangeType;
  id: Scalars['Int'];
  /** 是否是模拟盘 */
  isSimulated?: Maybe<Scalars['Boolean']>;
  /** 该 Api 名字 */
  name: Scalars['String'];
  /** secretKey */
  passphrase?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 筛选条件 */
export type ApiWhereInput = {
  /** 用户ID */
  userId: Scalars['Int'];
};

/** connection */
export type ApisConnection = {
  __typename?: 'ApisConnection';
  hasNextPage: Scalars['Boolean'];
  items: Array<Api>;
  totalCount: Scalars['Int'];
};

/** 回测日志 */
export type BacktestLog = {
  __typename?: 'BacktestLog';
  /** 日志内容 */
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** 类型 */
  type?: Maybe<Scalars['String']>;
};

/** 回测结果 */
export type BacktestResult = {
  __typename?: 'BacktestResult';
  /** 年化收益率是指把当前的收益率（日收益率、周收益率、月收益率等）换算成年收益率来计算的，是一种理论收益，并不是真正已经取得的收益率。年化收益率需要和年收益率区分开，年收益率是指策略执行一年的收益率，是实际的收益。 */
  annualReturn: Scalars['Float'];
  /** 买入并持有收益率，类似基准收益率 */
  buyAndHoldReturn: Scalars['Float'];
  /** K线数据 */
  candles: Array<Candle>;
  chartConfig?: Maybe<ChartConfig>;
  /** 策略收益也就是策略开始到结束，总资产的变化率 */
  cumulativeReturn: Scalars['Float'];
  /** 运行时间 */
  duration: Scalars['Int'];
  /** 手续费 */
  fee: Scalars['Float'];
  /** 手续费率 */
  feeRatio: Scalars['Float'];
  /** 回测日志 */
  logs: Array<BacktestLog>;
  /** 描述的策略最大的亏损情况。最大回撤通常越小越好 */
  maxDrawdown: Scalars['Float'];
  /** 另一种风险回报绩效指标。它相对于Sharpe比率的最大优势是-通过构造-它考虑了所有统计时刻，而Sharpe比率仅考虑前两个时刻。 */
  omegaRatio?: Maybe<Scalars['Float']>;
  /** 回测订单列表 */
  orders: Array<Order>;
  /** 利润 */
  profit: Scalars['Float'];
  /** 夏普 */
  sharpeRatio?: Maybe<Scalars['Float']>;
  /** 描述的是策略在单位下行风险下所能获得的超额收益。 */
  sortino?: Maybe<Scalars['Float']>;
  /** 胜率 */
  winRate: Scalars['Float'];
};

/** 回测状态 */
export enum BacktestStatus {
  Error = 'Error',
  Initial = 'Initial',
  Running = 'Running',
  Stopped = 'Stopped'
}

export type Balance = {
  __typename?: 'Balance';
  /** 可用余额 */
  free: Scalars['String'];
  /** 锁住的 */
  locked: Scalars['String'];
};

/** 机器人 */
export type Bot = {
  __typename?: 'Bot';
  /** 交易所 API ID */
  apiId?: Maybe<Scalars['Int']>;
  /** apiKey */
  apiKey?: Maybe<Scalars['String']>;
  /** 回测机器人参数 */
  backtestBotParams?: Maybe<Scalars['JSON']>;
  /** 回测参数 */
  backtestParams?: Maybe<Scalars['JSON']>;
  /** 回测状态 */
  backtestStatus: BacktestStatus;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** 运行时间 */
  duration: Scalars['Int'];
  /** 中止事件 */
  endTime?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  /** 是否公开 */
  isPublic: Scalars['Boolean'];
  /** 名字 */
  name: Scalars['String'];
  /** 参数 */
  params?: Maybe<Scalars['JSON']>;
  /** 状态 */
  status: BotStatus;
  /** 持久化策略(机器人)信息 */
  storage?: Maybe<Scalars['JSON']>;
  /** Strategy */
  strategy: Strategy;
  /** 策略ID */
  strategyId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 机器人事件 */
export type BotEventPayload = {
  __typename?: 'BotEventPayload';
  /** 事件数据 */
  data: Scalars['JSON'];
  /** 机器人事件 */
  eventName: Scalars['String'];
};

/** Bot params */
export type BotParamsPayload = {
  __typename?: 'BotParamsPayload';
  params?: Maybe<Scalars['JSON']>;
};

export type BotStats = {
  __typename?: 'BotStats';
  /** 运行时间 */
  duration: Scalars['Int'];
  /** 订单数 */
  orderNum: Scalars['Int'];
  /** 可用余额 */
  profit: Scalars['Float'];
};

/** 机器人状态 */
export enum BotStatus {
  Booting = 'Booting',
  Error = 'Error',
  Running = 'Running',
  Stopped = 'Stopped'
}

/** 筛选条件 */
export type BotWhereInput = {
  /** 状态 */
  status?: InputMaybe<BotStatus>;
  /** 策略ID */
  strategyId?: InputMaybe<Scalars['Int']>;
};

/** connection */
export type BotsConnection = {
  __typename?: 'BotsConnection';
  hasNextPage: Scalars['Boolean'];
  items: Array<Bot>;
  totalCount: Scalars['Int'];
};

/** 蜡烛图 */
export type Candle = {
  __typename?: 'Candle';
  close: Scalars['Float'];
  closeTime?: Maybe<Scalars['Float']>;
  high: Scalars['Float'];
  low: Scalars['Float'];
  open: Scalars['Float'];
  openTime?: Maybe<Scalars['Float']>;
  period?: Maybe<Scalars['String']>;
  volume: Scalars['Float'];
};

/** 图表配置 */
export type ChartConfig = {
  __typename?: 'ChartConfig';
  /** 布林带 */
  bb?: Maybe<Array<Scalars['Int']>>;
  /** 是否显示 K 线 */
  candle?: Maybe<Scalars['Boolean']>;
  ema?: Maybe<Array<Scalars['Int']>>;
  /** kdj */
  kdj?: Maybe<Scalars['Float']>;
  ma?: Maybe<Array<Scalars['Int']>>;
  /** roc */
  roc?: Maybe<Scalars['Float']>;
  /** rsi */
  rsi?: Maybe<Scalars['Float']>;
  /** 成交量 */
  volume?: Maybe<Scalars['Boolean']>;
};

/** CLI Login */
export type CliLoginInput = {
  /** CLI token */
  cliToken: Scalars['String'];
};

/** CliLoginStatus */
export enum CliLoginStatus {
  Canceled = 'Canceled',
  Confirmed = 'Confirmed',
  Init = 'Init'
}

/** 协作者 */
export type Collaborator = {
  __typename?: 'Collaborator';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  /** 角色类型 */
  roleType: RoleType;
  /** 策略ID */
  strategyId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** User */
  user: User;
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 筛选条件 */
export type CollaboratorWhereInput = {
  /** ID */
  id?: InputMaybe<Scalars['Int']>;
  /** 用户ID */
  userId: Scalars['Int'];
};

/** connection */
export type CollaboratorsConnection = {
  __typename?: 'CollaboratorsConnection';
  hasNextPage: Scalars['Boolean'];
  items: Array<Collaborator>;
  totalCount: Scalars['Int'];
};

/** 创建 */
export type CreateApiInput = {
  /** apiKey */
  apiKey: Scalars['String'];
  /** 交易所类型 */
  exchange: ExchangeType;
  /** 是否是模拟盘 */
  isSimulated?: InputMaybe<Scalars['Boolean']>;
  /** 该 Api 名字 */
  name: Scalars['String'];
  /** secretKey */
  passphrase?: InputMaybe<Scalars['String']>;
  /** secretKey */
  secretKey: Scalars['String'];
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 创建机器人 */
export type CreateBotInput = {
  /** 机器人名字 */
  name: Scalars['String'];
  /** 参数 */
  params: Scalars['JSON'];
  /** 策略ID */
  strategyId: Scalars['Int'];
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 创建 */
export type CreateCollaboratorInput = {
  /** 策略ID */
  strategyId: Scalars['Int'];
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 创建 */
export type CreateDepositCodeInput = {
  /** 金额 */
  cashAmount: Scalars['Float'];
  /** 充值码 */
  code: Scalars['String'];
};

/** 创建 */
export type CreateExitRuleInput = {
  /** 唯一Code */
  code: ExitRuleCode;
  /** 名字 */
  name: Scalars['String'];
  /** 类型 */
  type: ExitRuleType;
};

/** 创建 */
export type CreateGridOrderInput = {
  /** 机器人ID */
  botId?: InputMaybe<Scalars['Int']>;
  /** 交易所订单ID */
  buyOrderId?: InputMaybe<Scalars['Int']>;
  /** 交易所订单ID */
  sellOrderId?: InputMaybe<Scalars['Int']>;
};

/** 创建 */
export type CreateInvitationTokenInput = {
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 创建 */
export type CreateLogInput = {
  /** 机器人ID */
  botId: Scalars['Int'];
  /** 日志内容 */
  content: Scalars['String'];
};

/** 创建通知通道 */
export type CreateNotifierInput = {
  /** 配置 */
  config?: InputMaybe<Scalars['JSON']>;
  /** 名字 */
  name: Scalars['String'];
  /** 通知通道类型 */
  type: NotifierType;
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 创建 */
export type CreateOrderInput = {
  /** 机器人ID */
  botId: Scalars['Int'];
  /** 交易所自定义订单ID */
  clientOrderId: Scalars['String'];
  /** 类型，做多入场、做空入场、做多止损... */
  operationType: Scalars['String'];
  /** 交易所订单ID */
  orderId: Scalars['String'];
  /** 成交价格 */
  price?: InputMaybe<Scalars['Float']>;
  /** 成交量 */
  qty?: InputMaybe<Scalars['Float']>;
  /** 成交金额 */
  quoteQty?: InputMaybe<Scalars['Float']>;
  /** 交易类型 */
  side?: InputMaybe<Scalars['String']>;
  /** 状态 */
  status: OrderStatus;
  /** 交易对 */
  symbol: Scalars['String'];
  /** 订单时间 */
  time: Scalars['Float'];
  /** 类型，市价、限价 */
  type: Scalars['String'];
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 创建策略 */
export type CreateRunnerInput = {
  /** 策略名字 */
  name: Scalars['String'];
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 创建 */
export type CreateRunnerStrategyInput = {
  /** Runner ID */
  runnerId: Scalars['Int'];
  /** 策略ID */
  strategyId: Scalars['Int'];
};

/** 创建 */
export type CreateSourceCodeInput = {
  /** UI 代码 */
  strategyCode: Scalars['String'];
  /** 策略ID */
  strategyId: Scalars['Int'];
  /** UI 代码 */
  uiCode: Scalars['String'];
};

/** 创建策略 */
export type CreateStrategyInput = {
  /** 介绍 */
  intro?: InputMaybe<Scalars['String']>;
  /** 策略名字 */
  name: Scalars['String'];
  /** slug, 唯一标识 */
  slug: Scalars['String'];
  /** 唯一token, sync 的时候用 */
  token?: InputMaybe<Scalars['String']>;
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 创建 */
export type CreateTodoInput = {
  /** 该 Todo Title */
  title: Scalars['String'];
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 创建 */
export type CreateTokenInput = {
  /** description */
  description?: InputMaybe<Scalars['String']>;
  /** type */
  type?: InputMaybe<Scalars['String']>;
  /** 用户ID */
  userId?: InputMaybe<Scalars['Int']>;
  /** description */
  value?: InputMaybe<Scalars['String']>;
};

/** 创建 */
export type CreateTransactionLogInput = {
  /** 总收入 */
  amount: Scalars['Float'];
  /** Deposit/Withdraw/Deduct */
  transactionType: TransactionType;
  /** 钱包ID */
  walletId: Scalars['Int'];
};

/** 创建 */
export type CreateUserInput = {
  nickname: Scalars['String'];
  username: Scalars['String'];
};

/** 创建 */
export type CreateWalletInput = {
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 删除 */
export type DeleteApiInput = {
  /** ID */
  id?: InputMaybe<Scalars['Int']>;
};

/** 删除机器人 */
export type DeleteBotInput = {
  /** Bot ID */
  id: Scalars['Int'];
};

/** 删除 */
export type DeleteCollaboratorInput = {
  /** ID */
  id?: InputMaybe<Scalars['Int']>;
};

/** 删除 */
export type DeleteDepositCodeInput = {
  /** ID */
  id: Scalars['Int'];
};

/** 删除 */
export type DeleteExitRuleInput = {
  id: Scalars['Int'];
};

/** 删除网格订单 */
export type DeleteGridOrderInput = {
  /** 机器人ID */
  botId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** 删除成员 */
export type DeleteInvitationTokenInput = {
  /** ID */
  id: Scalars['Int'];
};

/** 删除日志 */
export type DeleteLogInput = {
  id: Scalars['Int'];
};

/** 删除策略 */
export type DeleteNotifierInput = {
  id: Scalars['Int'];
};

/** 删除订单 */
export type DeleteOrderInput = {
  /** 机器人ID */
  botId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** 删除策略 */
export type DeleteRunnerInput = {
  id: Scalars['Int'];
};

/** 删除 */
export type DeleteRunnerStrategyInput = {
  /** ID */
  id?: InputMaybe<Scalars['Int']>;
};

/** 删除 */
export type DeleteSourceCodeInput = {
  /** ID */
  id: Scalars['Int'];
};

/** 删除策略 */
export type DeleteStrategyInput = {
  id: Scalars['Int'];
};

/** 删除 */
export type DeleteTodoInput = {
  /** ID */
  id: Scalars['Int'];
};

/** 删除 */
export type DeleteTokenInput = {
  /** ID */
  id?: InputMaybe<Scalars['Int']>;
};

/** 删除 */
export type DeleteTransactionLogInput = {
  /** ID */
  id: Scalars['Int'];
};

/** 删除 */
export type DeleteUserInput = {
  /** id */
  id?: InputMaybe<Scalars['Int']>;
  nickname: Scalars['String'];
  username: Scalars['String'];
};

/** 删除 */
export type DeleteWalletInput = {
  /** ID */
  id: Scalars['Int'];
};

/** 根据充值码充值 */
export type DepositByCodeInput = {
  /** 充值码 */
  code: Scalars['String'];
};

export type DepositCode = {
  __typename?: 'DepositCode';
  /** 金额 */
  cashAmount: Scalars['Float'];
  /** 充值码 */
  code: Scalars['String'];
  /** 是否已消费(已使用) */
  consumed: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** 筛选条件 */
export type DepositCodeWhereInput = {
  id: Scalars['Int'];
};

/** connection */
export type DepositCodesConnection = {
  __typename?: 'DepositCodesConnection';
  hasNextPage: Scalars['Boolean'];
  items: Array<DepositCode>;
  totalCount: Scalars['Int'];
};

/** 交易所类型 */
export enum ExchangeType {
  Binance = 'Binance',
  Okx = 'OKX'
}

/** 出场规则/止盈止损策略 */
export type ExitRule = {
  __typename?: 'ExitRule';
  /** 唯一Code */
  code: ExitRuleCode;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  /** 规则名字 */
  name: Scalars['String'];
  /** 类型 */
  type: ExitRuleType;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** 止盈止损规则唯一代码 */
export enum ExitRuleCode {
  StopLossByPercent = 'StopLossByPercent',
  StopLossByPrice = 'StopLossByPrice',
  TakeProfitByPercent = 'TakeProfitByPercent',
  TakeProfitByPrice = 'TakeProfitByPrice',
  TakeProfitTrailingStop = 'TakeProfitTrailingStop'
}

/** 止盈止损类型 */
export enum ExitRuleType {
  StopLoss = 'StopLoss',
  TakeProfit = 'TakeProfit'
}

/** 筛选条件 */
export type ExitRuleWhereInput = {
  id: Scalars['Int'];
};

/** connection */
export type ExitRulesConnection = {
  __typename?: 'ExitRulesConnection';
  hasNextPage: Scalars['Boolean'];
  items: Array<ExitRule>;
  totalCount: Scalars['Int'];
};

/** 忘记密码 */
export type ForgotPasswordInput = {
  /** 邮箱 */
  email: Scalars['String'];
};

/** 合约下单 */
export type FuturesOrderInput = {
  /** 机器人ID */
  botId: Scalars['Int'];
  /** 类型，做多入场、做空入场、做多止损... */
  operationType: Scalars['String'];
  /** 交易数量 */
  quantity: Scalars['Float'];
  /** 交易方向 */
  side: OrderSide;
};

export type GenerateBotStopByPasswordLinkInput = {
  /** Bot ID */
  id: Scalars['Int'];
};

/** 生成充值码 */
export type GenerateDepositCodeInput = {
  /** 金额 */
  cashAmount: Scalars['Float'];
  /** 充值码数量 */
  quantity: Scalars['Int'];
};

export type GenerateSetStopPasswordLinkInput = {
  /** Bot ID */
  id: Scalars['Int'];
};

/** 网格配对订单 */
export type GridOrder = {
  __typename?: 'GridOrder';
  /** 机器人ID */
  botId: Scalars['Int'];
  /** Order */
  buyOrder?: Maybe<Order>;
  /** 交易所订单ID */
  buyOrderId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  /** Order */
  sellOrder?: Maybe<Order>;
  /** 交易所订单ID */
  sellOrderId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** 筛选条件 */
export type GridOrderWhereInput = {
  /** 机器人ID */
  botId?: InputMaybe<Scalars['Int']>;
};

/** connection */
export type GridOrdersConnection = {
  __typename?: 'GridOrdersConnection';
  hasNextPage: Scalars['Boolean'];
  items: Array<GridOrder>;
  totalCount: Scalars['Int'];
};

/** 网格交易自动化参数 */
export type GridParamsPayload = {
  __typename?: 'GridParamsPayload';
  /** 网格数量 */
  gridNumber: Scalars['Int'];
  /** 网格价格下限 */
  lowerPrice: Scalars['Float'];
  /** 网格价格上限 */
  upperPrice: Scalars['Float'];
};

/** 更新data */
export type IncreaseDurationInput = {
  /** Bot ID */
  id: Scalars['Int'];
  /** 增加多少时间 */
  increment: Scalars['Int'];
};

/** 邀请链接Token */
export type InvitationToken = {
  __typename?: 'InvitationToken';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  /** 角色类型 */
  roleType: RoleType;
  /** 策略ID */
  strategyId: Scalars['Int'];
  /** token */
  token: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** 筛选条件 */
export type InvitationTokenWhereInput = {
  /** ID */
  id: Scalars['Int'];
  /** 策略ID */
  strategyId: Scalars['Int'];
};

/** connection */
export type InvitationTokensConnection = {
  __typename?: 'InvitationTokensConnection';
  hasNextPage: Scalars['Boolean'];
  items: Array<InvitationToken>;
  totalCount: Scalars['Int'];
};

/** 策略日志 */
export type Log = {
  __typename?: 'Log';
  /** 机器人ID */
  botId: Scalars['Int'];
  /** 日志内容 */
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  /** 类型 */
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** 筛选条件 */
export type LogWhereInput = {
  /** 机器人ID */
  botId?: InputMaybe<Scalars['Int']>;
};

/** CLI Login */
export type LoginByCliInput = {
  /** CLI token */
  cliToken: Scalars['String'];
};

/** 邮箱登录 */
export type LoginByEmailInput = {
  /** 邮箱 */
  email: Scalars['String'];
  /** 密码 */
  password: Scalars['String'];
};

/** 登录成功返回给客户端的数据 */
export type LoginSuccessPayload = {
  __typename?: 'LoginSuccessPayload';
  siteName?: Maybe<Scalars['String']>;
  token: Scalars['String'];
  user: User;
  userId: Scalars['Int'];
  username?: Maybe<Scalars['String']>;
};

/** connection */
export type LogsConnection = {
  __typename?: 'LogsConnection';
  hasNextPage: Scalars['Boolean'];
  items: Array<Log>;
  totalCount: Scalars['Int'];
};

/** 网格订单匹配 */
export type MatchOrderInput = {
  /** 机器人ID */
  botId: Scalars['Int'];
  /** 交易所订单ID */
  buyOrderId?: InputMaybe<Scalars['Int']>;
  /** 交易所订单ID */
  sellOrderId?: InputMaybe<Scalars['Int']>;
};

/** 修改API */
export type ModifyApiInput = {
  /** apiKey */
  apiKey: Scalars['String'];
  /** 交易所类型 */
  exchange?: InputMaybe<ExchangeType>;
  id: Scalars['Int'];
  /** 该 Api 名字 */
  name: Scalars['String'];
  /** secretKey */
  secretKey: Scalars['String'];
};

/** 修改秘密 */
export type ModifyPasswordInput = {
  /** 新密码 */
  newPassword: Scalars['String'];
  /** 旧密码 */
  oldPassword: Scalars['String'];
};

/** 修改策略 */
export type ModifyStrategyInput = {
  /** docs */
  docs?: InputMaybe<Scalars['JSON']>;
  id: Scalars['Int'];
  /** 介绍 */
  intro?: InputMaybe<Scalars['String']>;
  /** 策略名字 */
  name?: InputMaybe<Scalars['String']>;
  /** 参数定义Schema */
  paramsSchema?: InputMaybe<Scalars['JSON']>;
  /** slug, 唯一标识 */
  slug?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** 新增API */
  addApi: Api;
  /** 新增机器人 */
  addBot: Bot;
  /** 新增 */
  addCollaborator: Collaborator;
  /** 新增日志 */
  addLog: Log;
  /** 新增 */
  addRunnerStrategy: RunnerStrategy;
  /** 新增策略 */
  addStrategy: Strategy;
  /** 新增Token */
  addToken: Token;
  /** 清除日志 */
  clearLogs: Scalars['Boolean'];
  /** 平仓 */
  closePosition: Scalars['Boolean'];
  /** cli 登录 */
  confirmCliLogin: Scalars['Boolean'];
  /** 创建 */
  createApi: Api;
  /** 创建 */
  createBot: Bot;
  /** 创建 */
  createCollaborator: Collaborator;
  /** 创建 */
  createDepositCode: DepositCode;
  /** 创建 */
  createExitRule: ExitRule;
  /** 创建 */
  createGridOrder: GridOrder;
  /** 创建 */
  createInvitationToken: InvitationToken;
  /** 创建 */
  createLog: Log;
  /** 创建 */
  createNotifier: Notifier;
  /** 创建 */
  createOrder: Order;
  /** 创建 */
  createRunner: Runner;
  /** 创建 */
  createRunnerStrategy: RunnerStrategy;
  /** 创建 */
  createSourceCode: SourceCode;
  /** 现货下单 */
  createSpotOrder: Scalars['Boolean'];
  /** 创建 */
  createStrategy: Strategy;
  /** 创建 */
  createTodo: Todo;
  /** 创建 */
  createToken: Token;
  /** 创建 */
  createTransactionLog: TransactionLog;
  /** 创建 */
  createUser: User;
  /** 新增验证通道 */
  createValidatedNotifier: NotifierCreateObject;
  /** 创建 */
  createWallet: Wallet;
  /** 删除单个 */
  deleteApi: Scalars['Boolean'];
  /** 删除单个 */
  deleteBot: Scalars['Boolean'];
  /** 删除单个 */
  deleteCollaborator: Scalars['Boolean'];
  /** 删除单个 */
  deleteDepositCode: Scalars['Boolean'];
  /** 删除单个 */
  deleteExitRule: Scalars['Boolean'];
  /** 删除单个 */
  deleteGridOrder: Scalars['Boolean'];
  /** 删除单个 */
  deleteInvitationToken: Scalars['Boolean'];
  /** 删除单个 */
  deleteLog: Scalars['Boolean'];
  /** 批量删除 */
  deleteManyApis: Scalars['Float'];
  /** 批量删除 */
  deleteManyBots: Scalars['Float'];
  /** 批量删除 */
  deleteManyCollaborators: Scalars['Float'];
  /** 批量删除 */
  deleteManyDepositCodes: Scalars['Float'];
  /** 批量删除 */
  deleteManyExitRules: Scalars['Float'];
  /** 批量删除 */
  deleteManyGridOrders: Scalars['Float'];
  /** 批量删除 */
  deleteManyInvitationTokens: Scalars['Float'];
  /** 批量删除 */
  deleteManyLogs: Scalars['Float'];
  /** 批量删除 */
  deleteManyNotifiers: Scalars['Float'];
  /** 批量删除 */
  deleteManyOrders: Scalars['Float'];
  /** 批量删除 */
  deleteManyRunnerStrategys: Scalars['Float'];
  /** 批量删除 */
  deleteManyRunners: Scalars['Float'];
  /** 批量删除 */
  deleteManySourceCodes: Scalars['Float'];
  /** 批量删除 */
  deleteManyStrategys: Scalars['Float'];
  /** 批量删除 */
  deleteManyTodos: Scalars['Float'];
  /** 批量删除 */
  deleteManyTokens: Scalars['Float'];
  /** 批量删除 */
  deleteManyTransactionLogs: Scalars['Float'];
  /** 批量删除 */
  deleteManyUsers: Scalars['Float'];
  /** 批量删除 */
  deleteManyWallets: Scalars['Float'];
  /** 删除单个 */
  deleteNotifier: Scalars['Boolean'];
  /** 删除单个 */
  deleteOrder: Scalars['Boolean'];
  /** 删除单个 */
  deleteRunner: Scalars['Boolean'];
  /** 删除单个 */
  deleteRunnerStrategy: Scalars['Boolean'];
  /** 删除单个 */
  deleteSourceCode: Scalars['Boolean'];
  /** 删除单个 */
  deleteStrategy: Scalars['Boolean'];
  /** 删除单个 */
  deleteTodo: Scalars['Boolean'];
  /** 删除单个 */
  deleteToken: Scalars['Boolean'];
  /** 删除单个 */
  deleteTransactionLog: Scalars['Boolean'];
  /** 删除单个 */
  deleteUser: Scalars['Boolean'];
  /** 删除单个 */
  deleteWallet: Scalars['Boolean'];
  /** 根据充值码充值 */
  depositByCode: Scalars['Boolean'];
  /** 重置密码 */
  forgotPassword: Scalars['Boolean'];
  /** 合约下单 */
  futuresOrder: Scalars['Boolean'];
  /** 生成停止机器人链接(通过密码) */
  generateBotStopByPasswordLink: Scalars['String'];
  /** 生成 bot 设置停止密码链接 */
  generateSetStopPasswordLink: Scalars['String'];
  getOrders: Orders;
  /** 增加 duration */
  increaseDuration: Scalars['Boolean'];
  /** cli 登录 */
  loginByCli: LoginSuccessPayload;
  /** 邮箱登录 */
  loginByEmail: LoginSuccessPayload;
  /** 使用 GitHub 登录 */
  loginByGithub: LoginSuccessPayload;
  /** 使用 Google 登录 */
  loginByGoogle: LoginSuccessPayload;
  /** Login by personal token */
  loginByPersonalToken: LoginSuccessPayload;
  /** 钱包登录 */
  loginByWallet: LoginSuccessPayload;
  /** 匹配网格订单 */
  matchOrder: Scalars['Boolean'];
  /** 更改API */
  modifyApi: Api;
  /** 修改密码 */
  modifyPassword: Scalars['Boolean'];
  /** 修改策略 */
  modifyStrategy: Scalars['Boolean'];
  /** 发布机器人通用事件 */
  publishBotEvent: Scalars['Boolean'];
  /** 生成 apiKey */
  regenerateBotApiKey: Scalars['Boolean'];
  /** 生成strategy token */
  regenerateStrategyToken: Scalars['Boolean'];
  /** 邮箱注册 */
  registerByEmail: Scalars['Boolean'];
  /** 注册runner */
  registerRunner: Runner;
  /** 删除API */
  removeApi: Scalars['Boolean'];
  /** 删除 */
  removeCollaborator: Collaborator;
  /** remove KV */
  removeKV: Scalars['Boolean'];
  /** 删除Runner */
  removeRunner: Scalars['Boolean'];
  /** 删除 */
  removeRunnerStrategy: RunnerStrategy;
  /** 删除策略 */
  removeStrategy: Scalars['Boolean'];
  /** 重置密码 */
  resetPassword: Scalars['Boolean'];
  /** 开启策略回测 */
  runBacktest: Scalars['Boolean'];
  /** 启动策略 */
  runBot: Scalars['Boolean'];
  /** Set KV */
  setKV: Scalars['Boolean'];
  /** 设置机器人密码 */
  setStopBotPassword: Scalars['Boolean'];
  /** 停止策略回测 */
  stopBacktest: Scalars['Boolean'];
  /** 停止策略 */
  stopBot: Scalars['Boolean'];
  /** 停止机器人 */
  stopBotByPassword: Scalars['Boolean'];
  storageClear: Scalars['Boolean'];
  storageRemove: Scalars['Boolean'];
  storageSet: Scalars['Boolean'];
  /** Set all */
  storageSetAll: Scalars['Boolean'];
  /** sync binance order */
  syncSpotOrder: SyncOrdersRes;
  /** boter cli sync 策略 */
  syncStrategy: Scalars['Boolean'];
  /** 更新单个 */
  updateApi: Api;
  /** 更新单个 */
  updateBot: Bot;
  /** 更新 bot name */
  updateBotName: Scalars['Boolean'];
  /** 修改参数 */
  updateBotParams: Scalars['Boolean'];
  /** 更新单个 */
  updateCollaborator: Collaborator;
  /** 更新单个 */
  updateDepositCode: DepositCode;
  /** 修改email */
  updateEmail: Scalars['Boolean'];
  /** 更新单个 */
  updateExitRule: ExitRule;
  /** 更新单个 */
  updateGridOrder: GridOrder;
  /** 更新单个 */
  updateInvitationToken: InvitationToken;
  /** 更新单个 */
  updateLog: Log;
  /** 批量更新 */
  updateManyApis: Scalars['Boolean'];
  /** 批量更新 */
  updateManyBots: Scalars['Boolean'];
  /** 批量更新 */
  updateManyCollaborators: Scalars['Boolean'];
  /** 批量更新 */
  updateManyDepositCodes: Scalars['Boolean'];
  /** 批量更新 */
  updateManyExitRules: Scalars['Boolean'];
  /** 批量更新 */
  updateManyGridOrders: Scalars['Boolean'];
  /** 批量更新 */
  updateManyInvitationTokens: Scalars['Boolean'];
  /** 批量更新 */
  updateManyLogs: Scalars['Boolean'];
  /** 批量更新 */
  updateManyNotifiers: Scalars['Boolean'];
  /** 批量更新 */
  updateManyOrders: Scalars['Boolean'];
  /** 批量更新 */
  updateManyRunnerStrategys: Scalars['Boolean'];
  /** 批量更新 */
  updateManyRunners: Scalars['Boolean'];
  /** 批量更新 */
  updateManySourceCodes: Scalars['Boolean'];
  /** 批量更新 */
  updateManyStrategys: Scalars['Boolean'];
  /** 批量更新 */
  updateManyTodos: Scalars['Boolean'];
  /** 批量更新 */
  updateManyTokens: Scalars['Boolean'];
  /** 批量更新 */
  updateManyTransactionLogs: Scalars['Boolean'];
  /** 批量更新 */
  updateManyUsers: Scalars['Boolean'];
  /** 批量更新 */
  updateManyWallets: Scalars['Boolean'];
  /** 更新单个 */
  updateNotifier: Notifier;
  /** 更新单个 */
  updateOrder: Order;
  /** 更新单个 */
  updateRunner: Runner;
  /** 更新 Runner 心跳 */
  updateRunnerHeartbeat: Runner;
  /** 更新单个 */
  updateRunnerStrategy: RunnerStrategy;
  /** 更新单个 */
  updateSourceCode: SourceCode;
  /** 更新单个 */
  updateStrategy: Strategy;
  /** 更新策略代码 */
  updateStrategyCode: Scalars['Boolean'];
  /** 更新单个 */
  updateTodo: Todo;
  /** 更新单个 */
  updateToken: Token;
  /** 更新单个 */
  updateTransactionLog: TransactionLog;
  /** 更新UI代码 */
  updateUiCode: Scalars['Boolean'];
  /** 更新单个 */
  updateUser: User;
  /** 编辑验证通道 */
  updateValidatedNotifier: NotifierCreateObject;
  /** 更新单个 */
  updateWallet: Wallet;
};


export type MutationAddApiArgs = {
  input: AddApiInput;
};


export type MutationAddBotArgs = {
  input: AddBotInput;
};


export type MutationAddCollaboratorArgs = {
  input: AddCollaboratorInput;
};


export type MutationAddLogArgs = {
  input: AddLogInput;
};


export type MutationAddRunnerStrategyArgs = {
  input: AddRunnerStrategyInput;
};


export type MutationAddStrategyArgs = {
  input: AddStrategyInput;
};


export type MutationAddTokenArgs = {
  input: AddTokenInput;
};


export type MutationClearLogsArgs = {
  botId: Scalars['Float'];
};


export type MutationClosePositionArgs = {
  botId: Scalars['Float'];
};


export type MutationConfirmCliLoginArgs = {
  input: CliLoginInput;
};


export type MutationCreateApiArgs = {
  input: CreateApiInput;
};


export type MutationCreateBotArgs = {
  input: CreateBotInput;
};


export type MutationCreateCollaboratorArgs = {
  input: CreateCollaboratorInput;
};


export type MutationCreateDepositCodeArgs = {
  input: CreateDepositCodeInput;
};


export type MutationCreateExitRuleArgs = {
  input: CreateExitRuleInput;
};


export type MutationCreateGridOrderArgs = {
  input: CreateGridOrderInput;
};


export type MutationCreateInvitationTokenArgs = {
  input: CreateInvitationTokenInput;
};


export type MutationCreateLogArgs = {
  input: CreateLogInput;
};


export type MutationCreateNotifierArgs = {
  input: CreateNotifierInput;
};


export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};


export type MutationCreateRunnerArgs = {
  input: CreateRunnerInput;
};


export type MutationCreateRunnerStrategyArgs = {
  input: CreateRunnerStrategyInput;
};


export type MutationCreateSourceCodeArgs = {
  input: CreateSourceCodeInput;
};


export type MutationCreateSpotOrderArgs = {
  input: SpotOrderInput;
};


export type MutationCreateStrategyArgs = {
  input: CreateStrategyInput;
};


export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};


export type MutationCreateTokenArgs = {
  input: CreateTokenInput;
};


export type MutationCreateTransactionLogArgs = {
  input: CreateTransactionLogInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCreateValidatedNotifierArgs = {
  input: CreateNotifierInput;
};


export type MutationCreateWalletArgs = {
  input: CreateWalletInput;
};


export type MutationDeleteApiArgs = {
  input: DeleteApiInput;
};


export type MutationDeleteBotArgs = {
  input: DeleteBotInput;
};


export type MutationDeleteCollaboratorArgs = {
  input: DeleteCollaboratorInput;
};


export type MutationDeleteDepositCodeArgs = {
  input: DeleteDepositCodeInput;
};


export type MutationDeleteExitRuleArgs = {
  input: DeleteExitRuleInput;
};


export type MutationDeleteGridOrderArgs = {
  input: DeleteGridOrderInput;
};


export type MutationDeleteInvitationTokenArgs = {
  input: DeleteInvitationTokenInput;
};


export type MutationDeleteLogArgs = {
  input: DeleteLogInput;
};


export type MutationDeleteManyApisArgs = {
  input: DeleteApiInput;
};


export type MutationDeleteManyBotsArgs = {
  input: DeleteBotInput;
};


export type MutationDeleteManyCollaboratorsArgs = {
  input: DeleteCollaboratorInput;
};


export type MutationDeleteManyDepositCodesArgs = {
  input: DeleteDepositCodeInput;
};


export type MutationDeleteManyExitRulesArgs = {
  input: DeleteExitRuleInput;
};


export type MutationDeleteManyGridOrdersArgs = {
  input: DeleteGridOrderInput;
};


export type MutationDeleteManyInvitationTokensArgs = {
  input: DeleteInvitationTokenInput;
};


export type MutationDeleteManyLogsArgs = {
  input: DeleteLogInput;
};


export type MutationDeleteManyNotifiersArgs = {
  input: DeleteNotifierInput;
};


export type MutationDeleteManyOrdersArgs = {
  input: DeleteOrderInput;
};


export type MutationDeleteManyRunnerStrategysArgs = {
  input: DeleteRunnerStrategyInput;
};


export type MutationDeleteManyRunnersArgs = {
  input: DeleteRunnerInput;
};


export type MutationDeleteManySourceCodesArgs = {
  input: DeleteSourceCodeInput;
};


export type MutationDeleteManyStrategysArgs = {
  input: DeleteStrategyInput;
};


export type MutationDeleteManyTodosArgs = {
  input: DeleteTodoInput;
};


export type MutationDeleteManyTokensArgs = {
  input: DeleteTokenInput;
};


export type MutationDeleteManyTransactionLogsArgs = {
  input: DeleteTransactionLogInput;
};


export type MutationDeleteManyUsersArgs = {
  input: DeleteUserInput;
};


export type MutationDeleteManyWalletsArgs = {
  input: DeleteWalletInput;
};


export type MutationDeleteNotifierArgs = {
  input: DeleteNotifierInput;
};


export type MutationDeleteOrderArgs = {
  input: DeleteOrderInput;
};


export type MutationDeleteRunnerArgs = {
  input: DeleteRunnerInput;
};


export type MutationDeleteRunnerStrategyArgs = {
  input: DeleteRunnerStrategyInput;
};


export type MutationDeleteSourceCodeArgs = {
  input: DeleteSourceCodeInput;
};


export type MutationDeleteStrategyArgs = {
  input: DeleteStrategyInput;
};


export type MutationDeleteTodoArgs = {
  input: DeleteTodoInput;
};


export type MutationDeleteTokenArgs = {
  input: DeleteTokenInput;
};


export type MutationDeleteTransactionLogArgs = {
  input: DeleteTransactionLogInput;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationDeleteWalletArgs = {
  input: DeleteWalletInput;
};


export type MutationDepositByCodeArgs = {
  input: DepositByCodeInput;
};


export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
};


export type MutationFuturesOrderArgs = {
  input: FuturesOrderInput;
};


export type MutationGenerateBotStopByPasswordLinkArgs = {
  input: GenerateBotStopByPasswordLinkInput;
};


export type MutationGenerateSetStopPasswordLinkArgs = {
  input: GenerateSetStopPasswordLinkInput;
};


export type MutationGetOrdersArgs = {
  currentPage: Scalars['Float'];
  pageSize: Scalars['Float'];
  symbol?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  userId: Scalars['Float'];
};


export type MutationIncreaseDurationArgs = {
  input: IncreaseDurationInput;
};


export type MutationLoginByCliArgs = {
  input: LoginByCliInput;
};


export type MutationLoginByEmailArgs = {
  input: LoginByEmailInput;
};


export type MutationLoginByGithubArgs = {
  code: Scalars['String'];
};


export type MutationLoginByGoogleArgs = {
  code: Scalars['String'];
};


export type MutationLoginByPersonalTokenArgs = {
  token: Scalars['String'];
};


export type MutationLoginByWalletArgs = {
  input: VerifySignMessageInput;
};


export type MutationMatchOrderArgs = {
  input: MatchOrderInput;
};


export type MutationModifyApiArgs = {
  input: ModifyApiInput;
};


export type MutationModifyPasswordArgs = {
  input: ModifyPasswordInput;
};


export type MutationModifyStrategyArgs = {
  input: ModifyStrategyInput;
};


export type MutationPublishBotEventArgs = {
  input: PublishBotEventInput;
};


export type MutationRegenerateBotApiKeyArgs = {
  input: RegenerateBotApiKeyInput;
};


export type MutationRegenerateStrategyTokenArgs = {
  input: RegenerateStrategyTokenInput;
};


export type MutationRegisterByEmailArgs = {
  input: RegisterByEmailInput;
};


export type MutationRegisterRunnerArgs = {
  input: RegisterRunnerInput;
};


export type MutationRemoveApiArgs = {
  input: RemoveApiInput;
};


export type MutationRemoveCollaboratorArgs = {
  input: RemoveCollaboratorInput;
};


export type MutationRemoveKvArgs = {
  input: RemoveKvInput;
};


export type MutationRemoveRunnerArgs = {
  input: RemoveRunnerInput;
};


export type MutationRemoveRunnerStrategyArgs = {
  input: RemoveRunnerStrategyInput;
};


export type MutationRemoveStrategyArgs = {
  input: RemoveStrategyInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationRunBacktestArgs = {
  input: RunBacktestInput;
};


export type MutationRunBotArgs = {
  input: RunBotInput;
};


export type MutationSetKvArgs = {
  input: SetKvInput;
};


export type MutationSetStopBotPasswordArgs = {
  input: SetStopBotPasswordInput;
};


export type MutationStopBacktestArgs = {
  input: StopBacktestInput;
};


export type MutationStopBotArgs = {
  input: StopBotInput;
};


export type MutationStopBotByPasswordArgs = {
  input: StopBotByPasswordInput;
};


export type MutationStorageRemoveArgs = {
  input: StorageRemoveInput;
};


export type MutationStorageSetArgs = {
  input: StorageSetInput;
};


export type MutationStorageSetAllArgs = {
  input: StorageSetAllInput;
};


export type MutationSyncSpotOrderArgs = {
  endTime: Scalars['Float'];
  startTime: Scalars['Float'];
  symbol?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  userId: Scalars['Float'];
};


export type MutationSyncStrategyArgs = {
  input: SyncStrategyInput;
};


export type MutationUpdateApiArgs = {
  input: UpdateApiInput;
};


export type MutationUpdateBotArgs = {
  input: UpdateBotInput;
};


export type MutationUpdateBotNameArgs = {
  input: UpdateBotNameInput;
};


export type MutationUpdateBotParamsArgs = {
  input: UpdateBotParamsInput;
};


export type MutationUpdateCollaboratorArgs = {
  input: UpdateCollaboratorInput;
};


export type MutationUpdateDepositCodeArgs = {
  input: UpdateDepositCodeInput;
};


export type MutationUpdateEmailArgs = {
  input: UpdateEmailInput;
};


export type MutationUpdateExitRuleArgs = {
  input: UpdateExitRuleInput;
};


export type MutationUpdateGridOrderArgs = {
  input: UpdateGridOrderInput;
};


export type MutationUpdateInvitationTokenArgs = {
  input: UpdateInvitationTokenInput;
};


export type MutationUpdateLogArgs = {
  input: UpdateLogInput;
};


export type MutationUpdateManyApisArgs = {
  input: UpdateManyApiInput;
};


export type MutationUpdateManyBotsArgs = {
  input: UpdateManyBotInput;
};


export type MutationUpdateManyCollaboratorsArgs = {
  input: UpdateManyCollaboratorInput;
};


export type MutationUpdateManyDepositCodesArgs = {
  input: UpdateManyDepositCodeInput;
};


export type MutationUpdateManyExitRulesArgs = {
  input: UpdateManyExitRuleInput;
};


export type MutationUpdateManyGridOrdersArgs = {
  input: UpdateManyGridOrderInput;
};


export type MutationUpdateManyInvitationTokensArgs = {
  input: UpdateManyInvitationTokenInput;
};


export type MutationUpdateManyLogsArgs = {
  input: UpdateManyLogInput;
};


export type MutationUpdateManyNotifiersArgs = {
  input: UpdateManyNotifierInput;
};


export type MutationUpdateManyOrdersArgs = {
  input: UpdateManyOrderInput;
};


export type MutationUpdateManyRunnerStrategysArgs = {
  input: UpdateManyRunnerStrategyInput;
};


export type MutationUpdateManyRunnersArgs = {
  input: UpdateManyRunnerInput;
};


export type MutationUpdateManySourceCodesArgs = {
  input: UpdateManySourceCodeInput;
};


export type MutationUpdateManyStrategysArgs = {
  input: UpdateManyStrategyInput;
};


export type MutationUpdateManyTodosArgs = {
  input: UpdateManyTodoInput;
};


export type MutationUpdateManyTokensArgs = {
  input: UpdateManyTokenInput;
};


export type MutationUpdateManyTransactionLogsArgs = {
  input: UpdateManyTransactionLogInput;
};


export type MutationUpdateManyUsersArgs = {
  input: UpdateManyUserInput;
};


export type MutationUpdateManyWalletsArgs = {
  input: UpdateManyWalletInput;
};


export type MutationUpdateNotifierArgs = {
  input: UpdateNotifierInput;
};


export type MutationUpdateOrderArgs = {
  input: UpdateOrderInput;
};


export type MutationUpdateRunnerArgs = {
  input: UpdateRunnerInput;
};


export type MutationUpdateRunnerHeartbeatArgs = {
  input: UpdateRunnerHeartbeatInput;
};


export type MutationUpdateRunnerStrategyArgs = {
  input: UpdateRunnerStrategyInput;
};


export type MutationUpdateSourceCodeArgs = {
  input: UpdateSourceCodeInput;
};


export type MutationUpdateStrategyArgs = {
  input: UpdateStrategyInput;
};


export type MutationUpdateStrategyCodeArgs = {
  input: UpdateStrategyCodeInput;
};


export type MutationUpdateTodoArgs = {
  input: UpdateTodoInput;
};


export type MutationUpdateTokenArgs = {
  input: UpdateTokenInput;
};


export type MutationUpdateTransactionLogArgs = {
  input: UpdateTransactionLogInput;
};


export type MutationUpdateUiCodeArgs = {
  input: UpdateUiCodeInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationUpdateValidatedNotifierArgs = {
  input: UpdateNotifierInput;
};


export type MutationUpdateWalletArgs = {
  input: UpdateWalletInput;
};

/** 通知 */
export type Notifier = {
  __typename?: 'Notifier';
  /** 配置 */
  config?: Maybe<Scalars['JSON']>;
  id: Scalars['Int'];
  /** 名字 */
  name: Scalars['String'];
  /** 通知通道类型 */
  type: NotifierType;
  /** 用户ID */
  userId: Scalars['Int'];
};

export type NotifierCreateObject = {
  __typename?: 'NotifierCreateObject';
  code: Scalars['Float'];
  msg: Scalars['String'];
};

/** 通知通道类型 */
export enum NotifierType {
  Dingtalk = 'Dingtalk',
  Discord = 'Discord',
  Email = 'Email',
  Feishu = 'Feishu',
  Slack = 'Slack',
  Telegram = 'Telegram',
  Twitter = 'Twitter'
}

/** 筛选条件 */
export type NotifierWhereInput = {
  /** 用户ID */
  userId: Scalars['Int'];
};

/** connection */
export type NotifiersConnection = {
  __typename?: 'NotifiersConnection';
  hasNextPage: Scalars['Boolean'];
  items: Array<Notifier>;
  totalCount: Scalars['Int'];
};

/** 操作类型 */
export enum OperationType {
  Decrease = 'DECREASE',
  Entry = 'ENTRY',
  Exit = 'EXIT',
  Increase = 'INCREASE'
}

/** 订单 */
export type Order = {
  __typename?: 'Order';
  /** 机器人ID */
  botId?: Maybe<Scalars['Int']>;
  /** 交易所自定义订单ID */
  clientOrderId?: Maybe<Scalars['String']>;
  /** 手续费 */
  commission?: Maybe<Scalars['Float']>;
  /** 手续费 asset */
  commissionAsset?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  /** 是否是买家 */
  isBuyer?: Maybe<Scalars['Boolean']>;
  /** 是否是挂单方 */
  isMaker?: Maybe<Scalars['Boolean']>;
  /** 类型，做多入场、做空入场、做多止损... */
  operationType?: Maybe<Scalars['String']>;
  /** 交易所订单ID */
  orderId: Scalars['String'];
  /** 成交价格 */
  price?: Maybe<Scalars['Float']>;
  /** 成交量 */
  qty?: Maybe<Scalars['Float']>;
  /** 成交金额 */
  quoteQty?: Maybe<Scalars['Float']>;
  /** 已实现利润 */
  realizedProfit?: Maybe<Scalars['Float']>;
  /** 交易类型 */
  side: Scalars['String'];
  /** 状态 */
  status?: Maybe<OrderStatus>;
  /** 交易对 */
  symbol: Scalars['String'];
  /** 订单时间 */
  time: Scalars['Float'];
  /** 类型，市价、限价 */
  type: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** 用户ID */
  userId?: Maybe<Scalars['Int']>;
};

/** 下单方向 */
export enum OrderSide {
  Buy = 'BUY',
  Sell = 'SELL'
}

/** 订单状态 */
export enum OrderStatus {
  Canceled = 'CANCELED',
  Expired = 'EXPIRED',
  Filled = 'FILLED',
  New = 'NEW',
  PartiallyFilled = 'PARTIALLY_FILLED',
  PendingCancel = 'PENDING_CANCEL',
  Rejected = 'REJECTED'
}

/** 筛选条件 */
export type OrderWhereInput = {
  /** 机器人ID */
  botId?: InputMaybe<Scalars['Int']>;
  /** 状态 */
  status?: InputMaybe<Scalars['String']>;
};

export type Orderbook = {
  __typename?: 'Orderbook';
  /** 委托价格 */
  p: Scalars['Float'];
  /** 委托数量 */
  q: Scalars['Float'];
  /** 买卖方向, B or S, 为了性能，用 B|S 简写 */
  s: Scalars['String'];
};

export type Orders = {
  __typename?: 'Orders';
  data: Array<Order>;
  total: Scalars['Float'];
};

/** connection */
export type OrdersConnection = {
  __typename?: 'OrdersConnection';
  hasNextPage: Scalars['Boolean'];
  items: Array<Order>;
  totalCount: Scalars['Int'];
};

/** 付费类型 */
export enum PlanType {
  Advanced = 'Advanced',
  Basic = 'Basic',
  Free = 'Free',
  God = 'God'
}

/** 发布通用机器人事件 */
export type PublishBotEventInput = {
  /** Bot ID */
  botId: Scalars['Int'];
  /** 事件数据 */
  data?: InputMaybe<Scalars['JSON']>;
  /** 事件名称 */
  eventName: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  aggTrades: Array<TradeRecord>;
  /** 获取单个 */
  api: Api;
  /** 获取列表 */
  apis: Array<Api>;
  /** 获取分页列表 */
  apisConnection: ApisConnection;
  /** 获取币种的余额 */
  balance: Balance;
  /** 获取单个 */
  bot: Bot;
  /** 机器人 apiKey */
  botApiKey: Scalars['String'];
  /** GET botParam */
  botParams: BotParamsPayload;
  /** 机器人统计信息 */
  botStats: BotStats;
  /** 获取列表 */
  bots: Array<Bot>;
  /** 获取分页列表 */
  botsConnection: BotsConnection;
  /** check token */
  checkPersonalToken: User;
  /** 检查 reset password URL token 是否过期 */
  checkResetPasswordToken: Scalars['Boolean'];
  /** 注册时，验证邮箱 */
  checkVerifyEmailToken: LoginSuccessPayload;
  /** cli 登录状态 */
  cliLoginStatus: CliLoginStatus;
  /** 获取单个 */
  collaborator: Collaborator;
  /** 获取列表 */
  collaborators: Array<Collaborator>;
  /** 获取分页列表 */
  collaboratorsConnection: CollaboratorsConnection;
  /** 获取单个 */
  depositCode: DepositCode;
  /** 获取列表 */
  depositCodes: Array<DepositCode>;
  /** 获取分页列表 */
  depositCodesConnection: DepositCodesConnection;
  /** 获取单个 */
  exitRule: ExitRule;
  /** 获取列表 */
  exitRules: Array<ExitRule>;
  /** 获取分页列表 */
  exitRulesConnection: ExitRulesConnection;
  /** 生成充值码 */
  generateDepositCode: Scalars['Boolean'];
  /** 获取单个 */
  gridOrder: GridOrder;
  /** 获取列表 */
  gridOrders: Array<GridOrder>;
  /** 获取分页列表 */
  gridOrdersConnection: GridOrdersConnection;
  /** 获取单个 */
  invitationToken: InvitationToken;
  /** 获取列表 */
  invitationTokens: Array<InvitationToken>;
  /** 获取分页列表 */
  invitationTokensConnection: InvitationTokensConnection;
  /** is stopPassword empty */
  isStopPasswordEmpty: Scalars['Boolean'];
  /** Get KV */
  kv: Scalars['JSON'];
  /** List KV */
  kvs: Scalars['JSON'];
  /** 获取单个 */
  log: Log;
  /** 获取列表 */
  logs: Array<Log>;
  /** 获取分页列表 */
  logsConnection: LogsConnection;
  /** Generate Nonce */
  nonce: Scalars['String'];
  /** 获取单个 */
  notifier: Notifier;
  /** 获取列表 */
  notifiers: Array<Notifier>;
  /** 获取分页列表 */
  notifiersConnection: NotifiersConnection;
  /** 获取订单 */
  openedOrders: Array<Order>;
  /** 获取单个 */
  order: Order;
  orderbooks: Array<Orderbook>;
  /** 获取列表 */
  orders: Array<Order>;
  /** 获取分页列表 */
  ordersConnection: OrdersConnection;
  /** 获取自己的 Api */
  ownedApis: Array<Api>;
  /** 获取自己的机器人 */
  ownedBots: Array<Bot>;
  /** 获取通知通道 */
  ownedNotifiers: Array<Notifier>;
  /** 获取自己的 Runner */
  ownedRunners: Array<Runner>;
  /** 获取自己能看到的策略 */
  ownedStrategies: Array<Strategy>;
  /** 获取公开的的机器人 */
  publicBots: Array<Bot>;
  /** 获取公开的策略 */
  publicStrategies: Array<Strategy>;
  /** 网格字段化参数 */
  recommendedGridParams: GridParamsPayload;
  /** 获取单个 */
  runner: Runner;
  /** 获取单个 */
  runnerStrategy: RunnerStrategy;
  /** 获取列表 */
  runnerStrategys: Array<RunnerStrategy>;
  /** 获取分页列表 */
  runnerStrategysConnection: RunnerStrategysConnection;
  /** 获取列表 */
  runners: Array<Runner>;
  /** 获取分页列表 */
  runnersConnection: RunnersConnection;
  /** save 交易所的 symbols */
  saveSymbols: Scalars['Boolean'];
  /** 搜索用户 */
  searchUsers: Array<User>;
  /** 设置symbol杠杆 */
  setLeverage: Scalars['Boolean'];
  /** 信号列表 */
  signals: Array<Signal>;
  /** 获取单个 */
  sourceCode: SourceCode;
  /** 获取列表 */
  sourceCodes: Array<SourceCode>;
  /** 获取分页列表 */
  sourceCodesConnection: SourceCodesConnection;
  /** 获取现货交易所订单 */
  spotOrders: Array<SpotOrder>;
  /** 数据统计 */
  stats: Stats;
  /** GET */
  storageGet: Scalars['JSON'];
  /** GET ALl */
  storageGetAll: Scalars['JSON'];
  /** 获取单个 */
  strategy: Strategy;
  /** 策略代码 */
  strategyCode: Scalars['String'];
  /** 获取列表 */
  strategys: Array<Strategy>;
  /** 获取分页列表 */
  strategysConnection: StrategysConnection;
  /** 获取单个 symbol */
  symbol: Symbol;
  /** 获取symbol当前杠杆 */
  symbolLeverage: Scalars['Float'];
  /** 获取symbol价格 */
  symbolPrice: Scalars['Float'];
  /** 获取symbol的ticker */
  symbolTicker: Ticker;
  /** 获取 symbol 列表 */
  symbols: Array<Symbol>;
  /** 获取单个 */
  todo: Todo;
  /** 获取列表 */
  todos: Array<Todo>;
  /** 获取分页列表 */
  todosConnection: TodosConnection;
  /** 获取单个 */
  token: Token;
  /** 获取列表 */
  tokens: Array<Token>;
  /** 获取分页列表 */
  tokensConnection: TokensConnection;
  /** 获取单个 */
  transactionLog: TransactionLog;
  /** 获取列表 */
  transactionLogs: Array<TransactionLog>;
  /** 获取分页列表 */
  transactionLogsConnection: TransactionLogsConnection;
  /** 获取Twitter用户 */
  twitterUserByUsername: TwitterUser;
  /** UI代码 */
  uiCode: Scalars['String'];
  /** 这个策略可以使用的 Runner */
  usableRunners: Array<Runner>;
  /** 获取单个 */
  user: User;
  /** 获取列表 */
  users: Array<User>;
  /** 获取分页列表 */
  usersConnection: UsersConnection;
  verifyPasswordLinkToken: Bot;
  /** 获取单个 */
  wallet: Wallet;
  /** 获取列表 */
  wallets: Array<Wallet>;
  /** 获取分页列表 */
  walletsConnection: WalletsConnection;
};


export type QueryAggTradesArgs = {
  symbol: Scalars['String'];
  type: Scalars['String'];
};


export type QueryApiArgs = {
  id: Scalars['Int'];
};


export type QueryApisArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApiWhereInput>;
};


export type QueryApisConnectionArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApiWhereInput>;
};


export type QueryBalanceArgs = {
  apiId: Scalars['Float'];
  coin: Scalars['String'];
  type: Scalars['String'];
};


export type QueryBotArgs = {
  id: Scalars['Int'];
};


export type QueryBotApiKeyArgs = {
  botId: Scalars['Float'];
};


export type QueryBotParamsArgs = {
  botId: Scalars['Float'];
};


export type QueryBotStatsArgs = {
  botId: Scalars['Float'];
};


export type QueryBotsArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BotWhereInput>;
};


export type QueryBotsConnectionArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BotWhereInput>;
};


export type QueryCheckPersonalTokenArgs = {
  token: Scalars['String'];
};


export type QueryCheckResetPasswordTokenArgs = {
  token: Scalars['String'];
};


export type QueryCheckVerifyEmailTokenArgs = {
  token: Scalars['String'];
};


export type QueryCliLoginStatusArgs = {
  cliToken: Scalars['String'];
};


export type QueryCollaboratorArgs = {
  id: Scalars['Int'];
};


export type QueryCollaboratorsArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CollaboratorWhereInput>;
};


export type QueryCollaboratorsConnectionArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CollaboratorWhereInput>;
};


export type QueryDepositCodeArgs = {
  id: Scalars['Int'];
};


export type QueryDepositCodesArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DepositCodeWhereInput>;
};


export type QueryDepositCodesConnectionArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DepositCodeWhereInput>;
};


export type QueryExitRuleArgs = {
  id: Scalars['Int'];
};


export type QueryExitRulesArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ExitRuleWhereInput>;
};


export type QueryExitRulesConnectionArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ExitRuleWhereInput>;
};


export type QueryGenerateDepositCodeArgs = {
  input: GenerateDepositCodeInput;
};


export type QueryGridOrderArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type QueryGridOrdersArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GridOrderWhereInput>;
};


export type QueryGridOrdersConnectionArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GridOrderWhereInput>;
};


export type QueryInvitationTokenArgs = {
  id: Scalars['Int'];
};


export type QueryInvitationTokensArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InvitationTokenWhereInput>;
};


export type QueryInvitationTokensConnectionArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InvitationTokenWhereInput>;
};


export type QueryIsStopPasswordEmptyArgs = {
  botId: Scalars['Float'];
};


export type QueryKvArgs = {
  key: Scalars['String'];
};


export type QueryKvsArgs = {
  pattern: Scalars['String'];
};


export type QueryLogArgs = {
  id: Scalars['Int'];
};


export type QueryLogsArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LogWhereInput>;
};


export type QueryLogsConnectionArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LogWhereInput>;
};


export type QueryNonceArgs = {
  address: Scalars['String'];
};


export type QueryNotifierArgs = {
  id: Scalars['Int'];
};


export type QueryNotifiersArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NotifierWhereInput>;
};


export type QueryNotifiersConnectionArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NotifierWhereInput>;
};


export type QueryOpenedOrdersArgs = {
  botId: Scalars['Float'];
};


export type QueryOrderArgs = {
  id?: InputMaybe<Scalars['Int']>;
  orderId?: InputMaybe<Scalars['String']>;
};


export type QueryOrderbooksArgs = {
  symbol: Scalars['String'];
  type: Scalars['String'];
};


export type QueryOrdersArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderWhereInput>;
};


export type QueryOrdersConnectionArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderWhereInput>;
};


export type QueryOwnedBotsArgs = {
  status: Scalars['String'];
};


export type QueryRecommendedGridParamsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  period: Scalars['String'];
  symbol: Scalars['String'];
};


export type QueryRunnerArgs = {
  id: Scalars['Int'];
};


export type QueryRunnerStrategyArgs = {
  id: Scalars['Int'];
};


export type QueryRunnerStrategysArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RunnerStrategyWhereInput>;
};


export type QueryRunnerStrategysConnectionArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RunnerStrategyWhereInput>;
};


export type QueryRunnersArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RunnerWhereInput>;
};


export type QueryRunnersConnectionArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RunnerWhereInput>;
};


export type QuerySaveSymbolsArgs = {
  tradeType: Scalars['String'];
};


export type QuerySearchUsersArgs = {
  q: Scalars['String'];
};


export type QuerySetLeverageArgs = {
  input: SetLeverageInput;
};


export type QuerySourceCodeArgs = {
  id: Scalars['Int'];
};


export type QuerySourceCodesArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SourceCodeWhereInput>;
};


export type QuerySourceCodesConnectionArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SourceCodeWhereInput>;
};


export type QuerySpotOrdersArgs = {
  apiId: Scalars['Int'];
  endTime?: InputMaybe<Scalars['Float']>;
  limit?: InputMaybe<Scalars['Float']>;
  orderId?: InputMaybe<Scalars['Float']>;
  recvWindow?: InputMaybe<Scalars['Float']>;
  startTime?: InputMaybe<Scalars['Float']>;
  symbol: Scalars['String'];
};


export type QueryStorageGetArgs = {
  key: Scalars['String'];
};


export type QueryStrategyArgs = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};


export type QueryStrategyCodeArgs = {
  strategyId: Scalars['Float'];
};


export type QueryStrategysArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StrategyWhereInput>;
};


export type QueryStrategysConnectionArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StrategyWhereInput>;
};


export type QuerySymbolArgs = {
  symbol: Scalars['String'];
  tradeType: TradeType;
};


export type QuerySymbolLeverageArgs = {
  apiId: Scalars['Float'];
  symbol: Scalars['String'];
};


export type QuerySymbolPriceArgs = {
  isSpot: Scalars['Boolean'];
  source: Scalars['String'];
  symbol: Scalars['String'];
};


export type QuerySymbolTickerArgs = {
  isSpot: Scalars['Boolean'];
  source: Scalars['String'];
  symbol: Scalars['String'];
};


export type QuerySymbolsArgs = {
  quoteAsset?: InputMaybe<Scalars['String']>;
  tradeType: TradeType;
};


export type QueryTodoArgs = {
  id: Scalars['Int'];
};


export type QueryTodosArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TodoWhereInput>;
};


export type QueryTodosConnectionArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TodoWhereInput>;
};


export type QueryTokenArgs = {
  id: Scalars['Int'];
};


export type QueryTokensArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TokenWhereInput>;
};


export type QueryTokensConnectionArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TokenWhereInput>;
};


export type QueryTransactionLogArgs = {
  id: Scalars['Int'];
};


export type QueryTransactionLogsArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionLogWhereInput>;
};


export type QueryTransactionLogsConnectionArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionLogWhereInput>;
};


export type QueryTwitterUserByUsernameArgs = {
  username: Scalars['String'];
};


export type QueryUiCodeArgs = {
  strategyId: Scalars['Float'];
};


export type QueryUsableRunnersArgs = {
  strategyId: Scalars['Float'];
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['Int']>;
  nickname?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type QueryUsersArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryVerifyPasswordLinkTokenArgs = {
  token: Scalars['String'];
};


export type QueryWalletArgs = {
  userId?: InputMaybe<Scalars['Int']>;
};


export type QueryWalletsArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WalletWhereInput>;
};


export type QueryWalletsConnectionArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WalletWhereInput>;
};

/** 重新生成Bot apiKey */
export type RegenerateBotApiKeyInput = {
  /** Bot ID */
  botId: Scalars['Int'];
};

/** 重新生成策略token */
export type RegenerateStrategyTokenInput = {
  /** 策略ID */
  strategyId: Scalars['Int'];
};

/** 邮箱注册 */
export type RegisterByEmailInput = {
  /** 邮箱 */
  email: Scalars['String'];
  /** 密码 */
  password: Scalars['String'];
};

/** 注册runner */
export type RegisterRunnerInput = {
  /** 唯一ID */
  machineHash: Scalars['String'];
  /** 机器 ip */
  machineIp: Scalars['String'];
  /** 个人 token */
  token: Scalars['String'];
};

/** 删除 */
export type RemoveApiInput = {
  /** ID */
  id: Scalars['Int'];
};

/** 删除 */
export type RemoveCollaboratorInput = {
  /** ID */
  id: Scalars['Int'];
};

export type RemoveKvInput = {
  /** kv key */
  key: Scalars['String'];
};

/** 删除策略 */
export type RemoveRunnerInput = {
  id: Scalars['Int'];
};

/** 删除 */
export type RemoveRunnerStrategyInput = {
  /** ID */
  id: Scalars['Int'];
};

/** 删除策略 */
export type RemoveStrategyInput = {
  id: Scalars['Int'];
};

/** 重置密码 */
export type ResetPasswordInput = {
  /** 新密码 */
  password: Scalars['String'];
  /** 重置密码 token */
  token: Scalars['String'];
};

/** 角色类型 */
export enum RoleType {
  Admin = 'Admin',
  Member = 'Member',
  Owner = 'Owner',
  Reader = 'Reader'
}

/** 启动策略回测 */
export type RunBacktestInput = {
  /** 回测机器人参数 */
  backtestBotParams: Scalars['JSON'];
  /** 回测参数 */
  backtestParams: Scalars['JSON'];
  /** 机器人ID */
  id: Scalars['Int'];
};

/** 启动机器人 */
export type RunBotInput = {
  /** Bot ID */
  id: Scalars['Int'];
  /** 是否是重启 */
  isRestart?: InputMaybe<Scalars['Boolean']>;
};

/** Strategy runner, 策略运行器 */
export type Runner = {
  __typename?: 'Runner';
  createdAt?: Maybe<Scalars['DateTime']>;
  /** 最后心跳时间 */
  heartbeatAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  /** 唯一ID */
  machineHash: Scalars['String'];
  /** 机器 ip */
  machineIp: Scalars['String'];
  /** 名字 */
  name: Scalars['String'];
  /** runner 类型 */
  runnerType: RunnerType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** User */
  user: User;
  /** 用户ID */
  userId: Scalars['Int'];
};

/** Runner Strategy */
export type RunnerStrategy = {
  __typename?: 'RunnerStrategy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  /** Runner ID */
  runnerId: Scalars['Int'];
  /** Strategy */
  strategy: Strategy;
  /** 策略ID */
  strategyId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** 筛选条件 */
export type RunnerStrategyWhereInput = {
  /** Runner ID */
  runnerId: Scalars['Int'];
};

/** connection */
export type RunnerStrategysConnection = {
  __typename?: 'RunnerStrategysConnection';
  hasNextPage: Scalars['Boolean'];
  items: Array<RunnerStrategy>;
  totalCount: Scalars['Int'];
};

/** 运行器类型 */
export enum RunnerType {
  Official = 'Official',
  Private = 'Private',
  Public = 'Public'
}

/** 筛选条件 */
export type RunnerWhereInput = {
  id?: InputMaybe<Scalars['Int']>;
  /** 用户ID */
  userId?: InputMaybe<Scalars['Int']>;
};

/** connection */
export type RunnersConnection = {
  __typename?: 'RunnersConnection';
  hasNextPage: Scalars['Boolean'];
  items: Array<Runner>;
  totalCount: Scalars['Int'];
};

export type SetKvInput = {
  /** 是否公开 */
  isPublic?: InputMaybe<Scalars['Boolean']>;
  /** kv key */
  key: Scalars['String'];
  /** 值 */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** kv value */
  value: Scalars['JSON'];
};

/** 设置杠杆 */
export type SetLeverageInput = {
  apiId: Scalars['Int'];
  leverage: Scalars['Int'];
  symbol: Scalars['String'];
};

export type SetStopBotPasswordInput = {
  /** Bot ID */
  id: Scalars['Int'];
  /** 机器人密码 */
  password: Scalars['String'];
};

/** 信号 */
export type Signal = {
  __typename?: 'Signal';
  alias: Scalars['String'];
  candle?: Maybe<Candle>;
  name: Scalars['String'];
  period?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  ticker?: Maybe<Ticker>;
  time: Scalars['Float'];
  /** spot or futures */
  tradeType?: Maybe<TradeType>;
};

export type SourceCode = {
  __typename?: 'SourceCode';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  /** 策略代码 */
  strategyCode: Scalars['String'];
  /** 策略ID */
  strategyId: Scalars['Int'];
  /** UI 代码 */
  uiCode: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** 筛选条件 */
export type SourceCodeWhereInput = {
  id: Scalars['Int'];
};

/** connection */
export type SourceCodesConnection = {
  __typename?: 'SourceCodesConnection';
  hasNextPage: Scalars['Boolean'];
  items: Array<SourceCode>;
  totalCount: Scalars['Int'];
};

/** 交易所原始现货订单 */
export type SpotOrder = {
  __typename?: 'SpotOrder';
  clientOrderId: Scalars['String'];
  cummulativeQuoteQty: Scalars['String'];
  executedQty: Scalars['String'];
  icebergQty: Scalars['String'];
  isWorking: Scalars['Boolean'];
  orderId: Scalars['Float'];
  orderListId: Scalars['Float'];
  origQty: Scalars['String'];
  origQuoteOrderQty: Scalars['String'];
  price: Scalars['String'];
  side: Scalars['String'];
  status: Scalars['String'];
  stopPrice: Scalars['String'];
  symbol: Scalars['String'];
  time: Scalars['Float'];
  timeInForce: Scalars['String'];
  type: Scalars['String'];
  updateTime: Scalars['Float'];
};

/** 现货下单 */
export type SpotOrderInput = {
  /** 机器人ID */
  botId: Scalars['Int'];
  /** 交易金额 */
  cash?: InputMaybe<Scalars['Float']>;
  /** 类型，做多入场、做空入场、做多止损... */
  operationType: OperationType;
  /** 价格 */
  price?: InputMaybe<Scalars['Float']>;
  /** 交易数量 */
  quantity?: InputMaybe<Scalars['Float']>;
  /** 交易方向 */
  side: OrderSide;
  /** symbol */
  symbol: Scalars['String'];
};

/** 数据统计 */
export type Stats = {
  __typename?: 'Stats';
  /** 机器人数量 */
  botCount: Scalars['Int'];
  /** 策略人数量 */
  strategyCount: Scalars['Int'];
  /** 用户数量 */
  userCount: Scalars['Int'];
};

/** 停止策略回测 */
export type StopBacktestInput = {
  /** 机器人ID */
  id: Scalars['Int'];
};

export type StopBotByPasswordInput = {
  /** Bot ID */
  id: Scalars['Int'];
  /** 机器人密码 */
  password: Scalars['String'];
};

/** 停止机器人 */
export type StopBotInput = {
  id: Scalars['Int'];
};

export type StorageRemoveInput = {
  /** storage key */
  key: Scalars['String'];
};

export type StorageSetAllInput = {
  storage?: InputMaybe<Scalars['JSON']>;
};

export type StorageSetInput = {
  /** storage key */
  key: Scalars['String'];
  /** storage value */
  value: Scalars['JSON'];
};

/** 策略 */
export type Strategy = {
  __typename?: 'Strategy';
  /** Collaborator */
  collaborators: Array<Collaborator>;
  /** 配置 */
  config?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** 开发调试的 botID */
  devBotId?: Maybe<Scalars['Int']>;
  /** docs */
  docs?: Maybe<Scalars['JSON']>;
  /** 终止机器人是否需要密码 */
  enableStopPassword?: Maybe<Scalars['Boolean']>;
  /** 是否开启交易 */
  enableTrade?: Maybe<Scalars['Boolean']>;
  /** 是否开启自定义 UI, 默认不开启 */
  enableUI?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  /** 介绍 */
  intro?: Maybe<Scalars['String']>;
  /** 立刻启动还是创建后手动启动 */
  isLazyStart?: Maybe<Scalars['Boolean']>;
  /** 是否公开 */
  isPublic: Scalars['Boolean'];
  /** 策略名字 */
  name: Scalars['String'];
  /** 参数定义Schema */
  paramsSchema?: Maybe<Scalars['JSON']>;
  /** slug, 唯一标识 */
  slug: Scalars['String'];
  /** 唯一token, sync 的时候用 */
  token: Scalars['String'];
  /** 交易类型 */
  tradeTypes?: Maybe<Array<Scalars['String']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** 被使用的次数 */
  usedCount: Scalars['Int'];
  /** User */
  user: User;
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 筛选条件 */
export type StrategyWhereInput = {
  id: Scalars['Int'];
};

/** connection */
export type StrategysConnection = {
  __typename?: 'StrategysConnection';
  hasNextPage: Scalars['Boolean'];
  items: Array<Strategy>;
  totalCount: Scalars['Int'];
};

export type Subscription = {
  __typename?: 'Subscription';
  /** 订阅机器人最新添加日志 */
  addLogSubscription: Log;
  /** 订阅回测结果 */
  backtestResultSubscription: BacktestResult;
  /** 订阅回测状态 */
  backtestStatusSubscription: BacktestStatus;
  /** 机器人通用事件 */
  botEventSubscription: BotEventPayload;
  /** 订阅机器人 storage */
  botStorageSubscription: Scalars['String'];
  /** 订阅市场深度 */
  orderbooksSubscription: Array<Orderbook>;
  /** 价格 */
  symbolPriceSubscription: Scalars['Float'];
  /** 订阅逐笔成交 */
  tradesSubscription: TradeRecord;
};


export type SubscriptionAddLogSubscriptionArgs = {
  botId: Scalars['Float'];
};


export type SubscriptionBacktestResultSubscriptionArgs = {
  botId: Scalars['Float'];
};


export type SubscriptionBacktestStatusSubscriptionArgs = {
  botId: Scalars['Float'];
};


export type SubscriptionBotEventSubscriptionArgs = {
  botId: Scalars['Float'];
};


export type SubscriptionBotStorageSubscriptionArgs = {
  botId: Scalars['Float'];
};


export type SubscriptionOrderbooksSubscriptionArgs = {
  symbol: Scalars['String'];
  type: Scalars['String'];
};


export type SubscriptionTradesSubscriptionArgs = {
  symbol: Scalars['String'];
  type: Scalars['String'];
};

/** 监控的交易对 */
export type Symbol = {
  __typename?: 'Symbol';
  baseAsset: Scalars['String'];
  isMarginTradingAllowed?: Maybe<Scalars['Boolean']>;
  isSpotTradingAllowed?: Maybe<Scalars['Boolean']>;
  maxPrice: Scalars['Float'];
  maxQty: Scalars['Float'];
  minNotional: Scalars['Float'];
  minPrice: Scalars['Float'];
  minQty: Scalars['Float'];
  pricePrecision: Scalars['Float'];
  qtyPrecision: Scalars['Float'];
  quoteAsset: Scalars['String'];
  symbol: Scalars['String'];
  /** spot or futures */
  tradeType?: Maybe<TradeType>;
};

export type SyncOrdersRes = {
  __typename?: 'SyncOrdersRes';
  code: Scalars['Float'];
  msg: Scalars['String'];
  total: Scalars['Float'];
};

/** sync 策略 */
export type SyncStrategyInput = {
  /** 参数定义Schema */
  paramsSchema?: InputMaybe<Scalars['JSON']>;
  /** 策略唯一名字 */
  slug: Scalars['String'];
  /** 策略代码 */
  strategyCode: Scalars['String'];
  /** UI 代码 */
  uiCode?: InputMaybe<Scalars['String']>;
};

/** ticker */
export type Ticker = {
  __typename?: 'Ticker';
  ask?: Maybe<Scalars['Float']>;
  askVolume?: Maybe<Scalars['Float']>;
  average: Scalars['Float'];
  bid?: Maybe<Scalars['Float']>;
  bidVolume?: Maybe<Scalars['Float']>;
  change: Scalars['Float'];
  close: Scalars['Float'];
  closeVolume: Scalars['Float'];
  high: Scalars['Float'];
  low: Scalars['Float'];
  open: Scalars['Float'];
  percentage: Scalars['Float'];
  previousClose: Scalars['Float'];
  quoteVolume: Scalars['Float'];
  symbol: Scalars['String'];
  time: Scalars['Float'];
  volume: Scalars['Float'];
};

/** Todo list 应用 */
export type Todo = {
  __typename?: 'Todo';
  /** 是否已完成 */
  completed: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  /** 该 Todo Title */
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** 用户ID */
  userId?: Maybe<Scalars['Int']>;
};

/** 筛选条件 */
export type TodoWhereInput = {
  /** 是否已完成 */
  completed: Scalars['Boolean'];
  /** 用户ID */
  userId: Scalars['Int'];
};

/** connection */
export type TodosConnection = {
  __typename?: 'TodosConnection';
  hasNextPage: Scalars['Boolean'];
  items: Array<Todo>;
  totalCount: Scalars['Int'];
};

/** personal token */
export type Token = {
  __typename?: 'Token';
  createdAt?: Maybe<Scalars['DateTime']>;
  /** description */
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** type */
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** User */
  user: User;
  /** 用户ID */
  userId: Scalars['Int'];
  /** token value */
  value?: Maybe<Scalars['String']>;
};

/** 筛选条件 */
export type TokenWhereInput = {
  /** ID */
  id?: InputMaybe<Scalars['Int']>;
  /** 用户ID */
  userId?: InputMaybe<Scalars['Int']>;
};

/** connection */
export type TokensConnection = {
  __typename?: 'TokensConnection';
  hasNextPage: Scalars['Boolean'];
  items: Array<Token>;
  totalCount: Scalars['Int'];
};

/** 逐笔成交 */
export type TradeRecord = {
  __typename?: 'TradeRecord';
  /** ID */
  aggId: Scalars['Float'];
  /** 是否是 maker */
  isBuyerMaker: Scalars['Boolean'];
  /** 成交价格 */
  price: Scalars['Float'];
  /** 成交数量 */
  quantity: Scalars['Float'];
  /** 时间 */
  timestamp: Scalars['Float'];
};

/** 交易类型 */
export enum TradeType {
  Futures = 'Futures',
  Spot = 'Spot'
}

/** 充值流水 */
export type TransactionLog = {
  __typename?: 'TransactionLog';
  /** 金额 */
  cashAmount: Scalars['Float'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  /** 时间额度(数量) */
  timeAmount: Scalars['Float'];
  /** Deposit/Withdraw/Deduct */
  transactionType: TransactionType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** 钱包ID */
  walletId: Scalars['Int'];
};

/** 筛选条件 */
export type TransactionLogWhereInput = {
  /** 钱包ID */
  walletId: Scalars['Int'];
};

/** connection */
export type TransactionLogsConnection = {
  __typename?: 'TransactionLogsConnection';
  hasNextPage: Scalars['Boolean'];
  items: Array<TransactionLog>;
  totalCount: Scalars['Int'];
};

/** 运行器类型 */
export enum TransactionType {
  Deduct = 'Deduct',
  Deposit = 'Deposit',
  Withdraw = 'Withdraw'
}

export type TwitterUser = {
  __typename?: 'TwitterUser';
  id: Scalars['String'];
  name: Scalars['String'];
  profile_image_url: Scalars['String'];
  username: Scalars['String'];
};

/** 更新data */
export type UpdateApiDataInput = {
  /** apiKey */
  apiKey: Scalars['String'];
  /** 交易所类型 */
  exchange: ExchangeType;
  /** 是否是模拟盘 */
  isSimulated?: InputMaybe<Scalars['Boolean']>;
  /** 该 Api 名字 */
  name: Scalars['String'];
  /** secretKey */
  passphrase?: InputMaybe<Scalars['String']>;
  /** secretKey */
  secretKey: Scalars['String'];
};

/** 更新单个 */
export type UpdateApiInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateApiDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateApiWhereInput>;
};

/** 更新条件 */
export type UpdateApiWhereInput = {
  /** ID */
  id: Scalars['Int'];
};

/** 更新data */
export type UpdateBotDataInput = {
  /** 机器人名字 */
  name?: InputMaybe<Scalars['String']>;
  /** 参数 */
  params?: InputMaybe<Scalars['JSON']>;
  /** 状态 */
  status?: InputMaybe<BotStatus>;
};

/** 更新单个 */
export type UpdateBotInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateBotDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateBotWhereInput>;
};

/** 更新 botName */
export type UpdateBotNameInput = {
  /** ID */
  id: Scalars['Int'];
  /** 名字 */
  name: Scalars['String'];
};

/** 更新data */
export type UpdateBotParamsInput = {
  /** api ID */
  apiId?: InputMaybe<Scalars['Int']>;
  /** Bot ID */
  id: Scalars['Int'];
  /** 参数 */
  params: Scalars['JSON'];
};

/** 更新条件 */
export type UpdateBotWhereInput = {
  /** Bot ID */
  id: Scalars['Int'];
};

/** 更新data */
export type UpdateCollaboratorDataInput = {
  /** 策略ID */
  strategyId: Scalars['Int'];
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 更新单个 */
export type UpdateCollaboratorInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateCollaboratorDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateCollaboratorWhereInput>;
};

/** 更新条件 */
export type UpdateCollaboratorWhereInput = {
  /** ID */
  id?: InputMaybe<Scalars['Int']>;
};

/** 更新data */
export type UpdateDepositCodeDataInput = {
  /** 是否已消费(已使用) */
  consumed: Scalars['Boolean'];
};

/** 更新单个 */
export type UpdateDepositCodeInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateDepositCodeDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateDepositCodeWhereInput>;
};

/** 更新条件 */
export type UpdateDepositCodeWhereInput = {
  /** ID */
  id?: InputMaybe<Scalars['Int']>;
};

/** 修改email */
export type UpdateEmailInput = {
  /** 邮箱 */
  email: Scalars['String'];
  /** 密码 */
  password: Scalars['String'];
};

/** 更新data */
export type UpdateExitRuleDataInput = {
  /** 唯一Code */
  code: ExitRuleCode;
  /** 名字 */
  name: Scalars['String'];
  /** 类型 */
  type: ExitRuleType;
};

/** 更新单个 */
export type UpdateExitRuleInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateExitRuleDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateExitRuleWhereInput>;
};

/** 更新条件 */
export type UpdateExitRuleWhereInput = {
  id: Scalars['Int'];
};

/** 更新data */
export type UpdateGridOrderDataInput = {
  /** 机器人ID */
  botId?: InputMaybe<Scalars['Int']>;
  /** 交易所订单ID */
  buyOrderId?: InputMaybe<Scalars['Int']>;
  /** 交易所订单ID */
  sellOrderId?: InputMaybe<Scalars['Int']>;
};

/** 更新单个 */
export type UpdateGridOrderInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateGridOrderDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateGridOrderWhereInput>;
};

/** 更新条件 */
export type UpdateGridOrderWhereInput = {
  /** 机器人ID */
  botId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** 更新data */
export type UpdateInvitationTokenDataInput = {
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 更新单个 */
export type UpdateInvitationTokenInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateInvitationTokenDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateInvitationTokenWhereInput>;
};

/** 更新条件 */
export type UpdateInvitationTokenWhereInput = {
  /** ID */
  id: Scalars['Int'];
};

/** 更新data */
export type UpdateLogDataInput = {
  /** 机器人ID */
  botId: Scalars['Int'];
  /** 日志内容 */
  content: Scalars['String'];
};

/** 更新单个 */
export type UpdateLogInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateLogDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateLogWhereInput>;
};

/** 更新条件 */
export type UpdateLogWhereInput = {
  id: Scalars['Int'];
};

/** 批量更新 */
export type UpdateManyApiInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateApiDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateApiWhereInput>;
};

/** 批量更新 */
export type UpdateManyBotInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateBotDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateBotWhereInput>;
};

/** 批量更新 */
export type UpdateManyCollaboratorInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateCollaboratorDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateCollaboratorWhereInput>;
};

/** 批量更新 */
export type UpdateManyDepositCodeInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateDepositCodeDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateDepositCodeWhereInput>;
};

/** 批量更新 */
export type UpdateManyExitRuleInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateExitRuleDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateExitRuleWhereInput>;
};

/** 批量更新 */
export type UpdateManyGridOrderInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateGridOrderDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateGridOrderWhereInput>;
};

/** 批量更新 */
export type UpdateManyInvitationTokenInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateInvitationTokenDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateInvitationTokenWhereInput>;
};

/** 批量更新 */
export type UpdateManyLogInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateLogDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateLogWhereInput>;
};

/** 批量更新 */
export type UpdateManyNotifierInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateNotifierDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateNotifierWhereInput>;
};

/** 批量更新 */
export type UpdateManyOrderInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateOrderDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateOrderWhereInput>;
};

/** 批量更新 */
export type UpdateManyRunnerInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateRunnerDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateRunnerWhereInput>;
};

/** 批量更新 */
export type UpdateManyRunnerStrategyInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateRunnerStrategyDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateRunnerStrategyWhereInput>;
};

/** 批量更新 */
export type UpdateManySourceCodeInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateSourceCodeDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateSourceCodeWhereInput>;
};

/** 批量更新 */
export type UpdateManyStrategyInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateStrategyDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateStrategyWhereInput>;
};

/** 批量更新 */
export type UpdateManyTodoInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateTodoDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateTodoWhereInput>;
};

/** 批量更新 */
export type UpdateManyTokenInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateTokenDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateTokenWhereInput>;
};

/** 批量更新 */
export type UpdateManyTransactionLogInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateTransactionLogDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateTransactionLogWhereInput>;
};

/** 批量更新 */
export type UpdateManyUserInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateUserDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateUserWhereInput>;
};

/** 批量更新 */
export type UpdateManyWalletInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateWalletDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateWalletWhereInput>;
};

/** 更新data */
export type UpdateNotifierDataInput = {
  /** 配置 */
  config?: InputMaybe<Scalars['JSON']>;
  /** 名字 */
  name: Scalars['String'];
  /** 通知通道类型 */
  type: NotifierType;
};

/** 更新单个 */
export type UpdateNotifierInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateNotifierDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateNotifierWhereInput>;
};

/** 更新条件 */
export type UpdateNotifierWhereInput = {
  id: Scalars['Int'];
};

/** 更新data */
export type UpdateOrderDataInput = {
  /** 机器人ID */
  botId?: InputMaybe<Scalars['Int']>;
  /** 交易所自定义订单ID */
  clientOrderId?: InputMaybe<Scalars['String']>;
  /** 手续费 */
  commission?: InputMaybe<Scalars['Float']>;
  /** 手续费 asset */
  commissionAsset?: InputMaybe<Scalars['String']>;
  /** 是否是买家 */
  isBuyer?: InputMaybe<Scalars['Boolean']>;
  /** 是否是挂单方 */
  isMaker?: InputMaybe<Scalars['Boolean']>;
  /** 交易所订单ID */
  orderId?: InputMaybe<Scalars['String']>;
  /** 成交价格 */
  price?: InputMaybe<Scalars['Float']>;
  /** 成交量 */
  qty?: InputMaybe<Scalars['Float']>;
  /** 成交金额 */
  quoteQty?: InputMaybe<Scalars['Float']>;
  /** 已实现利润 */
  realizedProfit?: InputMaybe<Scalars['Float']>;
  /** 交易类型 */
  side?: InputMaybe<Scalars['String']>;
  /** 状态 */
  status?: InputMaybe<OrderStatus>;
  /** 交易对 */
  symbol?: InputMaybe<Scalars['String']>;
  /** 订单时间 */
  time?: InputMaybe<Scalars['Float']>;
};

/** 更新单个 */
export type UpdateOrderInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateOrderDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateOrderWhereInput>;
};

/** 更新条件 */
export type UpdateOrderWhereInput = {
  /** 机器人ID */
  botId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  /** 交易所订单ID */
  orderId?: InputMaybe<Scalars['String']>;
  /** 订单状态 */
  status?: InputMaybe<OrderStatus>;
};

/** 更新data */
export type UpdateRunnerDataInput = {
  /** 最后心跳时间 */
  heartbeatAt?: InputMaybe<Scalars['DateTime']>;
  /** 策略名字 */
  name?: InputMaybe<Scalars['String']>;
  /** runner 类型 */
  runnerType?: InputMaybe<RunnerType>;
};

/** 更新 Runner 心跳 */
export type UpdateRunnerHeartbeatInput = {
  /** 最后心跳时间 */
  heartbeatAt: Scalars['DateTime'];
  runnerId: Scalars['Int'];
};

/** 更新单个 */
export type UpdateRunnerInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateRunnerDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateRunnerWhereInput>;
};

/** 更新data */
export type UpdateRunnerStrategyDataInput = {
  /** Runner ID */
  runnerId: Scalars['Int'];
  /** 策略ID */
  strategyId: Scalars['Int'];
};

/** 更新单个 */
export type UpdateRunnerStrategyInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateRunnerStrategyDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateRunnerStrategyWhereInput>;
};

/** 更新条件 */
export type UpdateRunnerStrategyWhereInput = {
  /** ID */
  id?: InputMaybe<Scalars['Int']>;
};

/** 更新条件 */
export type UpdateRunnerWhereInput = {
  id: Scalars['Int'];
};

/** 更新data */
export type UpdateSourceCodeDataInput = {
  /** 策略代码 */
  strategyCode?: InputMaybe<Scalars['String']>;
  /** UI 代码 */
  uiCode?: InputMaybe<Scalars['String']>;
};

/** 更新单个 */
export type UpdateSourceCodeInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateSourceCodeDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateSourceCodeWhereInput>;
};

/** 更新条件 */
export type UpdateSourceCodeWhereInput = {
  /** ID */
  id?: InputMaybe<Scalars['Int']>;
  /** 策略ID */
  strategyId: Scalars['Int'];
};

/** 更新策略代码 */
export type UpdateStrategyCodeInput = {
  /** 策略代码 */
  strategyCode: Scalars['String'];
  /** 策略ID */
  strategyId: Scalars['Int'];
};

/** 更新data */
export type UpdateStrategyDataInput = {
  /** docs */
  docs?: InputMaybe<Scalars['JSON']>;
  /** 终止机器人是否需要密码 */
  enableStopPassword?: InputMaybe<Scalars['Boolean']>;
  /** 是否开启交易 */
  enableTrade?: InputMaybe<Scalars['Boolean']>;
  /** 是否开启自定义 UI, 默认不开启 */
  enableUI?: InputMaybe<Scalars['Boolean']>;
  /** 介绍 */
  intro?: InputMaybe<Scalars['String']>;
  /** 是否公开 */
  isPublic?: InputMaybe<Scalars['Boolean']>;
  /** 策略名字 */
  name?: InputMaybe<Scalars['String']>;
  /** 参数定义Schema */
  paramsSchema?: InputMaybe<Scalars['JSON']>;
  /** slug, 唯一标识 */
  slug?: InputMaybe<Scalars['String']>;
  /** 交易类型 */
  tradeTypes?: InputMaybe<Scalars['JSON']>;
};

/** 更新单个 */
export type UpdateStrategyInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateStrategyDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateStrategyWhereInput>;
};

/** 更新条件 */
export type UpdateStrategyWhereInput = {
  id: Scalars['Int'];
};

/** 更新data */
export type UpdateTodoDataInput = {
  /** 是否已完成 */
  completed?: InputMaybe<Scalars['Boolean']>;
  /** 该 Todo Title */
  title?: InputMaybe<Scalars['String']>;
};

/** 更新单个 */
export type UpdateTodoInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateTodoDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateTodoWhereInput>;
};

/** 更新条件 */
export type UpdateTodoWhereInput = {
  /** 是否已完成 */
  completed?: InputMaybe<Scalars['Boolean']>;
  /** ID */
  id?: InputMaybe<Scalars['Int']>;
};

/** 更新data */
export type UpdateTokenDataInput = {
  /** description */
  description?: InputMaybe<Scalars['String']>;
  /** type */
  type?: InputMaybe<Scalars['String']>;
  /** 用户ID */
  userId?: InputMaybe<Scalars['Int']>;
  /** description */
  value?: InputMaybe<Scalars['String']>;
};

/** 更新单个 */
export type UpdateTokenInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateTokenDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateTokenWhereInput>;
};

/** 更新条件 */
export type UpdateTokenWhereInput = {
  /** ID */
  id?: InputMaybe<Scalars['Int']>;
};

/** 更新data */
export type UpdateTransactionLogDataInput = {
  /** 钱包ID */
  walletId: Scalars['Int'];
};

/** 更新单个 */
export type UpdateTransactionLogInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateTransactionLogDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateTransactionLogWhereInput>;
};

/** 更新条件 */
export type UpdateTransactionLogWhereInput = {
  /** ID */
  id?: InputMaybe<Scalars['Int']>;
};

/** 更新UI代码 */
export type UpdateUiCodeInput = {
  /** 策略ID */
  strategyId: Scalars['Int'];
  /** UI 代码 */
  uiCode?: InputMaybe<Scalars['String']>;
};

/** 更新data */
export type UpdateUserDataInput = {
  /** 个人简介 */
  bio?: InputMaybe<Scalars['String']>;
  /** 邮箱 */
  email?: InputMaybe<Scalars['String']>;
  /** 职业 */
  jobTitle?: InputMaybe<Scalars['String']>;
  /** 唯一标识 */
  login?: InputMaybe<Scalars['String']>;
  /** 昵称 */
  nickname?: InputMaybe<Scalars['String']>;
  /** 用户名 */
  username?: InputMaybe<Scalars['String']>;
};

/** 更新单个 */
export type UpdateUserInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateUserDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateUserWhereInput>;
};

/** 更新条件 */
export type UpdateUserWhereInput = {
  /** ID */
  id?: InputMaybe<Scalars['Int']>;
};

/** 更新data */
export type UpdateWalletDataInput = {
  /** 该 Wallet Title */
  title?: InputMaybe<Scalars['String']>;
};

/** 更新单个 */
export type UpdateWalletInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateWalletDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateWalletWhereInput>;
};

/** 更新条件 */
export type UpdateWalletWhereInput = {
  /** ID */
  id?: InputMaybe<Scalars['Int']>;
};

/** user */
export type User = {
  __typename?: 'User';
  /** 头像 */
  avatar: Scalars['String'];
  /** 个人简介 */
  bio?: Maybe<Scalars['String']>;
  /** 邮箱 */
  email?: Maybe<Scalars['String']>;
  /** 邮箱校验时间 */
  emailValidatedAt?: Maybe<Scalars['DateTime']>;
  /** Github ID */
  githubId?: Maybe<Scalars['Float']>;
  /** Google ID */
  googleId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** 职业 */
  jobTitle?: Maybe<Scalars['String']>;
  /** 唯一标识 */
  login?: Maybe<Scalars['String']>;
  /** 全名/昵称 */
  nickname: Scalars['String'];
  /** 手机 */
  phone?: Maybe<Scalars['String']>;
  /** 付费类型 */
  planType: PlanType;
  /** 用户名 */
  username: Scalars['String'];
  /** 钱包地址 */
  walletAddress?: Maybe<Scalars['String']>;
};

/** 筛选条件 */
export type UserWhereInput = {
  /** 昵称 */
  nickname?: InputMaybe<Scalars['String']>;
  /** 搜索用户 */
  q?: InputMaybe<Scalars['String']>;
};

/** connection */
export type UsersConnection = {
  __typename?: 'UsersConnection';
  hasNextPage: Scalars['Boolean'];
  items: Array<User>;
  totalCount: Scalars['Int'];
};

/** verify wallet sign message input */
export type VerifySignMessageInput = {
  /** Message */
  message: Scalars['String'];
  /** 签名 */
  signature: Scalars['String'];
};

export type Wallet = {
  __typename?: 'Wallet';
  createdAt?: Maybe<Scalars['DateTime']>;
  /** 可用余额(时间秒) */
  free: Scalars['Float'];
  /** 冻结金额(时间秒) */
  frozen: Scalars['Float'];
  id: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** 用户ID */
  userId?: Maybe<Scalars['Int']>;
};

/** 筛选条件 */
export type WalletWhereInput = {
  /** 用户ID */
  userId: Scalars['Int'];
};

/** connection */
export type WalletsConnection = {
  __typename?: 'WalletsConnection';
  hasNextPage: Scalars['Boolean'];
  items: Array<Wallet>;
  totalCount: Scalars['Int'];
};
