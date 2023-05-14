const mongoose = require('mongoose')

const connectionString = 
    'mongodb+srv://fico:ILq1fvzF8XwfOnKQ@projects.8gcu2tj.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(connectionString, {
        useNewUrlParser: true
    })
    .then(() => console.log('CONNECTED TO THE DB...'))
    .catch((err) => console.log(err))