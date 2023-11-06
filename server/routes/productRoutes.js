import express from "express";
const app = express();
import Products from "../model/productModel.js";

const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
    res.status(200).send(await Products.find());
});

productRouter.get('/:id', async (req, res) => {
    res.status(200).send(await Products.findById(req.params.id));
});

productRouter.post('/edit-cat', async (req, res) => {
    if (await Products.updateMany(
        { type: req.body.old_name },
        { $set: { type: req.body.new_name } }
    )) {
        res.send({ message: "success" });
    }
    else {
        res.send({ message: "failure" });
    }
});

productRouter.post('/delete-cat', async (req, res) => {
    if (await Products.deleteMany({ type: req.body.category })) {
        res.send({ message: "success" });
    }
    else {
        res.send({ message: "failure" });
    }
});

productRouter.post('/edit-prod', async (req, res) => {
    if (await Products.findByIdAndUpdate(
        req.body.id,
        {
            name: req.body.name,
            qty: req.body.qty,
            price: req.body.price,
            type: req.body.type
        }
    )) {
        res.send({ message: "success" });
    }
    else {
        res.send({ message: "failure" });
    }
});

productRouter.post('/delete-prod', async (req, res) => {
    if (await Products.deleteOne({ _id: req.body.id })) {
        res.send({ message: "success" });
    }
    else {
        res.send({ message: "failure" });
    }
});

export default productRouter;