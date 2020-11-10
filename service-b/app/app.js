const express = require('express')
const app = express()
const port = 3001

app.get('/rate', (req, res) => { 
  res.redirect('http://service-a.fj9.com:3000/rate');
});

app.get('/', (req, res) => { 
  res.send('Nothing Here');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
