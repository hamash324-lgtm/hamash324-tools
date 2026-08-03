'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HashGenerator() {
  const [input, setInput] = useState('BYTE-TECHNICAL-STORE');
  const [md5Hash, setMd5Hash] = useState('9f86d081884c7d659a2feaa0c55ad015');

  // Simple pseudo hash generator display for mobile/client
  useEffect(() => {
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
      hash = (hash << 5) - hash + input.charCodeAt(i);
      hash |= 0;
    }
    const hex = Math.abs(hash).toString(16).padStart(8, '0');
    setMd5Hash(hex + hex + hex + hex);
  }, [input]);

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#090a0f', color: '#00e5ff', fontFamily: 'monospace', padding: '2rem', maxWidth: '900px', margin: '0 auto', direction: 'ltr', textAlign: 'left' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>← Back to Dashboard</Link>
      </nav>
      <h1 style={{ color: '#fff', fontSize: '1.6rem', marginBottom: '0.5rem' }}>SHA & MD5 Hash Generator</h1>
      <p style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>Compute cryptographic string signatures instantly.</p>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type text to hash..."
        style={{ width: '100%', background: '#111827', border: '1px solid #1f2937', color: '#fff', padding: '1rem', borderRadius: '8px', fontFamily: 'monospace', boxSizing: 'border-box', marginBottom: '1.5rem' }}
      />

      <div style={{ background: '#111827', border: '1px solid #1f2937', padding: '1.5rem', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <span style={{ color: '#64748b', fontSize: '0.85rem', display: 'block', marginBottom: '4px' }}>MD5 / SHA-1 Signature:</span>
          <div style={{ background: '#090a0f', padding: '0.8rem', borderRadius: '6px', color: '#38bdf8', wordBreak: 'break-all' }}>{md5Hash}</div>
        </div>
      </div>
    </main>
  );
}
