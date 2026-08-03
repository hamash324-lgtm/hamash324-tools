'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function KeyGenerator() {
  const [key, setKey] = useState('Click button below to generate encryption key');
  const [copied, setCopied] = useState(false);

  const generateKey = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=';
    let result = '';
    for (let i = 0; i < 32; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setKey(result);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(key);
    setCopied(true);
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#090a0f', color: '#00e5ff', fontFamily: 'monospace', padding: '2rem', maxWidth: '800px', margin: '0 auto', direction: 'ltr', textAlign: 'left' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>← Back to Dashboard</Link>
      </nav>
      <h1 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Key & Token Generator</h1>
      <p style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>Generate secure encryption keys and random tokens.</p>

      <div style={{ background: '#111827', border: '1px solid #1f2937', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem', wordBreak: 'break-all', textAlign: 'center', fontSize: '1.1rem', color: '#fff' }}>
        {key}
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={generateKey} style={{ flex: 1, background: '#00e5ff', color: '#000', border: 'none', padding: '0.9rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer' }}>
          Generate New Key
        </button>
        <button onClick={copyToClipboard} style={{ background: '#1f2937', color: '#00e5ff', border: '1px solid #00e5ff44', padding: '0.9rem 1.5rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer' }}>
          {copied ? 'Copied!' : 'Copy Key'}
        </button>
      </div>
    </main>
  );
}
