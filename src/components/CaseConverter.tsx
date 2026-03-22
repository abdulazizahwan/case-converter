import React, { useState, useCallback, useRef } from 'react';
import { Copy, Download, Trash2, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CaseConverter: React.FC = () => {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const toSentenceCase = () => {
    if (!text) return;
    const result = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase());
    setText(result);
  };

  const toLowerCase = () => {
    setText(text.toLowerCase());
  };

  const toUpperCase = () => {
    setText(text.toUpperCase());
  };

  const toCapitalizedCase = () => {
    if (!text) return;
    const result = text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    setText(result);
  };

  const toAlternatingCase = () => {
    if (!text) return;
    const result = text.split('').map((char, i) => i % 2 === 0 ? char.toLowerCase() : char.toUpperCase()).join('');
    setText(result);
  };

  const toInverseCase = () => {
    if (!text) return;
    const result = text.split('').map(char => {
      if (char === char.toUpperCase()) return char.toLowerCase();
      return char.toUpperCase();
    }).join('');
    setText(result);
  };

  const toTitleCase = () => {
    if (!text) return;
    const minorWords = ['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'from', 'by', 'in', 'of'];
    const result = text.toLowerCase().split(' ').map((word, index, array) => {
      if (index > 0 && index < array.length - 1 && minorWords.includes(word)) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
    setText(result);
  };

  const copyToClipboard = async () => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  const downloadTxt = () => {
    if (!text) return;
    const element = document.createElement('a');
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'converted-text.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const clearText = () => {
    setText('');
  };

  const stats = {
    characters: text.length,
    words: text.trim() ? text.trim().split(/\s+/).length : 0,
    lines: text.trim() ? text.split('\n').length : 0
  };

  return (
    <div
      className="w-full max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden"
      id="converter-tool"
    >
      <div className="p-6 space-y-4">
        <div className="flex flex-col border border-zinc-800 rounded-xl bg-zinc-950 overflow-hidden focus-within:ring-2 focus-within:ring-emerald-500 transition-all">
          <textarea
            ref={textareaRef}
            value={text}
            onChange={handleTextChange}
            placeholder="Type or paste your content here..."
            className="w-full h-64 p-4 bg-transparent text-zinc-100 outline-none resize-y font-mono text-sm min-h-50"
          />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-3 bg-zinc-900/50 border-t border-zinc-800">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={copyToClipboard}
                className="p-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg transition-colors group relative"
                title="Copy to Clipboard"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                    >
                      <Check size={18} className="text-emerald-500" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                    >
                      <Copy size={18} />
                    </motion.div>
                  )}
                </AnimatePresence>
                {copied && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-emerald-500 text-white text-xs rounded shadow-lg whitespace-nowrap">
                    Copied!
                  </span>
                )}
              </button>

              <button
                onClick={downloadTxt}
                className="p-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg transition-colors"
                title="Download .txt"
              >
                <Download size={18} />
              </button>

              <button
                onClick={clearText}
                className="p-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg transition-colors"
                title="Clear Text"
              >
                <Trash2 size={18} />
              </button>
            </div>

            <div className="text-zinc-500 text-[10px] sm:text-xs font-mono w-full sm:w-auto text-center sm:text-right">
              <span className="hidden xs:inline">
                Chars: {stats.characters}
              </span>
              <span className="xs:hidden">C: {stats.characters}</span>
              <span className="mx-2 opacity-20">|</span>
              <span className="hidden xs:inline">Words: {stats.words}</span>
              <span className="xs:hidden">W: {stats.words}</span>
              <span className="mx-2 opacity-20">|</span>
              <span className="hidden xs:inline">Lines: {stats.lines}</span>
              <span className="xs:hidden">L: {stats.lines}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          <button
            onClick={toSentenceCase}
            className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded-lg text-sm font-medium transition-all border border-zinc-700 flex items-center gap-2"
          >
            <span className="w-6 h-6 flex items-center justify-center bg-orange-900/50 text-orange-400 rounded text-[10px] font-bold">
              Sc
            </span>
            Sentence case
          </button>

          <button
            onClick={toLowerCase}
            className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded-lg text-sm font-medium transition-all border border-zinc-700 flex items-center gap-2"
          >
            <span className="w-6 h-6 flex items-center justify-center bg-lime-900/50 text-lime-400 rounded text-[10px] font-bold">
              lc
            </span>
            lower case
          </button>

          <button
            onClick={toUpperCase}
            className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded-lg text-sm font-medium transition-all border border-zinc-700 flex items-center gap-2"
          >
            <span className="w-6 h-6 flex items-center justify-center bg-sky-900/50 text-sky-400 rounded text-[10px] font-bold">
              UC
            </span>
            UPPER CASE
          </button>

          <button
            onClick={toCapitalizedCase}
            className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded-lg text-sm font-medium transition-all border border-zinc-700 flex items-center gap-2"
          >
            <span className="w-6 h-6 flex items-center justify-center bg-purple-900/50 text-purple-400 rounded text-[10px] font-bold">
              CC
            </span>
            Capitalized Case
          </button>

          <button
            onClick={toAlternatingCase}
            className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded-lg text-sm font-medium transition-all border border-zinc-700 flex items-center gap-2"
          >
            <span className="w-6 h-6 flex items-center justify-center bg-yellow-900/50 text-yellow-400 rounded text-[10px] font-bold">
              aC
            </span>
            aLtErNaTiNg cAsE
          </button>

          <button
            onClick={toTitleCase}
            className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded-lg text-sm font-medium transition-all border border-zinc-700 flex items-center gap-2"
          >
            <span className="w-6 h-6 flex items-center justify-center bg-emerald-900/50 text-emerald-400 rounded text-[10px] font-bold">
              TC
            </span>
            Title Case
          </button>

          <button
            onClick={toInverseCase}
            className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded-lg text-sm font-medium transition-all border border-zinc-700 flex items-center gap-2"
          >
            <span className="w-6 h-6 flex items-center justify-center bg-pink-900/50 text-pink-400 rounded text-[10px] font-bold">
              iC
            </span>
            InVeRsE CaSe
          </button>

          <div className="ml-auto">
            <a
              href="https://paypal.me/abdulazizahwan"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-bold transition-all flex items-center gap-2 shadow-lg shadow-purple-900/20"
            >
              Give me ☕
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseConverter;
