import { Arrow } from './Icons'

export default function Publication({ paper, number }) {
  return (
    <article className="publication">
      {number !== undefined && (
        <span className="publication-number">{String(number).padStart(2, '0')}</span>
      )}
      <div className="publication-body">
        <h3>{paper.title}</h3>
        <p>{paper.authors}</p>
        {paper.venue && <p className="publication-venue">{paper.venue}</p>}
        <div className="publication-links">
          {paper.links.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
              {link.label === 'PDF' ? 'Paper' : 'Video'}
              <Arrow diagonal />
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}
