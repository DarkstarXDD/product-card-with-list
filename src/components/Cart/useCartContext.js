import { useContext } from "react"
import { CartContext } from "./CartContext"

export function useCartContext(id) {
  const { cart, addToCart, updateItemCount } = useContext(CartContext)

  const item = cart.find((currentItem) => currentItem.id === id)

  return {
    cart,
    itemCount: item ? item.itemCount : 0,
    addToCart,
    updateItemCount,
  }
}
