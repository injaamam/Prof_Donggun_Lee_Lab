import PageHeading from '../components/PageHeading'
import { Arrow } from '../components/Icons'

const students = [
  { name: 'Gabriel Chenevert', image: 'gabriel-chenevert' },
  { name: 'Xinlei Zhang', image: 'xinlei-zhang' },
  { name: 'Haydon (Haechan) Pyon', image: 'haydon-pyon' },
]

export default function Team() {
  return (
    <>
      <PageHeading
        eyebrow="THE PEOPLE BEHIND THE RESEARCH"
        title={
          <>
            Our team<span className="red-period">.</span>
          </>
        }
        description="A shared curiosity for how things move, and how to make them move better."
      />
      <section className="container section team-content">
        <div className="section-label">PRINCIPAL INVESTIGATOR</div>
        <article className="pi-card">
          <div className="pi-photo">
            <img src="/images/donggun-lee.png" alt="Dr. Donggun Lee" />
          </div>
          <div className="pi-info">
            <span className="eyebrow small">PRINCIPAL INVESTIGATOR</span>
            <h2>Dr. Donggun Lee</h2>
            <p className="pi-role">Assistant Professor</p>
            <p>
              Mechanical and Aerospace Engineering
              <br />
              North Carolina State University
            </p>
            <div className="education">
              <p>
                <strong>MIT</strong>
                <span>
                  Postdoctoral Associate · 2022–2023
                  <br />
                  <small>Advisor: Prof. Jonathan P. How</small>
                </span>
              </p>
              <p>
                <strong>UC Berkeley</strong>
                <span>
                  Ph.D. in Mechanical Engineering · 2022
                  <br />
                  <small>Advisor: Prof. Claire J. Tomlin</small>
                </span>
              </p>
            </div>
            <a className="text-link" href="mailto:donggun_lee@ncsu.edu">
              donggun_lee@ncsu.edu <Arrow diagonal />
            </a>
          </div>
        </article>
        <div className="section-heading students-heading">
          <h2>Ph.D. students</h2>
          <span className="muted">The next generation of control researchers.</span>
        </div>
        <div className="people-grid">
          {students.map((student) => (
            <article className="person-card" key={student.name}>
              <div className="person-photo">
                <img src={`/images/${student.image}.png`} alt={student.name} loading="lazy" />
              </div>
              <h3>{student.name}</h3>
              <span className="person-role">Ph.D. Student</span>
              <p>Mechanical and Aerospace Engineering</p>
            </article>
          ))}
        </div>
        <div className="alumni-section">
          <h2>Alumni</h2>
          <div className="alumni-row">
            <h3>Jatin Sikka</h3>
            <p>B.S., Mechanical and Aerospace Engineering</p>
            <span>NC State · 2023</span>
          </div>
        </div>
        <div className="simple-cta">
          <h3>There’s room for your ideas here.</h3>
          <a className="text-link" href="/join-us">
            Explore opportunities <Arrow diagonal />
          </a>
        </div>
      </section>
    </>
  )
}
