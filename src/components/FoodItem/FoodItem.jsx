import { useId } from "react"
import { useCartContext } from "../Cart/useCartContext"

import AddToCartButton from "../AddToCartButton"
import QuantitySelector from "../QuantitySelector"

export default function FoodItem({ id, name, price, category, image }) {
  const foodId = useId()

  const { itemCount, addToCart, updateItemCount } = useCartContext(id)

  const isInCart = itemCount > 0

  function onAddToCart() {
    addToCart({ id, name, itemCount: 1, price, image })
  }

  function onUpdateItemCount(newCount) {
    updateItemCount(id, newCount)
  }

  return (
    <section aria-labelledby={foodId} className="grid grid-cols-1 gap-3">
      <div className="grid grid-rows-button-overlap justify-items-center">
        <picture className="col-start-1 row-start-1 row-end-3">
          <source srcSet={image.desktop} media="(min-width: 90rem)" />
          <source srcSet={image.tablet} media="(min-width: 36rem)" />
          <img
            className={`rounded-lg border-2 ${isInCart ? "border-red" : "border-transparent"}`}
            src={image.mobile}
            alt=""
          />
        </picture>

        {!isInCart && (
          <AddToCartButton onAddToCart={onAddToCart}>
            Add to Cart
          </AddToCartButton>
        )}

        {isInCart && (
          <QuantitySelector
            itemCount={itemCount}
            onUpdateItemCount={onUpdateItemCount}
          >
            {itemCount}
          </QuantitySelector>
        )}
      </div>

      <div className="flex flex-col items-start justify-center gap-1">
        <p className="text-preset-4 text-rose-500">{category}</p>
        <h3 id={foodId} className="text-preset-3 text-rose-900">
          {name}
        </h3>
        <p className="text-preset-3 text-red">${price.toFixed(2)}</p>
      </div>
    </section>
  )
}
