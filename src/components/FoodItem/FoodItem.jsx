import styles from "./FoodItem.module.css"

import { useState, useId } from "react"

import AddToCartButton from "../AddToCartButton"
import QuantitySelector from "../QuantitySelector"

export default function FoodItem() {
  const [isInCart, setIsInCart] = useState(false)
  const [itemCount, setItemCount] = useState(0)
  const foodId = useId()

  function handleAddToCart() {
    setIsInCart(true)
    setItemCount(1)
  }

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
        <AddToCartButton handleAddToCart={handleAddToCart}>
          Add to Cart
        </AddToCartButton>
      )}

      {isInCart && (
        <QuantitySelector
          productName="Waffle with Berries"
          itemCount={itemCount}
          setItemCount={setItemCount}
          setIsInCart={setIsInCart}
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
