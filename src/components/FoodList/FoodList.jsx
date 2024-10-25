import FoodItem from "../FoodItem"

import data from "../../data/data.json"

export default function FoodList() {
  return (
    <>
      <h2 className="sr-only">Dessert Items</h2>
      <div className="grid justify-center gap-8 md:grid-cols-foodItems-md md:gap-x-6 md:gap-y-8 lg:grid-cols-foodItems-lg">
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
    </>
  )
}
