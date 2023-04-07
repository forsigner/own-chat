import { RefetchOptions, fetcher } from "stook-graphql";
import { Provider, Team, ChatSettings, Member, Message, User, Session, Token, Visit, QueryMembersArgs, QueryMessagesArgs, QueryProvidersArgs, QuerySearchUsersArgs, QuerySessionBySlugArgs, QuerySessionsArgs, QueryTeamArgs, QueryTokensArgs } from "./types";
import { ACTIVE_PROVIDER, ACTIVE_TEAM, CHAT_SETTINGS, MEMBERS, MESSAGES, MY_TEAMS, PROVIDERS, SEARCH_USERS, SESSION_BY_SLUG, SESSIONS, TEAM, TOKENS, VISIT } from "./gql";

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

  async refetchActiveTeam(args: any = {} as any, opt: RefetchOptions = {}): Promise<Team> {

    const key = opt.key ? opt.key : ACTIVE_TEAM
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchChatSettings(args: any = {} as any, opt: RefetchOptions = {}): Promise<ChatSettings> {

    const key = opt.key ? opt.key : CHAT_SETTINGS
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

  async refetchMyTeams(args: any = {} as any, opt: RefetchOptions = {}): Promise<Team[]> {

    const key = opt.key ? opt.key : MY_TEAMS
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchProviders(args: QueryProvidersArgs = {} as QueryProvidersArgs, opt: RefetchOptions = {}): Promise<Provider[]> {

    const key = opt.key ? opt.key : PROVIDERS
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

  async refetchSessionBySlug(args: QuerySessionBySlugArgs = {} as QuerySessionBySlugArgs, opt: RefetchOptions = {}): Promise<Session> {

    const key = opt.key ? opt.key : SESSION_BY_SLUG
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

  async refetchTeam(args: QueryTeamArgs = {} as QueryTeamArgs, opt: RefetchOptions = {}): Promise<Team> {

    const key = opt.key ? opt.key : TEAM
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

  async refetchVisit(args: any = {} as any, opt: RefetchOptions = {}): Promise<Visit> {

    const key = opt.key ? opt.key : VISIT
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }
}

export const Refetcher = new RefetcherService();
