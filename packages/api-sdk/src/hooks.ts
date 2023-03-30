import { Options, useQuery, useMutation } from "stook-graphql";
import { Message, Provider, Session, Setting, Token, QueryMessageArgs, QuerySessionsArgs, QuerySettingArgs, QueryTokensArgs } from "./types";
import { MESSAGE, MY_PROVIDERS, SESSIONS, SETTING, TOKENS } from "./gql";

class HooksService {
  useMessage(args?: QueryMessageArgs | (() => QueryMessageArgs), opt: Options = {}) {
    return useQuery<Message, QueryMessageArgs>(MESSAGE, { ...opt, variables: args })
  }

  useMyProviders(args?: any | (() => any), opt: Options = {}) {
    return useQuery<Provider[], any>(MY_PROVIDERS, { ...opt, variables: args })
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
