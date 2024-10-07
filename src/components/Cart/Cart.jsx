import styles from "./Cart.module.css"

import CartItem from "./CartItem"
import CarbonNeutral from "../CarbonNeutral"

export default function Cart() {
  return (
    <div className={styles.cart}>
      <h2 className={styles.heading}>Your Cart (7)</h2>

      <ul className={styles.items}>
        <CartItem name="Classic Tiramisu" quantity="1" price="5.50" />
        <CartItem name="Vanilla Bean Crème Brûlée" quantity="4" price="7.00" />
      </ul>

      <p className={styles.totalPriceWrapper}>
        <span className={styles.totalPriceText}>Order Total</span>
        <span className={styles.totalPrice}>$46.50</span>
      </p>

      <CarbonNeutral />
    </div>
  )
}
