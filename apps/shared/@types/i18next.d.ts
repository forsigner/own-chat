/**
 * If you want to enable locale keys typechecking and enhance IDE experience.
 *
 * Requires `resolveJsonModule:true` in your tsconfig.json.
 *
 * @link https://www.i18next.com/overview/typescript
 */
import 'i18next'

import type common from '../src/locales/en/common.json'
import type home from '../src/locales/en/home.json'
import type dashboard from '../src/locales/en/dashboard.json'

interface I18nNamespaces {
  common: typeof common
  home: typeof home
  dashboard: typeof dashboard
}

declare module 'i18next' {
  // interface CustomTypeOptions {
  //   defaultNS: 'common'
  //   resources: I18nNamespaces
  // }
}
