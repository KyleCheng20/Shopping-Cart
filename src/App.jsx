import './styles/App.css';
import { Outlet } from 'react-router';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [ cartItems, setCartItems ] = useState([]);

  return (
    <>
      <Header />
      <Outlet context={[ cartItems, setCartItems ]}/>
      <Footer />
    </>
  )
}

export default App
