import { Link } from "react-router";
import "../../styles/Home.css";


export default function Home() {
    return (
        <main>
            <div className="home-container">
                <h1>Come be a Shopper</h1>
                <p>We offer multiple everyday essentials from groceries, to electronics, beauty products, and more! View our prices and ratings on each item.</p>
                <p>Come shop with us at Shopper!</p>
                <Link className="shop-now-btn" to="shop">Shop Now</Link>
            </div>
        </main>
    )
}