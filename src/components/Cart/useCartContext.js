import { useContext } from "react"
import { CartContext } from "./CartContext"

export function useCartContext() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error("Child components must be inside a provider wrapper")
  }
  return context
}
