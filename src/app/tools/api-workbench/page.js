'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ApiWorkbench() {
  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/posts/1');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [time, setTime] = useState(0);

  const sendRequest = async () => {
    setLoading(true);
    setError(null);
    setResponse(null);
    const startTime = performance.now();

    try {
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      };
      if (method !== 'GET' && method !== 'HEAD' && body.trim()) {
        options.body = body;
      }

      const res = await fetch(url, options);
      const endTime = performance.now();
      setTime(Math.round(endTime - startTime));

      const textData = await res.text();
      let parsedData;
      try {
        parsedData = JSON.parse(textData);
      } catch (e) {
        parsedData = textData;
      }

      setResponse({
        status: res.status,
        statusText: res.statusText,
        ok: res.ok,
        headers: Object.fromEntries(res.headers.entries()),
        data: parsedData,
      });
    } catch (err) {
      setError(err.message || 'Network request failed (CORS or Invalid URL)');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#090a0f', color: '#00e5ff', fontFamily: 'monospace', padding: '2rem', maxWidth: '1000px', margin: '0 auto', direction: 'ltr', textAlign: 'left' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>← Back to Dashboard</Link>
      </nav>

      <h1 style={{ color: '#fff', fontSize: '1.6rem', marginBottom: '0.5rem' }}>BYTE Advanced API Client & HTTP Workbench</h1>
      <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>Test APIs, inspect response headers, analyze latency, and debug payloads live from your browser.</p>

      <div style={{ background: '#111827', border: '1px solid #1f2937', padding: '1.5rem', borderRadius: '10px', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            style={{ background: '#090a0f', border: '1px solid #374151', color: '#00e5ff', padding: '0.7rem', borderRadius: '6px', fontWeight: 'bold', fontFamily: 'monospace' }}
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>

          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://api.example.com/v1/endpoint"
            style={{ flex: 1, minWidth: '250px', background: '#090a0f', border: '1px solid #374151', color: '#fff', padding: '0.7rem', borderRadius: '6px', fontFamily: 'monospace' }}
          />

          <button
            onClick={sendRequest}
            disabled={loading}
            style={{ background: '#00e5ff', color: '#000', border: 'none', padding: '0.7rem 1.8rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer' }}
          >
            {loading ? 'Sending...' : 'Send Request'}
          </button>
        </div>

        {(method === 'POST' || method === 'PUT') && (
          <div style={{ marginTop: '1rem' }}>
            <label style={{ display: 'block', color: '#9ca3af', fontSize: '0.85rem', marginBottom: '0.4rem' }}>Request Body (JSON):</label>
            <textarea
              rows="4"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder='{"key": "value"}'
              style={{ width: '100%', background: '#090a0f', border: '1px solid #374151', color: '#fff', padding: '0.8rem', borderRadius: '6px', fontFamily: 'monospace', boxSizing: 'border-box' }}
            />
          </div>
        )}
      </div>

      {error && (
        <div style={{ background: '#7f1d1d', border: '1px solid #ef4444', padding: '1rem', borderRadius: '8px', color: '#fca5a5', marginBottom: '1.5rem' }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      {response && (
        <div style={{ background: '#111827', border: '1px solid #1f2937', padding: '1.5rem', borderRadius: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid #1f2937', paddingBottom: '0.8rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <span style={{ background: response.ok ? '#065f46' : '#7f1d1d', color: response.ok ? '#34d399' : '#fca5a5', padding: '4px 10px', borderRadius: '4px', fontWeight: 'bold', fontSize: '0.85rem' }}>
                {response.status} {response.statusText}
              </span>
              <span style={{ color: '#9ca3af', fontSize: '0.85rem' }}>Time: <strong style={{ color: '#00e5ff' }}>{time}ms</strong></span>
            </div>
          </div>

          <div>
            <span style={{ color: '#9ca3af', fontSize: '0.85rem', display: 'block', marginBottom: '0.5rem' }}>Response Body:</span>
            <pre style={{ background: '#090a0f', padding: '1rem', borderRadius: '6px', color: '#38bdf8', overflowX: 'auto', margin: 0, fontSize: '0.85rem', maxHeight: '400px' }}>
              {typeof response.data === 'object' ? JSON.stringify(response.data, null, 2) : response.data}
            </pre>
          </div>
        </div>
      )}
    </main>
  );
}
