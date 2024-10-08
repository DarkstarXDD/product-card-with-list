import styles from "./FoodList.module.css"

import FoodItem from "../FoodItem"

import data from "../../data/data.json"

export default function FoodList() {
  return (
    <div className={styles.foodItems}>
      {data.map((item) => (
        <FoodItem
          key={item.name}
          id={item.name}
          name={item.name}
          price={item.price}
          category={item.category}
          image={item.image}
        />
      ))}
    </div>
  )
}
