export default function PageHeading({ title, label = 'INTELLIGENT CONTROLS LAB', description }) {
  return (
    <header className="page-heading">
      <p className="eyebrow">
        <span className="red-square" />
        {label}
      </p>
      <h1 className="page-title">
        {title}
        <span className="red-dot">.</span>
      </h1>
      {description && <p className="page-description">{description}</p>}
    </header>
  )
}
