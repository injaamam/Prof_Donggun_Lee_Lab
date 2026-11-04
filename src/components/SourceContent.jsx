import VideoCard from './VideoCard'

function InlineContent({ content }) {
  return content.map((item, index) => {
    if (typeof item === 'string') return item
    if (item.type === 'br') return <br key={index} />
    return (
      <a key={index} href={item.href} target="_blank" rel="noreferrer">
        {item.text}
      </a>
    )
  })
}

export default function SourceContent({ blocks }) {
  return blocks.map((block, index) => {
    if (block.type === 'heading')
      return index === 0 ? (
        <h1 key={index} className="page-title">
          <InlineContent content={block.content} />
        </h1>
      ) : (
        <h2 key={index}>
          <InlineContent content={block.content} />
        </h2>
      )
    if (block.type === 'label')
      return (
        <h3 key={index}>
          <InlineContent content={block.content} />
        </h3>
      )
    if (block.type === 'list')
      return (
        <ul key={index}>
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex}>
              <InlineContent content={item} />
            </li>
          ))}
        </ul>
      )
    if (block.type === 'image')
      return <img key={index} className="research-image" src={block.src} alt={block.alt} />
    if (block.type === 'video') return <VideoCard key={index} {...block} />
    return (
      <p key={index}>
        <InlineContent content={block.content} />
      </p>
    )
  })
}
