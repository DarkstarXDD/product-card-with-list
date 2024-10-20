export default function ModalItem({ name, itemCount, price, image }) {
  const subTotal = Number(itemCount) * Number(price)

  return (
    <li className="grid gap-4">
      <div className="flex justify-between items-center gap-2">
        <div className="grid grid-cols-modalItem justify-items-start items-center gap-x-4 gap-y-2">
          <img
            src={image.thumbnail}
            alt=""
            width={100}
            height={96}
            className="row-start-1 row-end-3 col-start-1 rounded-[0.25rem] size-8 sm:size-12"
          />
          <h3 className="text-preset-5 text-rose-900">{name}</h3>
          <p className="flex justify-center items-center gap-2">
            <span className="text-preset-5 text-red">{itemCount}x</span>
            <span className="text-preset-4 text-rose-500">
              @ ${price.toFixed(2)}
            </span>
          </p>
        </div>
        <p className="text-preset-3 text-rose-900">${subTotal.toFixed(2)}</p>
      </div>

      <div className="border-b border-b-rose-100"></div>
    </li>
  )
}
