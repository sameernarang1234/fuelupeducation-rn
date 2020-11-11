import {
  createTheme,
  createText,
  createBox,
  useTheme as useReTheme,
} from '@shopify/restyle'
import { ViewStyle, TextStyle, ImageStyle } from 'react-native'

const theme = createTheme({
  colors: {
    primary: '#4F0EA2',
    secondary: '#F16711',
    primaryLight: 'rgba(79, 14, 162, 0.3)',
    text: '#070707',
    darkGrey: '#8a8d90',
    grey: 'rgba(12, 13, 52, 0.05)',
    white: 'white',
    lightGrey: '#f4f0ef',
    danger: '#ff0058',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
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
