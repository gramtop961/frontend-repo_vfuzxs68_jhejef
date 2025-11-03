import { BookOpen, LogIn } from "lucide-react";
import { useState } from "react";

export default function Navbar({ onLoginClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow">
              <BookOpen size={20} />
            </div>
            <span className="font-semibold text-slate-900">ESAPAG School</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#home" className="hover:text-slate-900">Home</a>
            <a href="#courses" className="hover:text-slate-900">Courses</a>
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>

          <div className="hidden md:block">
            <button
              onClick={onLoginClick}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-sm transition"
            >
              <LogIn size={18} />
              <span>Login</span>
            </button>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-slate-100"
            aria-label="Toggle Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#home" className="block px-2 py-2 rounded hover:bg-slate-100">Home</a>
            <a href="#courses" className="block px-2 py-2 rounded hover:bg-slate-100">Courses</a>
            <a href="#about" className="block px-2 py-2 rounded hover:bg-slate-100">About</a>
            <a href="#contact" className="block px-2 py-2 rounded hover:bg-slate-100">Contact</a>
            <button
              onClick={() => { setMenuOpen(false); onLoginClick(); }}
              className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-sm transition"
            >
              <LogIn size={18} />
              <span>Login</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
