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

/** 添加成员 */
export type AddMemberInput = {
  /** 角色类型 */
  roleType: RoleType;
  /** Team ID */
  teamId: Scalars['Int'];
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 添加 Message */
export type AddMessageInput = {
  content: Scalars['String'];
  role: Scalars['String'];
  /** sessionId */
  sessionId: Scalars['Int'];
  /** 用户ID */
  userId?: InputMaybe<Scalars['Int']>;
  userMessageId?: InputMaybe<Scalars['Int']>;
};

/** 添加 Session */
export type AddSessionInput = {
  /** 该 Session Name */
  name: Scalars['String'];
  /** teamId */
  teamId: Scalars['Int'];
  /** 用户ID */
  userId?: InputMaybe<Scalars['Int']>;
};

/** 添加 Team */
export type AddTeamInput = {
  /** 该 Team Name */
  name: Scalars['String'];
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

export type ChatSettings = {
  __typename?: 'ChatSettings';
  followUpMessageLength?: Maybe<Scalars['Float']>;
  id: Scalars['Int'];
  maxToken?: Maybe<Scalars['Int']>;
  model?: Maybe<Scalars['String']>;
  showTokenCount?: Maybe<Scalars['Boolean']>;
};

/** 创建 */
export type CreateInvoiceInput = {
  dueDate?: InputMaybe<Scalars['DateTime']>;
  invoiceDate?: InputMaybe<Scalars['DateTime']>;
  invoiceNumber: Scalars['String'];
  orderId: Scalars['Int'];
  status: Scalars['String'];
  totalAmount: Scalars['Float'];
};

/** 创建 */
export type CreateMemberInput = {
  /** Team ID */
  teamId: Scalars['Int'];
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 创建 */
export type CreateMessageInput = {
  content: Scalars['String'];
  role: Scalars['String'];
  /** sessionId */
  sessionId: Scalars['Int'];
  /** 用户ID */
  userId?: InputMaybe<Scalars['Int']>;
  userMessageId?: InputMaybe<Scalars['Int']>;
};

/** 创建 */
export type CreateOrderInput = {
  billingMethod: Scalars['String'];
  billingScheme: Scalars['String'];
  billingStatus: Scalars['String'];
  endDate?: InputMaybe<Scalars['DateTime']>;
  nextBillingDate?: InputMaybe<Scalars['DateTime']>;
  planId: Scalars['Int'];
  startDate?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

/** 创建 */
export type CreatePaymentInput = {
  amount: Scalars['Float'];
  currency: Scalars['String'];
  invoiceId: Scalars['Int'];
  paymentDate?: InputMaybe<Scalars['DateTime']>;
  paymentMethod: Scalars['String'];
  paymentStatus: Scalars['String'];
};

/** 创建 */
export type CreatePlanInput = {
  interval?: InputMaybe<PlanInterval>;
  price?: InputMaybe<Scalars['Float']>;
  status: PlanStatus;
  teamId: Scalars['Int'];
  type: PlanType;
};

/** 创建 */
export type CreateProviderInput = {
  accessToken?: InputMaybe<Scalars['String']>;
  apiKey?: InputMaybe<Scalars['String']>;
  /** self host auth code */
  authorizationCode?: InputMaybe<Scalars['String']>;
  /** self host server endpoint */
  endpoint?: InputMaybe<Scalars['String']>;
  /** teamId */
  teamId: Scalars['Int'];
  type: ProviderType;
};

/** 创建 */
export type CreateProxyInput = {
  host?: InputMaybe<Scalars['String']>;
  valid?: InputMaybe<Scalars['Boolean']>;
};

/** 创建 */
export type CreateRefundInput = {
  amount: Scalars['Int'];
  currency: Scalars['String'];
  paymentId: Scalars['Int'];
  refundDate?: InputMaybe<Scalars['DateTime']>;
  refundStatus: Scalars['String'];
};

/** 创建 */
export type CreateSessionInput = {
  /** 访问权限类型 */
  accessType?: InputMaybe<Scalars['String']>;
  /** 该 Session Name */
  name: Scalars['String'];
  /** 设置 */
  settings?: InputMaybe<Scalars['JSON']>;
  slug?: InputMaybe<Scalars['String']>;
  /** Team Id */
  teamId?: InputMaybe<Scalars['Int']>;
  /** 用户ID */
  userId?: InputMaybe<Scalars['Int']>;
};

/** 创建 */
export type CreateSettingInput = {
  activeSessionId?: InputMaybe<Scalars['Int']>;
  activeTeamId?: InputMaybe<Scalars['Int']>;
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 创建 */
export type CreateTeamInput = {
  /** 该 Team Name */
  name: Scalars['String'];
  slug?: InputMaybe<Scalars['String']>;
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
export type CreateUserInput = {
  nickname: Scalars['String'];
  username: Scalars['String'];
};

/** 创建 */
export type CreateWalletInput = {
  balance: Scalars['Float'];
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 删除成员 */
export type DeleteInvoiceInput = {
  /** ID */
  id: Scalars['Int'];
};

/** 删除成员 */
export type DeleteMemberInput = {
  /** member ID */
  id: Scalars['Int'];
};

/** 删除 */
export type DeleteMessageInput = {
  /** ID */
  id: Scalars['Int'];
};

/** 删除成员 */
export type DeleteOrderInput = {
  /** ID */
  id: Scalars['Int'];
};

/** 删除成员 */
export type DeletePaymentInput = {
  /** ID */
  id: Scalars['Int'];
};

/** 删除成员 */
export type DeletePlanInput = {
  /** ID */
  id: Scalars['Int'];
};

/** 删除 */
export type DeleteProviderInput = {
  /** ID */
  id: Scalars['Int'];
};

/** 删除 */
export type DeleteProxyInput = {
  /** ID */
  id: Scalars['Int'];
};

/** 删除成员 */
export type DeleteRefundInput = {
  /** ID */
  id: Scalars['Int'];
};

/** 删除 */
export type DeleteSessionInput = {
  /** ID */
  id: Scalars['Int'];
};

/** 删除 */
export type DeleteSettingInput = {
  /** ID */
  id: Scalars['Int'];
};

/** 删除 */
export type DeleteTeamInput = {
  /** ID */
  id: Scalars['Int'];
};

/** 删除 */
export type DeleteTokenInput = {
  /** ID */
  id?: InputMaybe<Scalars['Int']>;
};

/** 删除 */
export type DeleteUserInput = {
  /** id */
  id?: InputMaybe<Scalars['Int']>;
  nickname: Scalars['String'];
  username: Scalars['String'];
};

/** 删除成员 */
export type DeleteWalletInput = {
  /** ID */
  id: Scalars['Int'];
};

/** 退出团队 */
export type ExitMemberInput = {
  /** member ID */
  id: Scalars['Int'];
};

/** 忘记密码 */
export type ForgotPasswordInput = {
  /** 邮箱 */
  email: Scalars['String'];
};

export type Invoice = {
  __typename?: 'Invoice';
  createdAt?: Maybe<Scalars['DateTime']>;
  dueDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  invoiceDate?: Maybe<Scalars['DateTime']>;
  invoiceNumber: Scalars['String'];
  orderId: Scalars['Int'];
  status: Scalars['String'];
  totalAmount: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** 筛选条件 */
export type InvoiceWhereInput = {
  /** ID */
  id: Scalars['Int'];
};

/** connection */
export type InvoicesConnection = {
  __typename?: 'InvoicesConnection';
  hasNextPage: Scalars['Boolean'];
  items: Array<Invoice>;
  totalCount: Scalars['Int'];
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

/** 协作者 */
export type Member = {
  __typename?: 'Member';
  id: Scalars['Int'];
  /** 角色类型 */
  roleType: RoleType;
  /** Team ID */
  teamId: Scalars['Int'];
  /** User */
  user: User;
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 筛选条件 */
export type MemberWhereInput = {
  /** Team ID */
  teamId: Scalars['Int'];
};

/** connection */
export type MembersConnection = {
  __typename?: 'MembersConnection';
  hasNextPage: Scalars['Boolean'];
  items: Array<Member>;
  totalCount: Scalars['Int'];
};

export type Message = {
  __typename?: 'Message';
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  private: Scalars['Boolean'];
  role: Scalars['String'];
  /** sessionId */
  sessionId: Scalars['Int'];
  /** streaming status */
  streaming?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** 用户ID */
  userId: Scalars['Int'];
  userMessageId?: Maybe<Scalars['Int']>;
  /** 阅读次数 */
  views: Scalars['Int'];
};

/** 筛选条件 */
export type MessageWhereInput = {
  /** sessionId */
  sessionId?: InputMaybe<Scalars['Int']>;
};

/** connection */
export type MessagesConnection = {
  __typename?: 'MessagesConnection';
  hasNextPage: Scalars['Boolean'];
  items: Array<Message>;
  totalCount: Scalars['Int'];
};

/** 修改成员角色类型 */
export type ModifyMemberRoleTypeInput = {
  /** member ID */
  id: Scalars['Int'];
  /** 角色类型 */
  roleType: RoleType;
};

/** 修改秘密 */
export type ModifyPasswordInput = {
  /** 新密码 */
  newPassword: Scalars['String'];
  /** 旧密码 */
  oldPassword: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** 添加成员 */
  addMember: Member;
  /** 添加Message */
  addMessage: Message;
  /** 添加Session */
  addSession: Session;
  /** 添加Team */
  addTeam: Team;
  /** 新增Token */
  addToken: Token;
  /** 创建 */
  createInvoice: Invoice;
  /** 创建 */
  createMember: Member;
  /** 创建 */
  createMessage: Message;
  /** 创建 */
  createOrder: Order;
  /** 创建 */
  createPayment: Payment;
  /** 创建 */
  createPlan: Plan;
  /** 创建 */
  createProvider: Provider;
  /** 创建 */
  createProxy: Proxy;
  /** 创建 */
  createRefund: Refund;
  /** 创建 */
  createSession: Session;
  /** 创建 */
  createSetting: Setting;
  /** 创建 */
  createTeam: Team;
  /** 创建 */
  createToken: Token;
  /** 创建 */
  createUser: User;
  /** 创建 */
  createWallet: Wallet;
  /** 删除单个 */
  deleteInvoice: Scalars['Boolean'];
  /** 批量删除 */
  deleteManyInvoices: Scalars['Float'];
  /** 批量删除 */
  deleteManyMembers: Scalars['Float'];
  /** 批量删除 */
  deleteManyMessages: Scalars['Float'];
  /** 批量删除 */
  deleteManyOrders: Scalars['Float'];
  /** 批量删除 */
  deleteManyPayments: Scalars['Float'];
  /** 批量删除 */
  deleteManyPlans: Scalars['Float'];
  /** 批量删除 */
  deleteManyProviders: Scalars['Float'];
  /** 批量删除 */
  deleteManyProxys: Scalars['Float'];
  /** 批量删除 */
  deleteManyRefunds: Scalars['Float'];
  /** 批量删除 */
  deleteManySessions: Scalars['Float'];
  /** 批量删除 */
  deleteManySettings: Scalars['Float'];
  /** 批量删除 */
  deleteManyTeams: Scalars['Float'];
  /** 批量删除 */
  deleteManyTokens: Scalars['Float'];
  /** 批量删除 */
  deleteManyUsers: Scalars['Float'];
  /** 批量删除 */
  deleteManyWallets: Scalars['Float'];
  /** 删除单个 */
  deleteMember: Scalars['Boolean'];
  /** 删除单个 */
  deleteMessage: Scalars['Boolean'];
  /** 删除单个 */
  deleteOrder: Scalars['Boolean'];
  /** 删除单个 */
  deletePayment: Scalars['Boolean'];
  /** 删除单个 */
  deletePlan: Scalars['Boolean'];
  /** 删除单个 */
  deleteProvider: Scalars['Boolean'];
  /** 删除单个 */
  deleteProxy: Scalars['Boolean'];
  /** 删除单个 */
  deleteRefund: Scalars['Boolean'];
  /** 删除单个 */
  deleteSession: Scalars['Boolean'];
  /** 删除单个 */
  deleteSetting: Scalars['Boolean'];
  /** 删除单个 */
  deleteTeam: Scalars['Boolean'];
  /** 删除单个 */
  deleteToken: Scalars['Boolean'];
  /** 删除单个 */
  deleteUser: Scalars['Boolean'];
  /** 删除单个 */
  deleteWallet: Scalars['Boolean'];
  /** 退出成员 */
  exitMember: Scalars['Boolean'];
  /** 重置密码 */
  forgotPassword: Scalars['Boolean'];
  /** 邮箱登录 */
  loginByEmail: LoginSuccessPayload;
  /** 使用 GitHub 登录 */
  loginByGithub: LoginSuccessPayload;
  /** 使用 Google 登录 */
  loginByGoogle: LoginSuccessPayload;
  /** Login by personal token */
  loginByPersonalToken: LoginSuccessPayload;
  /** 修改角色类型 */
  modifyMemberRoleType: Scalars['Boolean'];
  /** 修改密码 */
  modifyPassword: Scalars['Boolean'];
  /** 邮箱注册 */
  registerByEmail: Scalars['Boolean'];
  /** 删除成员，只有管理员以上才能操作 */
  removeMember: Scalars['Boolean'];
  /** 删除一组对话 */
  removeMessagePair: Scalars['Boolean'];
  /** 删除Session */
  removeSession: Scalars['Boolean'];
  /** 重置密码 */
  resetPassword: Scalars['Boolean'];
  updateChatSettings: Scalars['Boolean'];
  /** 修改email */
  updateEmail: Scalars['Boolean'];
  /** 更新单个 */
  updateInvoice: Invoice;
  /** 批量更新 */
  updateManyInvoices: Scalars['Boolean'];
  /** 批量更新 */
  updateManyMembers: Scalars['Boolean'];
  /** 批量更新 */
  updateManyMessages: Scalars['Boolean'];
  /** 批量更新 */
  updateManyOrders: Scalars['Boolean'];
  /** 批量更新 */
  updateManyPayments: Scalars['Boolean'];
  /** 批量更新 */
  updateManyPlans: Scalars['Boolean'];
  /** 批量更新 */
  updateManyProviders: Scalars['Boolean'];
  /** 批量更新 */
  updateManyProxys: Scalars['Boolean'];
  /** 批量更新 */
  updateManyRefunds: Scalars['Boolean'];
  /** 批量更新 */
  updateManySessions: Scalars['Boolean'];
  /** 批量更新 */
  updateManySettings: Scalars['Boolean'];
  /** 批量更新 */
  updateManyTeams: Scalars['Boolean'];
  /** 批量更新 */
  updateManyTokens: Scalars['Boolean'];
  /** 批量更新 */
  updateManyUsers: Scalars['Boolean'];
  /** 批量更新 */
  updateManyWallets: Scalars['Boolean'];
  /** 更新单个 */
  updateMember: Member;
  /** 更新单个 */
  updateMessage: Message;
  /** 更新单个 */
  updateOrder: Order;
  /** 更新单个 */
  updatePayment: Payment;
  /** 更新单个 */
  updatePlan: Plan;
  /** 更新单个 */
  updateProvider: Provider;
  /** 更新单个 */
  updateProxy: Proxy;
  /** 更新单个 */
  updateRefund: Refund;
  /** 更新单个 */
  updateSession: Session;
  /** 更新单个 */
  updateSetting: Setting;
  /** 更新单个 */
  updateTeam: Team;
  /** 更新单个 */
  updateToken: Token;
  /** 更新单个 */
  updateUser: User;
  updateVisit: Scalars['Boolean'];
  /** 更新单个 */
  updateWallet: Wallet;
};


export type MutationAddMemberArgs = {
  input: AddMemberInput;
};


export type MutationAddMessageArgs = {
  input: AddMessageInput;
};


export type MutationAddSessionArgs = {
  input: AddSessionInput;
};


export type MutationAddTeamArgs = {
  input: AddTeamInput;
};


export type MutationAddTokenArgs = {
  input: AddTokenInput;
};


export type MutationCreateInvoiceArgs = {
  input: CreateInvoiceInput;
};


export type MutationCreateMemberArgs = {
  input: CreateMemberInput;
};


export type MutationCreateMessageArgs = {
  input: CreateMessageInput;
};


export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};


export type MutationCreatePaymentArgs = {
  input: CreatePaymentInput;
};


export type MutationCreatePlanArgs = {
  input: CreatePlanInput;
};


export type MutationCreateProviderArgs = {
  input: CreateProviderInput;
};


export type MutationCreateProxyArgs = {
  input: CreateProxyInput;
};


export type MutationCreateRefundArgs = {
  input: CreateRefundInput;
};


export type MutationCreateSessionArgs = {
  input: CreateSessionInput;
};


export type MutationCreateSettingArgs = {
  input: CreateSettingInput;
};


export type MutationCreateTeamArgs = {
  input: CreateTeamInput;
};


export type MutationCreateTokenArgs = {
  input: CreateTokenInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCreateWalletArgs = {
  input: CreateWalletInput;
};


export type MutationDeleteInvoiceArgs = {
  input: DeleteInvoiceInput;
};


export type MutationDeleteManyInvoicesArgs = {
  input: DeleteInvoiceInput;
};


export type MutationDeleteManyMembersArgs = {
  input: DeleteMemberInput;
};


export type MutationDeleteManyMessagesArgs = {
  input: DeleteMessageInput;
};


export type MutationDeleteManyOrdersArgs = {
  input: DeleteOrderInput;
};


export type MutationDeleteManyPaymentsArgs = {
  input: DeletePaymentInput;
};


export type MutationDeleteManyPlansArgs = {
  input: DeletePlanInput;
};


export type MutationDeleteManyProvidersArgs = {
  input: DeleteProviderInput;
};


export type MutationDeleteManyProxysArgs = {
  input: DeleteProxyInput;
};


export type MutationDeleteManyRefundsArgs = {
  input: DeleteRefundInput;
};


export type MutationDeleteManySessionsArgs = {
  input: DeleteSessionInput;
};


export type MutationDeleteManySettingsArgs = {
  input: DeleteSettingInput;
};


export type MutationDeleteManyTeamsArgs = {
  input: DeleteTeamInput;
};


export type MutationDeleteManyTokensArgs = {
  input: DeleteTokenInput;
};


export type MutationDeleteManyUsersArgs = {
  input: DeleteUserInput;
};


export type MutationDeleteManyWalletsArgs = {
  input: DeleteWalletInput;
};


export type MutationDeleteMemberArgs = {
  input: DeleteMemberInput;
};


export type MutationDeleteMessageArgs = {
  input: DeleteMessageInput;
};


export type MutationDeleteOrderArgs = {
  input: DeleteOrderInput;
};


export type MutationDeletePaymentArgs = {
  input: DeletePaymentInput;
};


export type MutationDeletePlanArgs = {
  input: DeletePlanInput;
};


export type MutationDeleteProviderArgs = {
  input: DeleteProviderInput;
};


export type MutationDeleteProxyArgs = {
  input: DeleteProxyInput;
};


export type MutationDeleteRefundArgs = {
  input: DeleteRefundInput;
};


export type MutationDeleteSessionArgs = {
  input: DeleteSessionInput;
};


export type MutationDeleteSettingArgs = {
  input: DeleteSettingInput;
};


export type MutationDeleteTeamArgs = {
  input: DeleteTeamInput;
};


export type MutationDeleteTokenArgs = {
  input: DeleteTokenInput;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationDeleteWalletArgs = {
  input: DeleteWalletInput;
};


export type MutationExitMemberArgs = {
  input: ExitMemberInput;
};


export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
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


export type MutationModifyMemberRoleTypeArgs = {
  input: ModifyMemberRoleTypeInput;
};


export type MutationModifyPasswordArgs = {
  input: ModifyPasswordInput;
};


export type MutationRegisterByEmailArgs = {
  input: RegisterByEmailInput;
};


export type MutationRemoveMemberArgs = {
  input: RemoveMemberInput;
};


export type MutationRemoveMessagePairArgs = {
  input: RemoveMessagePairInput;
};


export type MutationRemoveSessionArgs = {
  input: RemoveSessionInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationUpdateChatSettingsArgs = {
  input: UpdateChatSettingsInput;
};


export type MutationUpdateEmailArgs = {
  input: UpdateEmailInput;
};


export type MutationUpdateInvoiceArgs = {
  input: UpdateInvoiceInput;
};


export type MutationUpdateManyInvoicesArgs = {
  input: UpdateManyInvoiceInput;
};


export type MutationUpdateManyMembersArgs = {
  input: UpdateManyMemberInput;
};


export type MutationUpdateManyMessagesArgs = {
  input: UpdateManyMessageInput;
};


export type MutationUpdateManyOrdersArgs = {
  input: UpdateManyOrderInput;
};


export type MutationUpdateManyPaymentsArgs = {
  input: UpdateManyPaymentInput;
};


export type MutationUpdateManyPlansArgs = {
  input: UpdateManyPlanInput;
};


export type MutationUpdateManyProvidersArgs = {
  input: UpdateManyProviderInput;
};


export type MutationUpdateManyProxysArgs = {
  input: UpdateManyProxyInput;
};


export type MutationUpdateManyRefundsArgs = {
  input: UpdateManyRefundInput;
};


export type MutationUpdateManySessionsArgs = {
  input: UpdateManySessionInput;
};


export type MutationUpdateManySettingsArgs = {
  input: UpdateManySettingInput;
};


export type MutationUpdateManyTeamsArgs = {
  input: UpdateManyTeamInput;
};


export type MutationUpdateManyTokensArgs = {
  input: UpdateManyTokenInput;
};


export type MutationUpdateManyUsersArgs = {
  input: UpdateManyUserInput;
};


export type MutationUpdateManyWalletsArgs = {
  input: UpdateManyWalletInput;
};


export type MutationUpdateMemberArgs = {
  input: UpdateMemberInput;
};


export type MutationUpdateMessageArgs = {
  input: UpdateMessageInput;
};


export type MutationUpdateOrderArgs = {
  input: UpdateOrderInput;
};


export type MutationUpdatePaymentArgs = {
  input: UpdatePaymentInput;
};


export type MutationUpdatePlanArgs = {
  input: UpdatePlanInput;
};


export type MutationUpdateProviderArgs = {
  input: UpdateProviderInput;
};


export type MutationUpdateProxyArgs = {
  input: UpdateProxyInput;
};


export type MutationUpdateRefundArgs = {
  input: UpdateRefundInput;
};


export type MutationUpdateSessionArgs = {
  input: UpdateSessionInput;
};


export type MutationUpdateSettingArgs = {
  input: UpdateSettingInput;
};


export type MutationUpdateTeamArgs = {
  input: UpdateTeamInput;
};


export type MutationUpdateTokenArgs = {
  input: UpdateTokenInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationUpdateVisitArgs = {
  input: UpdateVisitInput;
};


export type MutationUpdateWalletArgs = {
  input: UpdateWalletInput;
};

export type Order = {
  __typename?: 'Order';
  billingMethod: Scalars['String'];
  billingScheme: Scalars['String'];
  billingStatus: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  nextBillingDate?: Maybe<Scalars['DateTime']>;
  planId: Scalars['Int'];
  startDate?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

/** 筛选条件 */
export type OrderWhereInput = {
  /** ID */
  id: Scalars['Int'];
};

/** connection */
export type OrdersConnection = {
  __typename?: 'OrdersConnection';
  hasNextPage: Scalars['Boolean'];
  items: Array<Order>;
  totalCount: Scalars['Int'];
};

export type Payment = {
  __typename?: 'Payment';
  amount: Scalars['Float'];
  createdAt?: Maybe<Scalars['DateTime']>;
  currency: Scalars['String'];
  id: Scalars['Int'];
  invoiceId: Scalars['Int'];
  paymentDate?: Maybe<Scalars['DateTime']>;
  paymentMethod: Scalars['String'];
  paymentStatus: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** 筛选条件 */
export type PaymentWhereInput = {
  /** ID */
  id: Scalars['Int'];
};

/** connection */
export type PaymentsConnection = {
  __typename?: 'PaymentsConnection';
  hasNextPage: Scalars['Boolean'];
  items: Array<Payment>;
  totalCount: Scalars['Int'];
};

export type Plan = {
  __typename?: 'Plan';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  interval?: Maybe<PlanInterval>;
  price?: Maybe<Scalars['Float']>;
  status: PlanStatus;
  teamId: Scalars['Int'];
  type: PlanType;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** Plan Interval */
export enum PlanInterval {
  Monthly = 'Monthly',
  Yearly = 'Yearly'
}

/** plan status */
export enum PlanStatus {
  Expired = 'Expired',
  Normal = 'Normal'
}

/** 付费类型 */
export enum PlanType {
  Enterprise = 'Enterprise',
  Free = 'Free',
  Plus = 'Plus'
}

/** 筛选条件 */
export type PlanWhereInput = {
  /** ID */
  id: Scalars['Int'];
};

/** connection */
export type PlansConnection = {
  __typename?: 'PlansConnection';
  hasNextPage: Scalars['Boolean'];
  items: Array<Plan>;
  totalCount: Scalars['Int'];
};

export type Provider = {
  __typename?: 'Provider';
  accessToken?: Maybe<Scalars['String']>;
  apiKey?: Maybe<Scalars['String']>;
  /** self host auth code */
  authorizationCode?: Maybe<Scalars['String']>;
  /** self host server endpoint */
  endpoint?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isPlus: Scalars['Boolean'];
  /** proxy Host */
  proxyHost?: Maybe<Scalars['String']>;
  /** teamId */
  teamId: Scalars['Int'];
  type: ProviderType;
};

/** Provider 类型 */
export enum ProviderType {
  AccessToken = 'AccessToken',
  ApiKey = 'ApiKey',
  Official = 'Official',
  SelfHosted = 'SelfHosted'
}

/** 筛选条件 */
export type ProviderWhereInput = {
  /** teamId */
  teamId?: InputMaybe<Scalars['Int']>;
};

/** connection */
export type ProvidersConnection = {
  __typename?: 'ProvidersConnection';
  hasNextPage: Scalars['Boolean'];
  items: Array<Provider>;
  totalCount: Scalars['Int'];
};

export type Proxy = {
  __typename?: 'Proxy';
  host?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  valid?: Maybe<Scalars['Boolean']>;
};

/** 筛选条件 */
export type ProxyWhereInput = {
  id: Scalars['Int'];
};

/** connection */
export type ProxysConnection = {
  __typename?: 'ProxysConnection';
  hasNextPage: Scalars['Boolean'];
  items: Array<Proxy>;
  totalCount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  activeProvider: Provider;
  activeTeam: Team;
  /** Chat GPT settings */
  chatSettings: ChatSettings;
  /** check token */
  checkPersonalToken: User;
  /** 检查 reset password URL token 是否过期 */
  checkResetPasswordToken: Scalars['Boolean'];
  /** 注册时，验证邮箱 */
  checkVerifyEmailToken: LoginSuccessPayload;
  /** 获取单个 */
  invoice: Invoice;
  /** 获取列表 */
  invoices: Array<Invoice>;
  /** 获取分页列表 */
  invoicesConnection: InvoicesConnection;
  /** 获取单个 */
  member: Member;
  /** 获取列表 */
  members: Array<Member>;
  /** 获取分页列表 */
  membersConnection: MembersConnection;
  /** 获取单个 */
  message: Message;
  /** 获取列表 */
  messages: Array<Message>;
  /** 获取分页列表 */
  messagesConnection: MessagesConnection;
  /** 自己可以访问的 provider */
  myTeams: Array<Team>;
  /** 获取单个 */
  order: Order;
  /** 获取列表 */
  orders: Array<Order>;
  /** 获取分页列表 */
  ordersConnection: OrdersConnection;
  /** 获取单个 */
  payment: Payment;
  /** 获取列表 */
  payments: Array<Payment>;
  /** 获取分页列表 */
  paymentsConnection: PaymentsConnection;
  /** 获取单个 */
  plan: Plan;
  /** 获取列表 */
  plans: Array<Plan>;
  /** 获取分页列表 */
  plansConnection: PlansConnection;
  /** 获取单个 */
  provider: Provider;
  /** 获取列表 */
  providers: Array<Provider>;
  /** 获取分页列表 */
  providersConnection: ProvidersConnection;
  /** 获取单个 */
  proxy: Proxy;
  /** 获取列表 */
  proxys: Array<Proxy>;
  /** 获取分页列表 */
  proxysConnection: ProxysConnection;
  /** 获取单个 */
  refund: Refund;
  /** 获取列表 */
  refunds: Array<Refund>;
  /** 获取分页列表 */
  refundsConnection: RefundsConnection;
  /** 搜索用户 */
  searchUsers: Array<User>;
  /** 获取单个 */
  session: Session;
  /** 获取session */
  sessionBySlug: Session;
  /** 获取列表 */
  sessions: Array<Session>;
  /** 获取分页列表 */
  sessionsConnection: SessionsConnection;
  /** 获取单个 */
  setting: Setting;
  /** 获取列表 */
  settings: Array<Setting>;
  /** 获取分页列表 */
  settingsConnection: SettingsConnection;
  /** 获取单个 */
  team: Team;
  /** 获取列表 */
  teams: Array<Team>;
  /** 获取分页列表 */
  teamsConnection: TeamsConnection;
  /** 获取单个 */
  token: Token;
  /** 获取列表 */
  tokens: Array<Token>;
  /** 获取分页列表 */
  tokensConnection: TokensConnection;
  /** 获取单个 */
  user: User;
  /** 获取列表 */
  users: Array<User>;
  /** 获取分页列表 */
  usersConnection: UsersConnection;
  /** 访问状态持久话数据 */
  visit: Visit;
  /** 获取单个 */
  wallet: Wallet;
  /** 获取列表 */
  wallets: Array<Wallet>;
  /** 获取分页列表 */
  walletsConnection: WalletsConnection;
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


export type QueryInvoiceArgs = {
  id: Scalars['Int'];
};


export type QueryInvoicesArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InvoiceWhereInput>;
};


export type QueryInvoicesConnectionArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InvoiceWhereInput>;
};


export type QueryMemberArgs = {
  id: Scalars['Int'];
};


export type QueryMembersArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MemberWhereInput>;
};


export type QueryMembersConnectionArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MemberWhereInput>;
};


export type QueryMessageArgs = {
  id: Scalars['Int'];
};


export type QueryMessagesArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryMessagesConnectionArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryOrderArgs = {
  id: Scalars['Int'];
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


export type QueryPaymentArgs = {
  id: Scalars['Int'];
};


export type QueryPaymentsArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PaymentWhereInput>;
};


export type QueryPaymentsConnectionArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PaymentWhereInput>;
};


export type QueryPlanArgs = {
  id: Scalars['Int'];
};


export type QueryPlansArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlanWhereInput>;
};


export type QueryPlansConnectionArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlanWhereInput>;
};


export type QueryProviderArgs = {
  id: Scalars['Int'];
};


export type QueryProvidersArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProviderWhereInput>;
};


export type QueryProvidersConnectionArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProviderWhereInput>;
};


export type QueryProxyArgs = {
  id: Scalars['Int'];
};


export type QueryProxysArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProxyWhereInput>;
};


export type QueryProxysConnectionArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProxyWhereInput>;
};


export type QueryRefundArgs = {
  id: Scalars['Int'];
};


export type QueryRefundsArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RefundWhereInput>;
};


export type QueryRefundsConnectionArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RefundWhereInput>;
};


export type QuerySearchUsersArgs = {
  q: Scalars['String'];
};


export type QuerySessionArgs = {
  id: Scalars['Int'];
};


export type QuerySessionBySlugArgs = {
  slug: Scalars['String'];
};


export type QuerySessionsArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QuerySessionsConnectionArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QuerySettingArgs = {
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};


export type QuerySettingsArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SettingWhereInput>;
};


export type QuerySettingsConnectionArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SettingWhereInput>;
};


export type QueryTeamArgs = {
  id: Scalars['Int'];
};


export type QueryTeamsArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TeamWhereInput>;
};


export type QueryTeamsConnectionArgs = {
  orderBy?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TeamWhereInput>;
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


export type QueryWalletArgs = {
  id: Scalars['Int'];
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

export type Refund = {
  __typename?: 'Refund';
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  currency: Scalars['String'];
  id: Scalars['Int'];
  paymentId: Scalars['Int'];
  refundDate?: Maybe<Scalars['DateTime']>;
  refundStatus: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** 筛选条件 */
export type RefundWhereInput = {
  /** ID */
  id: Scalars['Int'];
};

/** connection */
export type RefundsConnection = {
  __typename?: 'RefundsConnection';
  hasNextPage: Scalars['Boolean'];
  items: Array<Refund>;
  totalCount: Scalars['Int'];
};

/** 邮箱注册 */
export type RegisterByEmailInput = {
  /** 邮箱 */
  email: Scalars['String'];
  /** 密码 */
  password: Scalars['String'];
};

/** 删除成员 */
export type RemoveMemberInput = {
  /** member ID */
  id: Scalars['Int'];
};

/** 删除 */
export type RemoveMessagePairInput = {
  /** ID */
  messageId: Scalars['Int'];
};

/** 删除 */
export type RemoveSessionInput = {
  /** ID */
  id: Scalars['Int'];
  /** teamId */
  teamId: Scalars['Int'];
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

export type Session = {
  __typename?: 'Session';
  /** 访问权限类型 */
  accessType: SessionAccessType;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  /** Message */
  messages: Array<Message>;
  name: Scalars['String'];
  /** 设置 */
  settings?: Maybe<Scalars['JSON']>;
  slug: Scalars['String'];
  /** teamId */
  teamId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 会话对话类型 */
export enum SessionAccessType {
  Member = 'Member',
  Private = 'Private',
  Public = 'Public'
}

/** 筛选条件 */
export type SessionWhereInput = {
  /** teamId */
  teamId?: InputMaybe<Scalars['Int']>;
  /** 用户ID */
  userId: Scalars['Int'];
};

/** connection */
export type SessionsConnection = {
  __typename?: 'SessionsConnection';
  hasNextPage: Scalars['Boolean'];
  items: Array<Session>;
  totalCount: Scalars['Int'];
};

export type Setting = {
  __typename?: 'Setting';
  activeSessionId?: Maybe<Scalars['Int']>;
  activeTeamId?: Maybe<Scalars['Int']>;
  followUpMessageLength?: Maybe<Scalars['Float']>;
  id: Scalars['Int'];
  maxToken?: Maybe<Scalars['Int']>;
  model?: Maybe<Scalars['String']>;
  showTokenCount?: Maybe<Scalars['Boolean']>;
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 筛选条件 */
export type SettingWhereInput = {
  /** 用户ID */
  userId: Scalars['Int'];
};

/** connection */
export type SettingsConnection = {
  __typename?: 'SettingsConnection';
  hasNextPage: Scalars['Boolean'];
  items: Array<Setting>;
  totalCount: Scalars['Int'];
};

export type Team = {
  __typename?: 'Team';
  activeProviderId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  /** Member */
  members: Array<Member>;
  name: Scalars['String'];
  /** Plan */
  plan: Plan;
  /** Provider */
  providers: Array<Provider>;
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** User */
  user: User;
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 筛选条件 */
export type TeamWhereInput = {
  /** 用户ID */
  userId: Scalars['Int'];
};

/** connection */
export type TeamsConnection = {
  __typename?: 'TeamsConnection';
  hasNextPage: Scalars['Boolean'];
  items: Array<Team>;
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

export type UpdateChatSettingsInput = {
  followUpMessageLength?: InputMaybe<Scalars['Float']>;
  maxToken?: InputMaybe<Scalars['Int']>;
  model?: InputMaybe<Scalars['String']>;
  showTokenCount?: InputMaybe<Scalars['Boolean']>;
};

/** 修改email */
export type UpdateEmailInput = {
  /** 邮箱 */
  email: Scalars['String'];
  /** 密码 */
  password: Scalars['String'];
};

/** 更新data */
export type UpdateInvoiceDataInput = {
  dueDate?: InputMaybe<Scalars['DateTime']>;
  invoiceDate?: InputMaybe<Scalars['DateTime']>;
  invoiceNumber: Scalars['String'];
  orderId: Scalars['Int'];
  status: Scalars['String'];
  totalAmount: Scalars['Float'];
};

/** 更新单个 */
export type UpdateInvoiceInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateInvoiceDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateInvoiceWhereInput>;
};

/** 更新条件 */
export type UpdateInvoiceWhereInput = {
  /** ID */
  id: Scalars['Int'];
};

/** 批量更新 */
export type UpdateManyInvoiceInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateInvoiceDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateInvoiceWhereInput>;
};

/** 批量更新 */
export type UpdateManyMemberInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateMemberDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateMemberWhereInput>;
};

/** 批量更新 */
export type UpdateManyMessageInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateMessageDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateMessageWhereInput>;
};

/** 批量更新 */
export type UpdateManyOrderInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateOrderDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateOrderWhereInput>;
};

/** 批量更新 */
export type UpdateManyPaymentInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdatePaymentDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdatePaymentWhereInput>;
};

/** 批量更新 */
export type UpdateManyPlanInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdatePlanDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdatePlanWhereInput>;
};

/** 批量更新 */
export type UpdateManyProviderInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateProviderDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateProviderWhereInput>;
};

/** 批量更新 */
export type UpdateManyProxyInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateProxyDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateProxyWhereInput>;
};

