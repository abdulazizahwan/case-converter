/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import CaseConverter from './components/CaseConverter';
import { motion } from 'motion/react';
import { Type, FileText, Zap, Shield, Globe, Award } from 'lucide-react';

export default function App() {

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500/30">


      {/* Hero Section */}
      <header className="pt-16 pb-12 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Zap size={14} />
            Fast & Free Forever
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
            Instant Online <span className="text-emerald-500">Text Case</span>{" "}
            Converter
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
            The most powerful and intuitive tool to transform your text
            formatting in seconds. Perfect for developers, writers, and
            students.
          </p>
        </motion.div>
      </header>

      {/* Tool Section */}
      <main className="px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <CaseConverter />
        </motion.div>

        {/* SEO Content Sections */}
        <section className="max-w-4xl mx-auto mt-24 space-y-16">
          <div className="grid md:grid-rows-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-500">
                <Type size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">
                What is a Case Converter?
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                A text case converter is a simple yet essential tool that allows
                you to change the capitalization of your text instantly. Whether
                you accidentally left your Caps Lock on or need to format a long
                list of titles, our tool saves you from the tedious task of
                manual retyping.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-500">
                <FileText size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Why Use Our Tool?
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Our converter is built for speed and accuracy. Unlike basic
                converters, we handle complex Title Case logic and provide
                real-time statistics like word and character counts. Plus, your
                data never leaves your browser, ensuring total privacy.
              </p>
            </div>
          </div>

          <div className="space-y-8 bg-zinc-900/50 border border-zinc-800/50 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-left md:text-center text-white">
              Mastering Text Cases
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-2">
                <h3 className="font-bold text-emerald-400">Sentence Case</h3>
                <p className="text-sm text-zinc-500">
                  Capitalizes only the first letter of each sentence. Ideal for
                  standard paragraphs and emails.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-emerald-400">Title Case</h3>
                <p className="text-sm text-zinc-500">
                  Capitalizes major words while keeping minor articles
                  lowercase. Perfect for headings and book titles.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-emerald-400">UPPER CASE</h3>
                <p className="text-sm text-zinc-500">
                  Converts every single character to its uppercase equivalent.
                  Great for emphasis or shouting!
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-emerald-400">lower case</h3>
                <p className="text-sm text-zinc-500">
                  Transforms everything to lowercase. Useful for cleaning up
                  messy inputs or URL slugs.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-emerald-400">Capitalized Case</h3>
                <p className="text-sm text-zinc-500">
                  Capitalizes the first letter of every single word. Often used
                  for names or simple lists.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-emerald-400">Alternating Case</h3>
                <p className="text-sm text-zinc-500">
                  Switches between upper and lower case for every character.
                  Popular for social media memes.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800 flex flex-col items-center text-center space-y-3">
              <Shield className="text-emerald-500" size={32} />
              <h4 className="font-bold">100% Private</h4>
              <p className="text-xs text-zinc-500">
                All processing happens locally in your browser. We never store
                your text.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800 flex flex-col items-center text-center space-y-3">
              <Globe className="text-emerald-500" size={32} />
              <h4 className="font-bold">Universal Access</h4>
              <p className="text-xs text-zinc-500">
                Works perfectly on any device, from smartphones to high-res
                desktops.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800 flex flex-col items-center text-center space-y-3">
              <Award className="text-emerald-500" size={32} />
              <h4 className="font-bold">SEO Optimized</h4>
              <p className="text-xs text-zinc-500">
                Formatted to help search engines understand your content better.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-900 py-12 px-4 text-center text-zinc-600 text-sm">
        <p>
          © {new Date().getFullYear()} Instant Text Case Converter. All rights
          reserved.
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="https://abdulazizahwan.com/p/privacy-policy.html" className="hover:text-zinc-400 transition-colors">
            Privacy Policy
          </a>
          <a href="mailto:hello@abdulazizahwan.com" className="hover:text-zinc-400 transition-colors">
            Contact Us
          </a>
        </div>
      </footer>
    </div>
  );
}
