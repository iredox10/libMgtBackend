import User from '../models/user.js'
import Department from '../models/department.js'
import Semester from '../models/semester.js'
import book from '../models/book.js'
import Book from '../models/book.js'

export const register = async (req,res)=>{
 try {
    const user = await User.create(req.body)
    res.status(200).json(user)
 } catch (err) {
      res.status(301).json(err.message) 
 }
}

export const login = async (req,res) =>{
   try {
      const user = await User.findOne({username: req.body.username})
      if(!user){
         return res.status(404).json('username not correct')
      }
      if(req.body.password !== user.password){
         return res.status(404).json('password not correct')
      }
      res.status(200).json(user)
   } catch (err) {
    res.status(404).json(err.message)  
   }
}

export const add_department = async (req,res)=>{
 try {
    const department = await Department.create(req.body)
    res.status(200).json(department)
 } catch (err) {
      res.status(400).json(err.message) 
 }
}


export const get_department = async (req,res) =>{
   try{
      const deparment = await Department.findById(req.params.id)
      res.status(200).json(department)
   }catch(err){
      res.status(404).json(err.message)
   }
}

export const get_departments = async (req,res) =>{
   try{
      const departments = await Department.find()
      res.status(200).json(departments)
   }catch(err){
      res.status(404).json(err.message)
   }
}

export const add_semester = async (req,res)=>{
 try {
    const semester = await Semester.create(req.body)
    const department = await Department.findOne({_id: req.params.id})
    department.semesters.push(semester)
   await department.save()
    res.status(200).json({semester, department})
 } catch (err) {
      res.status(400).json(err.message) 
 }
}

export const get_semesters = async (req,res) =>{
   try{
      const department = await Department.findById(req.params.id)
      res.status(200).json({semesters: department.semesters})
   }catch(err){
      res.status(404).json(err.message)
   }
}

export const get_semester = async (req,res) =>{
   try{
      const semester = await Department.find({_id: req.params.id}).populate('semesters')
      res.status(200).json(semester)
   }catch(err){
      res.status(404).json(err.message)
   }
}
export const add_book = async (req,res)=>{
 try {
    const book = await Book.create(req.body)
    const semester = await Semester.findOne({_id: req.params.id})
    semester.books.push(book)
   await semester.save()
    res.status(200).json({semester, book})
 } catch (err) {
      res.status(301).json(err.message) 
 }
}

export const get_books = async (req,res) =>{
   try {
      const semester = await Semester.findById(req.params.id)
      console.log(semester)
      res.status(200).json({books: semester.books})
   } catch (err) {
     res.status(404).json(err.message) 
   }
}

export const get_book = async (req,res) =>{
   try {
      const book = await Book.findById(req.params.id)
      res.status(200).json(book)
   } catch (err) {
     res.status(404).json(err.message) 
   }
}


