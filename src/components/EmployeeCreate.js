import React, { Component } from 'react'
import { connect } from 'react-redux'
import { employeeUpdate } from '../actions'
import { Card, CardSection, Input, Button } from './common'

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Name'
                        value={this.props.name}
                        onChangeText={text => this.props.employeeUpdate({
                            prop: 'name', value: text
                        })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label='Phone'
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeUpdate({
                            prop: 'phone', value: text
                        })}
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

const stateProps = (state) => {
    const { name, phone, shift } = state.employee
    return {
        name, phone, shift
    }
}

export default connect(stateProps, {
    employeeUpdate
})(EmployeeCreate)
