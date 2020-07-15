import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native'
import { Card, CardSection, Input, Button } from './common'
import { emailChanged, passwordChanged } from '../actions'

class LoginForm extends Component {
    onEmailChange(email) {
        this.props.emailChanged(email)
    }
    onPasswordChange(password) {
        this.props.passwordChanged(password)
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
                <CardSection>
                    <Button onPress={_ => {}}><Text>HEY</Text></Button>
                </CardSection>
            </Card>
        )
    }
}

const stateProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    }
}

export default connect(stateProps, { emailChanged, passwordChanged })(LoginForm)
