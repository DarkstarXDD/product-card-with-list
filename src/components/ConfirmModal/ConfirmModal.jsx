import styles from "./ConfirmModal.module.css"

import { useEffect } from "react"

import IconCheck from "../Icons/IconCheck"

import ModalItem from "../ModalItem"
import Button from "../Button"

export default function ConfirmModal({ dialogRef, cart, cartTotal, onClose }) {
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        onClose()
      }
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = "visible"
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [onClose])

  return (
    <dialog ref={dialogRef} className={styles.dialog}>
      <div className={styles.modalWrapper}>
        <div className={styles.topWrapper}>
          <IconCheck style={{ width: "2.625rem", height: "2.625rem" }} />
          <div className={styles.textWrapper}>
            <h2 className={styles.heading}>Order Confirmed</h2>
            <p className={styles.text}>We hope you enjoy your food!</p>
          </div>
        </div>

        <div className={styles.bottomWrapper}>
          <ul className={styles.modalItems}>
            {cart.map((item) => (
              <ModalItem key={item.id} {...item} />
            ))}
          </ul>

          <p className={styles.orderTotalWrapper}>
            <span className={styles.orderTotalText}>Order Total</span>
            <span className={styles.orderTotalPrice}>
              ${cartTotal.toFixed(2)}
            </span>
          </p>
        </div>

        <Button onClick={onClose}>Start New Order</Button>
      </div>
    </dialog>
  )
}
