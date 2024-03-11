import express from 'express'
import mysql from 'mysql'
import myconn from 'express-myconnection'
import dbOption from './config/db.js'
import indexRouter from './routes/index.route.js'

const app = express()

app.set('PORT', process.env.PORT || 3000)

app.use(myconn(mysql, dbOption, 'single'))
app.use(express.json())

// routes
app.use('/', indexRouter)
app.use('*', (req, res) => {
  res.send('not found')
})


app.listen(app.get('PORT'))
console.log('server on port', app.get('PORT'))