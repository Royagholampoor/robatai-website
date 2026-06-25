'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-primary-50 to-white dark:from-dark-900 dark:to-dark-800 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-4 max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-dark-900 dark:text-white mb-6">
          Robatai
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          پلتفرم حرفه‌ای آموزش هوش مصنوعی و برنامه‌نویسی
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition">
            شروع کنید
          </button>
          <button className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 transition">
            درباره ما
          </button>
        </div>
      </motion.div>
    </section>
  );
}
