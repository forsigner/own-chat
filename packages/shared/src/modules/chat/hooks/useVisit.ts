import { Hooks, Refetcher, UpdateVisitInput, VISIT, Visit, apiService } from '@own-chat/api-sdk'
import { getState } from 'stook'

export function useVisit() {
  const { data: visit, ...res } = Hooks.useVisit()

  return {
    visit,
    ...res,
  }
}

export async function updateVisit(input: UpdateVisitInput) {
  await apiService.updateVisit(input)
  await Refetcher.refetchVisit()
}

export function getVisit(): Visit {
  return getState(VISIT)?.data
}
