const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ghanshyam:Mongodb5$@cluster0.xqvz2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/nodedata',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => { console.log('connected'); })