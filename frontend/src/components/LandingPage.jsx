import React from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white px-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          Execute.or
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Run code in your browser. Compile, test, and optimize with AI-powered
          suggestions.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#get-started"
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 font-semibold shadow-lg"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 font-semibold shadow-lg"
          >
            Learn More
          </a>
        </div>
      </motion.div>

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

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-24 text-center"
        id="get-started"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to start coding?</h2>
        <p className="text-gray-400 mb-6">
          Experience instant compilation and AI-powered code improvements.
        </p>
        <a
          href="#"
          className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 font-semibold shadow-lg"
        >
          Launch Compiler
        </a>
      </motion.div>
    </div>
  );
}
