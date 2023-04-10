export function first<T>(array: T[]) {
  return array != null && array.length ? array[0] : undefined
}

export function last<T>(array: T[]) {
  const length = array == null ? 0 : array.length
  return length ? array[length - 1] : undefined
}

export function chunk<T>(array: T[], size: number): T[][] {
  return array.reduce((rows: T[][], currentValue: T, index: number) => {
    if (index % size === 0) {
      rows.push([currentValue])
    } else {
      rows[rows.length - 1].push(currentValue)
    }
    return rows
  }, [] as T[][])
}
