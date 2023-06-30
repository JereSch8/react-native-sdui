import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

interface Prop {
  uri: string
}

export const CustomImage = ({ uri }: Prop) => {
  return (
    <View style={styles.container}>
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