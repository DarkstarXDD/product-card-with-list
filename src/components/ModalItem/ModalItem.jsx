import styles from "./ModalItem.module.css"

export default function ModalItem({ name, itemCount, price, image }) {
  const subTotal = Number(itemCount) * Number(price)

  return (
    <li className={styles.item}>
      <div className={styles.itemOuterWrapper}>
        <div className={styles.itemInnerWrapper}>
          <img src={image.thumbnail} alt="" className={styles.thumbnail} />
          <h3 className={styles.itemName}>{name}</h3>
          <p className={styles.countPriceWrapper}>
            <span className={styles.itemCount}>{itemCount}x</span>
            <span className={styles.price}>@ ${price.toFixed(2)}</span>
          </p>
        </div>
        <p className={styles.subTotal}>${subTotal.toFixed(2)}</p>
      </div>

      <div className={styles.divider}></div>
    </li>
  )
}
