import styles from "./CartItem.module.css"

import { IoCloseSharp } from "react-icons/io5"

function CartItem({ name, quantity, price }) {
  const subTotal = (Number(quantity) * Number(price)).toFixed(2)

  return (
    <li className={styles.itemWrapper}>
      <h3 className={styles.itemName}>{name}</h3>
      <p className={styles.details}>
        <span className={styles.itemCount}>{quantity}x</span>
        <span className={styles.itemPrice}>@ ${price}</span>
        <span className={styles.subTotal}>${subTotal}</span>
      </p>
      <button aria-label="clear item" className={styles.button}>
        <IoCloseSharp className={styles.buttonIcon} />
      </button>
      <div className={styles.divider}></div>
    </li>
  )
}

export default CartItem
