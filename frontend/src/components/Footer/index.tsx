'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Company */}
        <div>
          <h3 className="text-xl font-bold mb-4">Robatai</h3>
          <p className="text-gray-400">
            پلتفرم حرفه‌ای آموزش هوش مصنوعی و برنامه‌نویسی
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">لینک‌های مفید</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/courses" className="hover:text-white transition">
                دوره‌ها
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition">
                بلاگ
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                درباره ما
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-4">منابع</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="#" className="hover:text-white transition">
                مستندات
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                API
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                پشتیبانی
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-4">شبکه‌های اجتماعی</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary-400 transition">Facebook</a>
            <a href="#" className="hover:text-primary-400 transition">Instagram</a>
            <a href="#" className="hover:text-primary-400 transition">Twitter</a>
            <a href="#" className="hover:text-primary-400 transition">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-dark-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
        <p>&copy; {currentYear} Robatai. تمام حقوق محفوظ است.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition">
            حریم خصوصی
          </Link>
          <Link href="#" className="hover:text-white transition">
            شرایط استفاده
          </Link>
        </div>
      </div>
    </footer>
  );
}
