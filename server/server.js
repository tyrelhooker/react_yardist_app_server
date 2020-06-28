const express = require('express');
// const url = require('url');
// const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

require('dotenv').config();


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));


// const router = express.router();

// middleware

// app.use(cors());
// app.use(bodyParser.json());

app.listen(process.env.PORT, () => console.log(`Server is listening on port: ${process.env.PORT}`));

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.get('/api/test', (req, res) => {
  // TODO: Remove hardcoded value 'weeping+willow' from URL. only hardcoded to make sure that my search is triggering an API call.
  const testPlantName = 'weeping+willow'
  // TODO: Figure out how to send a variable saving user input to the server
  const testUrl = `https://trefle.io/api/plants?q=${testPlantName}&token=${process.env.TOKEN}`;

  fetch(testUrl)
  .then(response => response.json())
  .then(result => res.json(result))
  .then(() => console.log('response sent'))
  .catch(error => {
    console.log(error);
  })
})


