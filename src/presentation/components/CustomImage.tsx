import React from 'react'
import { Image, StyleSheet, View, ViewStyle } from 'react-native'

interface Prop {
  uri: string,
  style: ViewStyle
}

export const CustomImage = ({ uri, style }: Prop) => {
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
    height: 140,
    width: 140,
  },
  image: {
    flex: 1,
    margin: 4
  }
})