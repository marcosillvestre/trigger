import cors from 'cors'
import express from 'express'
import routes from './routes/routes.js'

import './connection/triggerAgendor.js'
import './connection/triggerComercialControl.js'

class App {
    constructor() {
        this.app = express()
        this.app.use(cors())

        this.middleware()
        this.routes()
    }
    middleware() {
        this.app.use(express.json())
    }
    routes() {
        this.app.use(routes)
    }
}

export default new App().app