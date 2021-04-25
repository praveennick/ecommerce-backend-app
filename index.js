var express = require('express');
var cors= require('cors');

const PORT = process.env.PORT || 9478;

var app = express();

var Config= require('./configs/app.config');
var DB= require('./configs/db.config');
var userRouter= require('./routes/user.route');
var productRouter= require('./routes/product.route');

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  
app.use('/user',userRouter);
app.use('/admin',productRouter);

app.get('/',(req,res)=>{
    res.send("Welcome to Ecommerce Backend Application");
    
})

DB.connect();

// app.listen(Config.config.PORT,function(){
//     console.log("Server Started! on port-no:"+Config.config.PORT);
// })
app.listen(PORT,function(){
    console.log("Server Started! on port-no:");
})