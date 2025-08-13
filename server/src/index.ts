import express from "express";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());


app.get('/api/ping', (_, res) => {
    res.json({ message: 'pong 🥩'});
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()  => {
    console.log(`Server is rinning on port ${PORT}`);
})