var express = require('express');

var userController =  require('../controllers/user.controller');

var userRouter=express.Router();

//http://localhost:9478/user/register
userRouter.post('/register',userController.registerUser);

//http://localhost:9478/user/login
userRouter.post('/login',userController.loginUser);

userRouter.post('changePassword',);

module.exports=userRouter;