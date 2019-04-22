import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'

dotenv.config()

const SECRET = process.env.SECRET || 'SECRET'

class Application {
  public app: express.Application

  constructor () {
    this.app = express()
    this.loadMiddlewares()
  }

  // middlewares
  loadMiddlewares () {
    this.app.use(bodyParser.urlencoded({ extended: false }))
    this.app.use(bodyParser.json())
    this.app.use(cookieParser(SECRET)) // ignore
  }

  // routes | api
  loadRoutes () {}
}

export default new Application().app
