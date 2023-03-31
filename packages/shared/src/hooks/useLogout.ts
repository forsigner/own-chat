import { request } from '@boter/request'

export function useLogout() {
  async function logout() {
    await request('/api/logout')
    location.href = '/'
  }

  return { logout }
}
