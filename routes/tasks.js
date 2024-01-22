const express=require("express")
const router=express.Router()

const {getAllTasks,getTasks,deleteTasks,updateTask, createTasks}=require('../controllers/tasks')
const { get } = require("mongoose")

router.post('/',createTasks)
router.get('/',getAllTasks)
router.get('/:id',getTasks)
router.patch('/:id',updateTask)
router.delete('/:id',deleteTasks)
module.exports=router