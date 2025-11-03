import { BookOpen, Clock, Users } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    level: "Intermediate",
    duration: "12 weeks",
    students: 1280,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Data Science & Analytics",
    level: "Beginner",
    duration: "10 weeks",
    students: 980,
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Cybersecurity Fundamentals",
    level: "Beginner",
    duration: "8 weeks",
    students: 640,
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "UI/UX Design Essentials",
    level: "All Levels",
    duration: "6 weeks",
    students: 1520,
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function CoursesGrid() {
  return (
    <section id="courses" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Popular Courses</h2>
            <p className="text-slate-600 mt-1">Choose from a growing catalog designed with real-world projects.</p>
          </div>
          <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">View all</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <article key={course.id} className="group rounded-xl border border-slate-200 overflow-hidden bg-white hover:shadow-md transition">
              <div className="aspect-video overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-center gap-2 text-xs">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-50 text-blue-700">
                    <BookOpen size={14} />
                    {course.level}
                  </span>
                </div>
                <h3 className="font-semibold text-slate-900 leading-snug line-clamp-2 min-h-[3rem]">{course.title}</h3>
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span className="inline-flex items-center gap-1"><Clock size={16} /> {course.duration}</span>
                  <span className="inline-flex items-center gap-1"><Users size={16} /> {course.students.toLocaleString()}</span>
                </div>
                <button className="w-full mt-2 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition">
                  Enroll now
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
