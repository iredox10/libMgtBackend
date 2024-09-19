import mongoose from 'mongoose'

const semester = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    desc:String,
    img: String,
    books: Array
})

const Semester = new mongoose.model('semester',semester)

export default Semester