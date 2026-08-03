'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Base64Tool() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const encodeText = () => {
    try {
      setResult(btoa(unescape(encodeURIComponent(text))));
    } catch (e) {
      setResult('Encoding Error');
    }
  };

  const decodeText = () => {
    try {
      setResult(decodeURIComponent(escape(atob(text))));
    } catch (e) {
      setResult('Invalid Base64 string');
    }
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#090a0f', color: '#00e5ff', fontFamily: 'monospace', padding: '2rem', maxWidth: '900px', margin: '0 auto', direction: 'ltr', textAlign: 'left' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>← Back to Dashboard</Link>
      </nav>
      <h1 style={{ color: '#fff', fontSize: '1.6rem', marginBottom: '0.5rem' }}>Base64 Encoder / Decoder</h1>
      <p style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>Convert text or tokens securely between raw and Base64 format.</p>

      <textarea
        rows="6"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text or base64 string..."
        style={{ width: '100%', background: '#111827', border: '1px solid #1f2937', color: '#fff', padding: '1rem', borderRadius: '8px', fontFamily: 'monospace', boxSizing: 'border-box', marginBottom: '1rem' }}
      />

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
        <button onClick={encodeText} style={{ flex: 1, background: '#00e5ff', color: '#000', border: 'none', padding: '0.9rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer' }}>
          Encode to Base64
        </button>
        <button onClick={decodeText} style={{ flex: 1, background: '#1f2937', color: '#00e5ff', border: '1px solid #00e5ff44', padding: '0.9rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer' }}>
          Decode from Base64
        </button>
      </div>

      {result && (
        <div style={{ background: '#111827', border: '1px solid #00e5ff44', padding: '1.5rem', borderRadius: '8px' }}>
          <h3 style={{ color: '#fff', margin: '0 0 0.8rem 0' }}>Result:</h3>
          <div style={{ background: '#090a0f', padding: '1rem', borderRadius: '6px', color: '#38bdf8', wordBreak: 'break-all', fontSize: '0.95rem' }}>
            {result}
          </div>
        </div>
      )}
    </main>
  );
}
