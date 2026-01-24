import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import FadeIn from '@/components/ui/FadeIn'
import ExploreMoreWork from '@/components/ExploreMoreWork'
import CaseStudyContent from '@/components/CaseStudyContent'
import { getCaseStudy, getCaseStudies } from '@/lib/content'

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const caseStudies = getCaseStudies()
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }))
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = getCaseStudy(slug)

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    }
  }

  return {
    title: `${caseStudy.title} | Myles Clemones`,
    description: caseStudy.summary,
  }
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const caseStudy = getCaseStudy(slug)
  const allCaseStudies = getCaseStudies()

  if (!caseStudy) {
    notFound()
  }

  return (
    <>
      {/* Hero */}
      <Section className="pt-24 md:pt-32 pb-0">
        <Container>
          <FadeIn>
            <Link
              href="/portfolio"
              className="inline-flex items-center text-sm text-foreground/60 hover:text-foreground transition-colors mb-8"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to portfolio
            </Link>

            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-sm text-foreground/50">
                  {caseStudy.client}
                </span>
                {caseStudy.year && (
                  <>
                    <span className="text-sm text-foreground/30">•</span>
                    <span className="text-sm text-foreground/50">
                      {caseStudy.year}
                    </span>
                  </>
                )}
              </div>
              <h1 className="text-display-md md:text-display-lg lg:text-display-xl font-bold mb-6">
                {caseStudy.title}
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 max-w-3xl">
                {caseStudy.summary}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {caseStudy.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 bg-neutral-100 rounded-full text-foreground/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Hero Image */}
      <Section className="pt-0 pb-12">
        <Container>
          <FadeIn delay={0.1}>
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-100">
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Content */}
      <Section className="pt-0">
        <Container>
          <div className="max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
              <article className="prose prose-lg prose-neutral max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-3xl md:text-4xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:pt-8 prose-h2:border-t prose-h2:border-neutral-200 dark:prose-h2:border-neutral-800 prose-h3:text-xl md:text-2xl prose-h3:mt-10 prose-h3:mb-6 prose-p:text-foreground/70 prose-p:leading-relaxed prose-p:text-base md:prose-p:text-lg prose-p:mb-6 prose-ul:text-foreground/70 prose-li:marker:text-foreground/40 prose-img:rounded-xl prose-img:my-12 prose-img:shadow-lg prose-img:w-full prose-blockquote:border-l-4 prose-blockquote:border-foreground/20 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-foreground/80 prose-blockquote:my-8 prose-blockquote:text-lg">
                <CaseStudyContent content={caseStudy.content} />
              </article>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Explore More Work */}
      <ExploreMoreWork currentSlug={slug} allCaseStudies={allCaseStudies} />
    </>
  )
}
