import { 
    _employeeUpdate, _employeeCreate, _employeesFetchSuccess, _emailChanged
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
        case _employeeCreate:
            return initialState
        case _employeesFetchSuccess:
            return state
        default:
            return state
    }
}
