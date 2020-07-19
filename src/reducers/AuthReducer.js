import {
    _emailChanged, _passwordChanged, _loginSuccess, _loginFailed, _login
} from '../actions/types'

const initialState = { email: '', password: '', user: null, error: '', loading: false }

export default (state = initialState, action) => {
    switch(action.type) {
        case _emailChanged:
            return { ...state, email: action.payload }
        case _passwordChanged:
            return { ...state, password: action.payload }
        case _loginSuccess:
            return { ...state, ...initialState, user: action.payload }
        case _loginFailed:
            return { ...state, error: action.payload, password: '', loading: false }
        case _login:
            return { ...state, loading: true, error: '' }
        default:
            return state
    }
}
