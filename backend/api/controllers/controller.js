import mongoose from 'mongoose';
import { Routine, Exercise, Log } from './../models/model';

export function get_routines(req, res) {
    Routine.find({}, function (err, routines) {
        if (err)
            res.send(err);
        res.json(routines);
    });
};

export function create_routine(req, res) {
    var new_routine = new Routine(req.body);
    new_routine.save(function (err, routine) {
        if (err)
            res.send(err);
        res.json(routine);
    });
};

export function delete_routine(req, res) {
    Routine.findByIdAndRemove(req.body.routineID, function (err, routine) {
        if (err) {
            res.send(err)
        }
        Exercise.find({routineID:routine._id}).remove().exec();
        Log.find({routineID:routine._id}).remove().exec();
        res.json(routine)
    });
}

export function get_exercises(req, res) {
    console.log(req)
    Exercise.find({ routineID: req.query.routineID }, function (err, exercises) {
        if (err)
            res.send(err);
        res.json(exercises);
    });
};

export function create_exercise(req, res) {
    var new_exercise = new Exercise(req.body);
    new_exercise.save(function (err, exercise) {
        if (err)
            res.send(err);
        res.json(exercise);
    });
}

export function delete_exercise(req, res) {
    Exercise.findByIdAndRemove(req.body.exerciseID, function (err, exercise) {
        if (err) {
            res.send(err)
        }
        Log.find({exerciseID:exercise._id}).remove().exec();        
        res.json(exercise)
    });
}

export function get_logs(req, res) {
    Log.find({
        exerciseID: req.query.exerciseID
    }, function (err, logs) {
        if (err)
            res.send(err);
        res.json(logs);
    });
};

export function create_log(req, res) {
    var new_log = new Log(req.body);
    new_log.save(function (err, log) {
        if (err) {
            res.send(err)
        }
        res.json(log)
    })
}

export function delete_log(req, res) {
    Log.findByIdAndRemove(req.body.id, function (err, log) {
        if (err) {
            res.send(err)
        }
        res.json(log)
    });
}