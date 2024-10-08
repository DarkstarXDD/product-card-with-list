import styles from "./FoodItem.module.css"

import { useId } from "react"
import { useCartContext } from "../Cart/useCartContext"

import AddToCartButton from "../AddToCartButton"
import QuantitySelector from "../QuantitySelector"

export default function FoodItem() {
  const id = 1
  const name = "Waffle with Berries"
  const price = 6.5
  const foodId = useId()

  const { cart, itemCount, addToCart, updateItemCount } = useCartContext(id)

  const isInCart = itemCount > 0

  function onUpdateItemCount(newCount) {
    updateItemCount(id, newCount)
  }

  function onAddToCart() {
    addToCart({ id, name, itemCount: 1, price })
  }

  console.log(cart)

  return (
    <section className={styles.foodItem} aria-labelledby={foodId}>
      <picture>
        <source
          srcSet="/assets/images/image-waffle-desktop.jpg"
          media="(min-width: 1440px)"
        />
        <source
          srcSet="/assets/images/image-waffle-tablet.jpg"
          media="(min-width: 768px)"
        />
        <img
          className={styles.foodImage}
          src="/assets/images/image-waffle-mobile.jpg"
          alt=""
        />
      </picture>

      {!isInCart && (
        <AddToCartButton onAddToCart={onAddToCart}>Add to Cart</AddToCartButton>
      )}

      {isInCart && (
        <QuantitySelector
          productName="Waffle with Berries"
          itemCount={itemCount}
          onUpdateItemCount={onUpdateItemCount}
        >
          {itemCount}
        </QuantitySelector>
      )}

      <div className={styles.itemDetails}>
        <p className={styles.category}>Waffle</p>
        <h2 id={foodId} className={styles.name}>
          Waffle with Berries
        </h2>
        <p className={styles.price}>$6.50</p>
      </div>
    </section>
  )
}
