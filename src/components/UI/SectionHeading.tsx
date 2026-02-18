import React from 'react'
import { motion } from 'framer-motion'
interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
  light?: boolean
}
export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}
    >
      <motion.h2
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.5,
        }}
        className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-slate-900'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          className={`text-lg md:text-xl max-w-2xl mx-auto ${light ? 'text-teal-100' : 'text-slate-500'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
