import { _emailChanged } from '../actions/types'

export default (state = { email: '' }, action) => {
    switch(action.type) {
        case _emailChanged:
            return { ...state, email: action.payload }
        default:
            return state
    }
}
