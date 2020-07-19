import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'

const RouterComponent = _ => {
    return (
        <Router sceneStyle={{ paddingTop: 60 }}>
            <Scene key='root' hideNavBar>
                <Scene key='auth'>
                    <Scene
                        key='login'
                        component={LoginForm}
                        initial
                        title='Please log in'
                    />
                </Scene>
                <Scene key='main'>
                    <Scene
                        rightTitle='Add'
                        onRight={_ => Actions.EmployeeCreate()}
                        key='employees'
                        component={EmployeeList}
                        title='Employees'
                        initial
                    />
                    <Scene
                        key='EmployeeCreate'
                        component={EmployeeCreate}
                        title='Create Employee'
                    />
                </Scene>
            </Scene>
        </Router>
    )
}

export default RouterComponent
