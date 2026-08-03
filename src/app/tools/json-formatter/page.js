'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function JsonFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState(null);

  const formatJson = () => {
    try {
      if (!input.trim()) {
        setOutput('');
        setError(null);
        return;
      }
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError(null);
    } catch (err) {
      setError(err.message);
      setOutput('');
    }
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#090a0f', color: '#00e5ff', fontFamily: 'monospace', padding: '2rem', maxWidth: '900px', margin: '0 auto', direction: 'ltr', textAlign: 'left' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>← Back to Dashboard</Link>
      </nav>
      <h1 style={{ color: '#fff', fontSize: '1.6rem', marginBottom: '0.5rem' }}>JSON Formatter & Validator</h1>
      <p style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>Paste raw JSON below to beautify and validate syntax instantly.</p>

      <textarea
        rows="8"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste JSON here..."
        style={{ width: '100%', background: '#111827', border: '1px solid #1f2937', color: '#fff', padding: '1rem', borderRadius: '8px', fontFamily: 'monospace', boxSizing: 'border-box', marginBottom: '1rem' }}
      />

      <button onClick={formatJson} style={{ background: '#00e5ff', color: '#000', border: 'none', padding: '0.9rem 1.5rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer', marginBottom: '1.5rem', width: '100%' }}>
        Format & Validate JSON
      </button>

      {error && (
        <div style={{ background: '#7f1d1d', border: '1px solid #ef4444', padding: '1rem', borderRadius: '8px', color: '#fca5a5', marginBottom: '1rem' }}>
          <strong>Syntax Error:</strong> {error}
        </div>
      )}

      {output && (
        <div style={{ background: '#111827', border: '1px solid #00e5ff44', padding: '1.5rem', borderRadius: '8px' }}>
          <h3 style={{ color: '#10b981', margin: '0 0 0.8rem 0' }}>✓ Valid JSON Output</h3>
          <pre style={{ background: '#090a0f', padding: '1rem', borderRadius: '6px', color: '#38bdf8', overflowX: 'auto', margin: 0, fontSize: '0.9rem' }}>{output}</pre>
        </div>
      )}
    </main>
  );
}
