import SourceContent from '../components/SourceContent'
import PageHeading from '../components/PageHeading'
import content from '../data/source-content.json'
const split = content.join.findIndex(
  (b) => b.type === 'heading' && b.content[0] === 'Postdoctoral Positions',
)

function ApplicationSection({ blocks, number, label, summary, id }) {
  const materialsIndex = blocks.findIndex((block) => block.type === 'list') - 1
  return (
    <section className="section-grid application-section" aria-labelledby={id}>
      <header className="section-marker">
        <span className="eyebrow">{number} / {label}</span>
        <h2 id={id}>{blocks[0].content[0]}</h2>
        <p>{summary}</p>
      </header>
      <div className="document join-page">
        <div className="application-overview">
          <SourceContent blocks={blocks.slice(1, 2)} />
        </div>
        {materialsIndex > 2 && (
          <div className="application-group">
            <h3>How to apply</h3>
            <SourceContent blocks={blocks.slice(2, materialsIndex)} />
          </div>
        )}
        <div className="application-group">
          <h3>Email materials</h3>
          <SourceContent blocks={blocks.slice(materialsIndex)} />
        </div>
      </div>
    </section>
  )
}

export default function JoinUs() {
  return (
    <div className="join-us-page">
      <PageHeading
        title="Join Us"
        label="PH.D. STUDENTS & POSTDOCTORAL RESEARCHERS"
        description="We are recruiting 2–3 Ph.D. students and welcome inquiries from prospective postdoctoral researchers with interests aligned with our research areas. Application instructions and requested materials are listed below."
      />
      <div className="opportunity-note">
        <span className="red-square" />
        <span>Currently recruiting 2–3 Ph.D. students</span>
        <a href="mailto:donggun_lee@ncsu.edu">Email Prof. Lee ↗</a>
      </div>
      <ApplicationSection
        blocks={content.join.slice(1, split)}
        number="01"
        label="GRADUATE RESEARCH"
        summary="Apply through NC State MAE Graduate Admissions. Indicate Prof. Donggun Lee in your application."
        id="graduate-students"
      />
      <ApplicationSection
        blocks={content.join.slice(split)}
        number="02"
        label="POSTDOCTORAL RESEARCH"
        summary="Contact Prof. Lee directly by email. Include the information listed below."
        id="postdoctoral-positions"
      />
    </div>
  )
}
