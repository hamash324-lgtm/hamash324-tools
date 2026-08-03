import Link from 'next/link';

export default function About() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#00ffcc', fontFamily: 'monospace', padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link href="/" style={{ color: '#888', textDecoration: 'none' }}>← العودة إلى لوحة التحكم</Link>
      </nav>
      <h1 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>من نحن</h1>
      <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '1rem' }}>
        منصة BYTE هي منصة رقمية متخصصة في توفير أدوات الويب والتحليل البرمجي الفوري للطورين والمستخدمين، بهدف تسيير المهام اليومية ومعالجة البيانات بأعلى كفاءة وسرعة.
      </p>
    </main>
  );
}
