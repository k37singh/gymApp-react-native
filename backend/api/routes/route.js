import express, { Router } from 'express';
import { create_a_routine, get_all_routines, create_an_exercise } from './../controllers/controller';

const router = Router();

router.route('/addRoutine').post(create_a_routine)
router.route('/routines').get(get_all_routines)
router.route('/addExercise').post(create_an_exercise)

export default router;