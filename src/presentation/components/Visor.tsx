import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Prop {
  currentAmount: string,
  monthlyAmount: string,
  spentAmount: string,
}

export const Visor = ({ currentAmount, monthlyAmount, spentAmount }: Prop) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} > Current amount: </Text>

      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.currentAmount}
        >
          {`${currentAmount.split(',')[0]},`}
        </Text>
        <Text style={styles.currentAmountCent}
        >
          {currentAmount.split(',')[1]}
        </Text>
      </View>

      <View style={styles.containerSubAmounts}>

        <View>
          <Text style={[styles.title, {color: 'green'}]} > Monthly amount: </Text>
          <Text style={[styles.secondaryAmount,, {color: 'green'}]} > {monthlyAmount} </Text>
        </View>

        <View>
          <Text style={[styles.title, {color: 'red'}]} > Spent amount: </Text>
          <Text style={[styles.secondaryAmount, {color: 'red'}]} > {spentAmount} </Text>
        </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 230,
    margin: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    zIndex: 8,
    elevation: 4
  },
  containerSubAmounts: { 
    width: '90%',
     alignSelf: 'center', 
     flexDirection: 'row', 
     marginTop: 40, 
     justifyContent: 'space-between' 
    },
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 14,
    fontWeight: 'bold'
  },
  currentAmount: {
    marginStart: 20,
    fontSize: 45,
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  currentAmountCent: {
    fontSize: 28,
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginStart: 4,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid'
  },
  secondaryAmount: {
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
})