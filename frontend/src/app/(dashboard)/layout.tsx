'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-dark-900">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-white dark:bg-dark-800 transition-all duration-300 shadow-lg`}
      >
        <div className="p-4 border-b dark:border-dark-700">
          <h1 className={`font-bold text-primary-600 ${
            sidebarOpen ? 'text-xl' : 'text-center text-2xl'
          }`}>
            {sidebarOpen ? 'داشبورد' : 'D'}
          </h1>
        </div>

        <nav className="p-4 space-y-2">
          {[
            { href: '/dashboard', label: 'خانه', icon: '🏠' },
            { href: '/dashboard/courses', label: 'دوره‌های من', icon: '📚' },
            { href: '/dashboard/wishlist', label: 'علاقه‌مندی‌ها', icon: '❤️' },
            { href: '/dashboard/settings', label: 'تنظیمات', icon: '⚙️' },
            { href: '/dashboard/profile', label: 'پروفایل', icon: '👤' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition"
            >
              <span className="text-xl">{item.icon}</span>
              {sidebarOpen && <span>{item.label}</span>}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white dark:bg-dark-800 shadow-sm p-4 flex justify-between items-center border-b dark:border-dark-700">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-dark-700 rounded"
          >
            ☰
          </button>
          <div className="flex items-center gap-4">
            <span>👤</span>
            <button
              onClick={() => {
                localStorage.removeItem('token');
                router.push('/login');
              }}
              className="text-red-600 hover:text-red-700"
            >
              خروج
            </button>
          </div>
        </div>

        {/* Content */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}
