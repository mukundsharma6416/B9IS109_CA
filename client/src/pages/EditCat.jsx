// importing from react
import { useState, useEffect, useReducer, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logger from "use-reducer-logger";
import { delay } from "../config/utils";
import { Store, getError } from "../config/utils";

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, products: action.payload, loading: false };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export default function EditCat() {
    const navigate = useNavigate();

    const { state } = useContext(Store);
    const { userInfo } = state;

    const [formData, setFormData] = useState({
        old_name: "",
        new_name: ""
    });

    const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
        loading: true,
        error: "",
        products: [],
    });

    useEffect(() => {
        if (!userInfo) {
            navigate("/");
        }

        if (userInfo) {
            if (!userInfo.isAdmin)
                navigate("/");
        }
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get('api/products');
                dispatch({
                    type: 'FETCH_SUCCESS',
                    payload: result.data,
                })
            } catch (err) {
                dispatch({
                    type: 'FETCH_FAIL',
                    payload: getError(err),
                })
            }
        }
        fetchData();
    }, []);

    const categoryNames = [];
    let flag = false;
    function getCategoryNames() {
        flag = false;
        products.map((prod) => {
            const itemExists = categoryNames.find((cat) => cat === prod.type);
            if (!itemExists) {
                categoryNames.push(prod.type);
            }
        })
    }

    getCategoryNames();

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    const [msg, setMsg] = useState("");
    const [color, setColor] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const { data } = await axios.post('api/products/edit-cat', {
                old_name: formData.old_name,
                new_name: formData.new_name
            })
            console.log(data.message === "success");
            if (data) {
                localStorage.setItem("userInfo", JSON.stringify(data));
                setMsg("Edit Successful!");
                setColor("green");
                await delay(500);
                setMsg("Redirecting... wait");
                await delay(500);
                navigate("/admin-dashboard");
            }
        } catch (error) {
            setMsg("Edit Unsuccessful!");
            setColor("red");
        }
    }

    return (
        <>
            <div className="admin-forms">
                <div className="form">
                    <h1 className="title">Edit Category Name</h1>
                    <h1 className="subtitle">** Category of all the items in the particular category will change **</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="input-box">
                            <div className="input msg" id={color}>
                                {msg}
                            </div>
                        </div>

                        <div className="input-box">
                            <label
                                htmlFor="old_name">
                                Select Category Name to be changed
                            </label>

                            <select
                                className="input"
                                name="old_name"
                                id="old_name"
                                value={formData.old_name}
                                onChange={handleChange}
                                required>
                                <option value="">-- None --</option>
                                {categoryNames.map((cat) => (
                                    <option value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>

                        <div className="input-box">
                            <label
                                htmlFor="new_name">
                                New Name:
                            </label>

                            <input
                                className="input"
                                type="text"
                                name="new_name"
                                id="new_name"
                                value={formData.new_name}
                                onChange={handleChange}
                                placeholder="Eg: Veg Aata Maggi"
                                autocomplete="off"
                                required
                            />
                        </div>

                        <div className="input-box">
                            <button
                                className="form-btn"
                                type="submit">
                                Edit Category
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
