import React, { Component } from 'react'
import _ from 'lodash'
import { ListView } from 'react-native'
import { Spinner } from './common'
import ListItem from './ListItem'
import { connect } from 'react-redux'
import { employeesFetch } from '../actions'

class EmployeeList extends Component {
    componentDidMount() {
        this.props.employeesFetch()
        this.createDataSource(this.props)
    }
    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps)
    }
    createDataSource({ employees }) {
        const dataStore = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
        this.dataSource = dataStore.cloneWithRows(employees)
        console.log('DATASOURCE', this.dataSource)
    }
    renderRow(employee) {
        return (
            <ListItem employee={employee} />
        )
    }
    render() {
        console.log('RENDER', this.props)
        console.log(this.props.employees)
        if (!this.props.employees.length)
            return (
                <Spinner />
            )
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        )
    }
}

const StateProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid }
    })
    return { employees }
}

export default connect(StateProps, {
    employeesFetch
})(EmployeeList)
