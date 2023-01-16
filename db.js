var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'pigmalion',
  multipleStatements: true
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
//회원가입 정보 조인테이블에 넣어주는 함수  
function insertJoinData(id,pw,rpw,sex,name,birth,cWeight,tWeight,callback) {
    connection.query(`insert into jointable(create_time,id,pw,rpw,sex,name,birth,cWeight,tWeight)values(now(),'${id}','${pw}','${rpw}','${sex}','${name}','${birth}','${cWeight}','${tWeight}')`, (err) => {
        if (err) throw err;
        callback();
    })
}
//로그인 성공여부 함수
function loginCheck(id,pw,callback) {
    connection.query(`select * from jointable where id = '${id}' and pw ='${pw}'`, (err, results) => {
        if (err) throw err;
        callback(results);
    }) 
}



module.exports = 
{
    insertJoinData,
    loginCheck,

};