'use client'

import { motion } from 'framer-motion'

interface PullQuoteProps {
  children: React.ReactNode
}

export default function PullQuote({ children }: PullQuoteProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="my-8 pl-6 border-l-4 border-foreground/20 dark:border-foreground/30"
    >
      <p className="text-xl md:text-2xl font-medium text-foreground/90 italic leading-relaxed">
        {children}
      </p>
    </motion.div>
  )
}
