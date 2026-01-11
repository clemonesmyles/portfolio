import Image from 'next/image'
import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import FadeIn from '@/components/ui/FadeIn'
import Button from '@/components/ui/Button'
import PullQuote from '@/components/about/PullQuote'
import ToolsGrid from '@/components/about/ToolsGrid'
import SectorsGrid from '@/components/about/SectorsGrid'
import LogoScroll from '@/components/about/LogoScroll'
import JourneyTimeline from '@/components/about/JourneyTimeline'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'About | Myles Clemones',
  description:
    'I help organisations make better product decisions in complex environments — especially when technology, risk, and ambiguity are all in play.',
}

export default function About() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-24 md:pt-32 pb-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <FadeIn>
                <h1 className="text-display-lg md:text-display-xl font-bold mb-8">
                  About
                </h1>
                <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-6">
                  I help organisations make better product decisions in complex
                  environments — especially when technology, risk, and ambiguity
                  are all in play.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  My work sits across product strategy, research, and emerging
                  technology. Over the past decade, I've worked in agency and
                  studio settings, in-house teams, and directly with founders,
                  across government, utilities, healthcare, finance, and
                  not-for-profit.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.1} className="lg:col-span-2">
              <div className="aspect-square relative rounded-2xl overflow-hidden bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-900/20 dark:to-accent-800/20">
                <Image
                  src="/images/headshot/headshot.jpg"
                  alt="Myles Clemones"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Sectors worked in */}
      <Section className="bg-neutral-50/50 dark:bg-neutral-900/20 border-y border-neutral-200 dark:border-neutral-800 py-12">
        <Container>
          <FadeIn>
            <h2 className="text-sm uppercase tracking-wider text-foreground/50 mb-8 text-center">
              Sectors & Industries
            </h2>
            <SectorsGrid />
          </FadeIn>
        </Container>
      </Section>

      {/* Journey & Experience */}
      <Section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto mb-16">
            <FadeIn>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                I've also spent time working in New York, leading enterprise-scale
                platform and experience strategy in a very different market, where
                scale, alignment, and decision quality really mattered.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                That mix has shaped how I work. I spend most of my time up front —
                framing problems, shaping options, and helping teams understand
                trade-offs before momentum turns into commitment.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Career Journey
            </h2>
            <JourneyTimeline />
          </FadeIn>
        </Container>
      </Section>

      {/* Working approach */}
      <Section className="bg-gradient-to-b from-neutral-50/50 to-white dark:from-neutral-900/20 dark:to-background py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                How I work
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                It might start with whiteboard sessions or back-of-the-napkin
                sketches, vibe coding something quick to test, or lightweight
                concepts to pressure-test ideas in practice. I use these artefacts
                to think, not to impress — to surface constraints, complexity, and
                make abstract strategy tangible.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                I steer and oversee design execution, ensuring what gets built
                reflects the discovery, strategy, and decisions that came before
                it. My role is to hold the thread from first question through to
                delivery, even as teams and disciplines intersect.
              </p>

              <PullQuote>
                I operate in the uncomfortable middle: where there's too much
                information, too many opinions, and not enough clarity.
              </PullQuote>

              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                I lead mixed-method research (qual and quant), shape value
                propositions, and work closely with teams to move from ambiguity to
                grounded decisions. I'm comfortable at C-suite level — writing
                board papers, shaping investment cases, and facilitating workshops
                with executive leaders — and equally comfortable getting into the
                detail when it matters.
              </p>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* AI Focus */}
      <Section className="py-16 border-t border-neutral-200 dark:border-neutral-800">
        <Container>
          <div className="max-w-3xl mx-auto mb-12">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                AI & emerging technology
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                In recent years, my focus has shifted heavily toward AI. Not as a
                feature or a talking point, but as a structural change in how
                products get built. I've worked with organisations on AI strategy,
                governance, and responsible use, and led the design and delivery of
                AI-enabled products in high-stakes environments like government and
                healthcare.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                I'm particularly interested in how AI is changing how products get
                built — collapsing the distance between strategy, design, and
                delivery. I use AI tools every day in my own practice to explore
                ideas faster, synthesise insights more sharply, and reach better
                decisions earlier.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <h3 className="text-sm uppercase tracking-wider text-foreground/50 mb-6 text-center">
              Tools I use daily
            </h3>
            <ToolsGrid />
          </FadeIn>
        </Container>
      </Section>

      {/* Philosophy */}
      <Section className="bg-neutral-50/50 dark:bg-neutral-900/20 py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                What drives me
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                What I care about most is decision quality. Clear problem framing.
                Honest trade-offs. Work that holds up when it meets reality.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                I'm sceptical of theatre, allergic to buzzwords, and biased toward
                thoughtful progress over performative innovation.
              </p>

              <PullQuote>
                I work best with people who are curious, pragmatic, and open to
                being challenged — and with organisations that value making the
                right call as much as moving quickly.
              </PullQuote>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Companies */}
      <Section className="py-16 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
        <Container>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
              Who I've worked with
            </h2>
            <p className="text-lg text-foreground/60 mb-8 text-center max-w-2xl mx-auto">
              Organizations I've partnered with to shape strategy, build products,
              and navigate complexity
            </p>
          </FadeIn>
          <LogoScroll />
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-b from-neutral-50/50 to-neutral-100/50 dark:from-neutral-900/20 dark:to-neutral-900/40 border-t border-neutral-200 dark:border-neutral-800 py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-display-sm md:text-display-md font-bold mb-6">
                Let's connect
              </h2>
              <p className="text-lg text-foreground/70 mb-8">
                I'm always open to discussing new projects, challenging problems,
                or opportunities to help organisations make better decisions in
                complex environments.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href={`mailto:${siteConfig.contact.email}`}>
                  Email me
                </Button>
                <Button href={siteConfig.contact.linkedin} variant="secondary">
                  LinkedIn
                </Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  )
}
