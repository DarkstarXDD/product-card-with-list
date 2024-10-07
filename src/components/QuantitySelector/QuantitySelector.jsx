import styles from "./QuantitySelector.module.css"

import { BiMinus, BiPlus } from "react-icons/bi"

function QuantitySelector({ children, productName, setItemCount }) {
  function handleDecrease() {
    setItemCount((prevItemCount) => prevItemCount - 1)
  }

  function handleIncrease() {
    setItemCount((prevItemCount) => prevItemCount + 1)
  }

  return (
    <div className={styles.wrapper}>
      <button
        aria-label={`Decrease quantity of ${productName}`}
        onClick={handleDecrease}
        className={styles.button}
      >
        <BiMinus className={styles.buttonIcon} />
      </button>

      <p aria-live="polite">{children}</p>

      <button
        aria-label={`Increase quantity of ${productName}`}
        onClick={handleIncrease}
        className={styles.button}
      >
        <BiPlus className={styles.buttonIcon} />
      </button>
    </div>
  )
}

export default QuantitySelector
