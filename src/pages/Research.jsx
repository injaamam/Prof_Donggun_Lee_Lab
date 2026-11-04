import SourceContent from '../components/SourceContent'
import content from '../data/source-content.json'

export default function Research() {
  return (
    <div className="document research-page">
      <SourceContent blocks={content.research} />
    </div>
  )
}
