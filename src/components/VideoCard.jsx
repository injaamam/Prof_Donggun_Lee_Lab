import { useState } from 'react'
const thumbnails = {
  rMNBhOZjYVA: 'outdoor-navigation.jpg',
  lq1IJwMMt2g: 'adaptive-safety.jpg',
  '4lpRv4YgiyE': 'safety-filter.jpg',
  maZmSoGBbd0: 'pursuit-evasion.jpg',
  PFgdaB3Zqio: 'safety-filter.jpg',
  '12uQeOw4TX8': 'reachability-learning.jpg',
  fxr_PS0Ufms: 'robust-mppi.jpg',
}
export default function VideoCard({ id, title }) {
  const [playing, setPlaying] = useState(false)
  return (
    <figure className="video">
      <div className="video-media">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            className="video-preview"
            onClick={() => setPlaying(true)}
            aria-label={`Play: ${title}`}
          >
            <img
              src={`/images/${thumbnails[id] || 'outdoor-navigation.jpg'}`}
              alt=""
              loading="lazy"
            />
            <span className="play-button" aria-hidden="true">
              ▶
            </span>
            <span className="video-watch">WATCH EXPERIMENT ↗</span>
          </button>
        )}
      </div>
      <figcaption>{title}</figcaption>
    </figure>
  )
}
