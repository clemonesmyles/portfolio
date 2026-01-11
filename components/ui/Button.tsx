import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  href?: string
  onClick?: () => void
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
}

export default function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-200'

  const variants = {
    primary:
      'bg-foreground text-background hover:bg-foreground/90 hover:scale-[1.02]',
    secondary:
      'bg-neutral-100 text-foreground hover:bg-neutral-200 hover:scale-[1.02]',
    ghost: 'text-foreground hover:bg-neutral-100',
  }

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  )
}
