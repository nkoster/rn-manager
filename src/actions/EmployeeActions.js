import { 
    _employeeUpdate, _employeeCreate, _employeesFetchSuccess, _employeeSaved
} from './types'
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: _employeeUpdate,
        payload: { prop, value} 
    }
}

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth()
    return dispatch => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ name, phone, shift })
        .then(_ => {
            dispatch({ type: _employeeCreate })
            Actions.employees({ type: 'reset' })
        })
    }
}

export const employeesFetch = _ => {
    const { currentUser } = firebase.auth()
    return dispatch => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({
                    type: _employeesFetchSuccess,
                    payload: snapshot.val()
                })
            })
    }
}

export const employeeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth()
    return dispatch => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift })
            .then(_ => {
                dispatch({ type: _employeeSaved })
                Actions.employees({ type: 'reset' })
            })
    }
}

export const employeeKill = ({ uid }) => {
    const { currentUser } = firebase.auth()
    return _ => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(_ => {
                Actions.employees({ type: 'reset' })
            })
    }
}
