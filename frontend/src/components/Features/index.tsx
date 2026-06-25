'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'آموزش حرفه‌ای',
    description: 'دوره‌های جامع و تخصصی از طرف متخصصان صنعت',
    icon: '📚',
  },
  {
    title: 'پشتیبانی ۲۴/۷',
    description: 'تیم پشتیبانی ما همیشه برای کمک‌تان آماده است',
    icon: '🎯',
  },
  {
    title: 'سرتیفیکت رسمی',
    description: 'دریافت گواهی رسمی پس از اتمام دوره',
    icon: '✅',
  },
  {
    title: 'جامعه فعال',
    description: 'عضویت در جامعه بزرگ متعلمین و محترفین',
    icon: '👥',
  },
];

export default function Features() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-dark-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-dark-900 dark:text-white">
          چرا Robatai را انتخاب کنید؟
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-gray-50 dark:bg-dark-700 rounded-lg text-center hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-dark-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
