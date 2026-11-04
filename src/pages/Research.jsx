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
        title={
          <>
            More intelligent.
            <br />
            <em>By design</em>
          </>
        }
        label="RESEARCH / FROM THEORY TO PRACTICE"
        description="We develop the theory, algorithms, and hardware-tested systems that enable autonomous robots to act intelligently — even under uncertainty, resource constraints, and incomplete information."
      />
      <nav className="chapter-nav" aria-label="Research areas">
        <a href="#safe-autonomy">
          <span>01</span> Safe autonomy ↘
        </a>
        <a href="#real-time-control">
          <span>02</span> Real-time control ↘
        </a>
      </nav>
      <figure className="research-overview">
        <div className="research-principles">
          {['Effective', 'Safe', 'Computationally efficient', 'Robust', 'Self-reasoning'].map(
            (label, i) => (
              <div key={label}>
                <span className="eyebrow">0{i + 1}</span>
                <span>{label}</span>
              </div>
            ),
          )}
        </div>
        <figcaption>THEORY → COMPUTATION → AUTONOMY</figcaption>
      </figure>
      <section className="research-chapter section-grid" id="safe-autonomy">
        <aside className="section-marker">
          <span className="eyebrow">01 / RESEARCH AREA</span>
          <p>
            Data-driven methods.
            <br />
            Provable guarantees.
          </p>
        </aside>
        <div className="document research-page">
          <ResearchBody blocks={content.research.slice(6, split)} papers={safetyPapers} />
        </div>
      </section>
      <section className="research-chapter section-grid" id="real-time-control">
        <aside className="section-marker">
          <span className="eyebrow">02 / RESEARCH AREA</span>
          <p>
            Fast decisions.
            <br />
            Robust performance.
          </p>
        </aside>
        <div className="document research-page">
          <ResearchBody blocks={content.research.slice(split)} papers={controlPapers} />
        </div>
      </section>
    </>
  )
}
