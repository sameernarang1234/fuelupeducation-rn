import * as React from 'react'
import { TouchableOpacity, ActivityIndicator } from 'react-native'
import { Text, Theme, makeStyles } from '../Theme'
import Icon from 'react-native-vector-icons/Feather'

interface BProps {
  title: string
  icon?: string
  onPress: () => void
  loading?: boolean
}

const Button: React.FC<BProps> = ({
  title,
  icon,
  onPress,
  loading,
}: BProps) => {
  const styles = useStyles()
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={onPress}>
      {icon && !loading ? <Icon name={icon} style={styles.icon} /> : null}
      {loading ? <ActivityIndicator color='white' style={styles.icon} /> : null}
      <Text variant='buttonText'>{title}</Text>
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
  },
  icon: {
    fontSize: theme.textVariants.buttonText.fontSize,
    color: 'white',
    marginRight: theme.spacing.s,
  },
}))
export default Button
