import PageHeading from '../components/PageHeading'
import Publication from '../components/Publication'
import publications from '../data/publications.json'

const years = [...new Set(publications.map((paper) => paper.year))]

export default function Publications() {
  return (
    <>
      <PageHeading title="Publications" />
      {years.map((year) => (
        <section className="publication-group" key={year}>
          <h2>{year}</h2>
          {publications
            .filter((paper) => paper.year === year)
            .map((paper) => (
              <Publication key={paper.title} paper={paper} />
            ))}
        </section>
      ))}
    </>
  )
}
