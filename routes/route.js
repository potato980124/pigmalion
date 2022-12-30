const { json } = require('body-parser');
const express = require('express');
const fs = require('fs');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const db = require('./../db.js');


router.get('/',(req,res)=>{
    res.render('main');
})

module.exports = router;