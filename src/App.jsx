import './styles/App.css';
import { Outlet } from 'react-router';
import { createContext, useContext, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

function App() {
  const [ cartItems, setCartItems ] = useState([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      <Header />
      <Outlet />
      <Footer />
    </CartContext.Provider>
  )
}

export default App;
