import { getAllUsers, createUser, getUserById } from "../models/user.model.js";
import bcrypt from "bcrypt"

export async function fetchUsers(req, res){

    try {
        const users = await getAllUsers()
        res.status(200).json(users)        
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch users", error: error.message})
    }
}

export async function fetchUserById(req, res){
    try {
        const user = await getUserById(req.params.id)
        if (!user){
            res.status(404).json({message : "User not found"})
        }

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message : "Failed to fetch user", error : error.message})
    }
}

export async function addUser(req, res){
    try {
        const {firstName, lastName, password, email, role} = req.body
        
        const passwordHash = await bcrypt.hash(password, 10)

        const user = await createUser({
            firstName,
            lastName,
            passwordHash,
            email,
            role
        })

        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({message:"Failed to create user", error:error.message})
    }
}