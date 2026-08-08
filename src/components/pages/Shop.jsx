import { useState ,useEffect } from "react";

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch("https://dummyjson.com/products?limit=0");

                if (!response.ok) {
                    throw new Error(`HTTP error: Status ${response.status}`);
                }

                const data = await response.json();
                const productsData = data.products;
                setProducts(productsData);
                setError(null);
            } catch (e) {
                setError(e.message);
                setProducts([]);
            } finally {
                setIsLoading(false);
            }
        }

        fetchProducts();
    }, []);

    return (
        <main>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <img src={products[97].images[0]} alt={products.title} />
                    <h3>{products[97].title}</h3>
                    <p>Price: ${products[97].price}</p>
                    <p>Rating: {products[97].rating}/5</p>
                    <p>Stock: {products[97].stock}</p>
                    <p>Status: {products[97].availabilityStatus}</p>
                </>
            )}
        </main>
    )
}