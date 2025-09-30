import React, { useState } from "react";
import { Paperclip } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("console.log('Hello, World!')");
  const [output, setOutput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { role: "ai", text: "Hello! Ask me about your code." },
  ]);
  const [chatInput, setChatInput] = useState("");

  const runCode = () => {
    if (language === "javascript") {
      try {
        // eslint-disable-next-line no-eval
        const result = eval(code);
        setOutput(result !== undefined ? result.toString() : "");
      } catch (err) {
        setOutput(err.toString());
      }
    } else {
      setOutput(`Execution for ${language} not implemented in demo.`);
    }
  };

  const sendMessage = () => {
    if (!chatInput.trim()) return;
    const newMessages = [...chatMessages, { role: "user", text: chatInput }];
    // Mock AI response
    newMessages.push({ role: "ai", text: "(AI response placeholder)" });
    setChatMessages(newMessages);
    setChatInput("");
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      {/* Header */}
      <header className="px-6 py-4 bg-gray-900 shadow-md flex justify-between items-center">
        <Link to='/' className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          Execute.or
        </Link>
        <nav>
          <a href="#" className="px-4 py-2 hover:text-cyan-400">
            Home
          </a>
          <a href="#" className="px-4 py-2 hover:text-cyan-400">
            Docs
          </a>
          <a href="#" className="px-4 py-2 hover:text-cyan-400">
            About
          </a>
        </nav>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Code Editor */}
        <div className="w-full md:w-1/2 p-4 flex flex-col bg-gray-900">
          <div className="flex gap-4 mb-4 items-center">
            {[
              { id: "javascript", label: "JavaScript" },
              { id: "python", label: "Python" },
              { id: "c", label: "C" },
            ].map((lang) => (
              <button
                key={lang.id}
                onClick={() => setLanguage(lang.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  language === lang.id
                    ? "bg-cyan-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {lang.label}
              </button>
            ))}
            <button className="ml-auto flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg">
              <Paperclip className="w-4 h-4" /> Upload
            </button>
          </div>
          <textarea
            className="flex-1 w-full p-4 font-mono text-sm bg-gray-950 text-gray-200 rounded-lg border border-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button
            onClick={runCode}
            className="mt-4 px-6 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 font-semibold shadow-lg self-start"
          >
            Run Code
          </button>
        </div>

        {/* Output + AI Chat */}
        <div className="w-full md:w-1/2 p-4 bg-gray-950 border-l border-gray-800 flex flex-col">
          {/* Output Section */}
          <div className="flex-1 mb-4">
            <h2 className="text-xl font-bold mb-2">Output:</h2>
            <pre className="p-4 bg-gray-900 rounded-lg text-gray-200 whitespace-pre-wrap min-h-[150px]">
              {output}
            </pre>
          </div>

          {/* AI Chat Section */}
          <div className="h-1/2 flex flex-col border-t border-gray-800 pt-4">
            <h2 className="text-xl font-bold mb-2">AI Assistant</h2>
            <div className="flex-1 overflow-y-auto bg-gray-900 rounded-lg p-4 space-y-2">
              {chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-2 rounded-lg max-w-xs ${
                    msg.role === "user"
                      ? "bg-cyan-600 ml-auto text-white"
                      : "bg-gray-800 text-gray-200"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="mt-2 flex gap-2">
              <input
                type="text"
                className="flex-1 px-3 py-2 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Ask AI about your code..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
              />
              <button
                onClick={sendMessage}
                className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}