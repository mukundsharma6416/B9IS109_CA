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
    name: "Mukund Sharma",
    email: "mukund@gmail.com",
    gender: "male",
    password: bcrypt.hashSync("mukund"),
    isAdmin: true
}, {
    name: "User",
    email: "user@gmail.com",
    gender: "female",
    password: bcrypt.hashSync("hello"),
    isAdmin: false
}];

const orders = [{
    user_id: "65486920a856b4c950597506",
    name: "John Doe",
    email: "johndoe@gmail.com",
    address: "A B C D, 100100",
    purchase: [
        { "FRESH CARROTS": 2 },
        { "SACK OF ONIONS": 3 }
    ]
}, {
    user_id: "65486920a856b4c950597507",
    name: "hello world",
    email: "hello@gmail.com",
    address: "hello",
    purchase: [
        { "PACK OF MILK": 4 },
        { "SPREAD CHEESE": 1 }
    ],
},
{
    user_id: "6548e7c7bdd035bceef48e38",
    name: "Hello",
    email: "hello@gmail.com",
    address: "hello homehellohello world400100",
    purchase: [
        { "CORN": 2 },
        { "JUICY LEMONS": 3 }
    ],
},
{
    user_id: "6548e7c7bdd035bceef48e38",
    name: "hello",
    email: "helloworld@gmail.com",
    address: "hell, hell, hell, 100100",
    purchase: [
        { "SLICED BREAD": 2 },
        { "BUTTER": 1 }
    ],
}, {
    user_id: "6548e7c7bdd035bceef48e38",
    name: "hello",
    email: "johndoe@gmail.com",
    address: "hell, hell, hell, 100100",
    purchase: [
        { "SLICED BREAD": 2 },
        { "BUTTER": 1 }
    ],
}, {
    user_id: "6548e7c7bdd035bceef48e38",
    name: "hello",
    email: "abc@gmail.com",
    address: "hell, hell, hell, 100100",
    purchase: [
        { "SLICED BREAD": 2 },
        { "BUTTER": 1 }
    ],
}, {
    user_id: "6548e7c7bdd035bceef48e38",
    name: "hello",
    email: "helloworld@gmail.com",
    address: "hell, hell, hell, 100100",
    purchase: [
        { "SLICED BREAD": 2 },
        { "BUTTER": 1 }
    ],
}];

export default {
    products,
    users,
    orders
}