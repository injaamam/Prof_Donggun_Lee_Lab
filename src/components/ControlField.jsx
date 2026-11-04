export default function ControlField() {
  const paths = Array.from({ length: 13 }, (_, i) => {
    const y = 90 + i * 23
    return `M -20 ${y} C 110 ${y - 24}, 150 ${y + 85}, 240 ${y + 38} S 320 ${125 + i * 9}, 390 ${150 + i * 10} S 480 ${270 - i * 6}, 620 ${80 + i * 22}`
  })
  return (
    <figure className="control-field">
      <div className="figure-top">
        <span>ICL / DYNAMIC SYSTEMS</span>
        <span>FIG. 01</span>
      </div>
      <svg viewBox="0 0 600 480" role="img" aria-labelledby="control-title control-desc">
        <title id="control-title">Finding a safe path through uncertainty</title>
        <desc id="control-desc">
          An illustrative family of control trajectories bends around a constrained region. One red
          trajectory traces a safe route toward a target.
        </desc>
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth=".5"
              opacity=".13"
            />
          </pattern>
          <pattern
            id="hatch"
            width="6"
            height="6"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(35)"
          >
            <path d="M 0 0 V 6" stroke="#9a9488" strokeWidth="1" opacity=".4" />
          </pattern>
        </defs>
        <rect width="600" height="480" fill="url(#grid)" />
        <path d="M 50 420 H 555 M 65 435 V 45" fill="none" stroke="#aaa79d" strokeWidth=".7" />
        <text x="535" y="446">
          x₁
        </text>
        <text x="40" y="60">
          x₂
        </text>
        <ellipse
          cx="303"
          cy="292"
          rx="67"
          ry="69"
          fill="url(#hatch)"
          stroke="#a49c8e"
          strokeDasharray="3 4"
        />
        <g fill="none" stroke="#8b9088" strokeWidth="1" opacity=".47">
          {paths.map((path, i) => (
            <path key={i} d={path} />
          ))}
        </g>
        <path
          className="trajectory"
          d="M 65 355 C 150 325, 165 410, 215 365 S 212 190, 300 180 S 415 252, 470 180 S 515 108, 548 87"
          fill="none"
          stroke="#c33126"
          strokeWidth="2.8"
        />
        <circle cx="65" cy="355" r="5" fill="#c33126" />
        <circle cx="548" cy="87" r="6" fill="#c33126" />
        <circle cx="548" cy="87" r="13" fill="none" stroke="#c33126" opacity=".5" />
        <text x="82" y="382">
          INITIAL STATE
        </text>
        <text x="452" y="58">
          TARGET STATE
        </text>
        <path d="M 306 295 L 407 348 H 474" fill="none" stroke="#8c877b" strokeWidth=".8" />
        <text x="411" y="370">
          CONSTRAINT
        </text>
        <g transform="translate(300 180)">
          <circle r="9" fill="#f2f0e9" stroke="#c33126" />
          <path d="M-4 0H4M0-4V4" stroke="#c33126" />
        </g>
      </svg>
      <figcaption>
        <span>
          <i /> Optimal trajectory
        </span>
        <span>CONTROL UNDER UNCERTAINTY</span>
      </figcaption>
    </figure>
  )
}
