import { 
    _employeeUpdate
} from './types'

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: _employeeUpdate,
        payload: { prop, value} 
    }
}