'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useState } from 'react';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-dark-800 shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary-600">
          Robatai
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/courses" className="hover:text-primary-600 transition">
            دوره‌ها
          </Link>
          <Link href="/blog" className="hover:text-primary-600 transition">
            بلاگ
          </Link>
          <Link href="/about" className="hover:text-primary-600 transition">
            درباره ما
          </Link>
          <Link href="/contact" className="hover:text-primary-600 transition">
            تماس
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <Link
            href="/login"
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition"
          >
            ورود
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-dark-800 px-4 py-4 space-y-4">
          <Link href="/courses" className="block hover:text-primary-600">
            دوره‌ها
          </Link>
          <Link href="/blog" className="block hover:text-primary-600">
            بلاگ
          </Link>
          <Link href="/about" className="block hover:text-primary-600">
            درباره ما
          </Link>
          <Link href="/contact" className="block hover:text-primary-600">
            تماس
          </Link>
        </div>
      )}
    </header>
  );
}
