'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ApiKeyGeneratorTool() {
  const [appName, setAppName] = useState('');
  const [apiKey, setApiKey] = useState('');

  const generateKey = (e) => {
    e.preventDefault();
    if (!appName.trim()) return;
    const randomHex = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
    setApiKey(`byte_live_${randomHex}`);
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#090a0f', color: '#fff', padding: '2rem 1rem', fontFamily: 'monospace', maxWidth: '900px', margin: '0 auto' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link href="/" style={{ color: '#00e5ff', textDecoration: 'none' }}>← العودة إلى الرئيسية (BYTE Store)</Link>
      </nav>

      <div style={{ background: '#111827', border: '1px solid #1f2937', padding: '1.5rem', borderRadius: '10px', marginTop: '1.5rem' }}>
        <h3 style={{ color: '#00e5ff', marginTop: 0 }}>مُولّد مفاتيح الـ API للتطبيقات</h3>
        <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>أدخل تفاصيل أو اسم التطبيق للحصول على مفتاح API تشغيلي خاص به:</p>
        
        <form onSubmit={generateKey} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input 
            type="text" 
            placeholder="أدخل اسم التطبيق أو تفاصيله..." 
            value={appName}
            onChange={(e) => setAppName(e.target.value)}
            style={{ padding: '0.75rem', background: '#030712', border: '1px solid #374151', color: '#fff', borderRadius: '5px', outline: 'none' }}
          />
          <button 
            type="submit" 
            style={{ padding: '0.75rem', background: '#00e5ff', color: '#030712', fontWeight: 'bold', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            توليد مفتاح API
          </button>
        </form>

        {apiKey && (
          <div style={{ marginTop: '1rem', padding: '1rem', background: '#030712', border: '1px solid #00e5ff', borderRadius: '5px' }}>
            <span style={{ color: '#9ca3af', fontSize: '0.8rem', display: 'block' }}>المفتاح الناتج:</span>
            <code style={{ color: '#10b981', wordBreak: 'break-all', fontSize: '1rem' }}>{apiKey}</code>
          </div>
        )}
      </div>
    </main>
  );
}
