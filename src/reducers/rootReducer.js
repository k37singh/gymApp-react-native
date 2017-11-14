import { combineReducers } from 'redux'
import {
    CHANGE_TEXT,
    get_routines,
    create_routine,
    delete_routine,
    get_exercises,
    create_exercise,
    delete_exercise,
    get_logs,
    SET_REPS,
    SET_WEIGHT
} from './../actions/actionConstants'

function reps(state = 0, action) {
    switch (action.type) {
        case SET_REPS:
            return action.reps
        default:
            return state
    }
}

function weight(state = 0, action) {
    switch (action.type) {
        case SET_WEIGHT:
            return action.weight
        default:
            return state
    }
}

function logs(state = [], action) {
    switch (action.type) {
        case get_logs.SUCCESS:
            return action.logs
        case get_logs.FAILURE:
            return []
        default:
            return state
    }
}

function routines(state = [], action) {
    switch (action.type) {
        case get_routines.SUCCESS:
            return action.routines;
        case get_routines.FAILURE:
            return [];
        default:
            return state;
    }
}

function exercises(state = [], action) {
    switch (action.type) {
        case get_exercises.SUCCESS:
            return action.exercises;
        case get_exercises.FAILURE:
            return [];
        default:
            return state;
    }
}

function text(state = null, action) {
    switch (action.type) {
        case create_routine.SUCCESS:
        case create_exercise.SUCCESS:
            return null;
        case CHANGE_TEXT:
            return action.text;
        default:
            return state;
    }
}

export default rootReducer = combineReducers({ routines, exercises, logs, reps, weight, text });