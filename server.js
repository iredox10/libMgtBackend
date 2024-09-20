import express from 'express'
import mongoose from 'mongoose'
import route from './routes/routes.js'
import cors from 'cors'
const app= express()


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors('*'))
app.use(route)

const mongooseConnect = await mongoose.connect('mongodb+srv://idreesadam200:iredox@cluster0.jcxb8on.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')


// const mongooseConnect = await mongoose.connect('mongodb://localhost/libMgt')


app.listen(4000, () => console.log('connected to saver'))