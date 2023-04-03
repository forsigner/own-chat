import { Options, query } from "stook-graphql";
import { Member, Message, Provider, Session, Token, LoginSuccessPayload, Setting, User, AddMemberInput, AddMessageInput, AddProviderInput, AddSessionInput, AddTokenInput, DeleteTokenInput, ExitMemberInput, MutationLoginByGithubArgs, MutationLoginByGoogleArgs, MutationLoginByPersonalTokenArgs, RemoveMemberInput, RemoveSessionInput, UpdateProviderInput, UpdateSessionInput, UpdateSettingInput, UpdateUserInput, QueryProviderArgs, QuerySessionBySlugArgs } from "./types";
import { ADD_MEMBER, ADD_MESSAGE, ADD_PROVIDER, ADD_SESSION, ADD_TOKEN, DELETE_TOKEN, EXIT_MEMBER, LOGIN_BY_GITHUB, LOGIN_BY_GOOGLE, LOGIN_BY_PERSONAL_TOKEN, REMOVE_MEMBER, REMOVE_SESSION, UPDATE_PROVIDER, UPDATE_SESSION, UPDATE_SETTING, UPDATE_USER, ACTIVE_PROVIDER, PROVIDER, SESSION_BY_SLUG } from "./gql";

class ApiService {
  async addMember(args: AddMemberInput = {} as AddMemberInput, opt: Options = {}) {
    return await query<Member>(ADD_MEMBER, { ...opt, variables: { input: args } })
  }

  async addMessage(args: AddMessageInput = {} as AddMessageInput, opt: Options = {}) {
    return await query<Message>(ADD_MESSAGE, { ...opt, variables: { input: args } })
  }

  async addProvider(args: AddProviderInput = {} as AddProviderInput, opt: Options = {}) {
    return await query<Provider>(ADD_PROVIDER, { ...opt, variables: { input: args } })
  }

  async addSession(args: AddSessionInput = {} as AddSessionInput, opt: Options = {}) {
    return await query<Session>(ADD_SESSION, { ...opt, variables: { input: args } })
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

  async removeSession(args: RemoveSessionInput = {} as RemoveSessionInput, opt: Options = {}) {
    return await query<boolean>(REMOVE_SESSION, { ...opt, variables: { input: args } })
  }

  async updateProvider(args: UpdateProviderInput = {} as UpdateProviderInput, opt: Options = {}) {
    return await query<Provider>(UPDATE_PROVIDER, { ...opt, variables: { input: args } })
  }

  async updateSession(args: UpdateSessionInput = {} as UpdateSessionInput, opt: Options = {}) {
    return await query<Session>(UPDATE_SESSION, { ...opt, variables: { input: args } })
  }

  async updateSetting(args: UpdateSettingInput = {} as UpdateSettingInput, opt: Options = {}) {
    return await query<Setting>(UPDATE_SETTING, { ...opt, variables: { input: args } })
  }

  async updateUser(args: UpdateUserInput = {} as UpdateUserInput, opt: Options = {}) {
    return await query<User>(UPDATE_USER, { ...opt, variables: { input: args } })
  }

  async activeProvider(args: any = {} as any, opt: Options = {}) {
    return await query<Provider>(ACTIVE_PROVIDER, { ...opt, variables: args })
  }

  async provider(args: QueryProviderArgs = {} as QueryProviderArgs, opt: Options = {}) {
    return await query<Provider>(PROVIDER, { ...opt, variables: args })
  }

  async sessionBySlug(args: QuerySessionBySlugArgs = {} as QuerySessionBySlugArgs, opt: Options = {}) {
    return await query<Session>(SESSION_BY_SLUG, { ...opt, variables: args })
  }
}

export const apiService = new ApiService();
