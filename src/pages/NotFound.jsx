import { Arrow } from '../components/Icons'
export default function NotFound() {
  return (
    <section className="container not-found">
      <div className="eyebrow">
        <span />
        404 · PAGE NOT FOUND
      </div>
      <h1>A little off course.</h1>
      <p>We couldn’t find that page. Let’s get you back to the lab.</p>
      <a href="/" className="button button-primary">
        Back to home <Arrow />
      </a>
    </section>
  )
}
