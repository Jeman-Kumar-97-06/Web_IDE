require('dotenv').config();
const cors = require('cors');
const exp  = require('express');
const mong = require('mongoose');
const app  = exp();

app.use(exp.json());
app.use(cors());

mong.connect(process.env.MONGOURL).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("connected to db and listening to requests");
    }).catch(err=>{console.log(err)});
})