/** 批量更新 */
export type UpdateManyRefundInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateRefundDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateRefundWhereInput>;
};

/** 批量更新 */
export type UpdateManySessionInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateSessionDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateSessionWhereInput>;
};

/** 批量更新 */
export type UpdateManySettingInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateSettingDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateSettingWhereInput>;
};

/** 批量更新 */
export type UpdateManyTeamInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateTeamDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateTeamWhereInput>;
};

/** 批量更新 */
export type UpdateManyTokenInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateTokenDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateTokenWhereInput>;
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
export type UpdateMemberDataInput = {
  /** Team ID */
  teamId: Scalars['Int'];
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 更新单个 */
export type UpdateMemberInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateMemberDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateMemberWhereInput>;
};

/** 更新条件 */
export type UpdateMemberWhereInput = {
  /** member ID */
  id: Scalars['Int'];
};

/** 更新data */
export type UpdateMessageDataInput = {
  /** 该 Message 内容 */
  content: Scalars['String'];
};

/** 更新单个 */
export type UpdateMessageInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateMessageDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateMessageWhereInput>;
};

/** 更新条件 */
export type UpdateMessageWhereInput = {
  /** ID */
  id?: InputMaybe<Scalars['Int']>;
};

