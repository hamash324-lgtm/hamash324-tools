'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function TextAnalyzer() {
  const [text, setText] = useState('');
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const lines = text ? text.split('\n').length : 0;

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#090a0f', color: '#00e5ff', fontFamily: 'monospace', padding: '2rem', maxWidth: '800px', margin: '0 auto', direction: 'ltr', textAlign: 'left' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>← Back to Dashboard</Link>
      </nav>
      <h1 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Text & Data Analyzer</h1>
      <p style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>Type or paste any text below to extract live statistics.</p>
      
      <textarea
        rows="6"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something here..."
        style={{ width: '100%', background: '#111827', border: '1px solid #1f2937', color: '#fff', padding: '1rem', borderRadius: '8px', fontFamily: 'monospace', boxSizing: 'border-box', marginBottom: '1.5rem' }}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', background: '#111827', padding: '1.5rem', borderRadius: '8px', border: '1px solid #1f2937', textAlign: 'center' }}>
        <div>
          <div style={{ fontSize: '1.8rem', color: '#00e5ff', fontWeight: 'bold' }}>{words}</div>
          <div style={{ color: '#9ca3af', fontSize: '0.85rem' }}>Words</div>
        </div>
        <div>
          <div style={{ fontSize: '1.8rem', color: '#00e5ff', fontWeight: 'bold' }}>{chars}</div>
          <div style={{ color: '#9ca3af', fontSize: '0.85rem' }}>Characters</div>
        </div>
        <div>
          <div style={{ fontSize: '1.8rem', color: '#00e5ff', fontWeight: 'bold' }}>{lines}</div>
          <div style={{ color: '#9ca3af', fontSize: '0.85rem' }}>Lines</div>
        </div>
      </div>
    </main>
  );
}
