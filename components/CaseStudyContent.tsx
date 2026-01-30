'use client'

import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { Components } from 'react-markdown'
import { useState } from 'react'
import ImageGrid from '@/components/ui/ImageGrid'

interface CaseStudyContentProps {
  content: string
}

interface ContentBlock {
  type: 'markdown' | 'images' | 'side-by-side' | 'showcase' | 'gallery' | 'deck'
  content: string
  images?: { src: string; alt: string }[]
  sideImage?: { src: string; alt: string }
  showcaseImage?: { src: string; alt: string }
  galleryImages?: { src: string; alt: string }[]
  deckImages?: { src: string; alt: string }[]
}

function parseContentIntoBlocks(content: string): ContentBlock[] {
  const lines = content.split('\n')
  const blocks: ContentBlock[] = []
  let currentMarkdown: string[] = []
  let currentImages: { src: string; alt: string }[] = []
  let currentGalleryImages: { src: string; alt: string }[] = []
  let currentDeckImages: { src: string; alt: string }[] = []

  const imageRegex = /^!\[([^\]]*)\]\(([^)]+)\)$/

  const flushMarkdown = () => {
    if (currentMarkdown.length > 0) {
      const text = currentMarkdown.join('\n').trim()
      if (text) {
        blocks.push({ type: 'markdown', content: text })
      }
      currentMarkdown = []
    }
  }

  const flushImages = () => {
    if (currentImages.length > 0) {
      blocks.push({ type: 'images', content: '', images: [...currentImages] })
      currentImages = []
    }
  }

  const flushGallery = () => {
    if (currentGalleryImages.length > 0) {
      blocks.push({ type: 'gallery', content: '', galleryImages: [...currentGalleryImages] })
      currentGalleryImages = []
    }
  }

  const flushDeck = () => {
    if (currentDeckImages.length > 0) {
      blocks.push({ type: 'deck', content: '', deckImages: [...currentDeckImages] })
      currentDeckImages = []
    }
  }

  for (const line of lines) {
    const imageMatch = line.trim().match(imageRegex)

    if (imageMatch) {
      const alt = imageMatch[1]
      const src = imageMatch[2]

      // Check for side: prefix - creates side-by-side layout with preceding content
      if (alt.startsWith('side:')) {
        flushImages()
        const cleanAlt = alt.replace('side:', '').trim()

        // Merge with preceding markdown block
        if (currentMarkdown.length > 0) {
          const text = currentMarkdown.join('\n').trim()
          if (text) {
            blocks.push({
              type: 'side-by-side',
              content: text,
              sideImage: { src, alt: cleanAlt }
            })
          }
          currentMarkdown = []
        } else if (blocks.length > 0 && blocks[blocks.length - 1].type === 'markdown') {
          // Convert last markdown block to side-by-side
          const lastBlock = blocks.pop()!
          blocks.push({
            type: 'side-by-side',
            content: lastBlock.content,
            sideImage: { src, alt: cleanAlt }
          })
        }
      } else if (alt.startsWith('showcase:')) {
        // Showcase: prefix - creates card layout with large image and text below
        flushImages()
        flushGallery()
        const cleanAlt = alt.replace('showcase:', '').trim()

        // Merge with preceding markdown block
        if (currentMarkdown.length > 0) {
          const text = currentMarkdown.join('\n').trim()
          if (text) {
            blocks.push({
              type: 'showcase',
              content: text,
              showcaseImage: { src, alt: cleanAlt }
            })
          }
          currentMarkdown = []
        } else if (blocks.length > 0 && blocks[blocks.length - 1].type === 'markdown') {
          // Convert last markdown block to showcase
          const lastBlock = blocks.pop()!
          blocks.push({
            type: 'showcase',
            content: lastBlock.content,
            showcaseImage: { src, alt: cleanAlt }
          })
        }
      } else if (alt.startsWith('gallery:')) {
        // Gallery: prefix - collects images for masonry-style grid
        flushMarkdown()
        flushImages()
        flushDeck()
        const cleanAlt = alt.replace('gallery:', '').trim()
        currentGalleryImages.push({ src, alt: cleanAlt })
      } else if (alt.startsWith('deck:')) {
        // Deck: prefix - collects images for presentation deck spread
        flushMarkdown()
        flushImages()
        flushGallery()
        const cleanAlt = alt.replace('deck:', '').trim()
        currentDeckImages.push({ src, alt: cleanAlt })
      } else {
        // Regular image
        flushMarkdown()
        currentImages.push({ src, alt })
      }
    } else if (line.trim() === '' && currentImages.length > 0) {
      // Empty line while collecting images - flush to break the group
      flushImages()
    } else if (line.trim() === '' && currentGalleryImages.length > 0) {
      // Empty line while collecting gallery images - continue collecting
      continue
    } else if (line.trim() === '' && currentDeckImages.length > 0) {
      // Empty line while collecting deck images - continue collecting
      continue
    } else {
      // Regular content
      flushImages()
      flushGallery()
      flushDeck()
      currentMarkdown.push(line)
    }
  }

  // Flush remaining content
  flushMarkdown()
  flushImages()
  flushGallery()
  flushDeck()

  return blocks
}

