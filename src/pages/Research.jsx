import PageHeading from '../components/PageHeading'
import Publication from '../components/Publication'
import VideoCard from '../components/VideoCard'
import { Arrow } from '../components/Icons'
import publications from '../data/publications.json'
import { videos } from '../data/videos'

const areas = [
  {
    id: 'safe-autonomy',
    number: '01',
    tag: 'SAFETY + LEARNING',
    title: 'Data-driven safe autonomy',
    subtitle: 'Learning with theoretical guarantees.',
    description:
      'Classical safety frameworks like Hamilton–Jacobi reachability and Control Barrier Functions offer rigorous guarantees, but face computational challenges and rely on accurate models. We combine data-driven methods with formal safety theory so robots can stay safe, even when they encounter something new.',
    foundations: [
      [
        'Learning meets formal safety',
        'Understanding when neural networks and reinforcement learning can inherit the provable safety guarantees of Hamilton–Jacobi reachability and Control Barrier Functions.',
      ],
      [
        'Connecting CBFs and reachability',
        'Unifying two deeply related safety frameworks to enable principled, general-purpose Control Barrier Function construction.',
      ],
      [
        'Least-conservative safety filters',
        'Finding the least restrictive safety conditions so performance and provable safety can coexist.',
      ],
    ],
    applications: [
      [
        'Safe navigation under uncertainty',
        'Enabling autonomy with incomplete sensing, unknown environments, and semantic constraints, tested on real hardware.',
      ],
      [
        'Conditions for learned safety guarantees',
        'Establishing the theoretical conditions under which learned safety methods provably hold.',
      ],
    ],
    tags: ['Ground vehicle navigation', 'Autonomous driving', 'Aerial vehicles'],
    videos: [
      videos[1],
      videos[2],
      {
        id: 'PFgdaB3Zqio',
        title: 'Least-conservative robust safety filtering under worst-case disturbances',
        image: '/images/safety-filter.jpg',
        category: 'ROBUST SAFETY',
      },
      {
        id: '12uQeOw4TX8',
        title: 'Certifiable reachability learning',
        image: '/images/reachability-learning.jpg',
        category: 'LEARNING + GUARANTEES',
      },
    ],
    papers: [
      'Adaptive Reachability Safety',
      'Least Conservative Robust',
      'Certifiable Reachability Learning',
      'Robust Control Barrier-Value',
      'Deep Reinforcement Learning',
    ],
  },
  {
    id: 'realtime-control',
    number: '02',
    tag: 'EFFICIENCY + ADAPTABILITY',
    title: 'Real-time robust control',
    subtitle: 'Efficient enough to deploy. Capable enough to plan ahead.',
    description:
      'Real-time controllers adapt the moment new information arrives, whether it’s an unexpected obstacle, a sudden gust of wind, or an imperfect model. We build efficient control systems that plan over longer horizons within strict computational limits, turning computational efficiency into better decisions.',
    foundations: [
      [
        'Computationally tractable optimal control',
        'Developing numerically efficient solvers grounded in Hopf–Lax theory to turn difficult optimal control problems into real-time computations.',
      ],
      [
        'Convexification of nonlinear problems',
        'Reformulating nonlinear control problems in convex form to enable faster solvers without sacrificing solution quality.',
      ],
      [
        'Robust control as optimal control',
        'Recasting robust control problems to use efficient optimal control solvers and enable real-time robust decision-making.',
      ],
    ],
    applications: [
      [
        'Sampling-based control',
        'Exploring possible futures in parallel on GPUs with methods like Model Predictive Path Integral control to handle disturbances.',
      ],
      [
        'Receding horizon planning',
        'Continuously re-planning over a rolling horizon to combine optimal control’s foresight with real-time responsiveness.',
      ],
    ],
    tags: ['Ground vehicles', 'Aerial vehicles', 'Legged robots'],
    videos: [
      videos[0],
      {
        id: 'fxr_PS0Ufms',
        title: 'Real-time robust MPPI against worst-case disturbances',
        image: '/images/robust-mppi.jpg',
        category: 'ROBUST CONTROL · ZSG-MPPI',
      },
    ],
    papers: [
      'ZSG-MPPI',
      'Real-time Robust Receding',
      'Efficient Computation of State-Constrained',
      'Convexifying State-Constrained',
      'Hopf–Lax-MPC',
    ],
  },
]

function ResearchList({ title, items }) {
  return (
    <div className="research-list">
      <h3 className="section-label">{title}</h3>
      {items.map(([heading, text]) => (
        <div className="research-point" key={heading}>
          <span>↗</span>
          <div>
            <h4>{heading}</h4>
            <p>{text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Research() {
  return (
    <>
      <PageHeading
        eyebrow="OUR RESEARCH"
        title={
          <>
            We make mobile robots
            <br />
            <em>more intelligent.</em>
          </>
        }
        description="Theory, algorithms, and hardware-tested systems that enable robots to act intelligently under uncertainty, resource constraints, and incomplete information."
      >
        <div className="topic-tags">
          <span>Optimal control</span>
          <span>Reinforcement learning</span>
          <span>Machine learning</span>
          <span>Mathematical optimization</span>
        </div>
      </PageHeading>
      <div className="container research-page">
        <nav className="research-jump" aria-label="Research areas">
          <span>EXPLORE OUR RESEARCH</span>
          {areas.map((area) => (
            <a key={area.id} href={`#${area.id}`}>
              <span>{area.number}</span>
              {area.title}
              <Arrow diagonal />
            </a>
          ))}
        </nav>
        {areas.map((area) => (
          <section className="research-area" id={area.id} key={area.id}>
            <div className="research-area-heading">
              <div>
                <span className="eyebrow">
                  <span />
                  RESEARCH AREA {area.number}
                </span>
                <h2>{area.title}</h2>
                <p className="research-subtitle">{area.subtitle}</p>
              </div>
              <span className="large-number">{area.number}</span>
            </div>
            <p className="research-intro">{area.description}</p>
            <div className="research-details">
              <ResearchList title="FOUNDATIONAL RESEARCH" items={area.foundations} />
              <ResearchList title="APPLIED RESEARCH" items={area.applications} />
            </div>
            <div className="application-tags">
              <span>APPLICATIONS</span>
              {area.tags.map((tag) => (
                <span className="topic-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="research-videos">
              <h3 className="section-label">RESEARCH IN MOTION</h3>
              <div className="video-grid">
                {area.videos.map((video) => (
                  <VideoCard compact key={video.id} {...video} />
                ))}
              </div>
            </div>
            <div className="key-papers">
              <div className="section-heading">
                <h3>Key publications</h3>
                <a className="text-link" href="/publications">
                  All publications <Arrow diagonal />
                </a>
              </div>
              {area.papers.map((prefix) => {
                const paper = publications.find((item) => item.title.startsWith(prefix))
                return paper ? <Publication key={paper.title} paper={paper} /> : null
              })}
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
