import { UPDATE_VALUE_TO_TEN } from './actions'

export const valueReducer = (state = 0, action) => {
    switch (action.type) {
        case 'UPDATE_VALUE_TO_TEN':
            return 10
        default:
            return state
    }
}
