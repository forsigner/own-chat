import { Result } from "stook-graphql";
import { mutate } from "stook";
import { SETTING } from "./gql";
import { Setting } from "./types";

class MutatorService {
  mutateSetting(fn: (state: Setting) => void) {
    return mutate(SETTING, (state: Result<Setting>) => {
      fn(state.data)
    })
  }
}

export const Mutator = new MutatorService();
