import express from 'express'
import { ENV } from './config/env'

const app = express()

const apiRouter = express.Router()

apiRouter.get('/health', (req, res) => {
  res.json({
    success: true,
  })
})

app.use('/api', apiRouter)

app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`)
})
