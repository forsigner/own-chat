import { RefetchOptions, fetcher } from "stook-graphql";
import { Provider, Session, Token, QuerySessionsArgs, QueryTokensArgs } from "./types";
import { MY_PROVIDERS, SESSIONS, TOKENS } from "./gql";

class RefetcherService {
  async refetchMyProviders(args: any = {} as any, opt: RefetchOptions = {}): Promise<Provider[]> {

    const key = opt.key ? opt.key : MY_PROVIDERS
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
