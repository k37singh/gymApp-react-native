import express, { Router } from 'express';
import {
    get_routines,
    create_routine, 
    delete_routine,
    get_exercises,
    create_exercise,
    delete_exercise,
    get_logs,
    create_log,
    delete_log
} from './../controllers/controller';

const router = Router();

router.route('/routines').get(get_routines)
router.route('/addRoutine').post(create_routine)
router.route('/removeRoutine').delete(delete_routine)

router.route('/exercises').get(get_exercises)
router.route('/addExercise').post(create_exercise)
router.route('/removeExercise').delete(delete_exercise)

router.route('/logs').get(get_logs)
router.route('/addLog').post(create_log)
router.route('/removeLog').delete(delete_log)

export default router;