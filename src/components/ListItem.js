import React, { Component } from 'react'
import { CardSection } from './common'
import { Text, StyleSheet } from 'react-native'

class ListItem extends Component {
    render() {
        const { name } = this.props.employee
        return (
            <CardSection>
               <Text style={styles.title}>{name}</Text>
            </CardSection>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        paddingLeft: 15
    }
})

export default ListItem
