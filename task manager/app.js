const express = require('express');
const app =express();
const connectDB = require('./db/connect');
const bp = require('body-parser');
const tasks = require('./routes/tasks');
require('dotenv').config();


app.use(bp.json())
app.use(bp.urlencoded({ extended: true }));
app.use('/task-manager/api', tasks)

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen( 3000, () => console.log('port is running'))

    }catch(err){
        console.log(err);
    }
}
start()