/** 更新data */
export type UpdateOrderDataInput = {
  billingMethod: Scalars['String'];
  billingScheme: Scalars['String'];
  billingStatus: Scalars['String'];
  endDate?: InputMaybe<Scalars['DateTime']>;
  nextBillingDate?: InputMaybe<Scalars['DateTime']>;
  planId: Scalars['Int'];
  startDate?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
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
  /** ID */
  id: Scalars['Int'];
};

/** 更新data */
export type UpdatePaymentDataInput = {
  amount: Scalars['Float'];
  currency: Scalars['String'];
  invoiceId: Scalars['Int'];
  paymentDate?: InputMaybe<Scalars['DateTime']>;
  paymentMethod: Scalars['String'];
  paymentStatus: Scalars['String'];
};

/** 更新单个 */
export type UpdatePaymentInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdatePaymentDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdatePaymentWhereInput>;
};

/** 更新条件 */
export type UpdatePaymentWhereInput = {
  /** ID */
  id: Scalars['Int'];
};

/** 更新data */
export type UpdatePlanDataInput = {
  interval?: InputMaybe<PlanInterval>;
  price?: InputMaybe<Scalars['Float']>;
  status: PlanStatus;
  teamId: Scalars['Int'];
  type: PlanType;
};

/** 更新单个 */
export type UpdatePlanInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdatePlanDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdatePlanWhereInput>;
};

