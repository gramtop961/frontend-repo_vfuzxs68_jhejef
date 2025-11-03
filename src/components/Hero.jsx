import { GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-medium mb-4">
              <GraduationCap size={16} />
              <span>Empowering learners since 2024</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Welcome to ESAPAG School
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Learn in-demand skills with guided courses, expert mentors, and a community that supports your journey.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#courses" className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition shadow">
                Explore Courses
              </a>
              <a href="#about" className="px-5 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 transition">
                Learn More
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl bg-white/70 backdrop-blur border border-slate-200 shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1584697964190-821c3b36b69a?q=80&w=1600&auto=format&fit=crop"
                alt="Students learning"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
