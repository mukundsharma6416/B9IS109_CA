import express from "express";
import expressAsyncHandler from "express-async-handler";
import Orders from "../model/orderModel.js";
import Users from "../model/userModel.js";

const orderRouter = express.Router();

const order = {
    user_id: "65486920a856b4c950597506",
    name: "John Doe",
    email: "johndoe@gmail.com",
    address: "A B C D, 100100",
    purchase: {
        "6548669fa19bc41235cc0e9f": 2,
        "6548669fa19bc41235cc0ea0": 3
    }
};

orderRouter.post(
    '/place',
    expressAsyncHandler(async (req, res) => {
        const user_id = req.body.id;
        const name = req.body.name;
        const email = req.body.email;
        const address = req.body.address;
        const purchase = req.body.purchase;
        if (await Orders.create({ user_id, name, email, address, purchase })) {
            res.send({ message: "Order placed!" });
        }
        else {
            res.send({ message: "Some unexpected error occured!" });
        }
    })
);

orderRouter.get(
    '/:id',
    async (req, res) => {
        const user = await Users.findById(req.params.id);
        const orders = await Orders.find({ email: user.email })
        if (orders) {
            res.send({ message: "success", orders: orders });
        }
        else {
            res.send({ message: "failure" });
        }
    }
);

export default orderRouter;