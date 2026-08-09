import { useState ,useEffect } from "react";
import ProductCard from "../ui/ProductCard";

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
            <div className="product-cards-container">
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <ProductCard 
                            img={products[97].images[0]}
                            title={products[97].title}
                            price={products[97].price}
                            rating={products[97].rating}
                            stock={products[97].stock}
                            status={products[97].availabilityStatus}
                        />
                    </>
                )}
            </div>
        </main>
    )
}