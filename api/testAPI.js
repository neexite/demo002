const express = require('express');

const app = express();
app.use(express.json());


app.get('/api/getTestData', async (req, res) => {

  res.json({ test: 123, date: new Date().toISOString() })
});

module.exports = app