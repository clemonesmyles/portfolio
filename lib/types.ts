export interface CaseStudy {
  slug: string
  title: string
  client: string
  summary: string
  year: string
  tags: string[]
  image: string
  content: string
  context?: string
  problem?: string
  approach?: string
  outcomes?: string[]
  gallery?: string[]
}

export interface WritingPiece {
  title: string
  description: string
  url: string
  published?: string
}
