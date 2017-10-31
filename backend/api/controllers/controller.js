import mongoose from 'mongoose';
import Routine from './../models/model';

export function create_a_routine(req, res) {
    var new_routine = new Routine(req.body);
    new_routine.save(function (err, routine) {
        if (err)
            res.send(err);
        res.json(routine);
    });
};

export function get_all_routines(req, res) {
    Routine.find({}, function (err, routines) {
        if (err)
            res.send(err);
        res.json(routines);
    });
};

function f(a) {
    return new Promise(resolve=>{
        Routine.find({},function(err,res){     
            resolve(res);
        })
    })
}

export async function create_an_exercise(req, res) {
    // Routine.update(
    //     { name: "Gau" },
    //     { $push: { exercises: req.body } },
    //     function (err, routine) {
    //         console.log("yellow!!!!!!!!!")
    //         Routine.find({}, function (err, rest) { res.json(rest) })
    //         console.log("blue!!!!!!!!!!!!")
    //         if (err)
    //             res.send(err);
    //     }
    // );

    //res.json("asds")

    var a = await f()
    console.log(a)
    res.json(a)

}