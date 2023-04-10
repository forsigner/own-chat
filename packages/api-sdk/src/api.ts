import { Options, query } from "stook-graphql";
import { Member, Message, Session, Team, Token, LoginSuccessPayload, Provider, User, AddMemberInput, AddMessageInput, AddSessionInput, AddTeamInput, AddTokenInput, DeleteTokenInput, ExitMemberInput, MutationLoginByGithubArgs, MutationLoginByGoogleArgs, MutationLoginByPersonalTokenArgs, RemoveMemberInput, RemoveMessagePairInput, RemoveSessionInput, UpdateChatSettingsInput, UpdateMessageInput, UpdateProviderInput, UpdateSessionInput, UpdateTeamInput, UpdateUserInput, UpdateVisitInput, QuerySessionBySlugArgs, QueryTeamArgs } from "./types";
import { ADD_MEMBER, ADD_MESSAGE, ADD_SESSION, ADD_TEAM, ADD_TOKEN, DELETE_TOKEN, EXIT_MEMBER, LOGIN_BY_GITHUB, LOGIN_BY_GOOGLE, LOGIN_BY_PERSONAL_TOKEN, REMOVE_MEMBER, REMOVE_MESSAGE_PAIR, REMOVE_SESSION, UPDATE_CHAT_SETTINGS, UPDATE_MESSAGE, UPDATE_PROVIDER, UPDATE_SESSION, UPDATE_TEAM, UPDATE_USER, UPDATE_VISIT, ACTIVE_PROVIDER, ACTIVE_TEAM, SESSION_BY_SLUG, TEAM } from "./gql";

class ApiService {
  async addMember(args: AddMemberInput = {} as AddMemberInput, opt: Options = {}) {
    return await query<Member>(ADD_MEMBER, { ...opt, variables: { input: args } })
  }

  async addMessage(args: AddMessageInput = {} as AddMessageInput, opt: Options = {}) {
    return await query<Message>(ADD_MESSAGE, { ...opt, variables: { input: args } })
  }

  async addSession(args: AddSessionInput = {} as AddSessionInput, opt: Options = {}) {
    return await query<Session>(ADD_SESSION, { ...opt, variables: { input: args } })
  }

  async addTeam(args: AddTeamInput = {} as AddTeamInput, opt: Options = {}) {
    return await query<Team>(ADD_TEAM, { ...opt, variables: { input: args } })
  }

  async addToken(args: AddTokenInput = {} as AddTokenInput, opt: Options = {}) {
    return await query<Token>(ADD_TOKEN, { ...opt, variables: { input: args } })
  }

  async deleteToken(args: DeleteTokenInput = {} as DeleteTokenInput, opt: Options = {}) {
    return await query<boolean>(DELETE_TOKEN, { ...opt, variables: { input: args } })
  }

  async exitMember(args: ExitMemberInput = {} as ExitMemberInput, opt: Options = {}) {
    return await query<boolean>(EXIT_MEMBER, { ...opt, variables: { input: args } })
  }

  async loginByGithub(args: MutationLoginByGithubArgs = {} as MutationLoginByGithubArgs, opt: Options = {}) {
    return await query<LoginSuccessPayload>(LOGIN_BY_GITHUB, { ...opt, variables: args })
  }

  async loginByGoogle(args: MutationLoginByGoogleArgs = {} as MutationLoginByGoogleArgs, opt: Options = {}) {
    return await query<LoginSuccessPayload>(LOGIN_BY_GOOGLE, { ...opt, variables: args })
  }

  async loginByPersonalToken(args: MutationLoginByPersonalTokenArgs = {} as MutationLoginByPersonalTokenArgs, opt: Options = {}) {
    return await query<LoginSuccessPayload>(LOGIN_BY_PERSONAL_TOKEN, { ...opt, variables: args })
  }

  async removeMember(args: RemoveMemberInput = {} as RemoveMemberInput, opt: Options = {}) {
    return await query<boolean>(REMOVE_MEMBER, { ...opt, variables: { input: args } })
  }

  async removeMessagePair(args: RemoveMessagePairInput = {} as RemoveMessagePairInput, opt: Options = {}) {
    return await query<boolean>(REMOVE_MESSAGE_PAIR, { ...opt, variables: { input: args } })
  }

  async removeSession(args: RemoveSessionInput = {} as RemoveSessionInput, opt: Options = {}) {
    return await query<boolean>(REMOVE_SESSION, { ...opt, variables: { input: args } })
  }

  async updateChatSettings(args: UpdateChatSettingsInput = {} as UpdateChatSettingsInput, opt: Options = {}) {
    return await query<boolean>(UPDATE_CHAT_SETTINGS, { ...opt, variables: { input: args } })
  }

  async updateMessage(args: UpdateMessageInput = {} as UpdateMessageInput, opt: Options = {}) {
    return await query<Message>(UPDATE_MESSAGE, { ...opt, variables: { input: args } })
  }

  async updateProvider(args: UpdateProviderInput = {} as UpdateProviderInput, opt: Options = {}) {
    return await query<Provider>(UPDATE_PROVIDER, { ...opt, variables: { input: args } })
  }

  async updateSession(args: UpdateSessionInput = {} as UpdateSessionInput, opt: Options = {}) {
    return await query<Session>(UPDATE_SESSION, { ...opt, variables: { input: args } })
  }

  async updateTeam(args: UpdateTeamInput = {} as UpdateTeamInput, opt: Options = {}) {
    return await query<Team>(UPDATE_TEAM, { ...opt, variables: { input: args } })
  }

  async updateUser(args: UpdateUserInput = {} as UpdateUserInput, opt: Options = {}) {
    return await query<User>(UPDATE_USER, { ...opt, variables: { input: args } })
  }

  async updateVisit(args: UpdateVisitInput = {} as UpdateVisitInput, opt: Options = {}) {
    return await query<boolean>(UPDATE_VISIT, { ...opt, variables: { input: args } })
  }

  async activeProvider(args: any = {} as any, opt: Options = {}) {
    return await query<Provider>(ACTIVE_PROVIDER, { ...opt, variables: args })
  }

  async activeTeam(args: any = {} as any, opt: Options = {}) {
    return await query<Team>(ACTIVE_TEAM, { ...opt, variables: args })
  }

  async sessionBySlug(args: QuerySessionBySlugArgs = {} as QuerySessionBySlugArgs, opt: Options = {}) {
    return await query<Session>(SESSION_BY_SLUG, { ...opt, variables: args })
  }

  async team(args: QueryTeamArgs = {} as QueryTeamArgs, opt: Options = {}) {
    return await query<Team>(TEAM, { ...opt, variables: args })
  }
}

export const apiService = new ApiService();
