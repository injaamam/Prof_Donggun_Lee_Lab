import VideoCard from '../components/VideoCard'
import ControlField from '../components/ControlField'
import Publication from '../components/Publication'
import content from '../data/source-content.json'
import publications from '../data/publications.json'

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="red-square" /> NC STATE · INTELLIGENT CONTROLS LAB
          </p>
          <h1>
            We care how
            <br />
            things <em>move.</em>
          </h1>
          <p className="hero-description">
            Advancing the science of control.
            <br />
            Enabling a more intelligent, autonomous world.
          </p>
          <a className="button button-solid" href="/research">
            Explore our research <span>↗</span>
          </a>
          <div className="hero-footnote">
            <span>THEORY → ALGORITHMS → REAL WORLD</span>
            <a href="#research">Discover the lab ↓</a>
          </div>
        </div>
        <ControlField />
      </section>
      <section className="mission section-grid">
        <div className="section-marker">
          <span className="eyebrow">01 / OUR APPROACH</span>
          <span className="small-note">
            From first principles
            <br />
            to real-world impact.
          </span>
        </div>
        <div>
          <h2>
            Fundamental questions.
            <br />
            <em>Real-world answers.</em>
          </h2>
          <p className="lead">
            We develop fundamental theories, design efficient numerical algorithms, and test our
            ideas in the real world to control dynamic systems precisely, efficiently, and
            effectively.
          </p>
          <p className="muted">
            At the intersection of optimal control, learning, and robotics, we turn mathematical
            insight into systems that can navigate an uncertain world.
          </p>
        </div>
      </section>
      <section className="research-preview section-block" id="research">
        <div className="section-top">
          <div>
            <p className="eyebrow">02 / RESEARCH DIRECTIONS</p>
            <h2>Intelligence, in motion.</h2>
          </div>
          <a className="text-link" href="/research">
            Our research ↗
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
              <h3>Safe by design.</h3>
              <span>↗</span>
            </div>
            <p>
              Data-driven safe autonomy and theoretical guarantees. Learning systems that know how
              to stay safe.
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
              <h3>Ready for the real world.</h3>
              <span>↗</span>
            </div>
            <p>
              Real-time control, robustness, and adaptability. Efficient algorithms for decisions
              that cannot wait.
            </p>
            <span className="eyebrow">OPTIMIZATION · PLANNING · ROBUST CONTROL</span>
          </a>
        </div>
      </section>
      <section className="section-block selected-work">
        <div className="section-top">
          <div>
            <p className="eyebrow">03 / SELECTED PUBLICATIONS</p>
            <h2>Ideas moving forward.</h2>
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
            <p className="eyebrow">04 / IN THE FIELD</p>
            <h2>Theory meets reality.</h2>
          </div>
          <span className="small-note">Watch our systems in action.</span>
        </div>
        <div className="video-grid">
          {content.homeVideos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </section>
      <section className="join-banner">
        <div>
          <p className="eyebrow">THE NEXT CHAPTER</p>
          <h2>
            Good questions.
            <br />
            <em>Great company.</em>
          </h2>
        </div>
        <div>
          <p>
            Help shape the future of intelligent control. We welcome curious minds with an appetite
            for challenging problems.
          </p>
          <a className="button button-light" href="/join-us">
            Find your place at ICL <span>↗</span>
          </a>
        </div>
      </section>
    </>
  )
}
