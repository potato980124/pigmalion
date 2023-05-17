let app = require('../app');
let PORT = 5900;

app.listen(process.env.PORT || PORT, () => {
  console.log(`${PORT}로 express 실행`);
  console.log(`http://localhost:${PORT}`);
})