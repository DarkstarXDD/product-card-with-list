export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-preset-3 text-white rounded-full border outline-red border-red px-6 py-4 bg-red hover:bg-red-hover hover:border-red-hover active:bg-red-hover active:border-red-hover"
    >
      {children}
    </button>
  )
}
