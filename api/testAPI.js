import { v4 as uuidv4 } from 'uuid';


const express = require('express');

const cookiesMiddleware = require('universal-cookie-express');




const app = express();
app
  .use(cookiesMiddleware())
  .use(express.json());


app.get('/api/getTestData', async (req, res) => {
  res.cookie("testCookie",  new Date().toISOString())
  console.log(res);
  res.json({ test: 123, date: new Date().toISOString(), uuidv4: uuidv4() })
  
});

module.exports = app