import VideoCard from '../components/VideoCard'
import Publication from '../components/Publication'
import content from '../data/source-content.json'
import publications from '../data/publications.json'

export default function Home() {
  return (
    <>
      <section className="home-hero informative-hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="red-square" />
            NORTH CAROLINA STATE UNIVERSITY
          </p>
          <h1>
            Intelligent
            <br />
            Controls Lab
          </h1>
          <h2 className="research-statement">
            Safe autonomy and real-time control for mobile robots.
          </h2>
          <p className="hero-description">
            We develop control theory and algorithms that help robots navigate safely and respond to
            disturbances, uncertain models, and incomplete sensor information.
          </p>
          <div className="hero-actions">
            <a className="button button-solid" href="/research">
              Research areas <span>↗</span>
            </a>
            <a className="text-link" href="/publications">
              Publications ↗
            </a>
          </div>
        </div>
        <aside className="lab-overview" aria-label="Lab overview">
          <h2>Lab overview</h2>
          <dl>
            <div>
              <dt>Principal investigator</dt>
              <dd>
                <a href="/team">Dr. Donggun Lee ↗</a>
                <span>Assistant Professor</span>
              </dd>
            </div>
            <div>
              <dt>Department</dt>
              <dd>
                Mechanical and Aerospace Engineering<span>NC State University · Raleigh, NC</span>
              </dd>
            </div>
            <div>
              <dt>Methods</dt>
              <dd>
                Optimal control, Hamilton–Jacobi reachability, reinforcement learning, and
                mathematical optimization
              </dd>
            </div>
            <div>
              <dt>Applications</dt>
              <dd>
                Ground vehicle navigation, autonomous driving, aerial vehicles, and legged robots
              </dd>
            </div>
          </dl>
          <a className="recruiting-link" href="/join-us">
            <span className="red-square" />
            Recruiting 2–3 Ph.D. students <span>↗</span>
          </a>
        </aside>
      </section>
      <section className="research-preview section-block" id="research">
        <div className="section-top">
          <div>
            <p className="eyebrow">01 / RESEARCH AREAS</p>
            <h2>Safe autonomy & real-time control</h2>
          </div>
          <a className="text-link" href="/research">
            Research details ↗
          </a>
        </div>
        <div className="research-pair">
          <a className="research-feature" href="/research#safe-autonomy">
            <div className="research-visual safety-visual">
              <img
                src="/images/safety-filter.jpg"
                alt="Safety-filter control experiment"
                loading="lazy"
              />
              <span className="image-index">01 / SAFETY</span>
            </div>
            <div className="research-feature-title">
              <h3>Data-driven safe autonomy</h3>
              <span>↗</span>
            </div>
            <p>
              We combine Hamilton–Jacobi reachability, control barrier functions, and learning to
              establish safety guarantees for robots with uncertain dynamics or incomplete
              information.
            </p>
            <span className="eyebrow">REACHABILITY · LEARNING · FORMAL SAFETY</span>
          </a>
          <a className="research-feature" href="/research#real-time-control">
            <div className="research-visual">
              <img
                src="/images/outdoor-navigation.jpg"
                alt="Outdoor autonomous navigation experiment"
                loading="lazy"
              />
              <span className="image-index">02 / CONTROL</span>
            </div>
            <div className="research-feature-title">
              <h3>Real-time robust control</h3>
              <span>↗</span>
            </div>
            <p>
              We develop efficient optimal control solvers and model predictive control methods for
              robots that must replan in real time and handle disturbances.
            </p>
            <span className="eyebrow">OPTIMIZATION · PLANNING · ROBUST CONTROL</span>
          </a>
        </div>
      </section>
      <section className="section-block selected-work">
        <div className="section-top">
          <div>
            <p className="eyebrow">02 / PUBLICATIONS</p>
            <h2>Recent publications</h2>
          </div>
          <a className="text-link" href="/publications">
            All publications ↗
          </a>
        </div>
        {publications
          .filter((p) => p.year !== 'Under Review')
          .slice(0, 3)
          .map((p) => (
            <div className="selected-paper" key={p.title}>
              <span className="eyebrow">{p.year}</span>
              <Publication paper={p} />
            </div>
          ))}
      </section>
      <section className="section-block">
        <div className="section-top">
          <div>
            <p className="eyebrow">03 / EXPERIMENTS</p>
            <h2>Robot experiments & control demonstrations</h2>
          </div>
          <span className="small-note">Navigation, safety filtering, and robust control.</span>
        </div>
        <div className="video-grid">
          {content.homeVideos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </section>
      <section className="join-banner">
        <div>
          <p className="eyebrow">04 / OPEN POSITIONS</p>
          <h2>
            Ph.D. recruitment &<br />
            postdoctoral inquiries
          </h2>
        </div>
        <div>
          <p>
            We are recruiting 2–3 Ph.D. students in control, robotics, optimization, and learning.
            Prospective postdoctoral researchers can contact Prof. Lee about research opportunities.
          </p>
          <a className="button button-light" href="/join-us">
            Application instructions <span>↗</span>
          </a>
        </div>
      </section>
    </>
  )
}
