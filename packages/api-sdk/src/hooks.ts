import { Options, useQuery, useMutation } from "stook-graphql";
import { Provider, Collaborator, Message, User, Session, Setting, Token, QueryCollaboratorsArgs, QueryMessagesArgs, QueryProviderArgs, QuerySearchUsersArgs, QuerySessionsArgs, QuerySettingArgs, QueryTokensArgs } from "./types";
import { ACTIVE_PROVIDER, COLLABORATORS, MESSAGES, MY_PROVIDERS, PROVIDER, SEARCH_USERS, SESSIONS, SETTING, TOKENS } from "./gql";

class HooksService {
  useActiveProvider(args?: any | (() => any), opt: Options = {}) {
    return useQuery<Provider, any>(ACTIVE_PROVIDER, { ...opt, variables: args })
  }

  useCollaborators(args?: QueryCollaboratorsArgs | (() => QueryCollaboratorsArgs), opt: Options = {}) {
    return useQuery<Collaborator[], QueryCollaboratorsArgs>(COLLABORATORS, { ...opt, variables: args })
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
