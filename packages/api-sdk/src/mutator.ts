import { Result } from "stook-graphql";
import { mutate } from "stook";
import { BOT, BOTS, OWNED_BOTS, STRATEGY } from "./gql";
import { Bot, Strategy } from "./types";

class MutatorService {
  mutateBot(fn: (state: Bot) => void) {
    return mutate(BOT, (state: Result<Bot>) => {
      fn(state.data)
    })
  }

  mutateBots(fn: (state: Bot[]) => void) {
    return mutate(BOTS, (state: Result<Bot[]>) => {
      fn(state.data)
    })
  }

  mutateOwnedBots(fn: (state: Bot[]) => void) {
    return mutate(OWNED_BOTS, (state: Result<Bot[]>) => {
      fn(state.data)
    })
  }

  mutateStrategy(fn: (state: Strategy) => void) {
    return mutate(STRATEGY, (state: Result<Strategy>) => {
      fn(state.data)
    })
  }
}

export const Mutator = new MutatorService();
