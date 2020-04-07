const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser')
const route = require('./src/routers/index.js');
const cors = require('cors');
const logger = require('morgan')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(logger('dev'))
app.use('/api/v1/',route);
app.use('/uploads', express.static('./uploads'));
app.listen(port, ()=>{
  console.log(`App Listen post ${port}`);
})
