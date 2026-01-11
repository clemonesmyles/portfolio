'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const tools = [
  { name: 'GPT', filename: 'gpt logo.png' },
  { name: 'Claude', filename: 'claude logo.png' },
  { name: 'Gemini', filename: 'gemini logo.png' },
  { name: 'Claude Code', filename: 'claude code logo.png' },
  { name: 'Anthropic', filename: 'anthropic logo.png' },
  { name: 'Miro', filename: 'miro logo.png' },
  { name: 'Perplexity', filename: 'perplexity logo.png' },
  { name: 'NotebookLM', filename: 'notebook lm logo.png' },
  { name: 'Lovable', filename: 'lovable logo.png' },
  { name: 'Google Suite', filename: 'google suite logo.png' },
]

export default function ToolsGrid() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="grid grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.03 }}
            whileHover={{ scale: 1.15, y: -4 }}
            className="group relative grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            title={tool.name}
          >
            {/* Logo */}
            <div className="relative w-16 h-16">
              <Image
                src={`/images/tools/${tool.filename}`}
                alt={tool.name}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
