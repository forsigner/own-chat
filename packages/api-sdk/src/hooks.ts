import { Options, useQuery, useMutation } from "stook-graphql";
import { Provider, Message, Session, Setting, Token, QueryMessagesArgs, QueryProviderArgs, QuerySessionsArgs, QuerySettingArgs, QueryTokensArgs } from "./types";
import { ACTIVE_PROVIDER, MESSAGES, MY_PROVIDERS, PROVIDER, SESSIONS, SETTING, TOKENS } from "./gql";

class HooksService {
  useActiveProvider(args?: any | (() => any), opt: Options = {}) {
    return useQuery<Provider, any>(ACTIVE_PROVIDER, { ...opt, variables: args })
  }

  useMessages(args?: QueryMessagesArgs | (() => QueryMessagesArgs), opt: Options = {}) {
    return useQuery<Message[], QueryMessagesArgs>(MESSAGES, { ...opt, variables: args })
  }

  useMyProviders(args?: any | (() => any), opt: Options = {}) {
    return useQuery<Provider[], any>(MY_PROVIDERS, { ...opt, variables: args })
  }

  useProvider(args?: QueryProviderArgs | (() => QueryProviderArgs), opt: Options = {}) {
    return useQuery<Provider, QueryProviderArgs>(PROVIDER, { ...opt, variables: args })
  }

  useSessions(args?: QuerySessionsArgs | (() => QuerySessionsArgs), opt: Options = {}) {
    return useQuery<Session[], QuerySessionsArgs>(SESSIONS, { ...opt, variables: args })
  }

  useSetting(args?: QuerySettingArgs | (() => QuerySettingArgs), opt: Options = {}) {
    return useQuery<Setting, QuerySettingArgs>(SETTING, { ...opt, variables: args })
  }

  useTokens(args?: QueryTokensArgs | (() => QueryTokensArgs), opt: Options = {}) {
    return useQuery<Token[], QueryTokensArgs>(TOKENS, { ...opt, variables: args })
  }
}

export const Hooks = new HooksService();
