const express = require('express');

const app = express();

const PORT = 8001;

app.get('/', (req, res) => {
  res.send('Hello Worls');
});

app.listen(PORT, () => {
  console.log(`service run on ${PORT}`);
});
