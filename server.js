const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const postsRoutes = require('./routes/posts');
const db = require('./connection/connection')
const PORT = process.env.PORT || 3000

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send("This is root!");
});

app.use('/api', postsRoutes);

db.on('error', console.error.bind(console, "MongoDB connection error:"))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))