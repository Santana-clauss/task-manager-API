const mongoose = require('mongoose');

// Declare the Schema of the Mongo model
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        index: true,
        trim:true,
        
    },
    completed: { 
        type: Boolean,
        required: true,
        default:false
    },
});

// Export the model with the same name as the schema
module.exports = mongoose.model('Task', TaskSchema);
