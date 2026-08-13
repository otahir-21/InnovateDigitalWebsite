const PHRASES = [
  'Google Partner Certified',
  '200+ UAE Clients',
  '3x Average ROI',
  'Free Marketing Audit',
  'Dubai · Abu Dhabi · Sharjah',
]

export default function Marquee() {
  const items = [...PHRASES, ...PHRASES]

  return (
    <div className="marquee-bar" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee-item">
            {item}
            <span className="mx-6 text-secondary-400">—</span>
          </span>
        ))}
      </div>
    </div>
  )
}
