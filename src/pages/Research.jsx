import SourceContent from "../components/SourceContent";
import VideoCard from "../components/VideoCard";
import content from "../data/source-content.json";
import publications from "../data/publications.json";

const research = content.research;
const split = research.findIndex(
  (block) =>
    block.type === "heading" &&
    block.content[0] === "Real-Time Control Schemes",
);
const areas = [
  {
    id: "safe-autonomy",
    number: "01",
    title: "Data-Driven Safe Autonomy & Theoretical Guarantees",
    blocks: research.slice(6, split),
    papers: [
      ["Adaptive Reachability Safety", "Under Review"],
      ["Least Conservative Robust Safety Filter", "Under Review"],
      ["Certifiable Reachability Learning", "RA-L"],
      ["Robust Control Barrier-Value", "CDC"],
      ["Deep Reinforcement Learning for Reach-Avoid", "ICRA"],
    ],
  },
  {
    id: "real-time-control",
    number: "02",
    title: "Real-Time Control Schemes — Robustness & Adaptability",
    blocks: research.slice(split),
    papers: [
      ["ZSG-MPPI:", "RA-L"],
      ["Real-time Robust Receding Horizon", "TRO"],
      ["Efficient Computation of State-Constrained", "TAC"],
      ["Convexifying State-Constrained", "TAC"],
      ["Hopf–Lax-MPC:", "Under Review"],
    ],
  },
];

function ResearchArea({ area }) {
  const { blocks } = area;
  const foundational = blocks.findIndex(
    (block) =>
      block.type === "label" &&
      block.content.join("") === "FOUNDATIONAL RESEARCH",
  );
  const applied = blocks.findIndex(
    (block) =>
      block.type === "label" && block.content.join("") === "APPLIED RESEARCH",
  );
  const videoStart = blocks.findIndex((block) => block.type === "video") - 1;
  const videos = blocks.filter((block) => block.type === "video");
  const [title, , subtitle] = blocks[0].content;
  const description = blocks.slice(1, foundational).flatMap((block) => {
    if (block.type !== "paragraph") return [block];
    return block.content[0]
      .split(/ (?=We bridge this gap|The challenge is achieving)/)
      .map((paragraph) => ({ type: "paragraph", content: [paragraph] }));
  });
  return (
    <section
      className="research-chapter"
      id={area.id}
      aria-labelledby={`${area.id}-title`}
    >
      <div className="document research-page">
        <header className="research-chapter-heading">
          <div className="research-chapter-title">
            <span className="research-area-number" aria-hidden="true">
              {area.number}
            </span>
            <h2 id={`${area.id}-title`}>
              {title}
              <span className="research-subtitle">{subtitle}</span>
            </h2>
          </div>
          <div className="research-chapter-description">
            <SourceContent blocks={description} />
          </div>
        </header>
        <div className="research-focus-grid">
          <section
            id={`${area.id}-foundations`}
            aria-labelledby={`${area.id}-foundations-title`}
          >
            <h3 id={`${area.id}-foundations-title`}>FOUNDATIONAL RESEARCH</h3>
            <SourceContent blocks={blocks.slice(foundational + 1, applied)} />
          </section>
          <section
            id={`${area.id}-applied`}
            aria-labelledby={`${area.id}-applied-title`}
          >
            <h3 id={`${area.id}-applied-title`}>APPLIED RESEARCH</h3>
            <SourceContent blocks={blocks.slice(applied + 1, videoStart)} />
          </section>
        </div>
        <section
          className="research-demonstrations"
          id={`${area.id}-videos`}
          aria-labelledby={`${area.id}-videos-title`}
        >
          <h3 id={`${area.id}-videos-title`}>VIDEOS</h3>
          <div className="video-grid research-videos">
            {videos.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>
        </section>
        <section
          className="research-key-papers"
          id={`${area.id}-papers`}
          aria-labelledby={`${area.id}-papers-title`}
        >
          <h3 id={`${area.id}-papers-title`}>KEY PAPERS</h3>
          {area.papers.map(([prefix, venue]) => {
            const paper = publications.find((entry) =>
              entry.title.startsWith(prefix),
            );
            return (
              <article className="research-paper" key={paper.title}>
                <h4>{paper.title}</h4>
                <div className="research-paper-meta">
                  <span>{venue}</span>
                  {paper.links.map((link) => (
                    <a
                      href={link.url}
                      key={link.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${link.label}: ${paper.title}`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </section>
  );
}

export default function Research() {
  return (
    <div className="research-original">
      <header className="research-intro">
        <div className="research-intro-heading">
        <p className="research-intro-label">INTELLIGENT CONTROLS LAB</p>
        <h1>
          We make mobile robots
          <span>more intelligent.</span>
        </h1>
        </div>
        <ul className="research-qualities" aria-label="Research goals">
          {[
            "EFFECTIVE",
            "SAFE",
            "COMPUTATIONALLY EFFICIENT",
            "ROBUST",
            "SELF-REASONING",
          ].map((quality) => (
            <li key={quality}>{quality}</li>
          ))}
        </ul>
        <div className="research-intro-copy">
          <SourceContent blocks={research.slice(3, 5)} />
        </div>
      </header>
      <p className="eyebrow research-area-label">RESEARCH AREAS</p>
      {areas.map((area) => (
        <ResearchArea key={area.id} area={area} />
      ))}
    </div>
  );
}
