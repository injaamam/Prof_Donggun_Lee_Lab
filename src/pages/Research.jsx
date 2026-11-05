import PageHeading from '../components/PageHeading'
import Publication from '../components/Publication'
import VideoCard from '../components/VideoCard'
import content from '../data/source-content.json'
import publications from '../data/publications.json'

const areas = [
  {
    id: 'safe-autonomy',
    title: 'Data-driven safe autonomy',
    goal: 'Keep robots safe under uncertainty.',
    summary:
      'We combine learning with formal safety methods to address uncertain dynamics and the computational limits of complex robots.',
    methods:
      'Hamilton–Jacobi (HJ) reachability · Control barrier functions (CBFs) · Reinforcement learning',
    foundations: [
      [
        'Learned safety guarantees',
        'Establish when learned controllers can provide provable safety.',
      ],
      [
        'Unified safety methods',
        'Connect CBFs and HJ reachability to construct safety conditions.',
      ],
      [
        'Less restrictive safety filters',
        'Preserve control flexibility while maintaining safety guarantees.',
      ],
    ],
    application:
      'Test safe navigation with incomplete sensing, unknown environments, and semantic constraints on physical robots.',
    platforms: ['Ground vehicle navigation', 'Autonomous driving', 'Aerial vehicles'],
    papers: [
      'Adaptive Reachability Safety',
      'Least Conservative Robust Safety Filter',
      'Certifiable Reachability Learning',
      'Robust Control Barrier-Value',
      'Deep Reinforcement Learning for Reach-Avoid',
    ],
    videos: ['PFgdaB3Zqio', '4lpRv4YgiyE', '12uQeOw4TX8', 'lq1IJwMMt2g'],
  },
  {
    id: 'real-time-control',
    title: 'Real-time robust control',
    goal: 'Plan and adapt within limited computation time.',
    summary:
      'We develop efficient controllers that update plans as new information arrives, accounting for disturbances and model uncertainty.',
    methods: 'Hopf–Lax theory · Mathematical optimization · Model predictive control (MPC)',
    foundations: [
      ['Faster optimal control', 'Use Hopf–Lax theory to develop efficient numerical solvers.'],
      ['Convex reformulations', 'Recast nonlinear control problems to make them easier to solve.'],
      [
        'Robust control formulations',
        'Identify when robust control can use efficient optimal control solvers.',
      ],
    ],
    application:
      'Develop Model Predictive Path Integral (MPPI) methods that evaluate trajectories on GPUs, and receding horizon controllers that replan as conditions change.',
    platforms: ['Ground vehicles', 'Aerial vehicles', 'Legged robots'],
    papers: [
      'ZSG-MPPI:',
      'Real-time Robust Receding Horizon',
      'Efficient Computation of State-Constrained',
      'Convexifying State-Constrained',
      'Hopf–Lax-MPC:',
    ],
    videos: ['fxr_PS0Ufms', 'rMNBhOZjYVA'],
  },
]

const videos = new Map(
  content.research.filter((block) => block.type === 'video').map((video) => [video.id, video]),
)

export default function Research() {
  return (
    <>
      <PageHeading
        title="Research areas"
        label="CONTROL THEORY · ROBOTICS · LEARNING"
        description="We study how autonomous robots can stay safe and respond in real time. Our work connects control theory, learning, and experiments on physical robots."
      />
      <nav className="chapter-nav research-area-nav" aria-label="Research areas">
        {areas.map((area, index) => (
          <a key={area.id} href={`#${area.id}`}>
            <span>0{index + 1}</span>
            <strong>{area.title} ↘</strong>
            <small>{area.goal}</small>
          </a>
        ))}
      </nav>
      {areas.map((area, index) => {
        const papers = area.papers
          .map((title) => publications.find((p) => p.title.startsWith(title)))
          .filter(Boolean)
        return (
          <section
            className="research-chapter section-grid"
            id={area.id}
            key={area.id}
            aria-labelledby={`${area.id}-title`}
          >
            <aside className="section-marker">
              <span className="eyebrow">0{index + 1} / RESEARCH AREA</span>
              <p>{area.goal}</p>
              <a className="research-paper-shortcut" href={`#${area.id}-papers`}>
                Key papers ↓
              </a>
            </aside>
            <div className="document research-page">
              <h2 id={`${area.id}-title`}>{area.title}</h2>
              <p>{area.summary}</p>
              <dl className="research-tools">
                <dt>Methods</dt>
                <dd>{area.methods}</dd>
              </dl>
              <div className="research-focus-grid">
                <section aria-labelledby={`${area.id}-foundations`}>
                  <h3 id={`${area.id}-foundations`}>Foundational research</h3>
                  <ul>
                    {area.foundations.map(([title, description]) => (
                      <li key={title}>
                        <strong>{title}</strong>
                        <span>{description}</span>
                      </li>
                    ))}
                  </ul>
                </section>
                <section aria-labelledby={`${area.id}-applications`}>
                  <h3 id={`${area.id}-applications`}>Applied research</h3>
                  <p>{area.application}</p>
                  <h4>Applications</h4>
                  <ul className="research-platforms">
                    {area.platforms.map((platform) => (
                      <li key={platform}>{platform}</li>
                    ))}
                  </ul>
                </section>
              </div>
              <details className="research-key-papers" id={`${area.id}-papers`}>
                <summary>
                  Key papers <span>({papers.length})</span>
                </summary>
                {papers.map((paper) => (
                  <Publication key={paper.title} paper={paper} />
                ))}
                <a href="/publications">View all publications ↗</a>
              </details>
              <section className="research-demonstrations" aria-labelledby={`${area.id}-videos`}>
                <h3 id={`${area.id}-videos`}>Demonstrations</h3>
                <div className="video-grid research-videos">
                  {area.videos.map((id) => (
                    <VideoCard key={id} {...videos.get(id)} />
                  ))}
                </div>
              </section>
            </div>
          </section>
        )
      })}
    </>
  )
}
