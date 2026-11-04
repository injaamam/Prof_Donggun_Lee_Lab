import SourceContent from '../components/SourceContent'
import PageHeading from '../components/PageHeading'
import content from '../data/source-content.json'
import publications from '../data/publications.json'
import Publication from '../components/Publication'
const split = content.research.findIndex(
  (b) => b.type === 'heading' && b.content[0] === 'Real-Time Control Schemes',
)

const safetyPapers = [
  'Adaptive Reachability Safety',
  'Least Conservative Robust Safety Filter',
  'Certifiable Reachability Learning',
  'Robust Control Barrier-Value',
  'Deep Reinforcement Learning for Reach-Avoid',
]
const controlPapers = [
  'ZSG-MPPI:',
  'Real-time Robust Receding Horizon',
  'Efficient Computation of State-Constrained',
  'Convexifying State-Constrained',
  'Hopf–Lax-MPC:',
]

function ResearchBody({ blocks, papers }) {
  const keyPapers = blocks.findIndex((b) => b.type === 'label' && b.content[0] === 'KEY PAPERS')
  return (
    <>
      <SourceContent blocks={blocks.slice(0, keyPapers)} />
      <div className="research-key-papers">
        <h3 className="eyebrow">KEY PAPERS</h3>
        {papers
          .map((title) => publications.find((p) => p.title.startsWith(title)))
          .filter(Boolean)
          .map((p) => (
            <Publication key={p.title} paper={p} />
          ))}
      </div>
    </>
  )
}
export default function Research() {
  return (
    <>
      <PageHeading
        title="Research areas"
        label="CONTROL THEORY · ROBOTICS · LEARNING"
        description="Our research focuses on two areas: data-driven safe autonomy with theoretical guarantees, and efficient real-time control under disturbances and model uncertainty."
      />
      <nav className="chapter-nav" aria-label="Research areas">
        <a href="#safe-autonomy">
          <span>01</span> Safe autonomy ↘
        </a>
        <a href="#real-time-control">
          <span>02</span> Real-time control ↘
        </a>
      </nav>
      <div className="research-methods" aria-label="Research methods and applications">
        <div>
          <h2>Methods</h2>
          <p>
            Optimal control · Hamilton–Jacobi reachability · Control barrier functions ·
            Reinforcement learning · Mathematical optimization
          </p>
        </div>
        <div>
          <h2>Applications</h2>
          <p>Ground vehicle navigation · Autonomous driving · Aerial vehicles · Legged robots</p>
        </div>
      </div>
      <section className="research-chapter section-grid" id="safe-autonomy">
        <aside className="section-marker">
          <span className="eyebrow">01 / RESEARCH AREA</span>
          <p>Hamilton–Jacobi reachability, control barrier functions, and safety guarantees.</p>
        </aside>
        <div className="document research-page">
          <ResearchBody blocks={content.research.slice(6, split)} papers={safetyPapers} />
        </div>
      </section>
      <section className="research-chapter section-grid" id="real-time-control">
        <aside className="section-marker">
          <span className="eyebrow">02 / RESEARCH AREA</span>
          <p>Optimal control solvers, model predictive control, and robust planning.</p>
        </aside>
        <div className="document research-page">
          <ResearchBody blocks={content.research.slice(split)} papers={controlPapers} />
        </div>
      </section>
    </>
  )
}
