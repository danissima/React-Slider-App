import * as actionTypes from './actionTypes';

export default function fileReducer(state, action) {
    switch (action.type) {
        case actionTypes.ADD_FILE:
            return [
                ...state,
                {
                    id: action.id,
                    src: action.src
                }
            ]
        default:
            return state
    }
}