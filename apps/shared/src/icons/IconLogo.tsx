import React from 'react'
import { iconify } from '@bone-ui/iconify'

export const IconLogo = iconify({
  displayName: 'IconLogo',
  viewBox: '0 0 40 50',
  fill: 'currentColor',
  atomicProps: {
    square: 16,
    cursorPointer: true,
    // gray500: true,
  },
  path: (
    <>
      <path
        d="M0 2.85714C0 1.27919 1.27919 0 2.85714 0V0C6.80203 0 10 3.19797 10 7.14286V30H0V2.85714Z"
        fill="#0ACF83"
      />
      <circle cx="20" cy="30" r="15" stroke="#0ACF83" strokeWidth="10" strokeLinejoin="bevel" />
    </>
  ),
})
