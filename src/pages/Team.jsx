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
        title={
          <>
            The minds
            <br />
            <em>behind the motion</em>
          </>
        }
        label="OUR PEOPLE / SHARED CURIOSITY"
        description="A team brought together by fundamental questions and a drive to make intelligent systems work in the real world."
      />
      <section className="principal-investigator">
        <div className="portrait-frame">
          <img src="/images/donggun-lee.png" alt="Dr. Donggun Lee" />
          <span className="portrait-label">PRINCIPAL INVESTIGATOR / ICL</span>
        </div>
        <div className="investigator-copy">
          <p className="eyebrow">LEADING THE LAB</p>
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
            <p className="eyebrow">RESEARCH TOGETHER</p>
            <h2>Doctoral researchers.</h2>
          </div>
          <span className="small-note">Different perspectives. Shared ambition.</span>
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
          <h2>Part of our story.</h2>
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
        <h2>There’s room for your ideas.</h2>
        <a className="text-link" href="/join-us">
          Join our team ↗
        </a>
      </section>
    </>
  )
}
