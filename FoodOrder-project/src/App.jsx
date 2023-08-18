import { createContext, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Carts/Cart";
import CartProvider from "./store/CartProvider";

export const ToggleButtonContext = createContext({});

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <CartProvider>
      <ToggleButtonContext.Provider value={{ setShowModal }}>
        {showModal && <Cart />}
      </ToggleButtonContext.Provider>
      <ToggleButtonContext.Provider value={{ setShowModal }}>
        <Header />
      </ToggleButtonContext.Provider>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
