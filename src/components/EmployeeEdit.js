import React, { Component } from 'react'
import { connect } from 'react-redux'
import { text as textMessage } from 'react-native-communications'
import { employeeUpdate, employeeSave, employeeKill } from '../actions'
import { Card, CardSection, Button, Confirm } from './common'
import EmployeeForm from './EmployeeForm'
import _ from 'lodash'

class EmployeeEdit extends Component {
    state = { showModal: false }
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
    onAccept() {
        this.props.employeeKill({ uid: this.props.employee.uid })
    }
    onDecline() {
        this.setState({ showModal: false })
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
                <CardSection>
                    <Button onPress={_ => this.setState({ showModal: !this.state.showModal})}>
                        Kill
                    </Button>
                </CardSection>
                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Bent u Zuur?
                </Confirm>
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
    employeeUpdate, employeeSave, employeeKill
})(EmployeeEdit)
