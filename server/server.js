import express from "express";
import dotenv from "dotenv";
import mongoose from 'mongoose';
import cors from "cors";

// importing routers
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from './routes/userRoutes.js';
import orderRouter from "./routes/orderRoutes.js";

dotenv.config();

mongoose.connect(process.env.DB_CONNECT)
    .then(() => {
        console.log("db connected");
    })
    .catch((err) => {
        console.log(err.message);
    });


const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
})

const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log(`Serving at http://localhost:${port}`);
});