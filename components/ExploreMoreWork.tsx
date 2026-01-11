'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { CaseStudy } from '@/lib/types'

interface ExploreMoreWorkProps {
  currentSlug: string
  allCaseStudies: CaseStudy[]
}

export default function ExploreMoreWork({
  currentSlug,
  allCaseStudies,
}: ExploreMoreWorkProps) {
  // Filter out current case study and get 3 random ones
  const otherCaseStudies = allCaseStudies.filter((cs) => cs.slug !== currentSlug)
  const displayedCaseStudies = otherCaseStudies.slice(0, 3)

  return (
    <section className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/20 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore more work
          </h2>
          <p className="text-lg text-foreground/60">
            Discover other projects and case studies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedCaseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/portfolio/${caseStudy.slug}`}>
                <motion.div
                  className="group relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 shadow-md hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3 text-xs text-foreground/50">
                      <span>{caseStudy.client}</span>
                      <span>•</span>
                      <span>{caseStudy.year}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-foreground/80 transition-colors">
                      {caseStudy.title}
                    </h3>
                    <p className="text-sm text-foreground/60 line-clamp-3 mb-4">
                      {caseStudy.summary}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.tags.slice(0, 2).map((tag: string) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-foreground/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow indicator */}
                  <motion.div
                    className="absolute top-4 right-4 w-10 h-10 bg-white dark:bg-neutral-800 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <svg
                      className="w-5 h-5 text-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
          >
            View all case studies
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
