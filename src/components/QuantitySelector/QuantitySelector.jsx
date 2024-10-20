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
    <div className="col-start-1 row-start-2 row-end-4 w-40 flex justify-between items-center border border-red rounded-full text-preset-5 bg-red p-3 text-white">
      <button
        aria-label={`Decrease quantity of ${productName}`}
        onClick={handleDecrease}
        className="group size-5 flex justify-center items-center border border-white rounded-full outline-white bg-transparent hover:bg-white"
      >
        <BiMinus
          aria-hidden="true"
          focusable="false"
          className="size-5 group-hover:text-red"
        />
      </button>

      <p aria-live="polite">{children}</p>

      <button
        aria-label={`Increase quantity of ${productName}`}
        onClick={handleIncrease}
        className="group size-5 flex justify-center items-center border border-white rounded-full outline-white bg-transparent hover:bg-white"
      >
        <BiPlus
          aria-hidden="true"
          focusable="false"
          className="size-5 group-hover:text-red"
        />
      </button>
    </div>
  )
}

export default QuantitySelector
