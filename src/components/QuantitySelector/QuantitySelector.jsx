import styles from "./QuantitySelector.module.css"

import { BiMinus, BiPlus } from "react-icons/bi"

function QuantitySelector({
  children,
  productName,
  itemCount,
  onUpdateItemCount,
}) {
  function handleDecrease() {
    onUpdateItemCount(itemCount - 1)
  }

  function handleIncrease() {
    onUpdateItemCount(itemCount + 1)
  }

  return (
    <div className={styles.wrapper}>
      <button
        aria-label={`Decrease quantity of ${productName}`}
        onClick={handleDecrease}
        className={styles.button}
      >
        <BiMinus
          aria-hidden="true"
          focusable="false"
          className={styles.buttonIcon}
        />
      </button>

      <p aria-live="polite">{children}</p>

      <button
        aria-label={`Increase quantity of ${productName}`}
        onClick={handleIncrease}
        className={styles.button}
      >
        <BiPlus
          aria-hidden="true"
          focusable="false"
          className={styles.buttonIcon}
        />
      </button>
    </div>
  )
}

export default QuantitySelector
