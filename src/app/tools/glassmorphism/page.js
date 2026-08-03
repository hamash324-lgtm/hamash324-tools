'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function GlassmorphismTool() {
  const [blur, setBlur] = useState(12);
  const [opacity, setOpacity] = useState(0.25);
  const [borderRadius, setBorderRadius] = useState(16);
  const [borderWidth, setBorderWidth] = useState(1);
  const [borderColorAlpha, setBorderColorAlpha] = useState(0.4);
  const [shadow, setShadow] = useState(20);
  const [copied, setCopied] = useState(false);

  const cssCode = `background: rgba(255, 255, 255, ${opacity});
backdrop-filter: blur(${blur}px);
-webkit-backdrop-filter: blur(${blur}px);
border-radius: ${borderRadius}px;
border: ${borderWidth}px solid rgba(255, 255, 255, ${borderColorAlpha});
box-shadow: 0 8px ${shadow}px rgba(0, 0, 0, 0.37);`;

  const copyCode = () => {
    navigator.clipboard.writeText(cssCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#090a0f', color: '#00e5ff', fontFamily: 'monospace', padding: '2rem', maxWidth: '1000px', margin: '0 auto', direction: 'ltr', textAlign: 'left' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>← Back to Dashboard</Link>
      </nav>

      <h1 style={{ color: '#fff', fontSize: '1.6rem', marginBottom: '0.5rem' }}>CSS Glassmorphism & Shadow Generator</h1>
      <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>Design modern frosted glass UI components and generate production-ready CSS instantly.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'start' }}>
        
        {/* Controls Panel */}
        <div style={{ background: '#111827', border: '1px solid #1f2937', padding: '1.5rem', borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <h3 style={{ color: '#fff', margin: 0, fontSize: '1.1rem', borderBottom: '1px solid #1f2937', paddingBottom: '0.8rem' }}>Adjust Parameters</h3>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
              <span style={{ color: '#9ca3af' }}>Backdrop Blur:</span>
              <span style={{ color: '#00e5ff' }}>{blur}px</span>
            </div>
            <input type="range" min="0" max="40" value={blur} onChange={(e) => setBlur(e.target.value)} style={{ width: '100%', accentColor: '#00e5ff' }} />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
              <span style={{ color: '#9ca3af' }}>Background Opacity:</span>
              <span style={{ color: '#00e5ff' }}>{opacity}</span>
            </div>
            <input type="range" min="0.05" max="0.9" step="0.05" value={opacity} onChange={(e) => setOpacity(e.target.value)} style={{ width: '100%', accentColor: '#00e5ff' }} />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
              <span style={{ color: '#9ca3af' }}>Border Radius:</span>
              <span style={{ color: '#00e5ff' }}>{borderRadius}px</span>
            </div>
            <input type="range" min="0" max="40" value={borderRadius} onChange={(e) => setBorderRadius(e.target.value)} style={{ width: '100%', accentColor: '#00e5ff' }} />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
              <span style={{ color: '#9ca3af' }}>Border Opacity:</span>
              <span style={{ color: '#00e5ff' }}>{borderColorAlpha}</span>
            </div>
            <input type="range" min="0" max="1" step="0.05" value={borderColorAlpha} onChange={(e) => setBorderColorAlpha(e.target.value)} style={{ width: '100%', accentColor: '#00e5ff' }} />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
              <span style={{ color: '#9ca3af' }}>Shadow Spread:</span>
              <span style={{ color: '#00e5ff' }}>{shadow}px</span>
            </div>
            <input type="range" min="0" max="50" value={shadow} onChange={(e) => setShadow(e.target.value)} style={{ width: '100%', accentColor: '#00e5ff' }} />
          </div>
        </div>

        {/* Preview & Output Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Live Preview Box with vibrant background to show glass effect */}
          <div style={{ 
            height: '250px', 
            borderRadius: '12px', 
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              width: '80%',
              height: '65%',
              background: `rgba(255, 255, 255, ${opacity})`,
              backdropFilter: `blur(${blur}px)`,
              WebkitBackdropFilter: `blur(${blur}px)`,
              borderRadius: `${borderRadius}px`,
              border: `${borderWidth}px solid rgba(255, 255, 255, ${borderColorAlpha})`,
              boxShadow: `0 8px ${shadow}px rgba(0, 0, 0, 0.37)`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              padding: '1rem',
              textAlign: 'center'
            }}>
              <span style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '4px' }}>BYTE Glass Card</span>
              <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)' }}>Frosted UI Element Preview</span>
            </div>
          </div>

          {/* Code Output */}
          <div style={{ background: '#111827', border: '1px solid #1f2937', padding: '1.2rem', borderRadius: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
              <span style={{ color: '#fff', fontSize: '0.9rem' }}>Generated CSS</span>
              <button onClick={copyCode} style={{ background: copied ? '#10b981' : '#00e5ff', color: '#000', border: 'none', padding: '0.4rem 0.9rem', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem' }}>
                {copied ? '✓ Copied!' : 'Copy CSS'}
              </button>
            </div>
            <pre style={{ background: '#090a0f', padding: '1rem', borderRadius: '6px', color: '#38bdf8', overflowX: 'auto', margin: 0, fontSize: '0.85rem', lineHeight: '1.5' }}>
              {cssCode}
            </pre>
          </div>

        </div>

      </div>
    </main>
  );
}
