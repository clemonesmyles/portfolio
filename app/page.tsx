import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import FadeIn from '@/components/ui/FadeIn'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/lib/config'
import { getCaseStudies, getCaseStudy } from '@/lib/content'
import SkillCard, {
  CompassIcon,
  UsersIcon,
  SparklesIcon,
  PenToolIcon,
  ChartBarIcon,
  LightBulbIcon,
  PresentationIcon,
  LayersIcon,
} from '@/components/SkillCard'
import Testimonials from '@/components/Testimonials'
import LogoScroll from '@/components/about/LogoScroll'

export default function Home() {
  const featuredCaseStudies = [
    getCaseStudy('arthritis-ai-platform'),
    getCaseStudy('dva-digital-transformation'),
  ].filter((cs): cs is NonNullable<typeof cs> => cs !== null)

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-24 bg-white dark:bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-start">
            <div>
              <FadeIn>
                <h1 className="text-display-xl md:text-display-2xl lg:text-display-2xl xl:text-display-3xl font-bold mb-6">
                  Product strategist and<br className="hidden lg:block" />
                  {' '}design leader turning<br className="hidden lg:block" />
                  {' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">ambiguity</span>{' '}
                  into{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">clarity</span>.
                </h1>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed mb-8 max-w-3xl">
                  I specialise in early-stage discovery, AI-powered solutions,
                  and evidence-based strategy that drives meaningful outcomes.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <Button href="/portfolio" className="shadow-lg shadow-foreground/10 hover:shadow-xl hover:shadow-foreground/20 transition-shadow">View my work</Button>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* What I Do Section */}
      <Section className="bg-neutral-50 dark:bg-neutral-900/30 border-y border-neutral-200 dark:border-neutral-800">
        <Container>
          <FadeIn>
            <h2 className="text-display-md md:text-display-lg font-bold mb-6">
              What I do
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <FadeIn delay={0.1}>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I help organisations navigate complexity and uncover the right
                problems to solve. With over a decade of experience across
                government, finance, healthcare, and tech, I lead
                cross-functional teams from hypothesis to validated outcomes.
              </p>
            </FadeIn>
            <div className="space-y-6">
              <FadeIn delay={0.2}>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Early-stage discovery and experimentation
                  </h3>
                  <p className="text-foreground/70">
                    Forming hypotheses, designing lean tests, and guiding teams
                    toward evidence-based decisions.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Strategic product leadership
                  </h3>
                  <p className="text-foreground/70">
                    Defining vision, positioning, and roadmaps that balance user
                    needs with commercial impact.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    AI strategy & adoption
                  </h3>
                  <p className="text-foreground/70">
                    Prototyping AI-powered concepts, assessing feasibility, and
                    helping teams adopt faster, AI-enabled ways of working.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* Skills Showcase Section */}
      <Section className="bg-white dark:bg-background">
        <Container>
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <h2 className="text-display-md md:text-display-lg font-bold mb-4 text-center">
                Core capabilities
              </h2>
              <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
                A decade of experience across strategy, design, and product
                leadership with a focus on AI-enabled innovation.
              </p>
            </FadeIn>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <FadeIn delay={0.05}>
                <SkillCard
                  icon={<CompassIcon />}
                  title="Strategy & Discovery"
                />
              </FadeIn>
              <FadeIn delay={0.1}>
                <SkillCard
                  icon={<UsersIcon />}
                  title="Product Leadership"
                />
              </FadeIn>
              <FadeIn delay={0.15}>
                <SkillCard
                  icon={<SparklesIcon />}
                  title="AI Strategy & Adoption"
                />
              </FadeIn>
              <FadeIn delay={0.2}>
                <SkillCard
                  icon={<PenToolIcon />}
                  title="HCD AI"
                />
              </FadeIn>
              <FadeIn delay={0.25}>
                <SkillCard
                  icon={<LayersIcon />}
                  title="Service Design"
                />
              </FadeIn>
              <FadeIn delay={0.3}>
                <SkillCard
                  icon={<ChartBarIcon />}
                  title="UX Research"
                />
              </FadeIn>
              <FadeIn delay={0.35}>
                <SkillCard
                  icon={<PresentationIcon />}
                  title="Facilitation"
                />
              </FadeIn>
              <FadeIn delay={0.4}>
                <SkillCard
                  icon={<LightBulbIcon />}
                  title="Innovation"
                />
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Work Section */}
      <Section className="bg-neutral-50 dark:bg-neutral-900/30 border-y border-neutral-200 dark:border-neutral-800">
        <Container>
          <div className="mb-12">
            <FadeIn>
              <h2 className="text-display-md md:text-display-lg font-bold mb-4">
                Recent work
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl">
                From AI-powered healthcare platforms to enterprise-wide digital
                transformation, I partner with organisations to turn strategic
                vision into validated outcomes.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {featuredCaseStudies.map((caseStudy, index) => (
              <FadeIn key={caseStudy.slug} delay={index * 0.1}>
                <Link
                  href={`/portfolio/${caseStudy.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 mb-4 border border-neutral-200 dark:border-neutral-700">
                    <Image
                      src={caseStudy.thumbnail || caseStudy.image}
                      alt={caseStudy.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold group-hover:text-foreground/70 transition-colors mb-2">
                    {caseStudy.title}
                  </h3>
                  <p className="text-foreground/70 mb-3">{caseStudy.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-foreground/60 border border-neutral-200 dark:border-neutral-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3} className="mt-12 text-center">
            <Button href="/portfolio">View all work</Button>
          </FadeIn>
        </Container>
      </Section>

      {/* Client Logos Section */}
      <Section className="bg-white dark:bg-neutral-950">
        <Container>
          <FadeIn>
            <p className="text-center text-sm text-foreground/50 mb-8 max-w-3xl mx-auto">
              I've partnered with local and international organisations across financial services, insurance, government, healthcare, energy, and tech — from Fortune 500 enterprises to scale-ups and start-ups
            </p>
          </FadeIn>
          <LogoScroll />
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-neutral-50 dark:bg-neutral-900/30 border-y border-neutral-200 dark:border-neutral-800">
        <Container>
          <FadeIn>
            <h2 className="text-display-md md:text-display-lg font-bold mb-4 text-center">
              What people say
            </h2>
            <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
              Feedback from leaders and partners I've collaborated with across
              strategy, design, and product initiatives.
            </p>
          </FadeIn>
          <Testimonials />
        </Container>
      </Section>

      {/* Experience Section */}
      <Section className="bg-white dark:bg-background">
        <Container>
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-display-md md:text-display-lg font-bold mb-12 text-center">
                Agency, studio, and in-house experience
              </h2>
            </FadeIn>

            <div className="space-y-8">
              <FadeIn delay={0.1}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-8 border-b border-neutral-200">
                  <div className="md:col-span-1">
                    <p className="text-sm text-foreground/50">2021–Present</p>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-xl font-semibold mb-2">
                      Product Strategy Lead
                    </h3>
                    <p className="text-foreground/70 mb-2">Pollen</p>
                    <p className="text-foreground/60 text-sm leading-relaxed">
                      Leading product strategy, early-stage discovery, and
                      digital transformation initiatives across government,
                      utilities, healthcare, and tech sectors.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-8 border-b border-neutral-200">
                  <div className="md:col-span-1">
                    <p className="text-sm text-foreground/50">2018–2021</p>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-xl font-semibold mb-2">
                      Lead Design Strategist
                    </h3>
                    <p className="text-foreground/70 mb-2">
                      Northwestern Mutual
                    </p>
                    <p className="text-foreground/60 text-sm leading-relaxed">
                      Led enterprise experience design team, providing design
                      strategy and direction for the company's digital platforms
                      and financial services.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-8 border-b border-neutral-200">
                  <div className="md:col-span-1">
                    <p className="text-sm text-foreground/50">2018</p>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-xl font-semibold mb-2">
                      Lead Service Designer
                    </h3>
                    <p className="text-foreground/70 mb-2">Designit</p>
                    <p className="text-foreground/60 text-sm leading-relaxed">
                      Delivered service design and user experience solutions for
                      major enterprise clients.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-1">
                    <p className="text-sm text-foreground/50">2015–2018</p>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-xl font-semibold mb-2">
                      Lead Experience Designer
                    </h3>
                    <p className="text-foreground/70 mb-2">Symplicit</p>
                    <p className="text-foreground/60 text-sm leading-relaxed">
                      Led research and design projects for major Australian
                      banks and government agencies.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.5} className="mt-12 text-center">
              <Button href="/about" variant="secondary">
                More about me
              </Button>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-foreground text-background border-y border-neutral-700">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-display-md md:text-display-lg font-bold mb-6 text-background">
                Let's work together
              </h2>
              <p className="text-lg text-background/70 mb-8">
                I'm always interested in hearing about new projects and
                opportunities to help organisations navigate complexity and
                deliver meaningful outcomes.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-white text-neutral-900 hover:bg-neutral-100 shadow-lg transition-all duration-200 hover:scale-[1.02]"
                >
                  Email me
                </Link>
                <Link
                  href={siteConfig.contact.linkedin}
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-white text-neutral-900 hover:bg-neutral-100 shadow-lg transition-all duration-200 hover:scale-[1.02]"
                >
                  LinkedIn
                </Link>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  )
}
