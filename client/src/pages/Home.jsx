// importing stylesheet
import "../style/home.css";

export default function Home() {
    return (
        <>
            <h1 className="title txt-ctr">Welcome to Merch Store</h1>
            <img
                className="home-main"
                src={
                    process.env.PUBLIC_URL +
                    "/images/home-main.png"
                }
                alt="shop logo"
            ></img>
        </>
    );
};
