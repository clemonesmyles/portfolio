import Link from 'next/link'
import { siteConfig } from '@/lib/config'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50/50">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display font-semibold text-lg mb-3">
              {siteConfig.name}
            </h3>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Product strategist and design leader specialising in early-stage
              discovery and human-centered solutions.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-sm mb-3">
              Navigation
            </h3>
            <ul className="space-y-2">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-sm mb-3">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={siteConfig.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-200">
          <p className="text-sm text-foreground/40 text-center">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
