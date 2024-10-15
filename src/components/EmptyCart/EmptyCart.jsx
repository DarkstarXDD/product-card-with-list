import styles from "./EmptyCart.module.css"

import IconEmptyCart from "../Icons/IconEmptyCart"

export default function EmptyCart() {
  return (
    <div className={styles.emptyCartWrapper}>
      <IconEmptyCart style={{ width: "8rem", height: "8rem" }} />
      <p className={styles.text}>Your added items will appear here</p>
    </div>
  )
}
