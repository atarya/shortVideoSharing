import { USER_STATE_CHANGED } from "../constants";

const initialState = {
    currentUser: null,
    loaded: false
}

export const auth = (state = initialState, action) => {
    switch (action.type) {
        case USER_STATE_CHANGED:
            return {
                ...state,
                currentUser: action.currentUser,
                loaded: action.loaded
            }
        default:
            return state
    }
}