let app = require('../app');
let port = process.env.PORT || 6200;

app.listen(port, () => {
  console.log(`${port}로 express 실행`);
  console.log(`http://localhost:${port}`);
})