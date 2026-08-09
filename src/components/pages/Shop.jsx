import { useState ,useEffect } from "react";
import ProductCard from "../ui/ProductCard";
import styles from "../../styles/Shop.module.css";

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
        <main className={styles.main}>
            <div className={styles.productCardsContainer}>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    products.map(product => (
                        <ProductCard 
                            img={product.images[0]}
                            title={product.title}
                            price={product.price}
                            rating={product.rating}
                            stock={product.stock}
                            status={product.availabilityStatus}
                        />
                    ))
                )}
            </div>
        </main>
    )
}