/** 更新条件 */
export type UpdatePlanWhereInput = {
  /** ID */
  id: Scalars['Int'];
};

/** 更新data */
export type UpdateProviderDataInput = {
  accessToken?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
  apiKey?: InputMaybe<Scalars['String']>;
  /** self host auth code */
  authorizationCode?: InputMaybe<Scalars['String']>;
  /** self host server endpoint */
  endpoint?: InputMaybe<Scalars['String']>;
};

/** 更新单个 */
export type UpdateProviderInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateProviderDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateProviderWhereInput>;
};

/** 更新条件 */
export type UpdateProviderWhereInput = {
  /** ID */
  id?: InputMaybe<Scalars['Int']>;
};

/** 更新data */
export type UpdateProxyDataInput = {
  host?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  valid?: InputMaybe<Scalars['Boolean']>;
};

/** 更新单个 */
export type UpdateProxyInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateProxyDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateProxyWhereInput>;
};

/** 更新条件 */
export type UpdateProxyWhereInput = {
  /** ID */
  id?: InputMaybe<Scalars['Int']>;
};

/** 更新data */
export type UpdateRefundDataInput = {
  amount: Scalars['Int'];
  currency: Scalars['String'];
  paymentId: Scalars['Int'];
  refundDate?: InputMaybe<Scalars['DateTime']>;
  refundStatus: Scalars['String'];
};

