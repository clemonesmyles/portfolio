'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ImageGridProps {
  images: { src: string; alt: string }[]
}

export default function ImageGrid({ images }: ImageGridProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  if (images.length === 0) return null

  // Single image - render full width
  if (images.length === 1) {
    return (
      <div className="my-12 -mx-6 md:-mx-12 lg:-mx-16 xl:-mx-24">
        <div className="relative aspect-video rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 shadow-lg">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        {images[0].alt && (
          <p className="text-sm text-foreground/50 mt-3 text-center px-6 md:px-12 lg:px-16 xl:px-24">
            {images[0].alt}
          </p>
        )}
      </div>
    )
  }

  // Odd number of images - first one full width, rest in grid
  const isOdd = images.length % 2 !== 0
  const firstImage = isOdd ? images[0] : null
  const gridImages = isOdd ? images.slice(1) : images

  // Multiple images - render in grid with lightbox
  return (
    <>
      <div className="my-12 -mx-6 md:-mx-12 lg:-mx-16 xl:-mx-24">
        {/* First image full width when odd number */}
        {firstImage && (
          <button
            onClick={() => setSelectedImage(0)}
            className="relative aspect-video w-full rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 shadow-lg group cursor-pointer focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2 mb-4"
          >
            <Image
              src={firstImage.src}
              alt={firstImage.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="100vw"
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
        )}

        {/* Grid for remaining images */}
        <div className="grid gap-4 grid-cols-2">
          {gridImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(isOdd ? index + 1 : index)}
              className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 shadow-lg group cursor-pointer focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2"
            >
              <Image
                src={image.src}
                alt={image.alt}
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
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
                }}
                className="absolute left-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1)
                }}
                className="absolute right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Image */}
          <div
            className="relative w-full h-full max-w-6xl max-h-[85vh] mx-6 my-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
