import React, { Component } from 'react'
import { Card, CardSection, Input, Button } from './common'

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Name'
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label='Phone'
                    />
                </CardSection>
                <CardSection>

                </CardSection>
                <CardSection>
                    <Button>Save</Button>
                </CardSection>
            </Card>
        )
    }
}

export default EmployeeCreate
