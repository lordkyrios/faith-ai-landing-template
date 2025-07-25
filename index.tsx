import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import FeatureCard from "../components/FeatureCard";

export default function HomePage() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
  }, [controls]);

  const invideoFeatures = [
    { title: "🎬 Script-to-Scene Parsing", description: "Prompt-based scene creation, reorderable" },
    { title: "🧠 AI Image Generation", description: "DALL·E 3 (higher quality than InVideo)" },
    { title: "🎙 Voiceover Narration", description: "OpenAI TTS with male/female voices" },
    { title: "🎞 MP4 Rendering", description: "Uses ffmpeg.wasm to export in-browser" },
    { title: "📂 Project/Scene History", description: "Stored in Supabase, full CRUD" },
    { title: "📥 Video Library", description: "Download links, metadata" },
    { title: "📱 Mobile UI", description: "Fully responsive" }
  ];

  const exclusiveFeatures = [
    { title: "🧍 Talking Face Animation", description: "D-ID integration with voice and photo" },
    { title: "☁️ Supabase Cloud Storage", description: "Open backend for media assets" },
    { title: "🧠 Scene Memory", description: "Persisted prompts/audio/image per scene" },
    { title: "🔄 Realtime Sync", description: "Team collaboration in live timeline" },
    { title: "💬 Comments Panel", description: "Project-level threaded discussion" },
    { title: "✍️ Project Metadata Editing", description: "Inline title/description controls" },
    { title: "🧭 Tab-Based Studio Layout", description: "Cleaner UI than InVideo’s cluttered editor" },
    { title: "📦 Client-Side Export", description: "No server-side rendering delay" },
    { title: "📊 Render Progress UI", description: "Real-time feedback during export" }
  ];

  return (
    <main className="bg-gradient-to-b from-white to-gray-50 py-16 px-4 min-h-screen">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          🎬 Faith-Based AI Video Studio
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
          Create stunning Bible-inspired storyboards, motion videos, and AI-powered scenes—all in one platform.
        </p>

        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-4">✅ Feature Parity with InVideo AI</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {invideoFeatures.map((f, i) => (
              <FeatureCard key={i} title={f.title} description={f.description} />
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-4">🧍 Exclusive Features You Have</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {exclusiveFeatures.map((f, i) => (
              <FeatureCard key={i} title={f.title} description={f.description} />
            ))}
          </div>
        </section>
      </motion.div>
    </main>
  );
}
