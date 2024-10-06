import styles from "./AddToCartButton.module.css"

export default function AddToCartButton({ children, handleAddToCart }) {
  return (
    <button onClick={handleAddToCart} className={styles.button}>
      <img
        className={styles.buttonIcon}
        src="/assets/images/icon-add-to-cart.svg"
        alt=""
      />
      {children}
    </button>
  )
}
