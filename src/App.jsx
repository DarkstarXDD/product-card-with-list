import "/src/styles.css"

import FoodItem from "./components/FoodItem"
import Cart from "./components/Cart"

export default function App() {
  return (
    <main>
      <h1>Desserts</h1>
      <FoodItem />
      <Cart />
    </main>
  )
}
