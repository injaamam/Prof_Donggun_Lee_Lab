import SourceContent from '../components/SourceContent'
import content from '../data/source-content.json'

export default function JoinUs() {
  return (
    <div className="document join-page">
      <SourceContent blocks={content.join} />
    </div>
  )
}
