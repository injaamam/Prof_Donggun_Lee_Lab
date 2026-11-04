import { Arrow } from '../components/Icons'
import VideoCard from '../components/VideoCard'
import { videos } from '../data/videos'

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span />
              INTELLIGENT CONTROLS LAB · NC STATE
            </div>
            <h1>
              We care how
              <br />
              things <em>move.</em>
            </h1>
            <p>
              We develop fundamental theories, design efficient numerical algorithms, and test our
              ideas in the real world to control dynamic systems precisely, efficiently, and
              effectively.
            </p>
            <div className="hero-actions">
              <a href="/research" className="button button-primary">
                Explore our research <Arrow />
              </a>
              <a href="/join-us" className="text-link">
                Join our team <Arrow diagonal />
              </a>
            </div>
            <div className="hero-note">
              <span className="status-dot" /> From mathematical theory to real-world autonomy.
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image">
              <img
                src="/images/outdoor-navigation.jpg"
                alt="Autonomous ground robot navigating an outdoor path at NC State"
                fetchPriority="high"
              />
              <a
                href="https://www.youtube.com/watch?v=rMNBhOZjYVA"
                target="_blank"
                rel="noreferrer"
                className="hero-video-link"
              >
                <span className="mini-play">▶</span> RESEARCH IN MOTION <Arrow diagonal />
              </a>
              <span className="image-corner top-left" />
              <span className="image-corner bottom-right" />
            </div>
            <div className="hero-caption">
              <span>
                <span className="status-dot" /> REAL-WORLD TESTING
              </span>
              <span>Intelligent systems. Real impact.</span>
            </div>
          </div>
        </div>
      </section>
      <div className="discipline-strip">
        <div className="container">
          <span>THEORY. ALGORITHMS. AUTONOMY.</span>
          <div>
            <span>Optimal control</span>
            <i />
            <span>Reinforcement learning</span>
            <i />
            <span>Mathematical optimization</span>
          </div>
        </div>
      </div>
      <section className="section container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span />
              OUR RESEARCH
            </div>
            <h2>
              Smarter decisions.
              <br />
              Safer autonomous systems.
            </h2>
          </div>
          <p>
            We connect fundamental control theory with practical robotics to help autonomous systems
            navigate a complex, uncertain world.
          </p>
        </div>
        <div className="research-grid">
          <a href="/research#safe-autonomy" className="research-card">
            <div className="card-top">
              <span className="card-number">01 /</span>
              <Arrow diagonal />
            </div>
            <div className="research-icon">
              <svg viewBox="0 0 72 72" fill="none" aria-hidden="true">
                <path
                  d="m36 9 22 9v17c0 15-22 28-22 28S14 50 14 35V18l22-9Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path d="m25 35 8 8 16-17" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="36" cy="35" r="24" stroke="currentColor" strokeOpacity=".18" />
              </svg>
            </div>
            <span className="eyebrow small">SAFETY + LEARNING</span>
            <h3>
              Data-driven
              <br />
              safe autonomy
            </h3>
            <p>
              Bringing the adaptability of learning together with the mathematical guarantees of
              formal safety theory.
            </p>
            <span className="card-link">
              Explore research <Arrow />
            </span>
          </a>
          <a href="/research#realtime-control" className="research-card">
            <div className="card-top">
              <span className="card-number">02 /</span>
              <Arrow diagonal />
            </div>
            <div className="research-icon">
              <svg viewBox="0 0 72 72" fill="none" aria-hidden="true">
                <circle cx="36" cy="37" r="24" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M36 20v18l13 7M29 6h14M36 6v7M54 16l5-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="36" cy="37" r="3" fill="currentColor" />
              </svg>
            </div>
            <span className="eyebrow small">EFFICIENCY + ADAPTABILITY</span>
            <h3>
              Real-time
              <br />
              robust control
            </h3>
            <p>
              Efficient algorithms that plan ahead, react to uncertainty, and make optimal decisions
              in real time.
            </p>
            <span className="card-link">
              Explore research <Arrow />
            </span>
          </a>
        </div>
      </section>
      <section className="section demos-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span />
                FROM THEORY TO PRACTICE
              </div>
              <h2>See our work in motion.</h2>
            </div>
            <a href="/research" className="text-link">
              More about our research <Arrow diagonal />
            </a>
          </div>
          <div className="video-grid">
            {videos.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>
        </div>
      </section>
      <section className="container join-section">
        <div className="join-banner">
          <div>
            <div className="eyebrow">BUILD WHAT MOVES NEXT</div>
            <h2>Curious minds. Shared ambition.</h2>
            <p>
              We’re looking for researchers who want to shape the future of intelligent, autonomous
              systems.
            </p>
          </div>
          <a href="/join-us" className="button button-white">
            Join our team <Arrow diagonal />
          </a>
        </div>
      </section>
    </>
  )
}
