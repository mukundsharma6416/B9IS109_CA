import express from "express";
import expressAsyncHandler from "express-async-handler";
import Users from "../model/userModel.js";
import bcrypt from "bcryptjs";

const userRouter = express.Router();

userRouter.post(
    '/signin',
    expressAsyncHandler(async (req, res) => {
        const user = await Users.findOne({ email: req.body.email });
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                res.send(user);
                return;
            }
        }
        res.status(401).send({ message: "Invalid email or password" })
    })
);

userRouter.post(
    '/signup',
    expressAsyncHandler(async (req, res) => {
        const name = req.body.name;
        const email = req.body.email;
        const gender = req.body.gender;
        const password = req.body.password;
        const isAdmin = req.body.isAdmin;
        if (await Users.findOne({ email: req.body.email })) {
            res.send(
                { message: "Email Already Exists" }
            );
        }
        else {
            if (Users.create({ name, email, gender, password: bcrypt.hashSync(password), isAdmin })) {
                const user = await Users.findOne({ email: req.body.email });
                res.send(
                    {
                        user: {
                            name: name,
                            email: email,
                            gender: gender,
                            password: bcrypt.hashSync(password)
                        }
                    }
                );
            }
        }
    })
);

userRouter.get('/', async (req, res) => {
    
});

export default userRouter;