import bcrypt from "bcryptjs";

const products = [{
    name: "SACK OF ONION",
    qty: "1kg",
    price: 54.99,
    type: "loose",
    url: "onions",
    stockQty: 20,
}, {
    name: "FRESH CARROTS",
    qty: "500g",
    price: 34.49,
    type: "loose",
    url: "carrots",
    stockQty: 20,
}, {
    name: "SACK OF POTATOS",
    qty: "1kg",
    price: 59.99,
    type: "loose",
    url: "potatos",
    stockQty: 20,
}, {
    name: "LADY FINGER",
    qty: "500g",
    price: 54.99,
    type: "loose",
    url: "ladyfinger",
    stockQty: 20,
}, {
    name: "TOMATOS",
    qty: "250g",
    price: 129.99,
    type: "loose",
    url: "tomatos",
    stockQty: 20,
}, {
    name: "CORN",
    qty: "1 full",
    price: 18.49,
    type: "loose",
    url: "corn",
    stockQty: 20,
}, {
    name: "BANANAS",
    qty: "1/2 Dozen",
    price: 54.99,
    type: "loose",
    url: "bananas",
    stockQty: 4,
}, {
    name: "JUICY LEMONS",
    qty: "4 pieces",
    price: 11.99,
    type: "loose",
    url: "lemon",
    stockQty: 20,
}, {
    name: "BUTTER",
    qty: "500g",
    price: 54.99,
    type: "dairy",
    url: "butter",
    stockQty: 20,
}, {
    name: "SLICED BREAD",
    qty: "16 slices",
    price: 54.99,
    type: "packaged",
    url: "bread",
    stockQty: 20,
}, {
    name: "BUN",
    qty: "6 pieces",
    price: 24.99,
    type: "packaged",
    url: "bun",
    stockQty: 0,
}, {
    name: "MILK",
    qty: "500ml",
    price: 54.49,
    type: "dairy",
    url: "milk",
    stockQty: 20,
}, {
    name: "PASTA",
    qty: "100g",
    price: 24.99,
    type: "packaged",
    url: "pasta",
    stockQty: 20,
}, {
    name: "CHEESE SPREAD",
    qty: "250g",
    price: 144.99,
    type: "dairy",
    url: "cheese",
    stockQty: 22,
}, {
    name: "CHOCOLATE BAR",
    qty: "100g",
    price: 24.99,
    type: "packaged",
    url: "chocolate",
    stockQty: 0,
}, {
    name: "CEREALS",
    qty: "250g",
    price: 63.49,
    type: "packaged",
    url: "cereals",
    stockQty: 20,
}];

const users = [{
    name: "John Doe",
    email: "johndoe@gmail.com",
    gender: "male",
    password: bcrypt.hashSync("johndoe"),
    isAdmin: true
}, {
    name: "Hello World",
    email: "helloworld@gmail.com",
    gender: "male",
    password: bcrypt.hashSync("helloworld"),
    isAdmin: false
}, {
    name: "Hello",
    email: "hello@gmail.com",
    gender: "female",
    password: bcrypt.hashSync("hello"),
    isAdmin: false
}];

const orders = [{
    user_id: "65486920a856b4c950597506",
    name: "John Doe",
    email: "johndoe@gmail.com",
    address: "A B C D, 100100",
    purchase: {
        "6548669fa19bc41235cc0e9f": 2,
        "6548669fa19bc41235cc0ea0": 3
    }
}];

export default {
    products,
    users,
    orders
}