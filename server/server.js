const express = require('express');
// const url = require('url');
// const cors = require('cors');
// const bodyParser = require('body-parser');
const fetch = require('node-fetch');




const app = express();
require('dotenv').config();

// const router = express.router();

// middleware

// app.use(cors());
// app.use(bodyParser.json());

app.listen(process.env.PORT, () => console.log(`Server is listening on port: ${process.env.PORT}`));

app.get('/api/test', (req, res) => {
  const testUrl = `https://trefle.io/api/plants/177444?token=${process.env.TOKEN}`;
  fetch(testUrl)
  .then(response => response.json())
  .then(result => res.json(result))
  .catch(error => {
    console.log(error);
  })
})


