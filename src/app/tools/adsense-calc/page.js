'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function AdSenseCalculator() {
  const [pageViews, setPageViews] = useState('10000');
  const [clicks, setClicks] = useState('250');
  const [earnings, setEarnings] = useState('45.00');

  const pv = parseFloat(pageViews) || 0;
  const clk = parseFloat(clicks) || 0;
  const earn = parseFloat(earnings) || 0;

  const ctr = pv > 0 ? ((clk / pv) * 100).toFixed(2) : '0.00';
  const cpc = clk > 0 ? (earn / clk).toFixed(2) : '0.00';
  const rpm = pv > 0 ? ((earn / pv) * 1000).toFixed(2) : '0.00';

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#090a0f', color: '#00e5ff', fontFamily: 'monospace', padding: '2rem', maxWidth: '900px', margin: '0 auto', direction: 'ltr', textAlign: 'left' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>← Back to Dashboard</Link>
      </nav>

      <h1 style={{ color: '#fff', fontSize: '1.6rem', marginBottom: '0.5rem' }}>AdSense CTR & RPM Optimizer Calculator</h1>
      <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>Analyze real-time click-through rates, revenue per mille, and get optimization insights.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.2rem', marginBottom: '2rem' }}>
        <div style={{ background: '#111827', border: '1px solid #1f2937', padding: '1.2rem', borderRadius: '8px' }}>
          <label style={{ display: 'block', color: '#fff', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Page Views (Impressions):</label>
          <input
            type="number"
            value={pageViews}
            onChange={(e) => setPageViews(e.target.value)}
            style={{ width: '100%', background: '#090a0f', border: '1px solid #374151', color: '#fff', padding: '0.7rem', borderRadius: '6px', fontFamily: 'monospace', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ background: '#111827', border: '1px solid #1f2937', padding: '1.2rem', borderRadius: '8px' }}>
          <label style={{ display: 'block', color: '#fff', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Total Clicks:</label>
          <input
            type="number"
            value={clicks}
            onChange={(e) => setClicks(e.target.value)}
            style={{ width: '100%', background: '#090a0f', border: '1px solid #374151', color: '#fff', padding: '0.7rem', borderRadius: '6px', fontFamily: 'monospace', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ background: '#111827', border: '1px solid #1f2937', padding: '1.2rem', borderRadius: '8px' }}>
          <label style={{ display: 'block', color: '#fff', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Total Earnings ($):</label>
          <input
            type="number"
            step="0.01"
            value={earnings}
            onChange={(e) => setEarnings(e.target.value)}
            style={{ width: '100%', background: '#090a0f', border: '1px solid #374151', color: '#fff', padding: '0.7rem', borderRadius: '6px', fontFamily: 'monospace', boxSizing: 'border-box' }}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.2rem', marginBottom: '2rem' }}>
        <div style={{ background: '#111827', border: '1px solid #00e5ff44', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <span style={{ color: '#64748b', fontSize: '0.85rem', display: 'block', marginBottom: '0.5rem' }}>CTR (Click-Through Rate)</span>
          <span style={{ color: '#00e5ff', fontSize: '1.8rem', fontWeight: 'bold' }}>{ctr}%</span>
        </div>
        <div style={{ background: '#111827', border: '1px solid #00e5ff44', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <span style={{ color: '#64748b', fontSize: '0.85rem', display: 'block', marginBottom: '0.5rem' }}>CPC (Cost Per Click)</span>
          <span style={{ color: '#38bdf8', fontSize: '1.8rem', fontWeight: 'bold' }}>${cpc}</span>
        </div>
        <div style={{ background: '#111827', border: '1px solid #00e5ff44', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <span style={{ color: '#64748b', fontSize: '0.85rem', display: 'block', marginBottom: '0.5rem' }}>RPM (Revenue Per Mille)</span>
          <span style={{ color: '#10b981', fontSize: '1.8rem', fontWeight: 'bold' }}>${rpm}</span>
        </div>
      </div>

      <div style={{ background: '#111827', border: '1px solid #1f2937', padding: '1.5rem', borderRadius: '8px' }}>
        <h3 style={{ color: '#fff', margin: '0 0 1rem 0', fontSize: '1.1rem' }}>Optimization Insights</h3>
        <ul style={{ color: '#9ca3af', paddingLeft: '1.2rem', margin: 0, lineHeight: '1.8', fontSize: '0.9rem' }}>
          <li>{parseFloat(ctr) < 1 ? '⚠️ CTR is below optimal range (1-3%). Consider placing responsive ads closer to content flow.' : '✓ CTR is healthy. Ensure traffic quality complies with ad network policies.'}</li>
          <li>{parseFloat(rpm) < 2 ? '⚠️ RPM is low. Focus on tier-1 traffic countries or high-paying technical/utility content niches.' : '✓ RPM performance is strong. Keep optimizing ad layout distribution.'}</li>
        </ul>
      </div>
    </main>
  );
}
