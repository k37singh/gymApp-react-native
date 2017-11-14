import axios from 'axios'
import { Keyboard, ToastAndroid } from 'react-native';
import { create_routine, get_routines, delete_routine } from './actionConstants'

function request_create_routine() {
    return {
        type: create_routine.REQUEST,
    }
}

function receive_create_routine_success(routine) {
    return {
        type: create_routine.SUCCESS,
        routine
    }
}

function receive_create_routine_failure(err) {
    return {
        type: create_routine.FAILURE,
        err
    }
}

export function createRoutine(name) {
    return (dispatch) => {
        Keyboard.dismiss()
        dispatch(request_create_routine());
        const data = {};
        data.name = name;
        axios.post('/addRoutine', data)
            .then(function (res) {
                console.log(res)
                dispatch(receive_create_routine_success(res.data))
                dispatch(getRoutines())
                ToastAndroid.show("'" + res.data.name + "'" + " routine CREATED successfully!", ToastAndroid.SHORT);
            })
            .catch(function (err) {
                console.log(err)
                dispatch(receive_create_routine_failure(err))
            })
    }
}

function request_get_routines() {
    return {
        type: get_routines.REQUEST,
    }
}

function receive_get_routines_success(routines) {
    return {
        type: get_routines.SUCCESS,
        routines
    }
}

function receive_get_routines_failure(err) {
    return {
        type: get_routines.FAILURE,
        err
    }
}

export function getRoutines() {
    return (dispatch) => {
        dispatch(request_get_routines());
        axios.get('/routines')
            .then(function (res) {
                console.log(res)
                dispatch(receive_get_routines_success(res.data))
            })
            .catch(function (err) {
                console.log(err)
                dispatch(receive_get_routines_failure(err))
            })
    }
}

function request_delete_routine() {
    return {
        type: delete_routine.REQUEST
    }
}

function receive_delete_routine_success(routine) {
    return {
        type: delete_routine.SUCCESS,
        routine
    }
}

function receive_delete_routine_failure(err) {
    return {
        type: delete_routine.FAILURE,
        err
    }
}

export function deleteRoutine(routineID) {
    return (dispatch) => {
        dispatch(request_delete_routine())
        const data = {};
        data.routineID = routineID;
        axios.delete('/removeRoutine', { 'data': data }).
            then(function (res) {
                console.log(res)
                dispatch(receive_delete_routine_success(res.data))
                dispatch(getRoutines())
                ToastAndroid.show("'" + res.data.name + "'" + " routine DELETED successfully!", ToastAndroid.SHORT);
            })
            .catch(function (err) {
                console.log(err)
                dispatch(receive_delete_routines_failure(err))
            })
    }
}