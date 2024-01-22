const Task=require('../models/task')

const createTasks=async(req,res)=>{
    try{    
       const task=await Task.create(req.body)
       res.status(201).json({task})
    }catch(error) {
        res.status(500).json({msg:error})
    }

    }

const getTasks=async(req,res)=>{
    try {
        const {id:taskID}=req.params
        const task=await Task.findOne({_id:taskID})
        if(!task){
        return res.status(404).json({msg:`the task with the id doesn't exist${taskID}`})
        }
        res.status(200).json({status:"success",data:{tasks}})
    } catch (error) {
        res.status(500).json({msg:error})  
    }
}
const getAllTasks=async(req,res)=>{
    try{
        const tasks=await Task.find({})
        res.status(500).json({success:true,task})
    }catch{
        res.status(500).json({msg:error})
    }
}

const updateTask = async(req,res) =>{
    try {
        const {id:taskID}=req.params
        const task=await Task.findOneAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators: true
        })
        if(!task){
        return res.status(404).json({msg:`the task with the id doesn't exist${taskID}`})
        }
        res.status(200).json({task})
        
    } catch (error) {
        res.status(500).json({msg:error})
        
    }
    
}

const deleteTasks=async(req,res)=>{
    try {
        const {id:taskID}=req.params
        const task=await Task.findOneAndDelete({_id:taskID})
        if(!task){
        return res.status(404).json({msg:`the task with the id doesn't exist${taskID}`})
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg:error})  
    }
    
}

module.exports={
    getAllTasks,
    createTasks,getTasks,
    deleteTasks,
    updateTask
}