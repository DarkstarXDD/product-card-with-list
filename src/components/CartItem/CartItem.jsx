import { IoCloseSharp } from "react-icons/io5"

function CartItem({ id, name, itemCount, price, onRemove }) {
  const subTotal = Number(itemCount) * Number(price)

  return (
    <li className="flex flex-col justify-center gap-4">
      <div className="grid grid-cols-cart-item gap-2">
        <h3 className="text-preset-5 text-rose-900">{name}</h3>
        <p className="flex justify-start items-center gap-2">
          <span className="text-preset-5 text-red">{itemCount}x</span>
          <span className="text-preset-4 text-rose-500">
            @ ${price.toFixed(2)}
          </span>
          <span className="text-preset-5 text-rose-500">
            ${subTotal.toFixed(2)}
          </span>
        </p>
        <button
          aria-label="clear item"
          onClick={() => onRemove(id)}
          className="group col-start-2 row-start-1 row-end-3 justify-self-end self-center size-5 flex flex-col justify-center items-center border border-rose-400 rounded-full bg-transparent outline-rose-400 hover:border-rose-900 active:border-rose-900"
        >
          <IoCloseSharp
            aria-hidden="true"
            focusable="false"
            className="group-hover:text-rose-900 group-active:text-rose-900 size-5 text-rose-400"
          />
        </button>
      </div>
      <div className="border-b border-b-rose-100"></div>
    </li>
  )
}

export default CartItem
