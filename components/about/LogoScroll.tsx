'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const companies = [
  { name: 'Northwestern Mutual', file: 'NM logo.png' },
  { name: 'DVA', file: 'DVA logo.png' },
  { name: 'Arthritis Movement', file: 'Arthritis movement logo.png' },
  { name: 'Essential Energy', file: 'EE logo.png' },
  { name: 'Gumtree', file: 'gumtree logo.png' },
  { name: 'NSW Government', file: 'nsw gov logo.png' },
  { name: 'Maritime Museum', file: 'mariitme logo.png' },
  { name: 'NFSA', file: 'nfsa logo.png' },
  { name: 'Commonwealth Bank', file: 'CBA logo.png' },
  { name: 'Westpac', file: 'Westpac logo.png' },
  { name: 'Bureau of Meteorology', file: 'BOM logo.png' },
  { name: 'DPI', file: 'DPI logo.png' },
  { name: 'Adevinta', file: 'Adevinta logo.png' },
  { name: 'AutoTrader', file: 'autotrader logo.png' },
  { name: 'Mobile.de', file: 'mobile.de logo.png' },
  { name: 'Esri', file: 'esri logo.png' },
  { name: 'BT', file: 'BT logo.png' },
  { name: 'Care Connect', file: 'Care Connect.png' },
  { name: 'Rebuilt', file: 'rebuilt logo.png' },
  { name: 'VESR', file: 'vesr logo.png' },
]

export default function LogoScroll() {
  // Duplicate the array for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies]

  return (
    <div className="relative overflow-hidden py-8">
      {/* Gradient masks on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-neutral-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-neutral-950 to-transparent z-10 pointer-events-none" />

      {/* Scrolling container */}
      <div className="flex gap-12">
        {/* Animated set */}
        <motion.div
          className="flex gap-12 items-center flex-shrink-0"
          animate={{
            x: [0, -144 * companies.length - 12 * companies.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 55,
              ease: 'linear',
            },
          }}
        >
          {duplicatedCompanies.map((company, index) => (
            <div
              key={`${company.file}-${index}`}
              className="flex-shrink-0 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 relative"
              style={{ width: '144px', height: '60px' }}
            >
              <Image
                src={`/images/logos/${company.file}`}
                alt={company.name}
                fill
                className="object-contain"
                sizes="144px"
                unoptimized
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
