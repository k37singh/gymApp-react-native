import axios from 'axios'
import { Keyboard, ToastAndroid } from 'react-native';
import { create_exercise, get_exercises, delete_exercise } from './actionConstants'

function request_create_exercise() {
    return {
        type: create_exercise.REQUEST,
    }
}

function receive_create_exercise_success(exercise) {
    return {
        type: create_exercise.SUCCESS,
        exercise
    }
}

function receive_create_exercise_failure(err) {
    return {
        type: create_exercise.FAILURE,
        err
    }
}

export function createExercise(name, routineID) {
    return (dispatch) => {
        Keyboard.dismiss()
        dispatch(request_create_exercise());
        const data = {};
        data.name = name;
        data.routineID = routineID
        axios.post('/addExercise', data)
            .then(function (res) {
                console.log(res)
                dispatch(receive_create_exercise_success(res.data))
                dispatch(getExercises(res.data.routineID))
                ToastAndroid.show("'" + res.data.name + "'" + " routine CREATED successfully!", ToastAndroid.SHORT); 
            })
            .catch(function (err) {
                console.log(err)
                dispatch(receive_create_exercise_failure(err))
            })
    }
}

function request_get_exercises() {
    return {
        type: get_exercises.REQUEST,
    }
}

function receive_get_exercises_success(exercises) {
    return {
        type: get_exercises.SUCCESS,
        exercises
    }
}

function receive_get_exercises_failure(err) {
    return {
        type: get_exercises.FAILURE,
        err
    }
}

export function getExercises(routineID) {
    return (dispatch) => {
        dispatch(request_get_exercises());
        axios.get('/exercises?routineID=' + routineID)
            .then(function (res) {
                console.log(res)
                dispatch(receive_get_exercises_success(res.data))
            })
            .catch(function (err) {
                console.log(err)
                dispatch(receive_get_exercises_failure(err))
            })
    }
}

function request_delete_exercise() {
    return {
        type: delete_exercise.REQUEST
    }
}

function receive_delete_exercise_success(exercise) {
    return {
        type: delete_exercise.SUCCESS,
        exercise
    }
}

function receive_delete_exercise_failure(err) {
    return {
        type: delete_exercise.FAILURE,
        err
    }
}

export function deleteExercise(exerciseID) {
    return (dispatch) => {
        dispatch(request_delete_exercise())
        const data = {};
        data.exerciseID = exerciseID;
        axios.delete('/removeExercise', { 'data': data }).
            then(function (res) {
                console.log(res)
                dispatch(receive_delete_exercise_success(res.data))
                dispatch(getExercises(res.data.routineID))
                ToastAndroid.show("'" + res.data.name + "'" + " exercise DELETED successfully!", ToastAndroid.SHORT);                
            })
            .catch(function (err) {
                console.log(err)
                dispatch(receive_delete_exercise_failure(err))
            })
    }
}