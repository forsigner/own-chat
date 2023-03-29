import { Options, useQuery, useMutation } from "stook-graphql";
import { Token, QueryTokensArgs } from "./types";
import { TOKENS } from "./gql";

class HooksService {
  useTokens(args?: QueryTokensArgs | (() => QueryTokensArgs), opt: Options = {}) {
    return useQuery<Token[], QueryTokensArgs>(TOKENS, { ...opt, variables: args })
  }
}

export const Hooks = new HooksService();
