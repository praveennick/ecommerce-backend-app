var express = require('express');

var app = express();

var Config= require('./configs/app.config')
var DB= require('./configs/db.config');
var userRouter= require('./routes/user.route')

app.use(express.json());
app.use('/user',userRouter);

DB.connect();

app.listen(Config.config.PORT,function(){
    console.log("Server Started! on port-no:"+Config.config.PORT);
})