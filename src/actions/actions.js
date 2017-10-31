import { Keyboard } from 'react-native';
import axios from 'axios';

export const REQUEST_ADD_ROUTINE = "REQUEST_ADD_ROUTINE"
export const RECEIVE_ADD_ROUTINE_SUCCESS = "RECEIVE_ADD_ROUTINE_SUCCESS"
export const RECEIVE_ADD_ROUTINE_FAILURE = "RECEIVE_ADD_ROUTINE_FAILURE"

export const REQUEST_GET_ALL_ROUTINES = "REQUEST_GET_ALL_ROUTINES"
export const RECEIVE_GET_ALL_ROUTINES_SUCCESS = "RECEIVE_GET_ALL_ROUTINES_SUCCESS"
export const RECEIVE_GET_ALL_ROUTINES_FAILURE = "RECEIVE_GET_ALL_ROUTINES_FAILURE"

export const ADD_EXERCISE = "ADD_EXERCISE"
export const CHANGE_TEXT = "CHANGE_TEXT"

function request_get_all_routines() {
    return {
        type: REQUEST_GET_ALL_ROUTINES,
    }
}
function receive_get_all_routines_success(routines) {
    return {
        type: RECEIVE_GET_ALL_ROUTINES_SUCCESS,
        routines
    }
}
function receive_get_all_routines_failure(error) {
    return {
        type: RECEIVE_GET_ALL_ROUTINES_FAILURE,
        error
    }
}
export function getAllRoutines() {
    return (dispatch) => {
        dispatch(request_get_all_routines());
        axios.get('http://192.168.0.15:3000/v1/routines')
            .then(function (res) {
                console.log(res)
                dispatch(receive_get_all_routines_success(res.data))
            })
            .catch(function(err){
                console.log(err)
                dispatch(receive_get_all_routines_failure(err))
            })
    }
}

function request_add_routine() {
    return {
        type: REQUEST_ADD_ROUTINE,
    }
}
function receive_add_routine_success(success) {
    return {
        type: RECEIVE_ADD_ROUTINE_SUCCESS,
        success
    }
}
function receive_add_routine_failure(error) {
    return {
        type: RECEIVE_ADD_ROUTINE_FAILURE,
        error
    }
}
export function addRoutine(name) {
    return (dispatch) => {
        Keyboard.dismiss()
        dispatch(request_add_routine());
        axios.post('http://192.168.0.15:3000/v1/addRoutine', { 'name': name })
            .then(function (res) {
                console.log(res)
                dispatch(receive_add_routine_success(res.data))
                dispatch(getAllRoutines())
            })
            .catch(function(err){
                console.log(err)
                dispatch(receive_add_routine_failure(err))
            })
    }
}

export function addExercise(name) {
    return {
        type: ADD_EXERCISE,
        name
    }
}

export function changeText(text) {
    return {
        type: CHANGE_TEXT,
        text
    }
}