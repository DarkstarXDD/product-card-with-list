import "/src/styles.css"

import CartProvider from "./components/Cart/CartProvider"

import FoodList from "./components/FoodList"
import Cart from "./components/Cart"
import Modal from "./components/Modal"

export default function App() {
  return (
    <CartProvider>
      <main className="main">
        <h1 className="heading">Desserts</h1>
        <FoodList />
        <Cart />
        <Modal />
      </main>
    </CartProvider>
  )
}
