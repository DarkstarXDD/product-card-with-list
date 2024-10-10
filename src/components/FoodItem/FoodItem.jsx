import styles from "./FoodItem.module.css"

import { useId } from "react"
import { useCartContext } from "../Cart/useCartContext"

import AddToCartButton from "../AddToCartButton"
import QuantitySelector from "../QuantitySelector"

export default function FoodItem({ id, name, price, category, image }) {
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
      <picture className={styles.foodPicture}>
        <source srcSet={image.desktop} media="(min-width: 1440px)" />
        <source srcSet={image.tablet} media="(min-width: 576px)" />
        <img className={styles.foodImage} src={image.mobile} alt="" />
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
        <p className={styles.category}>{category}</p>
        <h2 id={foodId} className={styles.name}>
          {name}
        </h2>
        <p className={styles.price}>${price}</p>
      </div>
    </section>
  )
}
