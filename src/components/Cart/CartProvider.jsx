import { useState } from "react"

import { CartContext } from "./CartContext"

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  function addToCart(item) {
    setCart((prevCart) => [...prevCart, item])
  }

  function updateItemCount(name, newCount) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === name ? { ...item, itemCount: newCount } : item
      )
    )
  }

  function removeFromCart() {
    return null
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateItemCount, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
