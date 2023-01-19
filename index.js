const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('echo');
});

app.listen(3000, () => {
  console.log('listen on port 3000');
});