import React, { Component } from 'react'
import { connect } from 'react-redux'
import { employeeUpdate, employeeSave } from '../actions'
import { Card, CardSection, Button } from './common'
import EmployeeForm from './EmployeeForm'
import _ from 'lodash'

class EmployeeEdit extends Component {
    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ value, prop })
        })
    }
    onButtonPress() {
        const { name, phone, shift } = this.props
        this.props.employeeSave({ name, phone, shift })
    }
    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Save</Button>
                </CardSection>
            </Card>
        )
    }
}

const stateProps = state => {
    const { name, phone, shift } = state.employee
    return {
        name, phone, shift
    }
}

export default connect(stateProps, {
    employeeUpdate, employeeSave
})(EmployeeEdit)
