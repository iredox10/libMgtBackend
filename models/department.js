import mongoose from 'mongoose'

const department = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
    },
    semesters: Array
})

const Department =new mongoose.model('department',department)

export default Department