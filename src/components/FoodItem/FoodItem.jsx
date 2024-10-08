import styles from "./FoodItem.module.css"

import { useState, useId } from "react"
import { useCartContext } from "../Cart/useCartContext"

import AddToCartButton from "../AddToCartButton"
import QuantitySelector from "../QuantitySelector"

export default function FoodItem() {
  const { cart, addToCart, updateItemCount } = useCartContext()
  const [itemCount, setItemCount] = useState(0)

  const foodId = useId()
  const isInCart = itemCount > 0

  const name = "Waffle with Berries"
  const price = 6.5

  function onUpdateItemCount(newCount) {
    setItemCount(newCount)
    updateItemCount(name, newCount)
  }

  function onAddToCart() {
    setItemCount(1)
    addToCart({ name, itemCount: 1, price })
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
