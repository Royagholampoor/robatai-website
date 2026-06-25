# 🔌 Robatai Backend - Laravel 12 API

Backend API برای پلتفرم Robatai ساخته شده با Laravel 12.

## 📋 ویژگی‌ها

- ✅ RESTful API Architecture
- ✅ JWT Authentication
- ✅ Role-Based Access Control (RBAC)
- ✅ MySQL Database
- ✅ Redis Caching
- ✅ Queue System
- ✅ File Storage
- ✅ Email Service
- ✅ Payment Gateway Integration
- ✅ API Rate Limiting

## 🚀 شروع سریع

```bash
# نصب dependencies
composer install

# تولید Application Key
php artisan key:generate

# تولید JWT Secret
php artisan jwt:secret

# اجرای migrations
php artisan migrate:fresh --seed

# شروع development server
php artisan serve
```

## 📁 ساختار پوشه‌ها

```
backend/
├── app/
│   ├── Models/              # Database Models
│   ├── Http/
│   │   ├── Controllers/     # API Controllers
│   │   ├── Requests/        # Form Requests
│   │   └── Resources/       # API Resources
│   ├── Services/            # Business Logic
│   ├── Repositories/        # Data Access Layer
│   ├── Events/
│   ├── Jobs/                # Queue Jobs
│   └── Exceptions/
├── config/                  # Configuration Files
├── database/
│   ├── migrations/          # Database Migrations
│   ├── seeders/             # Database Seeders
│   └── factories/           # Model Factories
├── routes/
│   ├── api.php              # API Routes
│   └── web.php              # Web Routes
├── tests/                   # Tests
├── storage/                 # Storage Files
├── .env.example             # Example Environment
└── composer.json
```

## 🔗 API Routes

### Authentication
- `POST /api/auth/register` - ثبت نام
- `POST /api/auth/login` - ورود
- `POST /api/auth/logout` - خروج
- `POST /api/auth/refresh` - تازه‌سازی توکن

### Users
- `GET /api/users` - لیست کاربران
- `GET /api/users/{id}` - جزئیات کاربر
- `POST /api/users` - ایجاد کاربر
- `PUT /api/users/{id}` - ویرایش کاربر
- `DELETE /api/users/{id}` - حذف کاربر

### Courses
- `GET /api/courses` - لیست دوره‌ها
- `GET /api/courses/{id}` - جزئیات دوره
- `POST /api/courses` - ایجاد دوره (Admin)
- `PUT /api/courses/{id}` - ویرایش دوره
- `DELETE /api/courses/{id}` - حذف دوره

## 🔐 Authentication

سیستم احراز هویت از JWT استفاده می‌کند:

```bash
Authorization: Bearer {token}
```

## 📊 Database

برای ایجاد جداول:

```bash
php artisan migrate
```

برای ایجاد داده‌های نمونه:

```bash
php artisan db:seed
```

## 🧪 Testing

```bash
# اجرای تمام تست‌ها
php artisan test

# اجرای تست خاص
php artisan test --filter=UserTest
```

## 📝 لاگ‌ها

لاگ‌های application در `storage/logs/` ذخیره می‌شوند.

## 🔧 Debugging

برای debugging می‌توانید از Tinker استفاده کنید:

```bash
php artisan tinker
```

## 📚 مستندات بیشتر

- [Laravel Documentation](https://laravel.com/docs)
- [JWT-Auth Documentation](https://github.com/tymondesigns/jwt-auth)
- [Sanctum Documentation](https://laravel.com/docs/sanctum)
