'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/lib/config'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const pathname = usePathname()

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-background/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-lg font-display font-semibold tracking-tight hover:opacity-70 transition-opacity"
          >
            {siteConfig.name}
          </Link>

          <div className="flex items-center gap-6">
            <ThemeToggle />

            <nav className="hidden md:flex items-center gap-6">
              {siteConfig.navigation.map((item) => {
                const isActive = pathname.startsWith(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-foreground/80 ${
                      isActive ? 'text-foreground' : 'text-foreground/60'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <Link
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
              >
                Get in touch
              </Link>
            </nav>

            {/* Mobile menu - simplified for now */}
            <nav className="flex md:hidden items-center gap-4">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
