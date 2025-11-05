import {UserActionTypes} from "./user.types";

interface UserState {
    user: any;
    loading: boolean;
    error: any;
    isAuthenticated: boolean;
}

const INITIAL_STATE: UserState = {
    user: null,
    loading: false,
    error: null,
    isAuthenticated: false,
};

const userReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case UserActionTypes.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case UserActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null,
                isAuthenticated: true,
            };
        case UserActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                user: null,
                loading: false,
                error: action.payload,
                isAuthenticated: false,
            };
        case UserActionTypes.LOGOUT:
            return {
                ...state,
                user: null,
                loading: false,
                error: null,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};

export default userReducer;
