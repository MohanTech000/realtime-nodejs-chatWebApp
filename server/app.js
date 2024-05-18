import express from "express";
import cors from "cors";


//port
const PORT = 5000;

//initialization
const app = express(); 

//imp functions
app.use(express.json());
app.use(cors({ origin: true }));


//routes
import authRouter from "./routes/userAuth.js"


app.use("/", authRouter);



app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
})