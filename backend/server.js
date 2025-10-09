require('dotenv').config();
const cors = require('cors');
const exp  = require('express');
const mong = require('mongoose');
const app  = exp();

app.use(exp.json());
app.use(cors());

const uRts = require('./routes/users');
const mRts = require('./routes');

mong.connect(process.env.MONGOURL).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("connected to db and listening to requests");
    d}).catch(err=>{console.log(err)});
})