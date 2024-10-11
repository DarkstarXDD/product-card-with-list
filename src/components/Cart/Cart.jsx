import styles from "./Cart.module.css"

import { useCartContext } from "./useCartContext"

import EmptyCart from "../EmptyCart"
import CartItem from "./CartItem"
import CarbonNeutral from "../CarbonNeutral"

export default function Cart() {
  const { cart, removeFromCart } = useCartContext()
  const itemCountInCart = cart.length

  function onRemove(id) {
    removeFromCart(id)
  }

  if (itemCountInCart === 0) {
    return (
      <div className={styles.cart}>
        <h2 className={styles.heading}>Your Cart (0)</h2>
        <EmptyCart />
      </div>
    )
  }

  return (
    <div className={styles.cart}>
      <h2 className={styles.heading}>Your Cart ({itemCountInCart})</h2>

      <ul className={styles.items}>
        {cart.map((item) => (
          <CartItem key={item.id} {...item} onRemove={onRemove} />
        ))}
      </ul>

      <p className={styles.totalPriceWrapper}>
        <span className={styles.totalPriceText}>Order Total</span>
        <span className={styles.totalPrice}>$46.50</span>
      </p>

      <CarbonNeutral />
    </div>
  )
}
