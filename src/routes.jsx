import App from "./App.jsx";
import Home from "./components/pages/Home.jsx";
import Shop from "./components/pages/Shop.jsx";
import Cart from "./components/pages/Cart.jsx";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
        { index: true, element: <Home /> },
        { path: "shop", element: <Shop /> },
        { path: "cart", element: <Cart /> },
    ]
  },
];