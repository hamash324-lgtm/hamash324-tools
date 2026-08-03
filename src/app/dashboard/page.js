'use client';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#090a0f', color: '#fff', padding: '2rem 1rem', fontFamily: 'monospace', maxWidth: '900px', margin: '0 auto' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link href="/" style={{ color: '#00e5ff', textDecoration: 'none' }}>← العودة إلى الرئيسية (BYTE Store)</Link>
      </nav>

      <h1 style={{ color: '#00e5ff', fontSize: '1.8rem', marginBottom: '0.5rem' }}>لوحة التحكم والتحليلات - BYTE</h1>
      <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>
        مرحباً بك في لوحة تحكم المنصة. من هنا يمكنك إدارة الأدوات، تتبع حالة الحزم، ومراقبة أداء إعلانات Google AdSense.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.2rem', marginBottom: '2rem' }}>
        <div style={{ background: '#111827', border: '1px solid #1f2937', padding: '1.5rem', borderRadius: '10px' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', color: '#00e5ff' }}>حالة النطاق</h3>
          <p style={{ margin: 0, color: '#9ca3af', fontSize: '0.9rem' }}>متصل وفعال عبر Vercel (HTTPS)</p>
        </div>
        <div style={{ background: '#111827', border: '1px solid #1f2937', padding: '1.5rem', borderRadius: '10px' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', color: '#00e5ff' }}>ربط Google AdSense</h3>
          <p style={{ margin: 0, color: '#10b981', fontSize: '0.9rem' }}>الكود مثبت ومفعل بنجاح</p>
        </div>
      </div>
    </main>
  );
}
