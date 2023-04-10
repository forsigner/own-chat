import React from 'react'

export function getValidChildren(children: React.ReactNode) {
  const childrenArray: any[] = Array.isArray(children) ? children : [children]
  return childrenArray.filter((child) => React.isValidElement(child))
}
