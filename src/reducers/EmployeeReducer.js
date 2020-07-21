import { _employeesFetchSuccess } from '../actions/types'

const initialState = {}

export default (state = initialState, action) => {
    switch(action.type) {
        case _employeesFetchSuccess:
            return action.payload
        default:
            return state
    }
}
