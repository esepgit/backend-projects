import express from "express";
import morgan from 'morgan'
import pkg from '../package.json' assert { type: "json" }
import { createRoles } from "./libs/initialSetup.js";

const app = express();
createRoles()

import productsRouter from './routes/products.routes.js'
import authRouter from './routes/auth.routes.js'

app.set('pkg', pkg)

app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    name: app.get('pkg').name,
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version
  })
})

app.use('/api/products', productsRouter)
app.use('/api/auth', authRouter)

export default app
