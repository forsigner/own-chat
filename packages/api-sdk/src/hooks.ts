import { Options, useQuery, useMutation } from "stook-graphql";
import { Provider, Member, Message, User, Session, Setting, Token, QueryMembersArgs, QueryMessagesArgs, QueryProviderArgs, QuerySearchUsersArgs, QuerySessionsArgs, QuerySettingArgs, QueryTokensArgs } from "./types";
import { ACTIVE_PROVIDER, MEMBERS, MESSAGES, MY_PROVIDERS, PROVIDER, SEARCH_USERS, SESSIONS, SETTING, TOKENS } from "./gql";

class HooksService {
  useActiveProvider(args?: any | (() => any), opt: Options = {}) {
    return useQuery<Provider, any>(ACTIVE_PROVIDER, { ...opt, variables: args })
  }

  useMembers(args?: QueryMembersArgs | (() => QueryMembersArgs), opt: Options = {}) {
    return useQuery<Member[], QueryMembersArgs>(MEMBERS, { ...opt, variables: args })
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

  useSearchUsers(args?: QuerySearchUsersArgs | (() => QuerySearchUsersArgs), opt: Options = {}) {
    return useQuery<User[], QuerySearchUsersArgs>(SEARCH_USERS, { ...opt, variables: args })
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
