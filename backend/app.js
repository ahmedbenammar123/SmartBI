///**************Inportation des module **************************/
//import express module
const express = require('express');
//inport bady-parser module/
const bodyParser = require('body-parser');
//inport mongoose module/install
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
//inport bcrypt module/install
const bcrypt = require('bcrypt');
//inport multer module//img/install
const multer = require('multer');
//inport path module
const path = require('path');
//inport axios//weather
const axios = require('axios');
// team api
var request = require('request');
// L'importation du token
const jwt = require("jsonwebtoken");
//impoet objectId
const { ObjectId } = require("mongodb");
//connect app to juilletDB
mongoose.connect('mongodb://localhost:27017/SmartBI');
///**************Creation de l'application **************************/
// create express application
const app = express();
///**************Configuration de l'application **************************/
//configure app by BodyParser to send Response (json)
app.use(bodyParser.json());
//configure app by BodyParser to parse object 
app.use(bodyParser.urlencoded({ extended: true }))
// Security Configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});
//images path configuration
app.use('/images', express.static(path.join('backend/images')))
//mine types {only images}/fourma de ficher typle de media
const MIME_TYPE = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg',
  'image/svg': 'svg',

}
// destination de image
const storage = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null
    }
    cb(null, 'backend/images')
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + '-' + Date.now() + '-SmartBI-' + '.' +
      extension;
    cb(null, imgName);
  }
});
///**************Inportation des modules **************************/
const User = require("./models/user");
///**************Exportation de l'application **************************/
///////////////////////signup//////////////////////////////////////////////
/////////////////users entreprise //////////////////////////////////////////////
app.post("/users/signup", multer({ storage: storage }).single('img'), (req, res) => {
    console.log("here into add", req.body);
    bcrypt.hash(req.body.pwd, 10).then((cryptedPwd) => {
      const url = req.protocol + '://' + req.get('host');
      console.log('here file, ', req.file);
      let user = new User({
        name: req.body.name,
        address: req.body.address,
        tel: req.body.tel,
        email: req.body.email,
        pwd: cryptedPwd,
        category:req.body.category,
        country: req.body.country,
        role: req.body.role,
        avatar: url + "/images/" + req.file.filename
      });
      user.save((err, doc) => {
        if (err) {
          res.json({ message: "Email exsist" });
        }
        else {
          res.json({ message: "user added with succes" });
        }
      })
    })
  });
  
// app imprtable form another files 
module.exports = app;