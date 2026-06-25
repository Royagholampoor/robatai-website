'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const courses = [
  {
    id: 1,
    title: 'مقدمه‌ای بر Python',
    description: 'یاد بگیرید چگونه با Python برنامه بنویسید',
    image: '🐍',
    price: 499000,
    level: 'مبتدی',
    students: 1250,
    rating: 4.8,
  },
  {
    id: 2,
    title: 'React Advanced',
    description: 'درک عمیق React و طراحی پروژه‌های بزرگ',
    image: '⚛️',
    price: 699000,
    level: 'متوسط',
    students: 890,
    rating: 4.9,
  },
  {
    id: 3,
    title: 'Machine Learning A-Z',
    description: 'یاد بگیرید Machine Learning از صفر تا صد',
    image: '🤖',
    price: 999000,
    level: 'پیشرفته',
    students: 560,
    rating: 4.7,
  },
];

export default function CourseCard() {
  const [filter, setFilter] = useState('همه');

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-dark-900 dark:text-white">
          دوره‌های محبوب
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          بهترین دوره‌های آموزشی از متخصصان صنعت
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-dark-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition group"
            >
              {/* Image */}
              <div className="h-40 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-dark-700 dark:to-dark-600 flex items-center justify-center text-6xl group-hover:scale-110 transition">
                {course.image}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-dark-900 dark:text-white">
                  {course.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {course.description}
                </p>

                {/* Meta */}
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>📚 {course.students} دانشجو</span>
                  <span>⭐ {course.rating}</span>
                </div>

                {/* Level */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300">
                    {course.level}
                  </span>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primary-600">
                    {course.price.toLocaleString()} تومان
                  </span>
                  <Link
                    href={`/courses/${course.id}`}
                    className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition text-sm"
                  >
                    مشاهده
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
