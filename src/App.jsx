import "/src/styles.css"

import CartProvider from "./components/Cart/CartProvider"

import FoodItem from "./components/FoodItem"
import Cart from "./components/Cart"

export default function App() {
  return (
    <CartProvider>
      <main>
        <h1>Desserts</h1>
        <FoodItem />
        <Cart />
      </main>
    </CartProvider>
  )
}
