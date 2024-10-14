import styles from "./AddToCartButton.module.css"

import IconCart from "../Icons/IconCart"

export default function AddToCartButton({ children, onAddToCart }) {
  return (
    <button onClick={onAddToCart} className={styles.button}>
      <IconCart style={{ width: "1.25rem", height: "1.25rem" }} />
      {children}
    </button>
  )
}
