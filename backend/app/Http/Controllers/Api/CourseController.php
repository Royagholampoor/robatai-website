<?php

namespace App\Http\Controllers\Api;

use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class CourseController
{
    public function index(Request $request): JsonResponse
    {
        $courses = Course::with('instructor')
            ->where('is_published', true)
            ->paginate($request->get('per_page', 15));

        return response()->json([
            'success' => true,
            'data' => $courses,
        ]);
    }

    public function show(Course $course): JsonResponse
    {
        return response()->json([
            'success' => true,
            'data' => $course->load('instructor', 'lessons'),
        ]);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'level' => 'required|in:beginner,intermediate,advanced',
        ]);

        $course = Course::create([
            ...$validated,
            'instructor_id' => auth()->id(),
            'slug' => str()->slug($validated['title']),
        ]);

        return response()->json([
            'success' => true,
            'data' => $course,
        ], 201);
    }
}
