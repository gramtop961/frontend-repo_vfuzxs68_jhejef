import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CoursesGrid from "./components/CoursesGrid";
import LoginSection from "./components/LoginSection";

function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 text-sm">© {new Date().getFullYear()} ESAPAG School. All rights reserved.</p>
        <nav className="text-sm text-slate-600 flex items-center gap-4">
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
          <a href="#" className="hover:text-slate-900">Privacy</a>
        </nav>
      </div>
    </footer>
  );
}

export default function App() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onLoginClick={() => setLoginOpen(true)} />
      <main className="flex-1">
        <Hero />
        <CoursesGrid />

        <section id="about" className="py-16 md:py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">About ESAPAG School</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              ESAPAG School is a modern learning platform offering career-focused programs designed by industry experts. We combine hands-on projects, mentorship, and community to help learners gain practical skills that matter.
            </p>
          </div>
        </section>
      </main>
      <Footer />

      <LoginSection open={loginOpen} onClose={() => setLoginOpen(false)} />
    </div>
  );
}
