'use client'

import { motion } from 'framer-motion'

const timeline = [
  {
    location: 'Sydney, Australia',
    period: '2015-2018',
    role: 'Lead Roles',
    companies: 'Designit & Symplicit',
    description: 'Service design and UX across major banks, transport, and government',
  },
  {
    location: 'New York, USA',
    period: '2018-2021',
    role: 'Lead Design Strategist',
    companies: 'Northwestern Mutual',
    description: 'Enterprise platform strategy at scale',
    highlight: true,
  },
  {
    location: 'Sydney, Australia',
    period: '2021-Present',
    role: 'Product Strategy Lead',
    companies: 'Pollen',
    description: 'AI strategy, product discovery, and digital transformation',
  },
]

export default function JourneyTimeline() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-500 via-accent-400 to-accent-500" />

      <div className="space-y-12">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Dot */}
            <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent-500 rounded-full border-4 border-background transform -translate-x-1/2 z-10" />

            {/* Content card */}
            <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              <div
                className={`bg-white dark:bg-neutral-900 border ${
                  item.highlight
                    ? 'border-accent-500/30 shadow-lg shadow-accent-500/10'
                    : 'border-neutral-200 dark:border-neutral-800'
                } rounded-xl p-6 hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <svg
                    className="w-4 h-4 text-accent-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm font-semibold text-accent-600 dark:text-accent-400">
                    {item.location}
                  </span>
                  <span className="text-sm text-foreground/50">{item.period}</span>
                </div>
                <h3 className="text-lg font-bold mb-1">{item.role}</h3>
                <p className="text-sm text-foreground/60 mb-2">{item.companies}</p>
                <p className="text-sm text-foreground/70">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
