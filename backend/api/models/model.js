import mongoose, { Schema } from 'mongoose';

var logSchema = new Schema({
    reps: {
        type: Number,
        required: true                
    },
    weight: {
        type: Number,
        required: true                
    },
    date: {
        type: Date,
        default: Date.now()
    },
    exerciseID: {
        type: Schema.Types.ObjectId,
        required: true
    },
    routineID: {
        type: Schema.Types.ObjectId,
        required: true        
    },
    user: {
        type: String,
        default: 'sammy'
    },
})

var exerciseSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true        
    },
    date: {
        type: Date,
        default: Date.now()
    },
    routineID: {
        type: Schema.Types.ObjectId,
        required: true
    },
    user: {
        type: String,
        default: 'sammyjjjjjj'
    }
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
        default: 'sammymmmmmmmeringferin'
    }
});

// Export Mongoose model
export var Routine =  mongoose.model('routine', routineSchema);
export var Exercise =  mongoose.model('exercise', exerciseSchema);
export var Log =  mongoose.model('log', logSchema);