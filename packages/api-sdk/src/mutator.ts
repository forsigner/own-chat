import { Result } from "stook-graphql";
import { mutate } from "stook";
import { MESSAGES, SETTING } from "./gql";
import { Message, Setting } from "./types";

class MutatorService {
  mutateMessages(fn: (state: Message[]) => void) {
    return mutate(MESSAGES, (state: Result<Message[]>) => {
      fn(state.data)
    })
  }

  mutateSetting(fn: (state: Setting) => void) {
    return mutate(SETTING, (state: Result<Setting>) => {
      fn(state.data)
    })
  }
}

export const Mutator = new MutatorService();
