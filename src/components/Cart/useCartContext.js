import { createContext, useContext } from "react"

export const CartContext = createContext()

export function useCartContext(id) {
  const { cart, addToCart, updateItemCount, removeFromCart, resetCart } =
    useContext(CartContext)

  const item = cart.find((currentItem) => currentItem.id === id)

  return {
    cart,
    itemCount: item ? item.itemCount : 0,
    addToCart,
    updateItemCount,
    removeFromCart,
    resetCart,
  }
}
