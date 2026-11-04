export default function PageHeading({ eyebrow, title, description, children }) {
  return (
    <section className="page-heading">
      <div className="container">
        <div className="eyebrow">
          <span />
          {eyebrow}
        </div>
        <h1>{title}</h1>
        {description && <p className="page-description">{description}</p>}
        {children}
      </div>
    </section>
  )
}
