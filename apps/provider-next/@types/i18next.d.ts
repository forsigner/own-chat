/**
 * If you want to enable locale keys typechecking and enhance IDE experience.
 *
 * Requires `resolveJsonModule:true` in your tsconfig.json.
 *
 * @link https://www.i18next.com/overview/typescript
 */
import 'i18next'

import type common from '../../../packages/shared/src/locales/en/common.json'
import type home from '../../../packages/shared/src/locales/en/home.json'

interface I18nNamespaces {
  common: typeof common
  home: typeof home
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common'
    resources: I18nNamespaces
  }
}
