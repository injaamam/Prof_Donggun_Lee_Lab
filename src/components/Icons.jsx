export function Arrow({ diagonal = false, ...props }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {diagonal ? <path d="M6 18 18 6M6 6h12v12" /> : <path d="M4 12h16m-6-6 6 6-6 6" />}
    </svg>
  )
}

export function LabMark() {
  return (
    <svg viewBox="0 0 42 42" fill="none" aria-hidden="true">
      <path d="M8 31V12l13-7 13 7v19l-13 7-13-7Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="m8 12 13 8 13-8M21 20v18M8 31l13-11 13 11" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="21" cy="20" r="3" fill="currentColor" />
      <circle cx="8" cy="12" r="2.5" fill="currentColor" />
      <circle cx="34" cy="31" r="2.5" fill="currentColor" />
    </svg>
  )
}
