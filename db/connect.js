const mongoose = require('mongoose')

const connectionString = 
    'mongodb+srv://fico:B2Jp9PsAUlw4MD2a@projects.8gcu2tj.mongodb.net/products?retryWrites=true&w=majority'

const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB