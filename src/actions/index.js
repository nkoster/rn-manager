import { _emailChanged } from './types'

export const emailChanged = email => {
    return {
        type: _emailChanged,
        payload: email
    }
}
