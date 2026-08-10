import { useState ,useEffect } from "react";
import ProductCard from "../ui/ProductCard";
import DepartmentSidebar from "../ui/DepartmentSidebar";
import styles from "../../styles/Shop.module.css";

export default function Shop() {
    const [ products, setProducts ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);
    const [ selectedCategory, setSelectedCategory ] = useState("all");
    const [ isOpen, setIsOpen ] = useState(false);

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

    const categories = [...new Set(products.map(product => product.category))];
    console.log(categories);
    console.log(products);

    const filteredProducts = selectedCategory === "all" ? products : products.filter(product => product.category === selectedCategory);

    return (
        <main className={styles.main}>
            <button 
                className="sidebar-btn"
                onClick={() => setIsOpen(true)}
            >
                <svg width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 26l10-10L12 6"/>
                </svg>
            </button>

            <DepartmentSidebar 
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />

            <div className={styles.productCardsContainer}>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    filteredProducts.map(product => (
                        <ProductCard
                            key={product.id} 
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