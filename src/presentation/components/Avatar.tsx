import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Prop {
    text: string,
    color: string,
}

export const Avatar = ({ text, color }: Prop) => {
    return (
        <View style={styles.container}>
            <View style={[styles.circleContainer, { backgroundColor: color }]}>
                <Text style={styles.char}>{`${text[0]}${text[text.length - 1]}`}</Text>
            </View>
            <Text style={styles.text}>{text}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: 80,
    },
    circleContainer: {
        height: 80,
        width: 80,
        borderRadius: 90,
    },
    char: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        alignSelf: 'center',
        fontSize: 20
    },
    text: {
        textAlign: 'center',
        textAlignVertical: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 16
    }
})