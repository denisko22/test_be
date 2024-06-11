const mongoose = require('mongoose')


const connectDB = async ()  =>{
    try {
        await mongoose.connect('CONN_STRING')
        .then(()=>{console.log("db is connected")})
    } catch (err) {
        console.log(`db error : ${err}`)
    }
}
module.exports = connectDB