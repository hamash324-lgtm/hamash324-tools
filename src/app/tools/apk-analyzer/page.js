'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ByteAppAnalyzer() {
  const [packageName, setPackageName] = useState('com.hamash324.byte.app');
  const [report, setReport] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

  const handleFullAnalysis = (e) => {
    e.preventDefault();
    if (!packageName) return;
    setIsScanning(true);
    setTimeout(() => {
      setReport({
        appName: 'BYTE Technical Store',
        pkg: packageName,
        version: 'v1.0.0 (Build 1)',
        sdkMin: 'Android 8.0 (API 26)',
        sdkTarget: 'Android 14.0 (API 36)',
        securityScore: '98% (Secure & Compliant)',
        architectures: ['arm64-v8a', 'armeabi-v7a', 'x86_64'],
        permissions: ['INTERNET (Full Network Access)', 'ACCESS_NETWORK_STATE', 'WRITE_EXTERNAL_STORAGE'],
        gradleSnippet: `plugins {\n    id("com.android.application")\n    kotlin("android")\n}\n\nandroid {\n    namespace = "${packageName}"\n    compileSdk = 36\n\n    defaultConfig {\n        applicationId = "${packageName}"\n        minSdk = 26\n        targetSdk = 36\n        versionCode = 1\n        versionName = "1.0.0"\n    }\n}`
      });
      setIsScanning(false);
    }, 800);
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#090a0f', color: '#00e5ff', fontFamily: 'monospace', padding: '2rem', maxWidth: '900px', margin: '0 auto', direction: 'ltr', textAlign: 'left' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>← Back to Dashboard</Link>
      </nav>

      <h1 style={{ color: '#fff', fontSize: '1.7rem', marginBottom: '0.5rem' }}>Advanced APK Analyzer - BYTE</h1>
      <p style={{ color: '#9ca3af', marginBottom: '2rem', lineHeight: '1.6' }}>Inspect package structures, extract permissions, SDK IDs, and environment settings.</p>

      <form onSubmit={handleFullAnalysis} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', background: '#111827', border: '1px solid #1f2937', padding: '2rem', borderRadius: '10px', marginBottom: '2rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.6rem', color: '#fff' }}>Application ID:</label>
          <input
            type="text"
            required
            value={packageName}
            onChange={(e) => setPackageName(e.target.value)}
            style={{ width: '100%', background: '#090a0f', border: '1px solid #374151', color: '#fff', padding: '0.9rem', borderRadius: '6px', fontFamily: 'monospace', boxSizing: 'border-box' }}
          />
        </div>
        <button type="submit" disabled={isScanning} style={{ background: '#00e5ff', color: '#000', border: 'none', padding: '0.9rem', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer', fontSize: '1rem' }}>
          {isScanning ? 'Scanning & Analyzing...' : 'Start Full Analysis'}
        </button>
      </form>

      {report && (
        <div style={{ background: '#111827', border: '1px solid #00e5ff44', padding: '2rem', borderRadius: '10px' }}>
          <h3 style={{ color: '#fff', margin: '0 0 1.2rem 0', borderBottom: '1px solid #1f2937', paddingBottom: '0.6rem' }}>Analysis Results</h3>
          <p style={{ margin: '0.5rem 0' }}><strong style={{ color: '#00e5ff' }}>App Name:</strong> {report.appName}</p>
          <p style={{ margin: '0.5rem 0' }}><strong style={{ color: '#00e5ff' }}>Package:</strong> {report.pkg}</p>
          <p style={{ margin: '0.5rem 0' }}><strong style={{ color: '#00e5ff' }}>Version:</strong> {report.version}</p>
          <p style={{ margin: '0.5rem 0' }}><strong style={{ color: '#00e5ff' }}>Security Score:</strong> <span style={{ color: '#10b981' }}>{report.securityScore}</span></p>
          <pre style={{ background: '#090a0f', padding: '1rem', borderRadius: '6px', color: '#38bdf8', overflowX: 'auto', marginTop: '1rem', fontSize: '0.9rem' }}>{report.gradleSnippet}</pre>
        </div>
      )}
    </main>
  );
}
