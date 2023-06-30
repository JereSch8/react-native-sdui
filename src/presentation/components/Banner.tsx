import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

interface Prop {
  uri: string
}

export const Banner = ({ uri }: Prop) => {
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
    height: 180,
    width: '100%',
  },
  image: {
    flex: 1,
    margin: 20
  }
})