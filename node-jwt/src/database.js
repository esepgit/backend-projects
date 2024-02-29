const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/simplejwt')
.then(db => console.log('Database is connected'))