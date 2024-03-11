import { Router } from 'express'
const router = Router()

import countriesRouter from './countries.route.js'

router.get('/api', (req, res) => {
  res.send('Welcome to countries API')
})

router.use('/api/countries', countriesRouter)

export default router