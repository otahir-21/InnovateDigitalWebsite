import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Innovate Digital — Dubai\'s Leading Digital Marketing Agency'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #0a0a1a 0%, #0f1535 40%, #0a0a2e 100%)',
          padding: '64px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow effects */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-150px',
            left: '200px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)',
          }}
        />

        {/* Top: Logo + badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {/* Logo mark */}
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              fontWeight: '800',
              color: 'white',
              letterSpacing: '-1px',
            }}
          >
            ID
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: 'white', fontSize: '22px', fontWeight: '700', lineHeight: '1.2' }}>
              Innovate Digital
            </span>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', fontWeight: '400' }}>
              innovatedigital.ae
            </span>
          </div>

          {/* Rating badge */}
          <div
            style={{
              marginLeft: '32px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '100px',
              padding: '8px 20px',
            }}
          >
            <span style={{ color: '#FBBF24', fontSize: '16px' }}>★★★★★</span>
            <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', fontWeight: '500' }}>
              5.0 · 47 Reviews
            </span>
          </div>
        </div>

        {/* Middle: Main headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1, justifyContent: 'center' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(59,130,246,0.15)',
              border: '1px solid rgba(59,130,246,0.3)',
              borderRadius: '100px',
              padding: '6px 18px',
              width: 'fit-content',
            }}
          >
            <span style={{ color: '#60A5FA', fontSize: '13px', fontWeight: '600', letterSpacing: '0.08em' }}>
              DUBAI · UAE · MENA
            </span>
          </div>

          <div
            style={{
              fontSize: '72px',
              fontWeight: '800',
              color: 'white',
              lineHeight: '1.05',
              letterSpacing: '-2px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>Dubai&apos;s #1</span>
            <span
              style={{
                background: 'linear-gradient(90deg, #3B82F6, #8B5CF6, #EC4899)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Digital Marketing
            </span>
            <span>Agency</span>
          </div>

          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '22px', fontWeight: '400', marginTop: '8px' }}>
            SEO · PPC · Social Media · Web Development · Branding
          </div>
        </div>

        {/* Bottom: Stats row */}
        <div style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
          {[
            { value: '200+', label: 'Clients Served' },
            { value: '5x', label: 'Avg. ROI' },
            { value: '2020', label: 'Founded' },
            { value: 'Free', label: 'Audit Included' },
          ].map((stat) => (
            <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span
                style={{
                  fontSize: '32px',
                  fontWeight: '800',
                  background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                {stat.value}
              </span>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', fontWeight: '400' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
