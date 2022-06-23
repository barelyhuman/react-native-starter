import { DefaultTheme } from '@react-navigation/native'

export const palette = {
  black: '#000',
  white: '#fff',
  red: {
    50: '#fef5f6',
    100: '#fccfd5',
    200: '#f9a9b5',
    300: '#f78294',
    400: '#f45c73',
    500: '#f23652',
    600: '#c42c42',
    700: '#962133',
    800: '#681723',
    900: '#0c0304',
  },
  blue: {
    50: '#f5fbfe',
    100: '#cfedfc',
    200: '#a9def9',
    300: '#82d0f7',
    400: '#5cc1f4',
    500: '#36b3f2',
    600: '#2c91c4',
    700: '#216f96',
    800: '#174d68',
    900: '#03090c',
  },
  gray: {
    50: '#f5f5f5',
    100: '#cecece',
    200: '#a7a7a7',
    300: '#818181',
    400: '#5a5a5a',
    500: '#333333',
    600: '#292929',
    700: '#202020',
    800: '#161616',
    900: '#030303',
  },
}

// specifically for react-native/navigation
export const theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: palette.blue['500'],
    accent: palette.blue['500'],

    base: palette.white,
    surface: palette.gray[50],
    overlay: palette.gray[100],
    text: palette.black,
    muted: palette.gray[400],
    subtle: palette.gray[600],
  },
}
