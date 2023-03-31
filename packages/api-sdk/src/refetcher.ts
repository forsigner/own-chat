import { RefetchOptions, fetcher } from "stook-graphql";
import { Provider, Member, Message, User, Session, Setting, Token, QueryMembersArgs, QueryMessagesArgs, QueryProviderArgs, QuerySearchUsersArgs, QuerySessionsArgs, QuerySettingArgs, QueryTokensArgs } from "./types";
import { ACTIVE_PROVIDER, MEMBERS, MESSAGES, MY_PROVIDERS, PROVIDER, SEARCH_USERS, SESSIONS, SETTING, TOKENS } from "./gql";

class RefetcherService {
  async refetchActiveProvider(args: any = {} as any, opt: RefetchOptions = {}): Promise<Provider> {

    const key = opt.key ? opt.key : ACTIVE_PROVIDER
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchMembers(args: QueryMembersArgs = {} as QueryMembersArgs, opt: RefetchOptions = {}): Promise<Member[]> {

    const key = opt.key ? opt.key : MEMBERS
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchMessages(args: QueryMessagesArgs = {} as QueryMessagesArgs, opt: RefetchOptions = {}): Promise<Message[]> {

    const key = opt.key ? opt.key : MESSAGES
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchMyProviders(args: any = {} as any, opt: RefetchOptions = {}): Promise<Provider[]> {

    const key = opt.key ? opt.key : MY_PROVIDERS
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchProvider(args: QueryProviderArgs = {} as QueryProviderArgs, opt: RefetchOptions = {}): Promise<Provider> {

    const key = opt.key ? opt.key : PROVIDER
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

  async refetchSessions(args: QuerySessionsArgs = {} as QuerySessionsArgs, opt: RefetchOptions = {}): Promise<Session[]> {

    const key = opt.key ? opt.key : SESSIONS
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchSetting(args: QuerySettingArgs = {} as QuerySettingArgs, opt: RefetchOptions = {}): Promise<Setting> {

    const key = opt.key ? opt.key : SETTING
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
}

export const Refetcher = new RefetcherService();
