import PageHeading from '../components/PageHeading'

const students = [
  { name: 'Gabriel Chenevert', image: 'gabriel-chenevert' },
  { name: 'Xinlei Zhang', image: 'xinlei-zhang' },
  { name: 'Haydon (Haechan) Pyon', image: 'haydon-pyon' },
]

export default function Team() {
  return (
    <>
      <PageHeading title="Our Team" />
      <section className="principal-investigator">
        <img src="/images/donggun-lee.png" alt="Dr. Donggun Lee" />
        <div>
          <h2>Dr. Donggun Lee</h2>
          <p>Principal Investigator</p>
          <p>
            Assistant Professor, Mechanical and Aerospace Engineering, North Carolina State
            University
          </p>
          <p>Postdoctoral Associate, MIT (2022 - 2023) | Advisor: Prof. Jonathan P. How</p>
          <p>
            Ph.D. in Mechanical Engineering, UC Berkeley (2022) | Advisor: Prof. Claire J. Tomlin
          </p>
        </div>
      </section>
      <section className="team-section">
        <h2>PhD Students</h2>
        <div className="students">
          {students.map((student) => (
            <article key={student.name}>
              <img src={`/images/${student.image}.png`} alt={student.name} loading="lazy" />
              <h3>{student.name}</h3>
              <p>Mechanical and Aerospace Engineering</p>
            </article>
          ))}
        </div>
      </section>
      <section className="team-section">
        <h2>Alumni</h2>
        <p>Jatin Sikka, B.S., Mechanical and Aerospace Engineering, NCSU (2023)</p>
      </section>
    </>
  )
}
