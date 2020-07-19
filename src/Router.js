import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'

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
                        key='employees'
                        component={EmployeeList}
                        title='Employees'
                    />
                </Scene>
            </Scene>
        </Router>
    )
}

export default RouterComponent
