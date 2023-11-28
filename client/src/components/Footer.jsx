// importing stylesheet
import "../style/footer.css";
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();

    return (
        <>
            <footer className="footer" id="footer">
                <div className="footer-sections">
                    <div className="foot-section">
                        <img
                            className="footer-logo"
                            src={
                                process.env.PUBLIC_URL +
                                "/images/store-name.png"
                            }
                            alt="footer-logo"
                        />
                        <h1 className="txt-ctr">Grocery <br /> Cart</h1>
                    </div>

                    <div
                        className="foot-section">
                        <li className="heading">
                            Blogs
                        </li>

                        <a
                            target="_blank"
                            href="https://medium.com/the-research-nest/how-to-choose-the-right-products-for-your-online-store-287a14b1e0ff"
                        >
                            Choosing Right
                        </a>

                        <a
                            target="_blank"
                            href="https://medium.com/@salesklik/the-importance-of-high-quality-product-images-in-e-commerce-463ce90b9881"
                        >
                            Quality Matters
                        </a>
                    </div>

                    <div className="foot-section">
                        <li className="heading">
                            Store
                        </li>

                        <a onClick={() => { navigate("/shop") }}>View Shop</a>
                    </div>

                    <div className="foot-section">
                        <li className="heading">
                            Social
                        </li>

                        <a href="/">Instagram</a>
                        <a href="/">Youtube</a>
                        <a href="/">Facebook</a>
                        <a href="/">Twitter</a>
                    </div>
                </div>
                <hr />
                <div className="below-footer-as">
                    <div className="txt-ctr">
                        @{new Date().getFullYear()}&nbsp;GroceryCart | All Rights Reserved
                    </div>
                </div>
            </footer>
        </>
    );
};
