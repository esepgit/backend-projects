const express = require('express')
const app = express()
const userRouter = require('./routes/user')
const port = process.env.PORT || 3000
require('./config')

// middlewares
app.use(express.json())
app.use('/api/users', userRouter)

app.get('/', (req, res) => {
  res.send('Wellcome to my API')
})

app.listen(port)
console.log('server on port', port)