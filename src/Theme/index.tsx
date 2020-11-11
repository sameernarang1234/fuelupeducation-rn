import {
  createTheme,
  createText,
  createBox,
  useTheme as useReTheme,
} from '@shopify/restyle'
import { ViewStyle, TextStyle, ImageStyle } from 'react-native'
import palette from './palette'

const theme = createTheme({
  colors: {
    primary: palette.purple,
    secondary: palette.orange,
    primaryLight: palette.lightPurple,
    text: palette.black,
    grey: palette.grey,
    white: palette.white,
    lightGrey: palette.lightGrey,
    danger: palette.red,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    none: 0,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  borderRadii: {
    s: 4,
    m: 8,
    l: 16,
    xl: 32,
    none: 0,
    round: 100 / 2,
  },
  textVariants: {
    button: {
      fontSize: 18,
      color: 'white',
      fontFamily: 'SFProDisplay-Medium',
    },
    body: {
      fontSize: 16,
      fontFamily: 'SFProDisplay-Regular',
      color: 'text',
    },
    title: {
      fontSize: 24,
      fontFamily: 'SFProDisplay-Medium',
      color: 'text',
    },
  },
})

export type Theme = typeof theme

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle }

export const makeStyles = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T,
) => () => {
  const currentTheme = useTheme()
  return styles(currentTheme)
}

export const Text = createText<Theme>()
export const Box = createBox<Theme>()
export const useTheme = () => useReTheme<Theme>()

export default theme
