import styles from "./EmptyCart.module.css"

export default function EmptyCart() {
  return (
    <div className={styles.emptyCartWrapper}>
      <img
        src="/assets/images/illustration-empty-cart.svg"
        alt=""
        width={128}
        height={128}
        className={styles.image}
      />
      <p className={styles.text}>Your added items will appear here</p>
    </div>
  )
}
