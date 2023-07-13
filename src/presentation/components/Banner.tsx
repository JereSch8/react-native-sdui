import React from 'react'
import { Image, StyleSheet, View, ViewStyle } from 'react-native'

interface Prop {
  uri: string,
  style: ViewStyle
}

export const Banner = ({ uri, style }: Prop) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        style={styles.image}
        borderRadius={20}
        source={{ uri }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: '100%',
  },
  image: {
    flex: 1,
    margin: 20
  }
})