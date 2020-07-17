import firebase from 'firebase'
import { 
    _emailChanged, _passwordChanged, _loginSuccess, _loginFailed
} from './types'

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

const dispatchLogin = (dispatch, user) => {
    dispatch({
        type: _loginSuccess,
        payload: user
    })
}

const dispatchLoginFailed = (dispatch, err) => {
    dispatch({ type: _loginFailed, payload: err.message })
}

export const loginUser = ({ email, password }) => {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => dispatchLogin(dispatch, user))
        .catch(err => {
            console.log('Catched Error', err)
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => dispatchLogin(dispatch, user))
            .catch(err => dispatchLoginFailed(dispatch, err))
        })
    }
}
