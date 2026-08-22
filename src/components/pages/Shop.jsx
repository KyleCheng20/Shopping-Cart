import { useState ,useEffect } from "react";
import { useCart } from "../../App";
import ProductCard from "../ui/ProductCard";
import DepartmentSidebar from "../ui/DepartmentSidebar";
import styles from "../../styles/Shop.module.css";

export default function Shop() {
    const [ products, setProducts ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);
    const [ selectedCategory, setSelectedCategory ] = useState("all");
    const [ isOpen, setIsOpen ] = useState(false);
    const { cartItems, setCartItems } = useCart();

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

    function addToCart(product) {
        setCartItems(prev => [...prev, 
            {
                id: product.id,
                title: product.title,
                image: product.images[0],
                price: product.price,
                quantity: 1
            }
        ]);
    }

    function getProductQuantity(productId) {
        const item = cartItems.find(product => product.id === productId);

        return item ? item.quantity : 0;
    }

    function incrementCartItem(productId) {
        setCartItems(prev => 
            prev.map(item => 
                item.id === productId ? {...item, quantity: item.quantity + 1} : item
            )
        );
    }

    function decrementCartItem(productId) {
        setCartItems(prev => 
            prev.map(item => 
                item.id === productId ? {...item, quantity: item.quantity - 1} : item
            ).filter(item => item.quantity > 0)
        );
    }

    return (
        <main className={styles.main}>
            <DepartmentSidebar 
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                isOpen={isOpen}
                onOpen={() => setIsOpen(true)}
                onClose={() => setIsOpen(false)}
            />

            <div className={styles.productCardsContainer}>
                {isLoading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error: {error}</p>
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
                            onAdd={() => addToCart(product)}
                            quantity={getProductQuantity(product.id)}
                            onIncrement={() => incrementCartItem(product.id)}
                            onDecrement={() => decrementCartItem(product.id)}
                        />
                    ))
                )}
            </div>
        </main>
    )
}