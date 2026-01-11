import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import FadeIn from '@/components/ui/FadeIn'
import { getPageContent } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Writing | Myles Clemones',
  description:
    'Thoughts on design, strategy, and building products that matter.',
}

export default function Writing() {
  const { data } = getPageContent('writing')

  const pieces = data.pieces || []

  return (
    <>
      {/* Hero */}
      <Section className="pt-24 md:pt-32 pb-12 md:pb-16">
        <Container>
          <FadeIn>
            <h1 className="text-display-lg md:text-display-xl font-bold mb-6">
              Writing
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl">
              {data.intro ||
                'Thoughts on design, strategy, and building products that matter.'}
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* Articles */}
      <Section className="pt-0">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {pieces.map((piece: any, index: number) => (
                <FadeIn key={piece.url} delay={index * 0.05}>
                  <a
                    href={piece.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <article className="pb-12 border-b border-neutral-200 last:border-0 last:pb-0">
                      <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-foreground/70 transition-colors">
                        {piece.title}
                        <svg
                          className="inline-block w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </h2>
                      <p className="text-foreground/70 leading-relaxed">
                        {piece.description}
                      </p>
                    </article>
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
