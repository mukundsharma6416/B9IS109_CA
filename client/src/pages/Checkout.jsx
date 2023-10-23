// importing from react
import { useState } from "react";
// importing stylesheets
import "../style/checkout.css";
import "../style/shop.css";
import "../style/form.css";
import Product from "../components/Product";

export default function Checkout() {
    const [msg, setMsg] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: 0,
        card_name: "",
        card_no: "",
        card_exp: "",
        cvv: "",
    });

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    function handleSubmit() {
        // pass the states into db
    }

    const products = [{
        name: "EGGS",
        qty: "6 pieces",
        price: 59.99,
        type: "packaged",
        url: "eggs6"
    }, {
        name: "PASTA",
        qty: "100g",
        price: 24.99,
        type: "packaged",
        url: "pasta"
    }, {
        name: "CEREALS",
        qty: "250g",
        price: 63.49,
        type: "packaged",
        url: "cereals"
    }];

    return (
        <>
            <div className="checkout flex">
                <div className="checkout-form">
                    <div className="form">
                        <h1 class="title">Checkout With Your Purchase</h1>
                        <h1 class="subtitle">** Enter authentic details to complete the purchase **</h1>
                        <form action="?" method="post">
                            <div class="input-box">
                                <div class="input msg" id="{{msgColor}}">
                                    {msg}
                                </div>
                            </div>

                            <h1 class="title">Billing Details:</h1>

                            <div class="input-box">
                                <label
                                    for="fullname">
                                    <i class="fa fa-user"></i> Full Name:
                                </label>

                                <input
                                    class="input"
                                    type="text"
                                    name="fullname"
                                    id="fullname"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Eg: Hardik Shah"
                                    autocomplete="off"
                                    required
                                />
                            </div>

                            <div class="input-box">
                                <label
                                    for="email">
                                    <i class="fa fa-envelope"></i> Email:
                                </label>

                                <input
                                    class="input"
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Eg: abc@gmail.com"
                                    autocomplete="off"
                                    required
                                />
                            </div>

                            <div class="input-box">
                                <label
                                    for="name">
                                    <i class="fa fa-address-card-o"></i> Address:
                                </label>

                                <input
                                    class="input"
                                    type="text"
                                    name="address"
                                    id="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Eg: 101/C, Bldg Name"
                                    autocomplete="off"
                                    required
                                />
                            </div>

                            <div class="input-box">
                                <label
                                    for="city">
                                    <i class="fa fa-institution"></i> City:
                                </label>

                                <input
                                    class="input"
                                    type="text"
                                    name="city"
                                    id="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="Eg: Mumbai"
                                    autocomplete="off"
                                    required
                                />
                            </div>

                            <div class="input-box">
                                <label
                                    for="state">
                                    <i class="fa-solid fa-mountain-city"></i> State:
                                </label>

                                <input
                                    class="input"
                                    type="text"
                                    name="state"
                                    id="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    placeholder="Eg: Maharasthra"
                                    autocomplete="off"
                                    required
                                />
                            </div>

                            <div class="input-box">
                                <label
                                    for="zip">
                                    <i class="fa-solid fa-location-crosshairs"></i> Zip:
                                </label>

                                <input
                                    class="input"
                                    type="number"
                                    name="zip"
                                    id="zip"
                                    value={formData.zip}
                                    onChange={handleChange}
                                    placeholder="Eg: 400010"
                                    autocomplete="off"
                                    required
                                />
                            </div>

                            <h1 class="title">Payment Details:</h1>
                            <h1 class="subtitle">Accepted Cards</h1>
                            <h1 class="flex gap-5 title">
                                <i class="fa fa-cc-visa" id="navy-card"></i>
                                <i class="fa fa-cc-amex" id="blue-card"></i>
                                <i class="fa fa-cc-mastercard" id="red-card"></i>
                                <i class="fa fa-cc-discover" id="orange-card"></i>
                            </h1>

                            <div class="input-box">
                                <label
                                    for="city">
                                    <i class="fa-solid fa-signature"></i> Name on the card:
                                </label>

                                <input
                                    class="input"
                                    type="text"
                                    name="card-name"
                                    id="card-name"
                                    value={formData.card_name}
                                    onChange={handleChange}
                                    placeholder="Eg: Hardik T Shah"
                                    autocomplete="off"
                                    required
                                />
                            </div>

                            <div class="input-box">
                                <label
                                    for="card-no">
                                    <i class="fa-solid fa-list-ol"></i> Card Number:
                                </label>

                                <input
                                    class="input"
                                    type="text"
                                    name="card-no"
                                    id="card-no"
                                    value={formData.card_no}
                                    onChange={handleChange}
                                    placeholder="Eg: 1234-5678-1011-1213"
                                    autocomplete="off"
                                    required
                                />
                            </div>

                            <div class="input-box">
                                <label
                                    for="card-exp">
                                    <i class="fa-solid fa-calendar-days"></i> Expiry Date:
                                </label>

                                <input
                                    class="input"
                                    type="month"
                                    name="card-exp"
                                    id="card-exp"
                                    value={formData.card_exp}
                                    onChange={handleChange}
                                    autocomplete="off"
                                    required
                                />
                            </div>

                            <div class="input-box">
                                <label
                                    for="card-cvv">
                                    <i class="fa-solid fa-key"></i> CVV:
                                </label>

                                <input
                                    class="input"
                                    type="password"
                                    name="card-cvv"
                                    id="card-cvv"
                                    value={formData.cvv}
                                    onChange={handleChange}
                                    autocomplete="off"
                                    placeholder="Eg: ***"
                                    required
                                />
                            </div>

                            <div class="input-box">
                                <button
                                    class="form-btn"
                                    type="submit"
                                    onSubmit={handleSubmit}>
                                    Complete Purchase
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="checkout-store">
                    <h1 class="title">Cart Items</h1>

                    <div class="store" id="cart-items">
                        {products.map(prod => (
                            <>
                                <Product
                                    prodURL={prod.url}
                                    prodName={prod.name}
                                    prodQty={prod.qty}
                                    prodPrice={prod.price}
                                    page={"cart"}
                                />
                            </>
                        ))}
                    </div>
                    <br />
                    <hr />
                    <div class="checkout-total flex">
                        <h1 class="subtitle">Subtotal&emsp;&nbsp;: </h1>
                        <h1 class="subtitle">₹00.00</h1>
                    </div>
                    <div class="checkout-total flex">
                        <h1 class="subtitle">CGST (9%)&nbsp;&nbsp;&nbsp;: </h1>
                        <h1 class="subtitle">₹00.00</h1>
                    </div>
                    <div class="checkout-total flex">
                        <h1 class="subtitle">SGST (9%)&nbsp;&nbsp;&nbsp;: </h1>
                        <h1 class="subtitle">₹00.00</h1>
                    </div>
                    <hr />
                    <div class="checkout-total flex">
                        <h1 class="title">Grand Total: </h1>
                        <h1 class="title">₹00.00</h1>
                    </div>
                </div>
            </div>
        </>
    );
};
