const express = require('express');
const app = express();
const port = process.env.PORT || 3005;
const connectDB = require('./db/connect');
const notFound=require("./middlewares/auth")
require('dotenv').config();

const dbConnect= async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        console.log("Connected to the database successfully...");
    } catch (error) {
        console.log(error);
    }
};

dbConnect(); 
const tasks = require('./routes/tasks');

// Middlewares
app.use(express.static("./public"))
app.use(express.json());

// Routes
app.use("/api/tasks", tasks);
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
