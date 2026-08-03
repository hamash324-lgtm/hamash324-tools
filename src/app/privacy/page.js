'use client';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#090a0f', color: '#fff', padding: '2rem 1rem', fontFamily: 'monospace', maxWidth: '800px', margin: '0 auto' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link href="/" style={{ color: '#00e5ff', textDecoration: 'none' }}>← العودة إلى الرئيسية (BYTE Store)</Link>
      </nav>
      <h1 style={{ color: '#00e5ff', fontSize: '1.8rem', marginBottom: '1rem' }}>سياسة الخصوصية</h1>
      <p style={{ color: '#9ca3af', lineHeight: '1.6', marginBottom: '1rem' }}>
        في منصة BYTE Technical Store، خصوصية زوارنا تُمثل أهمية كبرى بالنسبة لنا. توضح وثيقة سياسة الخصوصية أنواع المعلومات الشخصية التي يتم جمعها وكيفية استخدامها.
      </p>
      <h3 style={{ color: '#fff', marginTop: '1.5rem' }}>ملفات تعريف الارتباط (Cookies)</h3>
      <p style={{ color: '#9ca3af', lineHeight: '1.6' }}>
        نستخدِم ملفات تعريف الارتباط لتخزين المعلومات حول تفضيلات الزوار، وتخصيص محتوى صفحة الويب بناءً على نوع متصفح الزوار أو معلومات أخرى يرسلونها عبر متصفحهم.
      </p>
      <h3 style={{ color: '#fff', marginTop: '1.5rem' }}>إعلانات Google AdSense</h3>
      <p style={{ color: '#9ca3af', lineHeight: '1.6' }}>
        نحن نستعين بشركات إعلانية طرف ثالث (مثل Google AdSense) لعرض الإعلانات عندما تزور موقعنا. يحق لهذه الشركات استخدام معلومات حول زيارتك لهذا الموقع (باستثناء الاسم، العنوان، البريد الإلكتروني، أو رقم الهاتف) لتقديم إعلانات حول السلع والخدمات التي تهمك.
      </p>
    </main>
  );
}
