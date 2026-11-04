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
  const grouped = []
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i]
    grouped.push(block)
    if (block.type === 'label' && block.content[0] === 'VIDEOS') {
      const videos = []
      while (
        i + 1 < blocks.length &&
        (blocks[i + 1].type === 'video' ||
          (blocks[i + 1].type === 'label' && blocks[i + 1].content[0] === 'VIDEOS'))
      ) {
        i++
        if (blocks[i].type === 'video') videos.push(blocks[i])
      }
      grouped.push({ type: 'video-group', videos })
    }
  }
  return grouped.map((block, index) => {
    if (block.type === 'video-group')
      return (
        <div key={index} className="video-grid research-videos">
          {block.videos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      )
    if (block.type === 'heading')
      return (
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
              {item.length > 1 && typeof item[0] === 'string' ? (
                <>
                  <strong>{item[0]}</strong>
                  <InlineContent content={item.slice(1)} />
                </>
              ) : (
                <InlineContent content={item} />
              )}
            </li>
          ))}
        </ul>
      )
    if (
      block.type === 'image' &&
      (block.src.includes('safe-autonomy') || block.src.includes('realtime-control'))
    ) {
      const applications = block.src.includes('safe-autonomy')
        ? ['Ground vehicle navigation', 'Autonomous driving', 'Aerial vehicles']
        : ['Ground vehicles', 'Aerial vehicles', 'Legged robots']
      return (
        <div className="application-types" key={index}>
          <span className="eyebrow">APPLICATIONS</span>
          {applications.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      )
    }
    if (block.type === 'image')
      return (
        <img
          key={index}
          className="research-image"
          src={block.src}
          alt={
            block.alt ||
            (block.src.includes('safe-autonomy')
              ? 'Safe autonomy applications: ground vehicle navigation, autonomous driving, and aerial vehicles'
              : 'Real-time control applications: ground vehicles, aerial vehicles, and legged robots')
          }
          loading="lazy"
        />
      )
    if (block.type === 'video') return <VideoCard key={index} {...block} />
    return (
      <p key={index}>
        <InlineContent content={block.content} />
      </p>
    )
  })
}
