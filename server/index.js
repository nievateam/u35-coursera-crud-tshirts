const express = require('express')
const app = express()
const cors = require('cors')

const shirtRouter = require('./routes/shirt')

const connectDB = require('./config/db')

require('dotenv').config()

connectDB()

const PORT = process.env.PORT || 3005

app.use(cors())
app.use(express.json())

app.use('/shirt', shirtRouter)

app.get('/', function (req, res) {
  res.send(`Server is up and running.`)
})

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})
