import express from "express"
import { addUser, fetchUsers, fetchUserById  } from "../controllers/user.controller.js"

const router = express.Router()

router.get("/", fetchUsers)
router.get("/:id", fetchUserById)
router.post("/", addUser)

export default router