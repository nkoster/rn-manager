import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CardSection = ({ children, style }) => {
    // override style with style array
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
})

export { CardSection }
