import IconEmptyCart from "../Icons/IconEmptyCart"

export default function EmptyCart() {
  return (
    <div className="grid justify-items-center gap-4 py-4">
      <IconEmptyCart style={{ width: "8rem", height: "8rem" }} />
      <p className="text-preset-5 text-rose-500">
        Your added items will appear here
      </p>
    </div>
  )
}
