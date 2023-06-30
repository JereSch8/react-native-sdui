import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Prop {
    text: string,
    color: string,
}

export const ItemsCell = ({ text, color }: Prop) => {
    return (
        <View style={[styles.container, { backgroundColor: color }]}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        borderRadius: 20,
    },
    text: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
})