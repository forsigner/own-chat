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
};

/** 新增Collaborator */
export type AddCollaboratorInput = {
  /** Provider ID */
  providerId: Scalars['Int'];
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 添加 Provider */
export type AddProviderInput = {
  apiKey?: InputMaybe<Scalars['String']>;
  /** self host auth code */
  authorizationCode?: InputMaybe<Scalars['String']>;
  /** self host server endpoint */
  endpoint?: InputMaybe<Scalars['String']>;
  /** 该 Provider Name */
  name: Scalars['String'];
  type: ProviderType;
};

/** 添加 Session */
export type AddSessionInput = {
  /** 该 Session Name */
  name: Scalars['String'];
  /** providerId */
  providerId: Scalars['Int'];
  /** 用户ID */
  userId?: InputMaybe<Scalars['Int']>;
};

/** 添加 access token */
export type AddTokenInput = {
  /** description */
  description: Scalars['String'];
  /** type */
  type?: InputMaybe<Scalars['String']>;
};

/** 协作者 */
export type Collaborator = {
  __typename?: 'Collaborator';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  /** Provider ID */
  providerId: Scalars['Int'];
  /** 角色类型 */
  roleType: RoleType;
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
export type CreateCollaboratorInput = {
  /** Provider ID */
  providerId: Scalars['Int'];
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 创建 */
export type CreateProviderInput = {
  apiKey: Scalars['String'];
  authorizationCode: Scalars['String'];
  /** 该 Provider Name */
  name: Scalars['String'];
  type: Scalars['String'];
  /** 用户ID */
  userId?: InputMaybe<Scalars['Int']>;
};

/** 创建 */
export type CreateSessionInput = {
  /** 该 Session Name */
  name: Scalars['String'];
  /** provider Id */
  providerId?: InputMaybe<Scalars['Int']>;
  /** 用户ID */
  userId?: InputMaybe<Scalars['Int']>;
};

/** 创建 */
export type CreateSettingInput = {
  activeProviderId?: InputMaybe<Scalars['Int']>;
  activeSessionId?: InputMaybe<Scalars['Int']>;
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

/** 删除 */
export type DeleteCollaboratorInput = {
  /** ID */
  id?: InputMaybe<Scalars['Int']>;
};

/** 删除 */
export type DeleteProviderInput = {
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

/** 忘记密码 */
export type ForgotPasswordInput = {
  /** 邮箱 */
  email: Scalars['String'];
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

/** 修改秘密 */
export type ModifyPasswordInput = {
  /** 新密码 */
  newPassword: Scalars['String'];
  /** 旧密码 */
  oldPassword: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** 新增 */
  addCollaborator: Collaborator;
  /** 添加Provider */
  addProvider: Provider;
  /** 添加Session */
  addSession: Session;
  /** 新增Token */
  addToken: Token;
  /** 创建 */
  createCollaborator: Collaborator;
  /** 创建 */
  createProvider: Provider;
  /** 创建 */
  createSession: Session;
  /** 创建 */
  createSetting: Setting;
  /** 创建 */
  createToken: Token;
  /** 创建 */
  createUser: User;
  /** 删除单个 */
  deleteCollaborator: Scalars['Boolean'];
  /** 批量删除 */
  deleteManyCollaborators: Scalars['Float'];
  /** 批量删除 */
  deleteManyProviders: Scalars['Float'];
  /** 批量删除 */
  deleteManySessions: Scalars['Float'];
  /** 批量删除 */
  deleteManySettings: Scalars['Float'];
  /** 批量删除 */
  deleteManyTokens: Scalars['Float'];
  /** 批量删除 */
  deleteManyUsers: Scalars['Float'];
  /** 删除单个 */
  deleteProvider: Scalars['Boolean'];
  /** 删除单个 */
  deleteSession: Scalars['Boolean'];
  /** 删除单个 */
  deleteSetting: Scalars['Boolean'];
  /** 删除单个 */
  deleteToken: Scalars['Boolean'];
  /** 删除单个 */
  deleteUser: Scalars['Boolean'];
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
  /** 修改密码 */
  modifyPassword: Scalars['Boolean'];
  /** 邮箱注册 */
  registerByEmail: Scalars['Boolean'];
  /** 删除 */
  removeCollaborator: Collaborator;
  /** 重置密码 */
  resetPassword: Scalars['Boolean'];
  /** 更新单个 */
  updateCollaborator: Collaborator;
  /** 修改email */
  updateEmail: Scalars['Boolean'];
  /** 批量更新 */
  updateManyCollaborators: Scalars['Boolean'];
  /** 批量更新 */
  updateManyProviders: Scalars['Boolean'];
  /** 批量更新 */
  updateManySessions: Scalars['Boolean'];
  /** 批量更新 */
  updateManySettings: Scalars['Boolean'];
  /** 批量更新 */
  updateManyTokens: Scalars['Boolean'];
  /** 批量更新 */
  updateManyUsers: Scalars['Boolean'];
  /** 更新单个 */
  updateProvider: Provider;
  /** 更新单个 */
  updateSession: Session;
  /** 更新单个 */
  updateSetting: Setting;
  /** 更新单个 */
  updateToken: Token;
  /** 更新单个 */
  updateUser: User;
};


export type MutationAddCollaboratorArgs = {
  input: AddCollaboratorInput;
};


export type MutationAddProviderArgs = {
  input: AddProviderInput;
};


export type MutationAddSessionArgs = {
  input: AddSessionInput;
};


export type MutationAddTokenArgs = {
  input: AddTokenInput;
};


export type MutationCreateCollaboratorArgs = {
  input: CreateCollaboratorInput;
};


export type MutationCreateProviderArgs = {
  input: CreateProviderInput;
};


export type MutationCreateSessionArgs = {
  input: CreateSessionInput;
};


export type MutationCreateSettingArgs = {
  input: CreateSettingInput;
};


export type MutationCreateTokenArgs = {
  input: CreateTokenInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteCollaboratorArgs = {
  input: DeleteCollaboratorInput;
};


export type MutationDeleteManyCollaboratorsArgs = {
  input: DeleteCollaboratorInput;
};


export type MutationDeleteManyProvidersArgs = {
  input: DeleteProviderInput;
};


export type MutationDeleteManySessionsArgs = {
  input: DeleteSessionInput;
};


export type MutationDeleteManySettingsArgs = {
  input: DeleteSettingInput;
};


export type MutationDeleteManyTokensArgs = {
  input: DeleteTokenInput;
};


export type MutationDeleteManyUsersArgs = {
  input: DeleteUserInput;
};


export type MutationDeleteProviderArgs = {
  input: DeleteProviderInput;
};


export type MutationDeleteSessionArgs = {
  input: DeleteSessionInput;
};


export type MutationDeleteSettingArgs = {
  input: DeleteSettingInput;
};


export type MutationDeleteTokenArgs = {
  input: DeleteTokenInput;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
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


export type MutationModifyPasswordArgs = {
  input: ModifyPasswordInput;
};


export type MutationRegisterByEmailArgs = {
  input: RegisterByEmailInput;
};


export type MutationRemoveCollaboratorArgs = {
  input: RemoveCollaboratorInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationUpdateCollaboratorArgs = {
  input: UpdateCollaboratorInput;
};


export type MutationUpdateEmailArgs = {
  input: UpdateEmailInput;
};


export type MutationUpdateManyCollaboratorsArgs = {
  input: UpdateManyCollaboratorInput;
};


export type MutationUpdateManyProvidersArgs = {
  input: UpdateManyProviderInput;
};


export type MutationUpdateManySessionsArgs = {
  input: UpdateManySessionInput;
};


export type MutationUpdateManySettingsArgs = {
  input: UpdateManySettingInput;
};


export type MutationUpdateManyTokensArgs = {
  input: UpdateManyTokenInput;
};


export type MutationUpdateManyUsersArgs = {
  input: UpdateManyUserInput;
};


export type MutationUpdateProviderArgs = {
  input: UpdateProviderInput;
};


export type MutationUpdateSessionArgs = {
  input: UpdateSessionInput;
};


export type MutationUpdateSettingArgs = {
  input: UpdateSettingInput;
};


export type MutationUpdateTokenArgs = {
  input: UpdateTokenInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

/** 付费类型 */
export enum PlanType {
  Advanced = 'Advanced',
  Basic = 'Basic',
  Free = 'Free',
  God = 'God'
}

export type Provider = {
  __typename?: 'Provider';
  apiKey?: Maybe<Scalars['String']>;
  /** self host auth code */
  authorizationCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** self host server endpoint */
  endpoint?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  type: ProviderType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** 用户ID */
  userId?: Maybe<Scalars['Int']>;
};

/** Provider 类型 */
export enum ProviderType {
  ApiKey = 'ApiKey',
  Official = 'Official',
  SelfHost = 'SelfHost'
}

/** 筛选条件 */
export type ProviderWhereInput = {
  /** 用户ID */
  userId: Scalars['Int'];
};

/** connection */
export type ProvidersConnection = {
  __typename?: 'ProvidersConnection';
  hasNextPage: Scalars['Boolean'];
  items: Array<Provider>;
  totalCount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  /** check token */
  checkPersonalToken: User;
  /** 检查 reset password URL token 是否过期 */
  checkResetPasswordToken: Scalars['Boolean'];
  /** 注册时，验证邮箱 */
  checkVerifyEmailToken: LoginSuccessPayload;
  /** 获取单个 */
  collaborator: Collaborator;
  /** 获取列表 */
  collaborators: Array<Collaborator>;
  /** 获取分页列表 */
  collaboratorsConnection: CollaboratorsConnection;
  /** 自己可以访问的 provider */
  myProviders: Array<Provider>;
  /** 获取单个 */
  provider: Provider;
  /** 获取列表 */
  providers: Array<Provider>;
  /** 获取分页列表 */
  providersConnection: ProvidersConnection;
  /** 搜索用户 */
  searchUsers: Array<User>;
  /** 获取单个 */
  session: Session;
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


export type QuerySearchUsersArgs = {
  q: Scalars['String'];
};


export type QuerySessionArgs = {
  id: Scalars['Int'];
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

/** 邮箱注册 */
export type RegisterByEmailInput = {
  /** 邮箱 */
  email: Scalars['String'];
  /** 密码 */
  password: Scalars['String'];
};

/** 删除 */
export type RemoveCollaboratorInput = {
  /** ID */
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

export type Session = {
  __typename?: 'Session';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  /** providerId */
  providerId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 筛选条件 */
export type SessionWhereInput = {
  /** providerId */
  providerId?: InputMaybe<Scalars['Int']>;
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
  activeProviderId?: Maybe<Scalars['Int']>;
  activeSessionId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
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

/** 更新data */
export type UpdateCollaboratorDataInput = {
  /** Provider ID */
  providerId: Scalars['Int'];
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

/** 修改email */
export type UpdateEmailInput = {
  /** 邮箱 */
  email: Scalars['String'];
  /** 密码 */
  password: Scalars['String'];
};

/** 批量更新 */
export type UpdateManyCollaboratorInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateCollaboratorDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateCollaboratorWhereInput>;
};

/** 批量更新 */
export type UpdateManyProviderInput = {
  /** 更新的数据 */
  data?: InputMaybe<UpdateProviderDataInput>;
  /** 更新条件 */
  where?: InputMaybe<UpdateProviderWhereInput>;
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

/** 更新data */
export type UpdateProviderDataInput = {
  /** 该 Provider Name */
  name: Scalars['String'];
  type: Scalars['String'];
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
export type UpdateSessionDataInput = {
  /** 该 Session Name */
  name: Scalars['String'];
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
  activeProviderId?: InputMaybe<Scalars['Int']>;
  activeSessionId?: InputMaybe<Scalars['Int']>;
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
