import styles from "./Cart.module.css"

import { IoCloseSharp } from "react-icons/io5"

import CarbonNeutral from "../CarbonNeutral"

export default function Cart() {
  return (
    <div className={styles.cart}>
      <h2 className={styles.heading}>Your Cart (7)</h2>

      <ul className={styles.items}>
        <li className={styles.itemWrapper}>
          <h3 className={styles.itemName}>Classic Tiramisu</h3>
          <p className={styles.details}>
            <span className={styles.itemCount}>1x</span>
            <span className={styles.itemPrice}>@ $5.50</span>
            <span className={styles.subTotal}>$5.50</span>
          </p>
          <button aria-label="clear item" className={styles.button}>
            <IoCloseSharp className={styles.buttonIcon} />
          </button>
          <div className={styles.divider}></div>
        </li>
        <li className={styles.itemWrapper}>
          <h3 className={styles.itemName}>Vanilla Bean Crème Brûlée</h3>
          <p className={styles.details}>
            <span className={styles.itemCount}>4x</span>
            <span className={styles.itemPrice}>@ $7.00</span>
            <span className={styles.subTotal}>$28.00</span>
          </p>
          <button aria-label="clear item" className={styles.button}>
            <IoCloseSharp className={styles.buttonIcon} />
          </button>
          <div className={styles.divider}></div>
        </li>
      </ul>

      <p className={styles.totalPriceWrapper}>
        <span className={styles.totalPriceText}>Order Total</span>
        <span className={styles.totalPrice}>$46.50</span>
      </p>

      <CarbonNeutral />
    </div>
  )
}
