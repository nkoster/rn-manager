import { 
    _employeeUpdate, _emailChanged
} from '../actions/types'

const initialState = {
    name: '',
    phone: '',
    shift: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case _employeeUpdate:
            return { ...state, [action.payload.prop]: action.payload.value }
        default:
            return state
    }
}
