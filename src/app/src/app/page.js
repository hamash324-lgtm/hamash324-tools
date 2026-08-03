import Link from 'next/link';

export default function Dashboard() {
  const toolsList = [
    {
      id: 'apk-analyzer',
      name: 'Advanced APK Analyzer',
      description: 'Inspect packages, extract permissions, app ID, and security config.',
      path: '/tools/apk-analyzer',
      status: 'Global',
    },
    {
      id: 'app-builder',
      name: 'App Structure Builder',
      description: 'Design app layouts and instantly generate configuration files.',
      path: '/tools/app-builder',
      status: 'Global',
    },
    {
      id: 'analyzer',
      name: 'Text & Data Analyzer',
      description: 'Real-time tool to analyze words, characters, and lines instantly.',
      path: '/tools/analyzer',
      status: 'Active',
    },
    {
      id: 'generator',
      name: 'Key & Token Generator',
      description: 'Generate secure encryption keys and random tokens for systems.',
      path: '/tools/generator',
      status: 'Active',
    },
    {
      id: 'scanner',
      name: 'Network & URL Scanner',
      description: 'Scan live links and test server response speed and security.',
      path: '/tools/scanner',
      status: 'Active',
    },
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#090a0f', color: '#00e5ff', fontFamily: 'monospace', padding: '2rem', maxWidth: '1100px', margin: '0 auto', direction: 'ltr', textAlign: 'left' }}>
      <header style={{ borderBottom: '1px solid #00e5ff33', paddingBottom: '1.2rem', marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '1.8rem', letterSpacing: '3px', color: '#ffffff', fontWeight: '800' }}>
            BYTE // <span style={{ color: '#00e5ff' }}>TECHNICAL STORE</span>
          </h1>
          <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: '#64748b' }}>Technical Tools Platform - Developer: Mahmoud Alhamash (hamash324)</p>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', background: '#111827', padding: '0.6rem 1rem', borderRadius: '8px', border: '1px solid #1f2937' }}>
          <Link href="/privacy" style={{ color: '#9ca3af', fontSize: '0.85rem', textDecoration: 'none' }}>Privacy Policy</Link>
          <span style={{ color: '#374151' }}>|</span>
          <Link href="/contact" style={{ color: '#9ca3af', fontSize: '0.85rem', textDecoration: 'none' }}>Contact Us</Link>
        </div>
      </header>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.2rem', color: '#f3f4f6', marginBottom: '1.2rem', fontWeight: '600', borderLeft: '3px solid #00e5ff', paddingLeft: '10px' }}>Available Utility & Code Tools</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {toolsList.map((tool) => (
            <div key={tool.id} style={{ background: '#111827', border: '1px solid #1f2937', padding: '1.5rem', borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                  <h3 style={{ margin: 0, color: '#ffffff', fontSize: '1.05rem' }}>{tool.name}</h3>
                  <span style={{ fontSize: '0.7rem', background: 'rgba(0, 229, 255, 0.1)', color: '#00e5ff', padding: '3px 8px', borderRadius: '4px', border: '1px solid rgba(0, 229, 255, 0.2)' }}>{tool.status}</span>
                </div>
                <p style={{ color: '#9ca3af', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '1.5rem' }}>{tool.description}</p>
              </div>
              <Link href={tool.path} style={{ textDecoration: 'none', background: '#00e5ff', color: '#000000', padding: '0.7rem 1rem', textAlign: 'center', fontWeight: 'bold', borderRadius: '6px', display: 'block', fontSize: '0.9rem' }}>
                Open Tool & Load Config
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
