import * as c from 'helpers/constants';

let initialState = {
    user: {},
};

export default function(state = initialState, action) {
    switch (action.type) {
        case c.SET_USER: {
            return {
                ...state,
                user: action.user
            }
        }
        case c.LOGOUT: {
            return {
                ...state,
                user: {}
            }
        }
        default:
            return state;
    }
};
