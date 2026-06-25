# 🎨 Robatai Frontend - Next.js 15 App

Frontend پلتفرم Robatai ساخته شده با Next.js 15 و App Router.

## ✨ ویژگی‌ها

- ✅ Next.js 15 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Responsive Design (Mobile First)
- ✅ Dark/Light Mode
- ✅ Server & Client Components
- ✅ API Integration
- ✅ SEO Optimized
- ✅ Image Optimization
- ✅ Performance Optimized

## 🚀 شروع سریع

```bash
# نصب dependencies
npm install

# شروع development server
npm run dev

# Build برای production
npm run build

# شروع production server
npm start
```

## 📁 ساختار پوشه‌ها

```
frontend/
├── src/
│   ├── app/                 # App Router
│   │   ├── layout.tsx       # Root Layout
│   │   ├── page.tsx         # Home Page
│   │   ├── (pages)/         # Page Group
│   │   └── api/             # API Routes
│   ├── components/          # React Components
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── Cards/
│   │   └── ...
│   ├── hooks/               # Custom Hooks
│   ├── services/            # API Services
│   ├── store/               # Zustand State
│   ├── types/               # TypeScript Types
│   ├── utils/               # Utility Functions
│   └── styles/              # Global Styles
├── public/                  # Static Files
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 رنگ‌بندی

| رنگ | مقدار | استفاده |
|-----|-------|---------|
| Primary | `#2563EB` | دکمه‌ها، لینک‌ها |
| Secondary | `#F5F1E8` | بک‌گراند |
| Accent | `#7C3AED` | Highlights |
| Dark | `#0F172A` | Text Dark Mode |
| Light | `#FFFFFF` | Text Light Mode |

## 📱 صفحات

- `/` - صفحه اصلی
- `/courses` - لیست دوره‌ها
- `/courses/[id]` - جزئیات دوره
- `/services` - خدمات
- `/portfolio` - نمونه کارها
- `/blog` - بلاگ
- `/blog/[slug]` - مقالات
- `/about` - درباره ما
- `/contact` - تماس با ما
- `/dashboard` - داشبورد دانشجو
- `/admin` - پنل مدیریت

## 🔗 API Integration

```typescript
// services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
```

## 🌙 Dark Mode

```tsx
// استفاده از next-themes
import { useTheme } from 'next-themes';

export default function Component() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle Theme
    </button>
  );
}
```

## 🎯 Performance

- PageSpeed Desktop: 90+
- PageSpeed Mobile: 90+
- Lighthouse Score: 90+

## 🧪 Testing

```bash
# اجرای تست‌ها
npm run test

# Watch mode
npm run test:watch
```

## 🔍 SEO

- Meta tags for all pages
- Open Graph tags
- Twitter Cards
- Sitemap generation
- Robots.txt
- Schema markup

## 📚 مستندات

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)
