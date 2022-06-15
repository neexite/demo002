import { v4 as uuidv4 } from 'uuid';


const express = require('express');


const app = express();
app.use(express.json());


app.get('/api/getTestData', async (req, res) => {

  res.json({ test: 123, date: new Date().toISOString(), uuidv4: uuidv4() })
});

module.exports = app