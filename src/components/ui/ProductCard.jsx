import "../../styles/ProductCard.css";

export default function ProductCard({ img, title, price, rating, stock, status }) {
    return (
        <div className="product-card">
            <div className="card-top">
                <img src={img} alt={title} />
                <h3>{title}</h3>
            </div>

            <div className="card-middle">
                <div className="card-price-rating">
                    <p>${price}</p>
                    <p>Rating: {rating}/5</p>
                </div>

                <div className="card-stock-status">
                    <p>Stock: {stock}</p>
                    <p>Status: <span>{status}</span></p>
                </div>
            </div>

            <button className="add-to-cart-btn">Add to cart</button>
        </div>
    )
}