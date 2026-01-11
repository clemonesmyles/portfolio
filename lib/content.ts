import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { CaseStudy } from './types'

const contentDirectory = path.join(process.cwd(), 'content')

export function getCaseStudies(): CaseStudy[] {
  const caseStudiesDirectory = path.join(contentDirectory, 'case-studies')

  if (!fs.existsSync(caseStudiesDirectory)) {
    return []
  }

  const filenames = fs.readdirSync(caseStudiesDirectory)
  const caseStudies = filenames
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const filePath = path.join(caseStudiesDirectory, filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug: filename.replace(/\.md$/, ''),
        content,
        ...data,
      } as CaseStudy
    })

  return caseStudies.sort((a, b) => parseInt(b.year) - parseInt(a.year))
}

export function getCaseStudy(slug: string): CaseStudy | null {
  const caseStudies = getCaseStudies()
  return caseStudies.find(cs => cs.slug === slug) || null
}

export function getPageContent(slug: string): { data: any; content: string } {
  const filePath = path.join(contentDirectory, 'pages', `${slug}.md`)

  if (!fs.existsSync(filePath)) {
    return { data: {}, content: '' }
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  return matter(fileContents)
}
