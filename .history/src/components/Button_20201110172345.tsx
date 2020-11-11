import * as React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text, Theme, makeStyles } from '../Theme'
interface BProps {
  onPress: () => void
  title: string
}

const Button: React.FC<BProps> = ({ title, onPress }: BProps) => {
  const styles = useStyles()
  return (
    <TouchableOpacity style={styles.container} {...onPress}>
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
  },
}))
export default Button
