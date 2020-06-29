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

app.get('/api/plantName/:plantNameInput', (req, res) => {
  // Trims and saves the trailing param from client side, which is the user's plant name search variable. 
  let plantName = req.params.plantNameInput.trim();
  
  // Constructs the api url from user's plant name search and hidden api token
  const trefleUrl = `https://trefle.io/api/plants?q=${plantName}&token=${process.env.TOKEN}`;

  fetch(trefleUrl)
  .then(response => response.json())
  .then(result => res.json(result))
  .then(() => console.log('response sent'))
  .catch(error => {
    console.log(error);
  })
})


