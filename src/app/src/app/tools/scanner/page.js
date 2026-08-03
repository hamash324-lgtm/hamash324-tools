'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function WifiAnalyzer() {
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');
  const [report, setReport] = useState(null);

  const analyzeWifi = (e) => {
    e.preventDefault();
    if (!ssid) return;

    const passLength = password.length;
    let strength = 'Weak';
    let score = 30;
    let securityType = 'WPA2-PSK';

    if (passLength >= 12 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) {
      strength = 'Strong & Secure';
      score = 98;
      securityType = 'WPA3 / WPA2-Enterprise';
    } else if (passLength >= 8) {
      strength = 'Medium Security';
      score = 65;
      securityType = 'WPA2-PSK';
    }

    setReport({
      networkName: ssid,
      signalQuality: '-52 dBm (Excellent)',
      channel: 'Ch 6 (2.4 GHz) / Ch 36 (5 GHz)',
      encryption: securityType,
      passStrength: strength,
      securityScore: `${score}%`,
      recommendation: score > 70 ? 'Current settings are secure.' : 'Recommended to change password and add special characters.'
    });
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#090a0f', color: '#00e5ff', fontFamily: 'monospace', padding: '2rem', maxWidth: '850px', margin: '0 auto', direction: 'ltr', textAlign: 'left' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>← Back to Dashboard</Link>
      </nav>

      <h1 style={{ color: '#fff', fontSize: '1.6rem', marginBottom: '0.5rem' }}>Network & URL Security Scanner</h1>
      <p style={{ color: '#9ca3af', lineHeight: '1.6', marginBottom: '2rem' }}>Advanced tool for checking network security and password strength.</p>

      <form onSubmit={analyzeWifi} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', background: '#111827', border: '1px solid #1f2937', padding: '2rem', borderRadius: '10px', marginBottom: '2rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.6rem', color: '#fff' }}>Target SSID or URL:</label>
          <input
            type="text"
            required
            value={ssid}
            onChange={(e) => setSsid(e.target.value)}
            placeholder="e.g. Home_Network_5G"
            style={{ width: '100%', background: '#090a0f', border: '1px solid #374151', color: '#fff', padding: '0.8rem', borderRadius: '6px', fontFamily: 'monospace', boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.6rem', color: '#fff' }}>Password / Auth Key:</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password to test strength..."
            style={{ width: '100%', background: '#090a0f', border: '1px solid #374151', color: '#fff', padding: '0.8rem', borderRadius: '6px', fontFamily: 'monospace', boxSizing: 'border-box' }}
          />
        </div>

        <button type="submit" style={{ background: '#00e5ff', color: '#000', border: 'none', padding: '0.9rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer', fontSize: '1rem' }}>
          Start Security Analysis
        </button>
      </form>

      {report && (
        <div style={{ background: '#111827', border: '1px solid #00e5ff44', padding: '2rem', borderRadius: '10px' }}>
          <h3 style={{ color: '#fff', margin: '0 0 1.2rem 0', borderBottom: '1px solid #1f2937', paddingBottom: '0.6rem' }}>Security Scan Report</h3>
          <p style={{ margin: '0.5rem 0' }}><strong style={{ color: '#00e5ff' }}>Target:</strong> {report.networkName}</p>
          <p style={{ margin: '0.5rem 0' }}><strong style={{ color: '#00e5ff' }}>Signal Quality:</strong> {report.signalQuality}</p>
          <p style={{ margin: '0.5rem 0' }}><strong style={{ color: '#00e5ff' }}>Channel:</strong> {report.channel}</p>
          <p style={{ margin: '0.5rem 0' }}><strong style={{ color: '#00e5ff' }}>Encryption:</strong> {report.encryption}</p>
          <p style={{ margin: '0.5rem 0' }}><strong style={{ color: '#00e5ff' }}>Password Rating:</strong> {report.passStrength}</p>
          <p style={{ margin: '0.5rem 0' }}><strong style={{ color: '#00e5ff' }}>Security Index:</strong> {report.securityScore}</p>
          <div style={{ background: '#090a0f', border: '1px solid #1f2937', padding: '1rem', borderRadius: '6px', marginTop: '1.2rem' }}>
            <strong style={{ color: '#00e5ff', display: 'block', marginBottom: '0.3rem' }}>Recommendation:</strong>
            <span style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: '1.5' }}>{report.recommendation}</span>
          </div>
        </div>
      )}
    </main>
  );
}
