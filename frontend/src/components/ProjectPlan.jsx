import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";

export default function PlanPage() {
  const [idea, setIdea] = useState("");
  const [plan, setPlan] = useState("");
  const navigate = useNavigate();

  const handlePlan = () => {
    if (!idea.trim()) {
      setPlan("⚠️ Please enter a project idea first.");
      return;
    }
    // Placeholder — replace with AI API call
    setPlan(
      `📝 Plan for "${idea}":\n\n1. Define core features\n2. Choose tech stack\n3. Set up repo & boilerplate\n4. Implement modules step by step\n5. Test & deploy`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/30">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#557c56] to-[#FF9100]">
          Plan a Project
        </h1>
        <button
          onClick={() => navigate("/")}
          className="px-3 py-2 bg-[#FF9100] text-white text-sm hover:opacity-90 transition"
        >
          <MdHomeFilled />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        <div className="w-full max-w-3xl bg-white/5 backdrop-blur-lg shadow-lg border border-white/10 p-6">
          <label className="block mb-2 text-gray-300 text-sm">
            Describe your project idea:
          </label>
          <textarea
            className="w-full h-32 p-3 bg-black/50 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 resize-none"
            placeholder="e.g. Build a MERN-based task tracker with AI summaries..."
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
          />

          <button
            onClick={handlePlan}
            className="mt-4 w-full py-2 bg-[#557c56] text-white hover:bg-green-500 hover:text-black cursor-pointer transition"
          >
            🚀 Generate Project Plan
          </button>

          {/* Output */}
          {plan && (
            <div className="mt-6 p-4 bg-black/40 border border-white/10 text-gray-200 whitespace-pre-line font-mono">
              {plan}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="p-4 text-center text-gray-500 text-sm border-t border-white/10">
        © {new Date().getFullYear()} Web Compiler AI. All rights reserved.
      </footer>
    </div>
  );
}
