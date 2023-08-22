
import axios from 'axios';
import { CronJob } from "cron";

const job = new CronJob(
    '0 */1 * * * *',

    function () {
        // searchSync()
    },
    null,
    true,
    'America/Los_Angeles'
)

const searchSync = async () => {
    // await axios.post("https://comercial-control-si9nm.ondigitalocean.app/cron").then(() => console.log("done"))
    await axios.post("http://localhost:7070/cron").then(() => console.log("done"))
}