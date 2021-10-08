
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const myrouter = require('./routes/routodo')
const app = express();
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cors());


dotenv.config();



const PORT = process.env.PORT || 4000;
mongoose.connect(process.env.mongoosedb, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => console.log(`server is running on port ${PORT}`)).catch(err => console.log(err))


app.use('/todos', myrouter)
app.get('/', (req, res) => {
  res.send('Welcome to server')
})


app.listen(PORT, () => {
  console.log("this is the port im using bet port")
})
