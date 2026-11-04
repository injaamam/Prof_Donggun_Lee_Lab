import { useState } from 'react'
import PageHeading from '../components/PageHeading'
import Publication from '../components/Publication'
import publications from '../data/publications.json'

const years = [...new Set(publications.map((paper) => paper.year))]

export default function Publications() {
  const [year, setYear] = useState('All')
  const [query, setQuery] = useState('')
  const visible = publications.filter(
    (paper) =>
      (year === 'All' || paper.year === year) &&
      `${paper.title} ${paper.authors} ${paper.venue}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  )
  return (
    <>
      <PageHeading
        eyebrow="IDEAS, METHODS & DISCOVERIES"
        title={
          <>
            Publications<span className="red-period">.</span>
          </>
        }
        description="Our contributions to control theory, safe autonomy, and intelligent robotics."
      />
      <section className="container section publications-content">
        <div className="publication-toolbar">
          <div className="filter-label">
            EXPLORE OUR WORK <span>{publications.length} publications</span>
          </div>
          <label className="search-field">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <circle cx="10.5" cy="10.5" r="6.5" />
              <path d="m16 16 5 5" />
            </svg>
            <input
              type="search"
              placeholder="Search publications…"
              aria-label="Search publications by title, author, or venue"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
        </div>
        <div className="year-filters" role="group" aria-label="Filter publications by year">
          {['All', ...years].map((option) => (
            <button
              key={option}
              onClick={() => setYear(option)}
              className={year === option ? 'selected' : ''}
              aria-pressed={year === option}
            >
              {option === 'All' ? 'All publications' : option}
            </button>
          ))}
        </div>
        <p className="results-count" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? 'publication' : 'publications'}
        </p>
        {years
          .filter((group) => visible.some((paper) => paper.year === group))
          .map((group) => (
            <section className="publication-group" key={group} aria-label={group}>
              <h2>
                {group}
                <span>{visible.filter((paper) => paper.year === group).length}</span>
              </h2>
              <div>
                {visible
                  .filter((paper) => paper.year === group)
                  .map((paper, index) => (
                    <Publication key={paper.title} paper={paper} number={index + 1} />
                  ))}
              </div>
            </section>
          ))}
        {visible.length === 0 && (
          <div className="empty-state">
            <h2>No publications found.</h2>
            <p>Try another title, author, or year.</p>
            <button
              className="button button-primary"
              onClick={() => {
                setYear('All')
                setQuery('')
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </>
  )
}
