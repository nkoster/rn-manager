import { 
    _employeeUpdate
} from './types'
import firebase from 'firebase'

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: _employeeUpdate,
        payload: { prop, value} 
    }
}

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth()
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ name, phone, shift })
    return { type: '' }
}
