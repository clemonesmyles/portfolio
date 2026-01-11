import Link from 'next/link'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <Section className="pt-24 md:pt-32">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-display-lg md:text-display-xl font-bold mb-6">
            Page not found
          </h1>
          <p className="text-lg text-foreground/70 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <Button href="/">Return home</Button>
        </div>
      </Container>
    </Section>
  )
}
