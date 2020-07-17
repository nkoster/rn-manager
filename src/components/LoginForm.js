import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, StyleSheet } from 'react-native'
import { Card, CardSection, Input, Button } from './common'
import { emailChanged, passwordChanged, loginUser } from '../actions'

class LoginForm extends Component {
    onEmailChange(email) {
        this.props.emailChanged(email)
    }
    onPasswordChange(password) {
        this.props.passwordChanged(password)
    }
    onButtonPress() {
        const { email, password } = this.props
        this.props.loginUser({ email, password })
    }
    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white', flex: 1 }}>
                    <Text style={styles.error}>{this.props.error}</Text>
                </View>
            )
        }
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='email'
                        placeholder='type your email address here'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label='password'
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        <Text>HEY</Text>
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        alignSelf: 'center',
        fontSize: 20
    }
})

const stateProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error
    }
}

export default connect(stateProps, {
    emailChanged, passwordChanged, loginUser
})(LoginForm)
