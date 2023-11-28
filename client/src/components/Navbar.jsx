// importing react
import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { redirect, useNavigate } from "react-router-dom";
// importing stylesheet
import "../style/navbar.css";
// importing icons
import { BiWrench, BiStore, BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbLogin2, TbLogout } from "react-icons/tb";

import { Store } from "../config/utils";

export default function Navbar(props) {
    // creating variable responsible for web navigation
    const navigate = useNavigate();
    // context for storing information like session details
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
        cart,
        userInfo
    } = state;

    const [userInformation, setUserInformation] = useState(userInfo);

    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        try {
            userInfo.isAdmin && setAdmin(true);
        } catch (error) {
            console.log(error.message);
        }
    }, []);

    function signOutHandler() {
        ctxDispatch({
            type: 'USER_SIGNOUT'
        })
        navigate("/");
    }

    return (
        <>
            <nav>
                <div className="logo">
                    <label><div onClick={() => { navigate("/") }}>GroceryCart</div></label>
                </div>
                <div className="nav-actions">
                    {admin && (
                        <button className="nav-btn" onClick={() => { navigate("/admin-dashboard") }}>
                            <div>
                                <BiWrench size={25} />
                                <p className="nav-action-label">Admin</p>
                            </div>
                        </button>
                    )}

                    <button className="nav-btn" onClick={() => { navigate("/shop") }}>
                        <div>
                            <BiStore size={25} />
                            <p className="nav-action-label">Shop</p>
                        </div>
                    </button>

                    <button className="nav-btn" onClick={() => { navigate("/cart") }}>
                        <div>
                            <AiOutlineShoppingCart size={25} />
                            <p className="nav-action-label">Cart</p>
                            {cart.cartItems.length > 0 && (
                                <span className="cart-count" id="red">
                                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                                </span>
                            )}
                        </div>
                    </button>

                    {userInfo ? (
                        <>
                            <button className="nav-btn" onClick={() => { navigate(`/profile/${userInformation._id}`) }}>
                                <div>
                                    <BiUser size={25} />
                                    <p className="nav-action-label">Profile</p>
                                </div>
                            </button>

                            <button className="nav-btn" onClick={signOutHandler}>
                                <div>
                                    <TbLogout size={25} />
                                    <p className="nav-action-label">Sign Out</p>
                                </div>
                            </button>
                        </>
                    ) : (
                        <button className="nav-btn" onClick={() => { navigate("/signin") }}>
                            <div>
                                <TbLogin2 size={25} />
                                <p className="nav-action-label">Sign In</p>
                            </div>
                        </button>
                    )}
                </div>
            </nav>
        </>
    );
};
