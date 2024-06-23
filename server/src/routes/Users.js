// importing libraries to make the routes work
//express for server
import express from 'express';
// jwt and bcrypt for password hashing
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
//importing the UserModel to work with userRoute
import { UserModel } from '../models/Users.js'

// defining the actual router for it to work
const router = express.Router()

//api post requests for users
router.post("/register", async (req, res) => {
    //data under res to be shown to the frontend
    const { username, password } = req.body;
    //checking if the user with above info exist in the database
    const user = await UserModel.findOne({ username });
    //check to see if username already exists
    if (user) {
        return res.json({ message: "User exists!" })
    }

    const
        //message to return the search result
        res.json(user);

});

router.post("/login");







export { router as userRouter };