/** 更新单个 */
export type UpdateRefundInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateRefundDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateRefundWhereInput>;
};

/** 更新条件 */
export type UpdateRefundWhereInput = {
  /** ID */
  id: Scalars['Int'];
};

/** 更新data */
export type UpdateSessionDataInput = {
  /** 访问权限类型 */
  accessType?: InputMaybe<SessionAccessType>;
  /** 该 Session Name */
  name?: InputMaybe<Scalars['String']>;
  /** 设置 */
  settings?: InputMaybe<Scalars['JSON']>;
};

/** 更新单个 */
export type UpdateSessionInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateSessionDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateSessionWhereInput>;
};

/** 更新条件 */
export type UpdateSessionWhereInput = {
  /** ID */
  id?: InputMaybe<Scalars['Int']>;
};

/** 更新data */
export type UpdateSettingDataInput = {
  activeSessionId?: InputMaybe<Scalars['Int']>;
  activeTeamId?: InputMaybe<Scalars['Int']>;
};

/** 更新单个 */
export type UpdateSettingInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateSettingDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateSettingWhereInput>;
};

/** 更新条件 */
export type UpdateSettingWhereInput = {
  /** ID */
  id?: InputMaybe<Scalars['Int']>;
  /** 用户ID */
  userId?: InputMaybe<Scalars['Int']>;
};

