import { useRef, useState, useEffect } from "react"
import { useCartContext } from "./useCartContext"

import EmptyCart from "../EmptyCart"
import CartItem from "../CartItem"
import CarbonNeutral from "../CarbonNeutral"
import Button from "../Button"
import ConfirmModal from "../ConfirmModal"

export default function Cart() {
  const dialogRef = useRef()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { cart, removeFromCart, resetCart } = useCartContext()
  let itemCountInCart = 0
  let cartTotal = 0

  for (let i = 0; i < cart.length; i++) {
    itemCountInCart += cart[i].itemCount
    cartTotal += cart[i].itemCount * cart[i].price
  }

  function onRemove(id) {
    removeFromCart(id)
  }

  function openConfirmation() {
    setIsModalOpen(true)
  }

  function closeConfirmation() {
    dialogRef.current.close()
    resetCart()
    setIsModalOpen(false)
  }

  useEffect(() => {
    if (isModalOpen && dialogRef.current) {
      dialogRef.current.showModal()
    }
  }, [isModalOpen])

  if (itemCountInCart === 0) {
    return (
      <div className="lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:self-start justify-self-center w-full max-w-[40rem] flex flex-col gap-6 rounded-xl p-6 bg-white">
        <h2 className="text-preset-2 text-red">Your Cart (0)</h2>
        <EmptyCart />
      </div>
    )
  }

  return (
    <div className="lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:self-start justify-self-center w-full max-w-[40rem] flex flex-col gap-6 rounded-xl p-6 bg-white">
      <h2 className="text-preset-2 text-red">Your Cart ({itemCountInCart})</h2>

      <ul className="grid gap-4">
        {cart.map((item) => (
          <CartItem key={item.id} {...item} onRemove={onRemove} />
        ))}
      </ul>

      <p className="flex justify-between items-center text-rose-900">
        <span className="text-preset-4 ">Order Total</span>
        <span className="text-preset-2">${cartTotal.toFixed(2)}</span>
      </p>

      <CarbonNeutral />
      <Button onClick={openConfirmation}>Confirm Order</Button>

      {isModalOpen && (
        <ConfirmModal
          dialogRef={dialogRef}
          cart={cart}
          cartTotal={cartTotal}
          onClose={closeConfirmation}
        />
      )}
    </div>
  )
}
