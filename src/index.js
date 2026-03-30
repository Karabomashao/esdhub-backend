import dotenv from "dotenv"
dotenv.config({path: "./.env"})

import app from "./app.js";
import ConnectDB from "./config/database.js";




//start sever here
const startServer = async () => {
    try {
        // await ConnectDB()
        // app.on("error", (error) => {
        //     console.log("ERROR", error)
        //     throw error
        // })

        app.listen(process.env.PORT || 5137, () => {
            console.log(`Server is running on ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("Connection to db has failed", error)
    }
}

startServer()