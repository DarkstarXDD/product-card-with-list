import styles from "./CartItem.module.css"

import { IoCloseSharp } from "react-icons/io5"

function CartItem({ id, name, itemCount, price, onRemove }) {
  const subTotal = (Number(itemCount) * Number(price)).toFixed(2)

  return (
    <li className={styles.itemWrapper}>
      <h3 className={styles.itemName}>{name}</h3>
      <p className={styles.details}>
        <span className={styles.itemCount}>{itemCount}x</span>
        <span className={styles.itemPrice}>@ ${price.toFixed(2)}</span>
        <span className={styles.subTotal}>${subTotal}</span>
      </p>
      <button
        aria-label="clear item"
        onClick={() => onRemove(id)}
        className={styles.button}
      >
        <IoCloseSharp className={styles.buttonIcon} />
      </button>
      <div className={styles.divider}></div>
    </li>
  )
}

export default CartItem
