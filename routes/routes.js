import express from 'express'
import * as controller from '../controllers/controllers.js'

const route = express.Router()

route.post('/register',controller.register)

route.post('/login',controller.login)

route.post('/add-department',controller.add_department)

route.get('/get-department/:id',controller.get_department)

route.get('/get-departments',controller.get_departments)

route.post('/add-semester/:id',controller.add_semester)

route.get('/get-semester/:id',controller.get_semester)

route.get('/get-semesters/:id',controller.get_semesters)

route.post('/add-book/:id',controller.add_book)

route.get('/get-books/:id',controller.get_books)


export default route