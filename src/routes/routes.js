import { Router } from "express";

const routes = new Router()

routes.get('/', (req, res) => {
    return res.json({ message: 'Hello World' })
})

export default routes


import axios from 'axios';
import { CronJob } from "cron";

const job = new CronJob(
    '0 */5 * * * *',

    function () {
        searchSync()
    },
    null,
    true,
    'America/Los_Angeles'
)

const searchSync = async () => {
    await axios.post("https://comercial-control-si9nm.ondigitalocean.app/cron").then(() => console.log("done"))
}