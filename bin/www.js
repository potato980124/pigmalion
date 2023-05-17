let app = require('../server');
let PORT = process.env.PORT || 6200;

app.listen(PORT, () => {
  console.log(`${PORT}로 express 실행`);
  console.log(`http://localhost:${PORT}`);
})