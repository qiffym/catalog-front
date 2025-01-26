export function Header({ title, description }) {
  return (
    <div>
      <h2 className="text-2xl">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  )
}
