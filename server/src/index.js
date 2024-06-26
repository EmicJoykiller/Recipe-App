// important app library imports
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
//importing routers
import { userRouter } from './routes/Users.js'


// express creation
const app = express();

// server middleware
app.use(express.json());
app.use(cors());

//importing userRouter file for server to use and where to use
app.use("/auth", userRouter);


//MongoDB connection
mongoose.connect("mongodb+srv://nikanemami7:bmLMty4S7rUBHCfD@cluster0.6z92jtk.mongodb.net/recipes?retryWrites=true&w=majority&appName=Cluster0")


// actually calling and running server
app.listen(3001, () => console.log("Server Started"));