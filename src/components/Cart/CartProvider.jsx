import { useState } from "react"

import { CartContext } from "./useCartContext"

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  function addToCart(item) {
    setCart((prevCart) => [...prevCart, item])
  }

  function removeFromCart(id) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  function updateItemCount(id, newCount) {
    newCount === 0
      ? removeFromCart(id)
      : setCart((prevCart) =>
          prevCart.map((item) =>
            item.id === id ? { ...item, itemCount: newCount } : item
          )
        )
  }

  function resetCart() {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateItemCount, removeFromCart, resetCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
