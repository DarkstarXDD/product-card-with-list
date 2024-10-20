import IconTree from "../Icons/IconTree"

export default function CarbonNeutral() {
  return (
    <div className="flex justify-center items-center gap-2 rounded-lg p-4 bg-rose-50">
      <IconTree style={{ width: "1.25rem", height: "1.25rem" }} />
      <p className="text-preset-4 text-rose-900">
        This is a <strong className="text-preset-5">carbon-neutral </strong>
        delivery
      </p>
    </div>
  )
}
