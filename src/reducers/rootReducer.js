import { combineReducers } from 'redux'
import {
    ADD_EXERCISE,
    RECEIVE_ADD_ROUTINE_SUCCESS,
    RECEIVE_GET_ALL_ROUTINES_SUCCESS,
    RECEIVE_GET_ALL_ROUTINES_FAILURE,
    CHANGE_TEXT
} from './../actions/actions'

function routines(state = [], action) {
    switch (action.type) {
        case RECEIVE_GET_ALL_ROUTINES_SUCCESS:
            return action.routines;
        case RECEIVE_GET_ALL_ROUTINES_FAILURE:
            return [];
        default:
            return state;
    }
}

function exercises(state = [], action) {
    switch (action.type) {
        case ADD_EXERCISE:
            if (action.name) {
                return [...state, action.name];
            }
        default:
            return state;
    }
}

function text(state = null, action) {
    switch (action.type) {
        case RECEIVE_ADD_ROUTINE_SUCCESS:
        case ADD_EXERCISE:
            return null;
        case CHANGE_TEXT:
            return action.text;
        default:
            return state;
    }
}

export default rootReducer = combineReducers({ routines, exercises, text });