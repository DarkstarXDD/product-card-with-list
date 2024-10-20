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
    <dialog
      ref={dialogRef}
      className="w-[95%] max-w-[36rem] bg-white rounded-xl p-6 md:p-10 backdrop:bg-black backdrop:bg-opacity-50"
    >
      <div className="grid gap-8">
        <div className="grid gap-6">
          <IconCheck style={{ width: "2.625rem", height: "2.625rem" }} />
          <div className="grid gap-2">
            <h2 className="text-preset-1 text-rose-900">Order Confirmed</h2>
            <p className="text-preset-3 font-normal text-rose-500">
              We hope you enjoy your food!
            </p>
          </div>
        </div>

        <div className="grid gap-6 bg-rose-50 rounded-lg p-6">
          <ul className="grid gap-4">
            {cart.map((item) => (
              <ModalItem key={item.id} {...item} />
            ))}
          </ul>

          <p className="flex justify-between items-center">
            <span className="text-preset-4 text-rose-900">Order Total</span>
            <span className="text-preset-2 text-rose-900">
              ${cartTotal.toFixed(2)}
            </span>
          </p>
        </div>

        <Button onClick={onClose}>Start New Order</Button>
      </div>
    </dialog>
  )
}
