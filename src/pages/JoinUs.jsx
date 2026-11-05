import SourceContent from '../components/SourceContent'
import PageHeading from '../components/PageHeading'
import content from '../data/source-content.json'
const split = content.join.findIndex(
  (b) => b.type === 'heading' && b.content[0] === 'Postdoctoral Positions',
)
export default function JoinUs() {
  return (
    <>
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
      <section className="section-grid application-section">
        <aside className="section-marker">
          <span className="eyebrow">01 / GRADUATE RESEARCH</span>
          <p>
            Apply through NC State MAE Graduate Admissions. Indicate Prof. Donggun Lee in your
            application.
          </p>
        </aside>
        <div className="document join-page">
          <SourceContent blocks={content.join.slice(1, split)} />
        </div>
      </section>
      <section className="section-grid application-section">
        <aside className="section-marker">
          <span className="eyebrow">02 / POSTDOCTORAL RESEARCH</span>
          <p>
            Contact Prof. Lee directly by email. Include the information listed below.
          </p>
        </aside>
        <div className="document join-page">
          <SourceContent blocks={content.join.slice(split)} />
        </div>
      </section>
    </>
  )
}
