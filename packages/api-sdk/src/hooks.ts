import { Options, useQuery, useMutation } from "stook-graphql";
import { Team, ChatSettings, Member, Message, User, Session, Setting, Token, QueryMembersArgs, QueryMessagesArgs, QuerySearchUsersArgs, QuerySessionBySlugArgs, QuerySessionsArgs, QuerySettingArgs, QueryTeamArgs, QueryTokensArgs } from "./types";
import { ACTIVE_TEAM, CHAT_SETTINGS, MEMBERS, MESSAGES, MY_TEAMS, SEARCH_USERS, SESSION_BY_SLUG, SESSIONS, SETTING, TEAM, TOKENS } from "./gql";

class HooksService {
  useActiveTeam(args?: any | (() => any), opt: Options = {}) {
    return useQuery<Team, any>(ACTIVE_TEAM, { ...opt, variables: args })
  }

  useChatSettings(args?: any | (() => any), opt: Options = {}) {
    return useQuery<ChatSettings, any>(CHAT_SETTINGS, { ...opt, variables: args })
  }

  useMembers(args?: QueryMembersArgs | (() => QueryMembersArgs), opt: Options = {}) {
    return useQuery<Member[], QueryMembersArgs>(MEMBERS, { ...opt, variables: args })
  }

  useMessages(args?: QueryMessagesArgs | (() => QueryMessagesArgs), opt: Options = {}) {
    return useQuery<Message[], QueryMessagesArgs>(MESSAGES, { ...opt, variables: args })
  }

  useMyTeams(args?: any | (() => any), opt: Options = {}) {
    return useQuery<Team[], any>(MY_TEAMS, { ...opt, variables: args })
  }

  useSearchUsers(args?: QuerySearchUsersArgs | (() => QuerySearchUsersArgs), opt: Options = {}) {
    return useQuery<User[], QuerySearchUsersArgs>(SEARCH_USERS, { ...opt, variables: args })
  }

  useSessionBySlug(args?: QuerySessionBySlugArgs | (() => QuerySessionBySlugArgs), opt: Options = {}) {
    return useQuery<Session, QuerySessionBySlugArgs>(SESSION_BY_SLUG, { ...opt, variables: args })
  }

  useSessions(args?: QuerySessionsArgs | (() => QuerySessionsArgs), opt: Options = {}) {
    return useQuery<Session[], QuerySessionsArgs>(SESSIONS, { ...opt, variables: args })
  }

  useSetting(args?: QuerySettingArgs | (() => QuerySettingArgs), opt: Options = {}) {
    return useQuery<Setting, QuerySettingArgs>(SETTING, { ...opt, variables: args })
  }

  useTeam(args?: QueryTeamArgs | (() => QueryTeamArgs), opt: Options = {}) {
    return useQuery<Team, QueryTeamArgs>(TEAM, { ...opt, variables: args })
  }

  useTokens(args?: QueryTokensArgs | (() => QueryTokensArgs), opt: Options = {}) {
    return useQuery<Token[], QueryTokensArgs>(TOKENS, { ...opt, variables: args })
  }
}

export const Hooks = new HooksService();
