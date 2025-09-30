import { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- make sure you're using react-router
import Editor from "@monaco-editor/react";
import { House } from "lucide-react";

export default function HomePage() {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const navigate = useNavigate();

  // Simple run handler for JS
  const handleRun = () => {
    if (language === "javascript") {
      try {
        const result = new Function(code)();
        setOutput(String(result) || "✅ Code ran with no return value");
      } catch (err) {
        setOutput("❌ " + err.toString());
      }
    } else {
      setOutput(`⚠️ Running ${language} code is not supported yet (need backend)`);
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Left Section */}
      <div className="w-1/2 flex flex-col border-r border-white/10 bg-white/5 backdrop-blur-md">
        {/* Toolbar */}
        <div className="flex items-center justify-between p-3 border-b border-white/10 bg-black/30">
          {/* Left side: Home + Lang Switch */}
          <div className="flex items-center space-x-3">
            {/* Home button */}
            <button
              onClick={() => navigate("/")}
              className="px-3 py-1 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm hover:opacity-90 transition"
            >
              <House />
            </button>

            {/* Language Switcher */}
            <div className="space-x-2">
              {["javascript", "python", "c"].map((lang) => (
                <button
                  key={lang}
                  className={`px-3 py-1 rounded-lg text-sm transition ${
                    language === lang
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                  onClick={() => setLanguage(lang)}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Right side: Upload + Run */}
          <div className="flex items-center space-x-2">
            {/* Upload */}
            <label className="cursor-pointer px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 transition text-sm">
              📎 Upload
              <input
                type="file"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = (ev) => setCode(ev.target?.result || "");
                    reader.readAsText(file);
                  }
                }}
              />
            </label>

            {/* Run */}
            <button
              onClick={handleRun}
              className="px-4 py-1 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:opacity-90 transition"
            >
              ▶ Run
            </button>
          </div>
        </div>

        {/* Editor */}
        <Editor
          height="100%"
          language={language}
          value={code}
          onChange={(value) => setCode(value || "")}
          theme="vs-dark"
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            automaticLayout: true,
          }}
        />
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex flex-col bg-white/5 backdrop-blur-md">
        {/* Output */}
        <div className="flex-1 border-b border-white/10 bg-black/70 text-green-400 font-mono p-3 overflow-auto rounded-tr-lg">
          <pre>{output}</pre>
        </div>

        {/* AI Chatbot */}
        <div className="flex-1 flex flex-col p-3">
          <div className="flex-1 overflow-auto border border-white/10 rounded-lg p-3 mb-3 bg-black/30">
            <p className="text-gray-500">AI Chatbot conversation...</p>
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Ask AI about your code..."
              className="flex-1 border border-white/10 rounded-l-lg px-3 py-2 bg-black/50 text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 rounded-r-lg hover:opacity-90 transition">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
