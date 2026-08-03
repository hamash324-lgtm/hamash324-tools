import Link from 'next/link';

export default function ContactPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#090a0f', color: '#00e5ff', fontFamily: 'monospace', padding: '2rem', maxWidth: '800px', margin: '0 auto', direction: 'ltr', textAlign: 'left' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>← Back to Dashboard</Link>
      </nav>
      <h1 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>Contact Us - Technical Support</h1>
      <p style={{ color: '#9ca3af', lineHeight: '1.8', marginBottom: '1rem' }}>For developer support and inquiries:</p>
      <div style={{ background: '#111827', border: '1px solid #1f2937', padding: '1.5rem', borderRadius: '8px', color: '#fff' }}>
        <p style={{ margin: '0 0 0.5rem 0' }}>Developer: <span style={{ color: '#00e5ff' }}>Mahmoud Alhamash (hamash324)</span></p>
        <p style={{ margin: 0 }}>Active Platform: <span style={{ color: '#38bdf8' }}>https://hamash324-tools324.vercel.app</span></p>
      </div>
    </main>
  );
}
