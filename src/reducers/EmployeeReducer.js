import { _employeesFetchSuccess } from '../actions/types'

const initialState = {}

export default (state = initialState, action) => {
    switch(action.type) {
        case _employeesFetchSuccess:
            console.log(action)
            return state
        default:
            return state
    }
}
