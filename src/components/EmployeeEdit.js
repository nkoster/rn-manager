import React, { Component } from 'react'
import { connect } from 'react-redux'
import { text as textMessage } from 'react-native-communications'
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
    onSavePress() {
        const { name, phone, shift } = this.props
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
    }
    onTextPress() {
        const { phone, shift } = this.props
        textMessage(phone, `Yo you work ${shift}`)
    }
    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onSavePress.bind(this)}>Save</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>Text Schedule</Button>
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
