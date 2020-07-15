import React, { Component } from 'react'
import { Text } from 'react-native'
import { Card, CardSection, Input, Button } from './common'

class LoginForm extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input label='email' placeholder='type your email address here' />
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

export default LoginForm
