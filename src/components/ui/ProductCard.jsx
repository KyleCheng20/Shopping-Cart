import "../../styles/ProductCard.css";

export default function ProductCard({ img, title, price, rating, stock, status, onAdd, quantity, onIncrement, onDecrement }) {
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

            {quantity === 0 ? (
                <button className="add-to-cart-btn" onClick={onAdd}>
                    Add to cart
                </button>
            ) : (
                <div className="quantity-container">
                    <button onClick={onDecrement}>-</button>
                    <span>{quantity} added</span>
                    <button onClick={onIncrement}>+</button>
                </div>
            )}
        </div>
    )
}