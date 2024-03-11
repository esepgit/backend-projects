const express = require('express')
const app = express()
const userRouter = require('./routes/user')
const port = process.env.PORT || 3000
require('./config')
const path = require('path')

// swagger
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerSpec = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node MongoDB API',
      version: '1.0.0'
    },
    servers: [
      {
        url: 'http://localhost:3000'
      }
    ]
  },
  apis: [`${path.join(__dirname, './routes/*.js')}`]
}

// middlewares
app.use(express.json())
app.use('/api/users', userRouter)
app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))

app.get('/', (req, res) => {
  res.send('Wellcome to my API')
})

app.listen(port)
console.log('server on port', port)