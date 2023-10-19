const express = require('express');
const cors = require('cors')
const mongoose = require("mongoose");
const User = require('../api/models/User')

//for pw encryption refer to bcrypt documentation
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);;
const app = express()

app.use(cors());
app.use(express.json())

mongoose.connect('mongodb+srv://isratnowshinbd:USNekL40Sp19xKDl@cluster0.kdwyiyj.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp');

app.post('/register', async(req, res) =>{
    const {username, password} = req.body;
    try {
        const userDoc = await User.create({username, password: bcrypt.hashSync(password, salt)});
        //this line shows the username and password given
        //res.json({requestData:{username, password}});
        res.json(userDoc);

        //console.log(e) gives us the details of the exception
    } catch (e){
        res.status(400).json(e)
    }
});
//
app.listen(4000);