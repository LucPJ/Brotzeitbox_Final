import User from "../shemas/userSchema.js";
import db from "../mongooseDB/db.js";

export const getUsers = async (req,res)=>{
    
    const allUsers = await User.find()
    res.status(200).json(allUsers)
}

export const createUser = async (req,res)=>{
    console.log(req.body)

    const {name, email, nachricht} = req.body
    
    const newUser = await User
    .create({name: name, email: email, nachricht: nachricht})
    .then(newUser => res.status(200).json(newUser))
    .catch(err => res.status(400).send(err.msg))
}