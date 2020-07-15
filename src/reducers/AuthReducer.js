import { _emailChanged } from '../actions/types'
import { _passwordChanged } from '../actions/types'

const initialState = { email: '', password: '' }

export default (state = initialState, action) => {
    switch(action.type) {
        case _emailChanged:
            return { ...state, email: action.payload }
        case _passwordChanged:
            return { ...state, password: action.payload }
        default:
            return state
    }
}
