import { useState } from "react";
import { LogIn, Mail, Lock, User } from "lucide-react";

export default function LoginSection({ open, onClose }) {
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is a UI-only prototype. Hook up to backend auth when available.
    alert(`${role === "student" ? "Student" : "Staff"} login for ${email}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-slate-900/50" onClick={onClose} />
      <div className="relative w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="inline-flex items-center gap-2 text-slate-900 font-semibold">
            <LogIn size={20} />
            <span>Sign in</span>
          </div>
          <button onClick={onClose} className="p-2 rounded hover:bg-slate-100" aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="mb-4 grid grid-cols-2 p-1 bg-slate-100 rounded-lg text-sm">
          <button
            onClick={() => setRole("student")}
            className={`flex items-center justify-center gap-1 px-3 py-2 rounded-md transition ${role === "student" ? "bg-white text-slate-900 shadow" : "text-slate-600"}`}
          >
            <User size={16} /> Student
          </button>
          <button
            onClick={() => setRole("staff")}
            className={`flex items-center justify-center gap-1 px-3 py-2 rounded-md transition ${role === "staff" ? "bg-white text-slate-900 shadow" : "text-slate-600"}`}
          >
            <User size={16} /> Staff
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-700">Email</label>
            <div className="mt-1 relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                <Mail size={16} />
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={`${role === "student" ? "student" : "staff"}@esapag.edu`}
                className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">Password</label>
            <div className="mt-1 relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                <Lock size={16} />
              </span>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition">
            <LogIn size={18} />
            <span>Sign in</span>
          </button>

          <p className="text-xs text-slate-500 text-center">By continuing, you agree to ESAPAG School's Terms and Privacy Policy.</p>
        </form>
      </div>
    </div>
  );
}
