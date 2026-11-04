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
        title={
          <>
            Let’s move
            <br />
            <em>forward, together</em>
          </>
        }
        label="JOIN THE LAB / OPEN POSSIBILITIES"
        description="We’re looking for curious, motivated researchers who want to connect rigorous theory with the possibilities of the real world."
      />
      <div className="opportunity-note">
        <span className="red-square" />
        <span>Currently recruiting 2–3 Ph.D. students</span>
        <a href="mailto:donggun_lee@ncsu.edu">Start a conversation ↗</a>
      </div>
      <section className="section-grid application-section">
        <aside className="section-marker">
          <span className="eyebrow">01 / GRADUATE RESEARCH</span>
          <p>
            Your next question
            <br />
            starts here.
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
            Bring your perspective.
            <br />
            Explore new directions.
          </p>
        </aside>
        <div className="document join-page">
          <SourceContent blocks={content.join.slice(split)} />
        </div>
      </section>
    </>
  )
}
