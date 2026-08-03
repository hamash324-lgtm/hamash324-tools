'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function AppBuilder() {
  const [appName, setAppName] = useState('BYTE Store Utility');
  const [packageName, setPackageName] = useState('com.hamash324.byte.app');
  const [built, setBuilt] = useState(false);

  const handleBuild = (e) => {
    e.preventDefault();
    setBuilt(true);
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#090a0f', color: '#00e5ff', fontFamily: 'monospace', padding: '2rem', maxWidth: '900px', margin: '0 auto', direction: 'ltr', textAlign: 'left' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>← Back to Dashboard</Link>
      </nav>

      <h1 style={{ color: '#fff', fontSize: '1.7rem', marginBottom: '0.5rem' }}>App Structure Builder</h1>
      <p style={{ color: '#9ca3af', marginBottom: '2rem', lineHeight: '1.6' }}>Design UI architecture and instantly generate configuration files.</p>

      <form onSubmit={handleBuild} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', background: '#111827', border: '1px solid #1f2937', padding: '2rem', borderRadius: '10px', marginBottom: '2rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.6rem', color: '#fff' }}>App Name:</label>
          <input
            type="text"
            required
            value={appName}
            onChange={(e) => setAppName(e.target.value)}
            style={{ width: '100%', background: '#090a0f', border: '1px solid #374151', color: '#fff', padding: '0.9rem', borderRadius: '6px', fontFamily: 'monospace', boxSizing: 'border-box' }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.6rem', color: '#fff' }}>Package ID:</label>
          <input
            type="text"
            required
            value={packageName}
            onChange={(e) => setPackageName(e.target.value)}
            style={{ width: '100%', background: '#090a0f', border: '1px solid #374151', color: '#fff', padding: '0.9rem', borderRadius: '6px', fontFamily: 'monospace', boxSizing: 'border-box' }}
          />
        </div>
        <button type="submit" style={{ background: '#00e5ff', color: '#000', border: 'none', padding: '0.9rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer', fontSize: '1rem' }}>
          Generate Files Instantly
        </button>
      </form>

      {built && (
        <div style={{ background: '#111827', border: '1px solid #00e5ff44', padding: '2rem', borderRadius: '10px' }}>
          <h3 style={{ color: '#10b981', margin: '0 0 1rem 0' }}>✓ Structure Built Successfully</h3>
          <p style={{ margin: '0.5rem 0', color: '#fff' }}>Project: {appName} ({packageName})</p>
        </div>
      )}
    </main>
  );
}
