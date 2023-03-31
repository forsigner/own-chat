import { Options, query } from "stook-graphql";
import { Collaborator, Message, Provider, Session, Token, LoginSuccessPayload, Setting, User, AddCollaboratorInput, AddMessageInput, AddProviderInput, AddSessionInput, AddTokenInput, DeleteTokenInput, MutationLoginByGithubArgs, MutationLoginByGoogleArgs, MutationLoginByPersonalTokenArgs, RemoveCollaboratorInput, UpdateProviderInput, UpdateSessionInput, UpdateSettingInput, UpdateUserInput, QueryProviderArgs } from "./types";
import { ADD_COLLABORATOR, ADD_MESSAGE, ADD_PROVIDER, ADD_SESSION, ADD_TOKEN, DELETE_TOKEN, LOGIN_BY_GITHUB, LOGIN_BY_GOOGLE, LOGIN_BY_PERSONAL_TOKEN, REMOVE_COLLABORATOR, UPDATE_PROVIDER, UPDATE_SESSION, UPDATE_SETTING, UPDATE_USER, ACTIVE_PROVIDER, PROVIDER } from "./gql";

class ApiService {
  async addCollaborator(args: AddCollaboratorInput = {} as AddCollaboratorInput, opt: Options = {}) {
    return await query<Collaborator>(ADD_COLLABORATOR, { ...opt, variables: { input: args } })
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

  async loginByGithub(args: MutationLoginByGithubArgs = {} as MutationLoginByGithubArgs, opt: Options = {}) {
    return await query<LoginSuccessPayload>(LOGIN_BY_GITHUB, { ...opt, variables: args })
  }

  async loginByGoogle(args: MutationLoginByGoogleArgs = {} as MutationLoginByGoogleArgs, opt: Options = {}) {
    return await query<LoginSuccessPayload>(LOGIN_BY_GOOGLE, { ...opt, variables: args })
  }

  async loginByPersonalToken(args: MutationLoginByPersonalTokenArgs = {} as MutationLoginByPersonalTokenArgs, opt: Options = {}) {
    return await query<LoginSuccessPayload>(LOGIN_BY_PERSONAL_TOKEN, { ...opt, variables: args })
  }

  async removeCollaborator(args: RemoveCollaboratorInput = {} as RemoveCollaboratorInput, opt: Options = {}) {
    return await query<Collaborator>(REMOVE_COLLABORATOR, { ...opt, variables: { input: args } })
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
}

export const apiService = new ApiService();