export default function CaseStudyContent({ content }: CaseStudyContentProps) {
  const blocks = parseContentIntoBlocks(content)
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null)

  const markdownComponents: Components = {
    img: ({ src, alt }) => {
      if (!src || typeof src !== 'string') return null
      return (
        <div className="my-12 -mx-6 md:-mx-12 lg:-mx-16 xl:-mx-24">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 shadow-lg">
            <Image
              src={src}
              alt={alt || ''}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          {alt && (
            <p className="text-sm text-foreground/50 mt-3 text-center px-6 md:px-12 lg:px-16 xl:px-24">
              {alt}
            </p>
          )}
        </div>
      )
    },
    blockquote: ({ children }) => (
      <div className="my-12 p-8 bg-neutral-50 dark:bg-neutral-900/50 rounded-xl border-l-4 border-foreground/20">
        <blockquote className="m-0 text-lg md:text-xl italic text-foreground/80 leading-relaxed [&>p]:m-0">
          {children}
        </blockquote>
      </div>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl md:text-4xl font-bold font-display mt-16 mb-8 pt-8 border-t border-neutral-200 dark:border-neutral-800 first:mt-0 first:pt-0 first:border-0">
        {children}
      </h2>
    ),
    p: ({ children }) => (
      <p className="text-base md:text-lg text-foreground/70 leading-relaxed mb-6">
        {children}
      </p>
    ),
  }

  // Components for side-by-side sections (no top border on h2)
  const sideMarkdownComponents: Components = {
    ...markdownComponents,
    h2: ({ children }) => (
      <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
        {children}
      </h2>
    ),
  }

  return (
    <>
      {blocks.map((block, index) => {
        if (block.type === 'images' && block.images) {
          return <ImageGrid key={index} images={block.images} />
        }

        if (block.type === 'side-by-side' && block.sideImage) {
          return (
            <div key={index} className="my-16 pt-8 border-t border-neutral-200 dark:border-neutral-800 -mx-6 md:-mx-12 lg:-mx-16 xl:-mx-24 px-6 md:px-12 lg:px-16 xl:px-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <div>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={sideMarkdownComponents}
                  >
                    {block.content}
                  </ReactMarkdown>
                </div>
                <button
                  onClick={() => setLightboxImage(block.sideImage!)}
                  className="relative aspect-[3/4] rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 shadow-lg lg:sticky lg:top-8 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2"
                >
                  <Image
                    src={block.sideImage.src}
                    alt={block.sideImage.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/90 dark:bg-black/90 flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          )
        }

        if (block.type === 'showcase' && block.showcaseImage) {
          return (
            <div key={index} className="my-16 -mx-6 md:-mx-12 lg:-mx-16 xl:-mx-24">
              <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setLightboxImage(block.showcaseImage!)}
                  className="relative aspect-[16/10] w-full group cursor-pointer focus:outline-none"
                >
                  <Image
                    src={block.showcaseImage.src}
                    alt={block.showcaseImage.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-white/90 dark:bg-black/90 flex items-center justify-center shadow-xl">
                      <svg className="w-7 h-7 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </button>
                <div className="p-6 md:p-8 lg:p-10">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      ...sideMarkdownComponents,
                      h2: ({ children }) => (
                        <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
                          {children}
                        </h2>
                      ),
                      p: ({ children }) => (
                        <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                          {children}
                        </p>
                      ),
                    }}
                  >
                    {block.content}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          )
        }

        if (block.type === 'gallery' && block.galleryImages && block.galleryImages.length > 0) {
          const images = block.galleryImages
          return (
            <div key={index} className="my-16 -mx-6 md:-mx-12 lg:-mx-16 xl:-mx-24">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {images.map((image, imgIndex) => {
                  // Vary the sizing: first image spans 2 cols, others vary
                  const isLarge = imgIndex === 0
                  const isTall = imgIndex === 2 || imgIndex === 4

                  return (
                    <button
                      key={imgIndex}
                      onClick={() => setLightboxImage(image)}
                      className={`
                        relative rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800
                        group cursor-pointer focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2
                        ${isLarge ? 'col-span-2 row-span-2 aspect-[4/3]' : ''}
                        ${isTall && !isLarge ? 'row-span-2 aspect-[3/4]' : ''}
                        ${!isLarge && !isTall ? 'aspect-[4/3]' : ''}
                      `}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes={isLarge ? '66vw' : '33vw'}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-sm font-medium">{image.alt}</p>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          )
        }

        if (block.type === 'deck' && block.deckImages && block.deckImages.length > 0) {
          const images = block.deckImages
          return (
            <div key={index} className="my-16 -mx-6 md:-mx-12 lg:-mx-16 xl:-mx-24">
              {/* Deck header */}
              <div className="px-6 md:px-12 lg:px-16 xl:px-24 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/90">Vision Deck</p>
                    <p className="text-xs text-foreground/50">{images.length} slides</p>
                  </div>
                </div>
              </div>

              {/* Grid deck spread - flows left to right */}
              <div className="px-3 md:px-6 lg:px-8 xl:px-12">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                  {images.map((image, imgIndex) => (
                    <button
                      key={imgIndex}
                      onClick={() => setLightboxImage(image)}
                      className="relative w-full rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-800 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:ring-offset-2"
                    >
                      <div className="relative aspect-[16/9]">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Slide number badge */}
                        <div className="absolute top-2 left-2 w-6 h-6 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-xs font-medium text-white">{imgIndex + 1}</span>
                        </div>

                        {/* Expand icon */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-10 h-10 rounded-full bg-white/90 dark:bg-black/90 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                            <svg className="w-5 h-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )
        }

        return (
          <ReactMarkdown
            key={index}
            remarkPlugins={[remarkGfm]}
            components={markdownComponents}
          >
            {block.content}
          </ReactMarkdown>
        )
      })}

      {/* Lightbox for side images */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="relative w-full h-full max-w-4xl max-h-[85vh] mx-6 my-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  )
}
