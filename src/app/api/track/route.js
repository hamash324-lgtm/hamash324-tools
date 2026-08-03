import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const targetId = url.searchParams.get('id') || 'default-target';
    
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0] : '127.0.0.1';
    const userAgent = request.headers.get('user-agent') || 'Unknown Device/Browser';

    // تسجيل البيانات الحقيقية في سجلات الخادم (Server Console)
    console.log(`========================================`);
    console.log(`[BYTE OSINT] Target Clicked! ID: ${targetId}`);
    console.log(`[BYTE OSINT] IP Address: ${ip}`);
    console.log(`[BYTE OSINT] User-Agent: ${userAgent}`);
    console.log(`========================================`);

    // إعادة توجيه الضحية/الهدف إلى الصفحة الرئيسية أو الرابط المطلوب
    return NextResponse.redirect(new URL('/', request.url));
  } catch (error) {
    return NextResponse.json({ error: 'Tracking failed' }, { status: 500 });
  }
}
