import { useState } from "react"

import { CartContext } from "./CartContext"

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

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateItemCount, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
