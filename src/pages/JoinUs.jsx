import PageHeading from '../components/PageHeading'
import { Arrow } from '../components/Icons'

export default function JoinUs() {
  return (
    <>
      <PageHeading
        eyebrow="BUILD WHAT MOVES NEXT"
        title={
          <>
            Great research starts
            <br />
            with curious people<span className="red-period">.</span>
          </>
        }
        description="Join us in developing the theories, algorithms, and autonomous systems that move the world forward."
      />
      <section className="container section join-content">
        <aside className="join-aside">
          <span className="eyebrow small">JOIN THE LAB</span>
          <h2>
            Your next chapter,
            <br />
            at NC State.
          </h2>
          <p>
            We welcome researchers with interests in control, robotics, optimization, and machine
            learning.
          </p>
          <a href="/research" className="text-link">
            Explore our research <Arrow diagonal />
          </a>
          <div className="contact-box">
            <span>CONTACT OUR PI</span>
            <h3>Dr. Donggun Lee</h3>
            <a href="mailto:donggun_lee@ncsu.edu">
              donggun_lee@ncsu.edu <Arrow diagonal />
            </a>
          </div>
        </aside>
        <div className="opportunities">
          <article className="opportunity">
            <div className="opportunity-heading">
              <span className="card-number">01 /</span>
              <span className="opening-badge">
                <span className="status-dot" /> RECRUITING 2–3 STUDENTS
              </span>
            </div>
            <h2>Graduate students</h2>
            <p>
              We are currently recruiting 2–3 Ph.D. students. Apply to the NC State Department of
              Mechanical and Aerospace Engineering graduate program through the official admissions
              process.
            </p>
            <p>
              Indicate <strong>Prof. Donggun Lee</strong> as a faculty member you are interested in
              working with.
            </p>
            <a
              href="https://mae.ncsu.edu/mae-graduate-programs/mae-graduate-admissions/"
              className="button button-primary"
              target="_blank"
              rel="noreferrer"
            >
              MAE graduate admissions <Arrow diagonal />
            </a>
            <div className="application-details">
              <h3>Introduce yourself</h3>
              <p>
                You’re also encouraged to email Prof. Lee with the subject{' '}
                <code>[PhD Application]</code> and include:
              </p>
              <ul className="checklist">
                <li>A current CV or resume</li>
                <li>A brief description of your research interests</li>
                <li>A summary of your background and technical strengths</li>
                <li>
                  Relevant coursework in control, robotics, optimization, mathematics, or
                  programming
                </li>
              </ul>
              <a
                href="mailto:donggun_lee@ncsu.edu?subject=%5BPhD%20Application%5D"
                className="text-link"
              >
                Email about Ph.D. opportunities <Arrow diagonal />
              </a>
            </div>
          </article>
          <article className="opportunity">
            <div className="opportunity-heading">
              <span className="card-number">02 /</span>
              <span className="opening-badge neutral">INQUIRIES WELCOME</span>
            </div>
            <h2>Postdoctoral researchers</h2>
            <p>
              We welcome inquiries from prospective postdoctoral researchers whose interests align
              with our research areas.
            </p>
            <div className="application-details">
              <h3>Tell us about your research</h3>
              <p>
                Email Prof. Lee with the subject <code>[Postdoc Application]</code> and include:
              </p>
              <ul className="checklist">
                <li>A current CV</li>
                <li>Your research interests and proposed research direction</li>
                <li>A summary of your research experience and expertise</li>
                <li>Links to 2–3 representative publications or your Google Scholar profile</li>
                <li>Your expected availability or start date</li>
              </ul>
              <a
                href="mailto:donggun_lee@ncsu.edu?subject=%5BPostdoc%20Application%5D"
                className="text-link"
              >
                Email about postdoctoral opportunities <Arrow diagonal />
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
