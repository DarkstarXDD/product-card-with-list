import styles from "./CarbonNeutral.module.css"

export default function CarbonNeutral() {
  return (
    <div className={styles.wrapper}>
      <img
        src="/assets/images/icon-carbon-neutral.svg"
        width={20}
        height={20}
        alt=""
        className={styles.icon}
      />
      <p className={styles.text}>
        This is a <strong className={styles.textStrong}>carbon-neutral </strong>
        delivery
      </p>
    </div>
  )
}
