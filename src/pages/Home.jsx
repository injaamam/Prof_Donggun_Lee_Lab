import VideoCard from '../components/VideoCard'
import content from '../data/source-content.json'

export default function Home() {
  return (
    <>
      <section className="home-intro">
        <h1>Intelligent Controls Lab</h1>
        <p className="university">NC State University</p>
        <p>Go Pack! 🐺</p>
        <h2>We care how things move.</h2>
        <p>
          We develop fundamental theories, design efficient numerical algorithms, and test our ideas
          in the real world to control dynamic systems precisely, efficiently, and effectively.
        </p>
        <div className="home-links">
          <a className="button" href="/research">
            Explore Our Research
          </a>
          <a className="button" href="/join-us">
            Join Our Team
          </a>
        </div>
      </section>
      <div className="video-grid">
        {content.homeVideos.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </>
  )
}
