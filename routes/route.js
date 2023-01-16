const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const db = require('./../db.js');
const session = require('express-session');
const crypto = require('crypto');
const FileStore = require('session-file-store')(session); // 세션을 파일에 저장
const cookieParser = require('cookie-parser');


// 세션 (미들웨어) 6
router.use(session({
    secret: 'blackzat', // 데이터를 암호화 하기 위해 필요한 옵션
    resave: false, // 요청이 왔을때 세션을 수정하지 않더라도 다시 저장소에 저장되도록
    saveUninitialized: true, // 세션이 필요하면 세션을 실행시칸다(서버에 부담을 줄이기 위해)
    store : new FileStore() // 세션이 데이터를 저장하는 곳
}));


router.get('/', (req, res) => {
    if(req.session.is_logined == true){
        res.render('main',{
            is_logined : req.session.is_logined,
        });
    }else{
        res.render('main',{
            is_logined : false
        });
    }   
})

router.get('/login', (req, res) => {
     if(req.session.is_logined == true){
        res.render('login',{
            is_logined: req.session.is_logined,
        });
    }else{
        res.render('login',{
            is_logined : false
        });
    }
})
router.get('/logout', (req, res) => {
    req.session.destroy(function (err) {
        res.redirect('/');
    });
})
router.get('/join', (req, res) => {
    if(req.session.is_logined == true){
        res.render('join',{
            is_logined : req.session.is_logined,
        });
    }else{
        res.render('join',{
            is_logined : false
        });
    }
})
router.post('/joinInfo', (req, res) => {
    let param = JSON.parse(JSON.stringify(req.body));
    let pw = param['pw'];
    let id = param['id'];
    let rpw = param['rpw'];
    let sex = param['sex'];
    let name = param['name'];
    let birth = param['birth'];
    let cWeight = param['cWeight'];
    let tWeight = param['tWeight'];
    db.insertJoinData(id, pw, rpw, sex, name, birth, cWeight, tWeight, () => {
        res.redirect('/login');
    })
})
// 로그인 체크
router.post('/loginCheck', (req, res) => {
    let param = JSON.parse(JSON.stringify(req.body));
    let id = param["id"];
    let pw = param["pw"];
    db.loginCheck(id, pw, (results) => {
        console.log(results[0].cWeight);
        if (results.length > 0) {
            req.session.is_logined = true;
            req.session.id = results[0].id;
            req.session.pw = results[0].pw;
            req.session.cWeight = results[0].cWeight;
            req.session.tWeight = results[0].tWeight;
            res.redirect('/');
        } else {
            res.send(`<script>alert('로그인 정보가 일치하지 않습니다.'); document.location.href='/login';</script>`)
        }
    })
})


//칼로리 달력 페이지 
router.get('/calendar', (req, res) => {
    console.log(req.session.is_logined);
    if(req.session.is_logined == true){
        res.render('calendar',{
            is_logined : req.session.is_logined,
            cWeight : req.session.cWeight,
            tWeight : req.session.tWeight
        });
    }else{
        res.send(`<script>alert('로그인이 필요한 서비스입니다.'); document.location.href='/login';</script>`)
    }
})
module.exports = router;