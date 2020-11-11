import * as React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text, Theme, Box, makeStyles } from '../Theme'
interface BProps {
  title: string
  icon?: string
  onPress: () => void
}

const Button: React.FC<BProps> = ({ title, icon, onPress }: BProps) => {
  const styles = useStyles()
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={onPress}>
      <Text variant='buttonText'>{title}</Text>
      <Box>{icon}</Box>
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
