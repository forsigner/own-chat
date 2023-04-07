import { Result } from "stook-graphql";
import { mutate } from "stook";
import { CHAT_SETTINGS, MESSAGES, PROVIDERS, SESSIONS, VISIT } from "./gql";
import { ChatSettings, Message, Provider, Session, Visit } from "./types";

class MutatorService {
  mutateChatSettings(fn: (state: ChatSettings) => void) {
    return mutate(CHAT_SETTINGS, (state: Result<ChatSettings>) => {
      fn(state.data)
    })
  }

  mutateMessages(fn: (state: Message[]) => void) {
    return mutate(MESSAGES, (state: Result<Message[]>) => {
      fn(state.data)
    })
  }

  mutateProviders(fn: (state: Provider[]) => void) {
    return mutate(PROVIDERS, (state: Result<Provider[]>) => {
      fn(state.data)
    })
  }

  mutateSessions(fn: (state: Session[]) => void) {
    return mutate(SESSIONS, (state: Result<Session[]>) => {
      fn(state.data)
    })
  }

  mutateVisit(fn: (state: Visit) => void) {
    return mutate(VISIT, (state: Result<Visit>) => {
      fn(state.data)
    })
  }
}

export const Mutator = new MutatorService();
