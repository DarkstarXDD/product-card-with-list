import styles from "./Modal.module.css"

import checkIcon from "../../assets/icon-order-confirmed.svg"

import ModalItem from "../ModalItem"
import Button from "../Button"

export default function Modal() {
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

      <ul className={styles.modalItems}>
        <ModalItem />
      </ul>

      <Button>Start New Order</Button>
    </div>
  )
}
