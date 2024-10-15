import styles from "./CartItem.module.css"

import { IoCloseSharp } from "react-icons/io5"

function CartItem({ id, name, itemCount, price, onRemove }) {
  const subTotal = Number(itemCount) * Number(price)

  return (
    <li className={styles.itemOuterWrapper}>
      <div className={styles.itemInnerWrapper}>
        <h3 className={styles.itemName}>{name}</h3>
        <p className={styles.details}>
          <span className={styles.itemCount}>{itemCount}x</span>
          <span className={styles.itemPrice}>@ ${price.toFixed(2)}</span>
          <span className={styles.subTotal}>${subTotal.toFixed(2)}</span>
        </p>
        <button
          aria-label="clear item"
          onClick={() => onRemove(id)}
          className={styles.closeButton}
        >
          <IoCloseSharp
            aria-hidden="true"
            focusable="false"
            className={styles.closeButtonIcon}
          />
        </button>
      </div>
      <div className={styles.divider}></div>
    </li>
  )
}

export default CartItem
