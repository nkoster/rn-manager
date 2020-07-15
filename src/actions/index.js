import firebase from 'firebase'
import { _emailChanged } from './types'
import { _passwordChanged } from './types'

export const emailChanged = email => {
    return {
        type: _emailChanged,
        payload: email
    }
}

export const passwordChanged = password => {
    return {
        type: _passwordChanged,
        payload: password
    }
}

export const loginUser = ({ email, password }) => {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            dispatch({
                type: 'loginSuccess',
                payload: user
            })
        })
    }
}
