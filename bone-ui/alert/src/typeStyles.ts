export const getTypeStyles = (type: string, isOutline: boolean) => {
  const maps: any = {
    default: {
      bgGray100: true,
      gray700: true,
      borderGray200: isOutline,
    },

    info: {
      bgBlue100: true,
      blue700: true,
      borderBlue200: isOutline,
    },

    warning: {
      bgOrange100: true,
      orange700: true,
      borderOrange200: isOutline,
    },

    success: {
      bgGreen100: true,
      green700: true,
      borderGreen200: isOutline,
    },

    error: {
      bgRed100: true,
      red700: true,
      borderRed200: isOutline,
    },
  }
  return maps[type]
}

export type AlertType = 'defaut' | 'info' | 'warning' | 'success' | 'error'
