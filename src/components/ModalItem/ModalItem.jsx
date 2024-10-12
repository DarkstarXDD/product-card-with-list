import styles from "./ModalItem.module.css"

export default function ModalItem() {
  return (
    <li className={styles.item}>
      <div className={styles.itemOuterWrapper}>
        <div className={styles.itemInnerWrapper}>
          <img src="" alt="" className={styles.thumbnail} />
          <h3 className={styles.itemName}>Classic Tiramisu</h3>
          <p className={styles.countPriceWrapper}>
            <span className={styles.itemCount}>1x</span>
            <span className={styles.price}>@ $5.50</span>
          </p>
        </div>
        <p className={styles.subTotal}>$5.50</p>
      </div>

      <div className={styles.divider}></div>
    </li>
  )
}
