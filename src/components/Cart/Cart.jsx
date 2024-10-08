import styles from "./Cart.module.css"

import { useCartContext } from "./useCartContext"

import CartItem from "./CartItem"
import CarbonNeutral from "../CarbonNeutral"

export default function Cart() {
  const { cart } = useCartContext()

  return (
    <div className={styles.cart}>
      <h2 className={styles.heading}>Your Cart ({cart.length})</h2>

      <ul className={styles.items}>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.itemCount}
            price={item.price}
          />
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
