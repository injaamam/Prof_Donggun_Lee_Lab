import { useState } from 'react'
import { Arrow } from './Icons'

export default function VideoCard({ id, title, category, image, compact = false }) {
  const [playing, setPlaying] = useState(false)
  return (
    <article className={`video-card ${compact ? 'compact' : ''}`}>
      <div className="video-media">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            className="video-preview"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${title}`}
          >
            <img src={image} alt="" loading="lazy" />
            <span className="play-button">
              <svg width="16" height="18" viewBox="0 0 16 18" aria-hidden="true">
                <path d="m2 1 13 8-13 8Z" fill="currentColor" />
              </svg>
            </span>
            <span className="video-label">WATCH DEMO</span>
          </button>
        )}
      </div>
      <div className="video-info">
        {category && <span className="eyebrow small">{category}</span>}
        <h3>
          <a href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noreferrer">
            {title}
            <Arrow diagonal />
          </a>
        </h3>
      </div>
    </article>
  )
}
