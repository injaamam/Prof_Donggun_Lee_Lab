export default function Publication({ paper }) {
  return (
    <article className="publication">
      <h3>{paper.title}</h3>
      <p className="authors">{paper.authors}</p>
      {paper.venue && <p className="venue">{paper.venue}</p>}
      {paper.links.length > 0 && (
        <p className="publication-links">
          {paper.links.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </p>
      )}
    </article>
  )
}
