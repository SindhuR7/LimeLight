const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.Mongo_URL)
        console.log(`Database Connected Successfully ${conn.connection.host}`)
    } catch (error) {
        console.log("Database not connected", error.message)
    }
}

module.exports = connectDB