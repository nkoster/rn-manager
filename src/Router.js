import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'

const RouterComponent = _ => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key='root'>
                <Scene
                    key='LoginForm'
                    component={LoginForm}
                    title='Just do it'
                />
            </Scene>
        </Router>
    )
}

export default RouterComponent
