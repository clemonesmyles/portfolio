'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from './ui/FadeIn'

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "I had the great opportunity to work with Myles in the Enterprise Experience Design team at Northwestern Mutual. His ability to lead and shape user journeys, develop roadmaps that connect all disparate product efforts into an interconnected and unified experience, and craft strategic vision documents for stakeholders is unparalleled. Myles is also able to lead conversations with senior leadership, while identifying effective and engaging solutions to solve their critical challenges. He is a true team player, continually looking to learn and grow, and his contributions are valued by everyone he works with. I highly recommend Myles and any company would be lucky to have him!",
    author: 'Laura Mulcahey',
    role: 'Program Director',
    company: 'Northwestern Mutual',
  },
  {
    quote:
      "I had the good fortune of working with Myles during my time at Northwestern Mutual. We originally hired him as a freelancer and he delivered great work from day one. When the time came to convert him to full time, it was an easy choice. Working with Myles is a. He is a great designer with a keen eye for strategic solutions that drive business outcomes. Our first project required him to set a vision for a large piece of the business. A big ask for a new employee. He tunnelled into the organisation with skill and expertise and synthesised vast amounts of complex information quickly and efficiently. His skill in developing relationships with stakeholders allowed him to run highly effective workshops and drive the work forwards. When it came time to synthesize all the work into a coherent vision, most of the hard work was already done and came together effortlessly. I was impressed with how much he was able to do with minimal guidance and oversight from my part and just how quickly he was able to get up to speed with a complex subject matter. Myles has since progressed to enabling the digital transformation of the entire company where he continues to impress. Throughout my time working with Myles, I've been impressed with his passion, professionalism, and demnor. He cares deeply about the value of design and sees it as a catalyst for change. He is easy to work with, takes feedback well and always is quick to propose solutions to challenging situations. Myles has also helped me sharpen my own skills, I feel I run better workshops with more purpose after our time together. It's always great when you can learn from the people you manage and I've learned a lot from Myles. I enjoyed working with Myles and think you will too.",
    author: 'Phil Robinson',
    role: 'Design Director',
    company: 'Northwestern Mutual',
  },
  {
    quote:
      "Myles is a top guy. Smart, considered and dedicated, Myles is a great designer who you want to have working on your projects. He's able to spot what is going on in research as well as understand the deeper reasons why. It has always been a pleasure working with Myles who has great client managing skills as well as working with his team. I've worked with him in two different companies and would relish the opportunity to work with him again in the future.",
    author: 'Dave Hayes',
    role: 'Director',
    company: 'Symplicit',
  },
  {
    quote:
      "What I like most about Myles is that he is genuine, humble and always up for learning or trying something new - great skills to have in an industry that is constantly moving and changing shape. He has been a loyal and dedicated team member that positively contributed to the team, and our culture, at Symplicit over the years, so I would not hesitate in recommending him. Good luck Myles - come back to us soon!",
    author: 'Jodie Moule',
    role: 'Non-Executive Director [GAICD]; Investor; Original co-founder',
    company: 'Symplicit',
  },
  {
    quote:
      "Myles and I worked together on a customer experience research project for Care Connect in Jan - March 2017. Myles spent time getting to know key elements of the particular program being reviewed. Valuable stakeholder views and input, gained though multiple interviews and meetings, really gave the project findings depth and a holistic view of the customer journey from many different perspectives. Myles illicited all the nuances, challenges and opportunities of the prorough creative use of colour, drawing, narratives and customer archetypes. The final project recommendations have provided the blue print and leverage needed to make some key changes and improvements to the program. I can highly recommend Myles and his personable, fun, intelligent approach to program analysis, review and redesign.",
    author: 'Marisa Galiazzo',
    role: 'Director',
    company: 'Care Connect',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative">
      {/* Carousel container */}
      <div className="relative min-h-[400px] md:min-h-[350px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
              <div className="flex-1 mb-6">
                <svg
                  className="w-10 h-10 text-accent-500 mb-4 opacity-50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-foreground/80 leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </p>
              </div>
              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-4">
                <p className="font-semibold text-foreground">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-sm text-foreground/60">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-sm text-foreground/50">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          aria-label="Previous testimonial"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-foreground w-8'
                  : 'bg-foreground/30 hover:bg-foreground/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          aria-label="Next testimonial"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
