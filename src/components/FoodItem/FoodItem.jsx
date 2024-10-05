import styles from "./FoodItem.module.css"

// import { useId } from "react"

import AddToCartButton from "../AddToCartButton"

export default function FoodItem() {
  // const foodId = useId()

  return (
    <section className={styles.foodItem} aria-labelledby="food-name">
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
      <AddToCartButton>Add to Cart</AddToCartButton>

      <div className={styles.itemDetails}>
        <p className={styles.category}>Waffle</p>
        <h2 id="food-name" className={styles.name}>
          Waffle with Berries
        </h2>
        <p className={styles.price}>$6.50</p>
      </div>
    </section>
  )
}
