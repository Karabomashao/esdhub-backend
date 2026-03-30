import express from "express"
import { authHandler } from "./routes/auth.routes.js"
import cors from "cors"

// create an object (Think of Java except there is no new keyword)
const app = express()

// set proxy
app.set('trust proxy', true)

//responses in json
app.use(express.json())

app.use(
    cors({
        origin: [
            "https://thankful-ground-04f584e0f.4.azurestaticapps.net",
            "http://localhost:5173"
        ],
        credentials: true,
    })
)

// routes
// app.use("/api/users", userRoutes)
app.use("/auth", authHandler)

app.get("/", (req, res) => {
    res.send("API is running")
})

export default app