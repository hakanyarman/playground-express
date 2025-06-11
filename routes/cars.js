import { Router } from 'express'

export const carsRouter = Router()

const carsRouterMiddleware = (req, res, next) => {
  console.log(
    `hello from carsRouterMiddleware, current route: ${req.originalUrl}`
  )
  next()
}

carsRouter.use(carsRouterMiddleware)

carsRouter.get('/', (req, res) => {
  res.send('cars homepage')
})

carsRouter.get('/toyota', (req, res) => {
  res.send('toyota car')
})

carsRouter.get('/hyundai', (req, res) => {
  res.send('hyundai car')
})