/** 更新data */
export type UpdateTeamDataInput = {
  activeProviderId?: InputMaybe<Scalars['Int']>;
  /** 该 Team Name */
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** 更新单个 */
export type UpdateTeamInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateTeamDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateTeamWhereInput>;
};

/** 更新条件 */
export type UpdateTeamWhereInput = {
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

export type UpdateVisitInput = {
  activeSessionId?: InputMaybe<Scalars['Int']>;
  activeTeamId?: InputMaybe<Scalars['Int']>;
};

/** 更新data */
export type UpdateWalletDataInput = {
  balance: Scalars['Float'];
  /** 用户ID */
  userId: Scalars['Int'];
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
  id: Scalars['Int'];
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
  /** 用户名 */
  username: Scalars['String'];
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

export type Visit = {
  __typename?: 'Visit';
  activeSessionId?: Maybe<Scalars['Int']>;
  activeTeamId?: Maybe<Scalars['Int']>;
};

export type Wallet = {
  __typename?: 'Wallet';
  balance: Scalars['Float'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

/** 筛选条件 */
export type WalletWhereInput = {
  /** ID */
  id: Scalars['Int'];
  /** 策略ID */
  teamId: Scalars['Int'];
};

/** connection */
export type WalletsConnection = {
  __typename?: 'WalletsConnection';
  hasNextPage: Scalars['Boolean'];
  items: Array<Wallet>;
  totalCount: Scalars['Int'];
};
