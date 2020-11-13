import React from 'react'
import { Box, Text } from '../../Theme'
import { Dimensions, StyleSheet, Image } from 'react-native'

const { width } = Dimensions.get('window')
const bHeight = width * 0.5

const HeaderWithIcon = () => {
  return (
    <Box
      height={bHeight}
      width={width}
      justifyContent='center'
      alignItems='center'>
      <Image
        style={[
          StyleSheet.absoluteFillObject,
          {
            width: width,
            height: undefined,
            resizeMode: 'contain',
          },
        ]}
        source={require('../../assets/image/HeaderBg.png')}
      />
      <Box>
        <Text variant='header'>FuelUp</Text>
        <Text variant='header'>Education</Text>
        <Text variant='slogan' marginTop='s'>
          Spreading Education
        </Text>
      </Box>
    </Box>
  )
}

export default HeaderWithIcon
