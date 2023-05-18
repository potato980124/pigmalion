let app = require('../app');
let PORT = process.env.PORT || 5900;

app.listen(PORT, () => {
  console.log(`${PORT}로 express 실행`);
  console.log(`http://localhost:${PORT}`);
})