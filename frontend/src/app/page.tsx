'use client';

import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Courses from '@/components/Courses';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Courses />
      <CTA />
    </main>
  );
}
