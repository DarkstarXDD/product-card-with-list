import IconCart from "../Icons/IconCart"

export default function AddToCartButton({ children, onAddToCart }) {
  return (
    <button
      onClick={onAddToCart}
      className="col-start-1 row-start-2 row-end-4 flex justify-center items-center gap-2 border border-rose-400 rounded-full bg-white px-7 py-3 text-preset-5 text-rose-900 outline-red hover:border-red hover:text-red active:border-red active:text-red"
    >
      <IconCart style={{ width: "1.25rem", height: "1.25rem" }} />
      {children}
    </button>
  )
}
