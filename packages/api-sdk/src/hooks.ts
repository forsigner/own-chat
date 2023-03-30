import { Options, useQuery, useMutation } from "stook-graphql";
import { Provider, Token, QueryTokensArgs } from "./types";
import { MY_PROVIDERS, TOKENS } from "./gql";

class HooksService {
  useMyProviders(args?: any | (() => any), opt: Options = {}) {
    return useQuery<Provider[], any>(MY_PROVIDERS, { ...opt, variables: args })
  }

  useTokens(args?: QueryTokensArgs | (() => QueryTokensArgs), opt: Options = {}) {
    return useQuery<Token[], QueryTokensArgs>(TOKENS, { ...opt, variables: args })
  }
}

export const Hooks = new HooksService();
