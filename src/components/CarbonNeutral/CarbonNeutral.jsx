import styles from "./CarbonNeutral.module.css"

import IconTree from "../Icons/IconTree"

export default function CarbonNeutral() {
  return (
    <div className={styles.wrapper}>
      <IconTree style={{ width: "1.25rem", height: "1.25rem" }} />
      <p className={styles.text}>
        This is a <strong className={styles.textStrong}>carbon-neutral </strong>
        delivery
      </p>
    </div>
  )
}
