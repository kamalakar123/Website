import mongoose, { Schema } from 'mongoose'

const studentSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    qualification: {
        type: String
    },
    address: {
        type: String
    }
}, {
    timestamps: true
});

const model = mongoose.model('Students', studentSchema)

export default model