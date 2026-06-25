'use client';

import { motion } from 'framer-motion';

export default function DashboardPage() {
  const stats = [
    { label: 'دوره‌های ثبت‌شده', value: 5, icon: '📚' },
    { label: 'پیشرفت کلی', value: '45%', icon: '📊' },
    { label: 'ساعات یادگیری', value: 124, icon: '⏱️' },
    { label: 'سرتیفیکت', value: 2, icon: '🏆' },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-dark-900 dark:text-white">
        خوش آمدید! 👋
      </h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-lg"
          >
            <div className="text-4xl mb-2">{stat.icon}</div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
              {stat.label}
            </p>
            <p className="text-3xl font-bold text-primary-600">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Recent Courses */}
      <div className="bg-white dark:bg-dark-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-dark-900 dark:text-white">
          دوره‌های در حال مطالعه
        </h2>
        <div className="space-y-4">
          {[
            { name: 'Python مقدماتی', progress: 65 },
            { name: 'React Advanced', progress: 40 },
          ].map((course, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="font-medium">{course.name}</span>
                <span className="text-sm text-gray-500">{course.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                <div
                  className="bg-primary-600 h-2 rounded-full transition-all"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
