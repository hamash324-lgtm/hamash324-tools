'use client';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#090a0f', color: '#fff', padding: '2rem 1rem', fontFamily: 'monospace', maxWidth: '900px', margin: '0 auto' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link href="/" style={{ color: '#00e5ff', textDecoration: 'none' }}>← العودة إلى الرئيسية (BYTE Store)</Link>
      </nav>

      <h1 style={{ color: '#00e5ff', fontSize: '1.8rem', marginBottom: '0.5rem' }}>اتصل بنا</h1>
      <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>
        نحن هنا لمساعدتك والرد على استفساراتك التقنية. يمكنك التواصل معنا مباشرة عبر البريد الإلكتروني، أو من خلال مراسلتنا عبر الواتساب:
      </p>

      <div style={{ background: '#111827', border: '1px solid #1f2937', padding: '1.5rem', borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <p style={{ margin: 0, color: '#9ca3af' }}>
          البريد الإلكتروني: <strong style={{ color: '#00e5ff' }}>hamash324@gmail.com</strong>
        </p>
        
        <p style={{ margin: 0, color: '#9ca3af' }}>
          واتساب الدعم الفني: <a href="https://wa.me/905382544745" target="_blank" rel="noopener noreferrer" style={{ color: '#10b981', textDecoration: 'none' }}>+90 538 254 4745</a>
        </p>

        <p style={{ margin: 0, color: '#9ca3af' }}>
          المطور المسؤول: <strong style={{ color: '#fff' }}>MAHMUD EL HAMMAŞ</strong>
        </p>
      </div>
    </main>
  );
}
