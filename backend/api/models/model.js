import mongoose, { Schema } from 'mongoose';

var logSchema = new Schema({
    reps: {
        type: Number
    },
    weight: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

var exerciseSchema = new Schema({
    name: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now()
    },
    log: [logSchema]
})

var routineSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    user: {
        type: String,
        default: 'sammy'
    },
    exercises: [exerciseSchema]
});

// Export Mongoose model
export default mongoose.model('routine', routineSchema);