import { motion } from "framer-motion";
import { Link, Links } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center flex-1 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          Your AI-Powered Web Compiler
        </motion.h1>
           {/* Features */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-5xl"
        id="features"
      >
        {[
          {
            title: "Multi-Language Support",
            desc: "Compile code in C, C++, Java, Python, JavaScript, and more directly in your browser.",
          },
          {
            title: "AI Code Optimization",
            desc: "Click one button to see AI suggest more efficient or cleaner code instantly.",
          },
          {
            title: "Secure Sandboxing",
            desc: "Run code safely in isolated Docker environments without risking your system.",
          },
        ].map((f, i) => (
          <div
            key={i}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition"
          >
            <h3 className="text-xl font-bold mb-3 text-cyan-400">{f.title}</h3>
            <p className="text-gray-400">{f.desc}</p>
          </div>
        ))}
      </motion.div>
      <br/>
      <br/>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg text-gray-300 mb-8 mt-10 max-w-2xl"
        >
          Write, analyze, and plan smarter with AI.  
          An all-in-one platform for coding, understanding, and building projects.
        </motion.p>

        {/* Replaced 'Launch Compiler' with 3 feature buttons */}
        <div className="flex space-x-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/home"
            className="px-6 py-3 bg-blue-500 rounded-xl shadow-lg hover:bg-blue-600"
          >
            Code Editor
          </motion.a>
          {/* <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/"
            className="px-6 py-3 bg-green-500 rounded-xl shadow-lg hover:bg-green-600"
          >
            Explain/ Compare Code
          </motion.a> */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/plan"
            className="px-6 py-3 bg-purple-500 rounded-xl shadow-lg hover:bg-purple-600"
          >
            Plan a Project
          </motion.a>
        </div>
      </header>

      {/* Footer */}
      <footer className="p-4 text-center text-gray-400">
        © {new Date().getFullYear()} Web Compiler AI. All rights reserved.
      </footer>
    </div>
  );
}
