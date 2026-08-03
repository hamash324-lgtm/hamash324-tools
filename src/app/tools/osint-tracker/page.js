'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function OsintTrackerTool() {
  const [targetId, setTargetId] = useState('target-omega-99');
  const [customNote, setCustomNote] = useState('Security Verification Link');
  const [logs, setLogs] = useState([
    { id: 1, ip: '194.29.178.12', browser: 'Chrome / Android 14', device: 'Infinix Hot / Mobile', time: 'Just now', location: 'Istanbul, Turkey', status: 'Captured' },
    { id: 2, ip: '82.112.44.90', browser: 'Safari / iOS 17', device: 'iPhone / Mobile', time: '5 mins ago', location: 'Ankara, Turkey', status: 'Captured' }
  ]);
  const [copied, setCopied] = useState(false);

  const trackingLink = `https://hamash324-tools324.vercel.app/api/track?id=${targetId}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(trackingLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#090a0f', color: '#00e5ff', fontFamily: 'monospace', padding: '2rem', maxWidth: '1100px', margin: '0 auto', direction: 'ltr', textAlign: 'left' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>← Back to Dashboard</Link>
      </nav>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <h1 style={{ color: '#fff', fontSize: '1.8rem', margin: 0 }}>BYTE OSINT & Threat Intelligence Hub</h1>
        <span style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.4)', padding: '4px 12px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 'bold' }}>MAX POWER // ELITE INTEL</span>
      </div>
      <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>Generate advanced link intelligence campaigns, capture target device metadata, IP routing, and real-time telemetry.</p>

      {/* Campaign Generator */}
      <div style={{ background: '#111827', border: '1px solid #1f2937', padding: '1.5rem', borderRadius: '10px', marginBottom: '2rem' }}>
        <h3 style={{ color: '#fff', margin: '0 0 1rem 0', fontSize: '1.1rem' }}>1. Configure Tracking Campaign</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem', marginBottom: '1.2rem' }}>
          <div>
            <label style={{ display: 'block', color: '#9ca3af', fontSize: '0.85rem', marginBottom: '0.4rem' }}>Campaign ID / Target Tag:</label>
            <input
              type="text"
              value={targetId}
              onChange={(e) => setTargetId(e.target.value)}
              style={{ width: '100%', background: '#090a0f', border: '1px solid #374151', color: '#fff', padding: '0.7rem', borderRadius: '6px', fontFamily: 'monospace', boxSizing: 'border-box' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', color: '#9ca3af', fontSize: '0.85rem', marginBottom: '0.4rem' }}>Target Disguise Note:</label>
            <input
              type="text"
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              style={{ width: '100%', background: '#090a0f', border: '1px solid #374151', color: '#fff', padding: '0.7rem', borderRadius: '6px', fontFamily: 'monospace', boxSizing: 'border-box' }}
            />
          </div>
        </div>

        <div style={{ background: '#090a0f', border: '1px solid #374151', padding: '1rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <span style={{ color: '#38bdf8', fontSize: '0.9rem', wordBreak: 'break-all' }}>{trackingLink}</span>
          <button
            onClick={handleCopy}
            style={{ background: copied ? '#10b981' : '#00e5ff', color: '#000', border: 'none', padding: '0.6rem 1.2rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', whiteSpace: 'nowrap' }}
          >
            {copied ? '✓ Link Copied!' : 'Copy Tracking URL'}
          </button>
        </div>
      </div>

      {/* Captured Intelligence Feed */}
      <div style={{ background: '#111827', border: '1px solid #1f2937', padding: '1.5rem', borderRadius: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
          <h3 style={{ color: '#fff', margin: 0, fontSize: '1.1rem' }}>Live Telemetry & Target Logs</h3>
          <span style={{ color: '#10b981', fontSize: '0.85rem' }}>● Live Stream Active</span>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #374151', color: '#9ca3af' }}>
                <th style={{ padding: '0.8rem' }}>IP Address</th>
                <th style={{ padding: '0.8rem' }}>Device / OS</th>
                <th style={{ padding: '0.8rem' }}>Browser</th>
                <th style={{ padding: '0.8rem' }}>Estimated Location</th>
                <th style={{ padding: '0.8rem' }}>Timestamp</th>
                <th style={{ padding: '0.8rem' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id} style={{ borderBottom: '1px solid #1f2937' }}>
                  <td style={{ padding: '0.8rem', color: '#00e5ff', fontWeight: 'bold' }}>{log.ip}</td>
                  <td style={{ padding: '0.8rem', color: '#fff' }}>{log.device}</td>
                  <td style={{ padding: '0.8rem', color: '#9ca3af' }}>{log.browser}</td>
                  <td style={{ padding: '0.8rem', color: '#f3f4f6' }}>{log.location}</td>
                  <td style={{ padding: '0.8rem', color: '#64748b' }}>{log.time}</td>
                  <td style={{ padding: '0.8rem' }}>
                    <span style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', padding: '3px 8px', borderRadius: '4px', fontSize: '0.75rem' }}>{log.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
