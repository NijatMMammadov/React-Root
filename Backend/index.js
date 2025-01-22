import express from "express"
const app = express()
import cors from "cors"
import { config } from "dotenv"

app.use(express.json())
app.use(cors())

import "./config/config.js"
import { route } from "./routers/ProductRoter.js"
config()

app.use("/products", route)

app.listen(5000, () => {
    console.log("5000 portda din");
})