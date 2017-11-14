import axios from 'axios'
import { Keyboard, ToastAndroid } from 'react-native';
import { create_log, get_logs, delete_log, SET_REPS, SET_WEIGHT } from './actionConstants'

function request_create_log() {
    return {
        type: create_log.REQUEST,
    }
}

function receive_create_log_success(log) {
    return {
        type: create_log.SUCCESS,
        log
    }
}

function receive_create_log_failure(err) {
    return {
        type: create_log.FAILURE,
        err
    }
}

export function createLog(exercise, weight, reps) {
    return (dispatch) => {
        Keyboard.dismiss()
        dispatch(request_create_log());
        const data = {};
        data.exerciseID = exercise._id;
        data.routineID = exercise.routineID;
        data.weight = weight;
        data.reps = reps;
        axios.post('/addLog', data)
            .then(function (res) {
                console.log(res)
                dispatch(receive_create_log_success(res.data))
                dispatch(getLogs(res.data.exerciseID))
                ToastAndroid.show("Weight: " + res.data.weight + " lbs Reps: " + res.data.reps + " LOGGED!", ToastAndroid.SHORT);
            })
            .catch(function (err) {
                console.log(err)
                dispatch(receive_create_log_failure(err))
            })
    }
}

function request_get_logs() {
    return {
        type: get_logs.REQUEST,
    }
}

function receive_get_logs_success(logs) {
    return {
        type: get_logs.SUCCESS,
        logs
    }
}

function receive_get_logs_failure(err) {
    return {
        type: get_logs.FAILURE,
        err
    }
}

export function getLogs(exerciseID) {
    return (dispatch) => {
        dispatch(request_get_logs());
        axios.get('/logs?exerciseID=' + exerciseID)
            .then(function (res) {
                console.log(res)
                dispatch(receive_get_logs_success(res.data))
            })
            .catch(function (err) {
                console.log(err)
                dispatch(receive_get_logs_failure(err))
            })
    }
}

function request_delete_log() {
    return {
        type: delete_log.REQUEST
    }
}

function receive_delete_log_success(log) {
    return {
        type: delete_log.SUCCESS,
        log
    }
}

function receive_delete_log_failure(err) {
    return {
        type: delete_log.FAILURE,
        err
    }
}

export function deleteLog(logID) {
    return (dispatch) => {
        dispatch(request_delete_log())
        const data = {};
        data.logID = logID;
        axios.delete('/removeLog', { 'data': data }).
            then(function (res) {
                console.log(res)
                dispatch(receive_delete_log_success(res.data))
                dispatch(getLogs(res.data.exerciseID))
                ToastAndroid.show("Log DELETED successfully!", ToastAndroid.SHORT);
            })
            .catch(function (err) {
                console.log(err)
                dispatch(receive_delete_log_failure(err))
            })
    }
}

export function setWeight(weight){
    return {
        type: SET_WEIGHT,
        weight
    }
}

export function setReps(reps){
    return {
        type: SET_REPS,
        reps
    }
}