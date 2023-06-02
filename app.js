//npm 으로 설치한 애들 연결하기
const express = require('express');
const cookieParser = require('cookie-parser');
const routers = require('./routes/route'); //라우트스 파일에있는 라우트를 불러오겠다.
const app = express();
const path = require('path');
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const FileStore = require("session-file-store")(session); // 세션을 파일에 저장
const bodyParser = require('body-parser');
const expressLayout = require('express-ejs-layouts');
const config = {
  host: 'database-1.ckqtywedccws.ap-northeast-1.rds.amazonaws.com',
  port: process.env.DB_PORT || 3306,
  user: 'admin',
  password: 'ghdqjawls12',
  database: 'pigmalion',
};
app.use(
  session({
    secret: 'blackzat', // 데이터를 암호화 하기 위해 필요한 옵션
    resave: false, // 요청이 왔을때 세션을 수정하지 않더라도 다시 저장소에 저장되도록
    saveUninitialized: true, // 세션이 필요하면 세션을 실행시칸다(서버에 부담을 줄이기 위해)
    store: new MySQLStore(config),
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // 24시간
      path: '/',
      httpOnly: true,
      secure: true,
    },
  })
);
app.use(express.static(path.join(__dirname, 'public'))); // 익스프레스 안의 스태틱을 사용하는거다 그냥 스태틱이 아님, 얘는 경로를 일일히 세팅 하게 않하려고 써주는것 여기서 경로를 지정 해주는것
//스태틱은 정적인 애들 css html을 읽어주는 것 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.set('views', path.join(__dirname, 'views')); //ejs 쓸 때 쓰면 된다.
app.set('view engine', 'ejs'); //ejs 쓸 때 쓰면 된다.
app.use(expressLayout);
app.use('/', routers);


module.exports = app; //app이라는 이름으로 묘둘화 시켜서 내보내겠다.