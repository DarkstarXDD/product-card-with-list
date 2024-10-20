// import "/src/style.css"
import "/src/styles.css"

import CartProvider from "./components/Cart/CartProvider"

import FoodList from "./components/FoodList"
import Cart from "./components/Cart"

export default function App() {
  return (
    <CartProvider>
      <main className="m-auto max-w-96 grid gap-8 md:max-w-[76rem] lg:grid-cols-main">
        <h1 className="text-preset-1">Desserts</h1>
        <FoodList />
        <Cart />
      </main>
    </CartProvider>
  )
}
