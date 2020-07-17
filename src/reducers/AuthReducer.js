import {
    _emailChanged, _passwordChanged, _loginSuccess, _loginFailed
} from '../actions/types'

const initialState = { email: '', password: '', user: null, error: '' }

export default (state = initialState, action) => {
    console.log(action)
    switch(action.type) {
        case _emailChanged:
            return { ...state, email: action.payload }
        case _passwordChanged:
            return { ...state, password: action.payload }
        case _loginSuccess:
            return { ...state, user: action.payload, error: '' }
        case _loginFailed:
            return { ...state, error: action.payload, password: '' }
        default:
            return state
    }
}
