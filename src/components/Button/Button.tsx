import * as React from 'react'
import { TouchableOpacity, ActivityIndicator } from 'react-native'
import { Text, Theme, makeStyles, useTheme } from '../'
import Icon from 'react-native-vector-icons/Feather'

export interface ButtonProps {
  title: string
  icon?: string
  onPress: () => void
  loading?: boolean
  variant?: 'default' | 'primary' | 'secondary'
  block?: boolean
}

const Button: React.FC<ButtonProps> = ({
  title,
  icon,
  onPress,
  loading,
  variant,
  block,
}: ButtonProps) => {
  const theme = useTheme()
  const styles = useStyles()
  const backgroundColor =
    variant === 'primary'
      ? theme.colors.primary
      : variant === 'secondary'
      ? theme.colors.secondary
      : theme.colors.lightGrey
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.container,
        { backgroundColor, alignSelf: block ? 'stretch' : 'auto' },
      ]}
      onPress={onPress}>
      {icon && !loading ? <Icon name={icon} style={styles.icon} /> : null}
      {loading ? <ActivityIndicator color='white' style={styles.icon} /> : null}
      <Text variant='button'>{title}</Text>
    </TouchableOpacity>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.m,
    margin: theme.spacing.s,
    borderRadius: theme.borderRadii.m,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: theme.textVariants.button.fontSize * 1.13,
    color: 'white',
    marginRight: theme.spacing.s,
  },
}))
export default Button
