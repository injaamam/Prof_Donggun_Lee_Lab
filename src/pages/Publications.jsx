import { useState } from 'react'
import PageHeading from '../components/PageHeading'
import Publication from '../components/Publication'
import publications from '../data/publications.json'
const years = [...new Set(publications.map((paper) => paper.year))]
export default function Publications() {
  const [year, setYear] = useState('All')
  const [query, setQuery] = useState('')
  const filtered = publications.filter(
    (p) =>
      (year === 'All' || p.year === year) &&
      `${p.title} ${p.authors} ${p.venue}`.toLowerCase().includes(query.toLowerCase()),
  )
  const reset = () => {
    setYear('All')
    setQuery('')
  }
  return (
    <>
      <PageHeading
        title="A record of inquiry"
        label="PUBLICATIONS / THE ARCHIVE"
        description="The theories, methods, and experiments behind our work. Explore publications in control, robotics, optimization, and learning."
      />
      <div className="archive-toolbar">
        <label className="search-label">
          <span className="eyebrow">SEARCH THE ARCHIVE</span>
          <input
            type="search"
            placeholder="Search by title, author, or venue…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <span className="archive-count" aria-live="polite">
          {filtered.length} publications
        </span>
      </div>
      <div className="year-filters" aria-label="Filter by publication year">
        {['All', ...years].map((y) => (
          <button key={y} onClick={() => setYear(y)} aria-pressed={year === y}>
            {y}
          </button>
        ))}
      </div>
      <div className="archive-results">
        {years
          .filter((y) => filtered.some((p) => p.year === y))
          .map((y) => (
            <section className="publication-group" key={y}>
              <h2>
                {y === 'Under Review' ? (
                  <>
                    Under <br />
                    review
                  </>
                ) : (
                  y
                )}
              </h2>
              <div>
                {filtered
                  .filter((p) => p.year === y)
                  .map((p) => (
                    <Publication key={p.title} paper={p} />
                  ))}
              </div>
            </section>
          ))}
        {!filtered.length && (
          <div className="empty-state">
            <h2>No matching publications.</h2>
            <p>Try another title, author, venue, or year.</p>
            <button className="button" onClick={reset}>
              Clear filters ↗
            </button>
          </div>
        )}
      </div>
    </>
  )
}
