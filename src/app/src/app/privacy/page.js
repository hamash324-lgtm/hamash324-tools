import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#090a0f', color: '#00e5ff', fontFamily: 'monospace', padding: '2rem', maxWidth: '800px', margin: '0 auto', direction: 'ltr', textAlign: 'left' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>← Back to Dashboard</Link>
      </nav>
      <h1 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>Privacy Policy - BYTE Technical Store</h1>
      <p style={{ color: '#9ca3af', lineHeight: '1.8' }}>We are committed to protecting your privacy and providing a secure, reliable developer environment. All tool executions and scans run locally or through secure protocols.</p>
    </main>
  );
}
