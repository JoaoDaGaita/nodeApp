const { Router } = require('express')

const userRouutes = require('./users.routes')
const moviesRoutes = require('./movies.routes')

const routes = Router()

routes.use('/users', userRouutes)
routes.use('/movies', moviesRoutes)

module.exports = routes