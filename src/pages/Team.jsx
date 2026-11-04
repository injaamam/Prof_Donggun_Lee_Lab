import PageHeading from '../components/PageHeading'
const students = [
  { name: 'Gabriel Chenevert', image: 'gabriel-chenevert' },
  { name: 'Xinlei Zhang', image: 'xinlei-zhang' },
  { name: 'Haydon (Haechan) Pyon', image: 'haydon-pyon' },
]
export default function Team() {
  return (
    <>
      <PageHeading
        title="Research team"
        label="INTELLIGENT CONTROLS LAB"
        description="Led by Dr. Donggun Lee, Assistant Professor of Mechanical and Aerospace Engineering at NC State University. Meet our principal investigator, Ph.D. students, and alumni."
      />
      <section className="principal-investigator">
        <div className="portrait-frame">
          <img src="/images/donggun-lee.png" alt="Dr. Donggun Lee" />
          <span className="portrait-label">PRINCIPAL INVESTIGATOR / ICL</span>
        </div>
        <div className="investigator-copy">
          <p className="eyebrow">PRINCIPAL INVESTIGATOR</p>
          <h2>Dr. Donggun Lee</h2>
          <p className="lead">Assistant Professor</p>
          <p className="muted">
            Mechanical and Aerospace Engineering
            <br />
            North Carolina State University
          </p>
          <div className="education">
            <p>
              <span>2022–2023</span>
              <span>
                Postdoctoral Associate, MIT
                <br />
                <small>Advisor: Prof. Jonathan P. How</small>
              </span>
            </p>
            <p>
              <span>2022</span>
              <span>
                Ph.D. in Mechanical Engineering, UC Berkeley
                <br />
                <small>Advisor: Prof. Claire J. Tomlin</small>
              </span>
            </p>
          </div>
          <a className="text-link" href="mailto:donggun_lee@ncsu.edu">
            donggun_lee@ncsu.edu ↗
          </a>
        </div>
      </section>
      <section className="team-section section-block">
        <div className="section-top">
          <div>
            <p className="eyebrow">CURRENT STUDENTS</p>
            <h2>Ph.D. students</h2>
          </div>
          <span className="small-note">Mechanical and Aerospace Engineering</span>
        </div>
        <div className="students">
          {students.map((s, i) => (
            <article key={s.name}>
              <div className="student-image">
                <img src={`/images/${s.image}.png`} alt={s.name} loading="lazy" />
                <span className="student-index">0{i + 1}</span>
              </div>
              <p className="eyebrow">PH.D. STUDENT</p>
              <h3>{s.name}</h3>
              <p>Mechanical and Aerospace Engineering</p>
            </article>
          ))}
        </div>
      </section>
      <section className="alumni section-grid">
        <span className="eyebrow">OUR ALUMNI</span>
        <div>
          <h2>Alumni</h2>
          <p>
            Jatin Sikka{' '}
            <span className="muted">
              {' '}
              / B.S., Mechanical and Aerospace Engineering, NCSU · 2023
            </span>
          </p>
        </div>
      </section>
      <section className="team-invitation">
        <h2>Ph.D. and postdoctoral opportunities</h2>
        <a className="text-link" href="/join-us">
          Join our team ↗
        </a>
      </section>
    </>
  )
}
