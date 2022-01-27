const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    
    await mongoose.connect(process.env.MONGODB_URI)

  } catch (error) {
    
    console.log(error)
    return `There was a problem connecting to the database. Please check the server status and try again.`
  }
}

module.exports = connectDB
