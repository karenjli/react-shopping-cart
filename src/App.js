import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

//Context
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    setCart([...cart, item]);
  };

  const deleteItem = id => {
    setCart(cart.filter(item => item.id !== id));
    console.log(cart);
  };

  return (
    <ProductContext.Provider value={{ products, addItem }}>
      <CartContext.Provider value={{ cart, deleteItem }}>
        <div className="App">
          <Navigation cart={cart} />

          {/* Routes */}
          <Route
            exact
            path="/"
            render={() => <Products components={products} />}
          />

          <Route
            path="/cart"
            render={() => <ShoppingCart components={cart} />}
          />
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
