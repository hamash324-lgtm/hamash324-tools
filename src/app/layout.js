export const metadata = {
  title: 'BYTE Technical Store & Utilities',
  description: 'Global Web Utilities & APK Intelligence Platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* كود Google AdSense بالمعرف الصحيح */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8554385683332292" 
          crossOrigin="anonymous">
        </script>
      </head>
      <body style={{ margin: 0, backgroundColor: '#090a0f', color: '#fff' }}>
        {children}
      </body>
    </html>
  );
}
