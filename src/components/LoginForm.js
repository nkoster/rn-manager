import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native'
import { Card, CardSection, Input, Button } from './common'
import { emailChanged } from '../actions'

class LoginForm extends Component {
    onEmailChange(email) {
        this.props.emailChanged(email)
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='email'
                        placeholder='type your email address here'
                        onChangeText={this.onEmailChange.bind(this)}
                    />
                </CardSection>
                <CardSection>
                    <Input label='password' secureTextEntry />
                </CardSection>
                <CardSection>
                    <Button onPress={_ => {}}><Text>HEY</Text></Button>
                </CardSection>
            </Card>
        )
    }
}

export default connect(null, { emailChanged })(LoginForm)
