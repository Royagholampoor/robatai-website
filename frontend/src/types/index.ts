export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  role: 'user' | 'instructor' | 'admin';
  created_at: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  slug: string;
  instructor_id: number;
  category_id: number;
  price: number;
  image: string;
  duration: number;
  level: 'beginner' | 'intermediate' | 'advanced';
  students_count: number;
  rating: number;
  created_at: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}
