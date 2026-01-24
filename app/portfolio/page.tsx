import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import FadeIn from '@/components/ui/FadeIn'
import { getCaseStudies } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Portfolio | Myles Clemones',
  description:
    'Case studies showcasing product strategy, service design, and innovation work across healthcare, finance, government, and tech.',
}

export default function Portfolio() {
  const caseStudies = getCaseStudies()

  return (
    <>
      {/* Hero */}
      <Section className="pt-24 md:pt-32 pb-12 md:pb-16">
        <Container>
          <FadeIn>
            <h1 className="text-display-lg md:text-display-xl font-bold mb-6">
              Selected work
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl">
              Case studies from product strategy and design engagements across
              healthcare, financial services, government, and technology.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* Case Studies Grid */}
      <Section className="pt-0">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {caseStudies.map((caseStudy, index) => (
              <FadeIn key={caseStudy.slug} delay={index * 0.05}>
                <Link
                  href={`/portfolio/${caseStudy.slug}`}
                  className="group block h-full"
                >
                  <article className="h-full flex flex-col">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 mb-5">
                      <Image
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex-1 flex flex-col">
                      <h2 className="text-xl md:text-2xl font-semibold group-hover:text-foreground/70 transition-colors mb-3">
                        {caseStudy.title}
                      </h2>

                      <p className="text-sm text-foreground/50 mb-3">
                        {caseStudy.client}
                      </p>

                      <p className="text-foreground/70 mb-4 flex-1">
                        {caseStudy.summary}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {caseStudy.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 bg-neutral-100 rounded-full text-foreground/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
