import styles from "./Modal.module.css"

import checkIcon from "../../assets/icon-order-confirmed.svg"

import { useCartContext } from "../Cart/useCartContext"

import ModalItem from "../ModalItem"
import Button from "../Button"

export default function Modal() {
  const { cart } = useCartContext()
  const itemCountInCart = cart.length
  let cartTotal = 0

  for (let i = 0; i < itemCountInCart; i++) {
    cartTotal += cart[i].itemCount * cart[i].price
  }

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.topWrapper}>
        <img
          src={checkIcon}
          alt=""
          width={48}
          height={48}
          className={styles.checkIcon}
        />
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

      <Button>Start New Order</Button>
    </div>
  )
}
