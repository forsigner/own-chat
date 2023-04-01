import { injectGlobalStyle, setConfig, composeAtom, setTheme, store } from '@fower/core'

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    /**
     * dashboard card
     */
    dashboardCard?: true
  }
}

export function initFower() {
  setConfig({
    inline: false,
    mode: {
      currentMode: 'dark',
      autoDarkMode: {
        enabled: true,
        mappings: {
          black: 'gray100',
          bgWhite: 'gray900',
          bgSlate100: 'gray900',
        },
      },
    },
  })

  composeAtom('container', {
    'w-100p': true,
    'maxW-640px--sm': true,
    'maxW-768px--md': true,
    'maxW-1024px--lg': true,
    'maxW-1280px--xl': true,
    // 'maxW-1536px--2xl': true,
  })

  composeAtom('dashboardCard', {
    bgWhite: true,
    // shadow: true,
    border: true,
    borderSlate200: true,
    'borderTransparent--dark': true,
    'bgSlate700--dark--i': true,
    rounded: true,
  })

  setTheme({
    colors: {
      brand50: '#eef2ff',
      brand100: '#e0e7ff',
      brand200: '#c7d2fe',
      brand300: '#a5b4fc',
      brand400: '#818cf8',
      brand500: '#6366f1',
      brand600: '#4f46e5',
      brand700: '#4338ca',
      brand800: '#5b21b6',
      brand900: '#4c1d95',

      // brand50: '#ecfdf5',
      // brand100: '#d1fae5',
      // brand200: '#a7f3d0',
      // brand300: '#6ee7b7',
      // brand400: '#34d399',
      // brand500: '#10b981',
      // brand600: '#059669',
      // brand700: '#047857',
      // brand800: '#065f46',
      // brand900: '#064e3b',
    },
    shadows: {
      // medium: '0 0 20px 0 rgba(0,0,0,.15)',
    },
  })

  injectGlobalStyle({
    a: {
      color: 'brand400',
      textDecoration: 'none',
      cursor: 'pointer',
    },
  })
}
