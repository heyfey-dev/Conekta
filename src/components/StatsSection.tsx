import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
const StatCard = ({
  number,
  label,
  suffix = '+',
}: {
  number: number
  label: string
  suffix?: string
}) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })
  useEffect(() => {
    if (isInView) {
      const duration = 2000 // 2 seconds
      const steps = 60
      const stepTime = duration / steps
      const increment = number / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= number) {
          setCount(number)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, stepTime)
      return () => clearInterval(timer)
    }
  }, [isInView, number])
  return (
    <div
      ref={ref}
      className="text-center p-8 rounded-2xl bg-white border border-slate-50 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="text-4xl lg:text-5xl font-extrabold text-teal-600 mb-2 font-display">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-slate-600 font-medium text-lg">{label}</div>
    </div>
  )
}
export function StatsSection() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
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
              delay: 0,
            }}
          >
            <StatCard number={5000} label="Verified Properties" />
          </motion.div>
          <motion.div
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
              delay: 0.1,
            }}
          >
            <StatCard number={10000} label="Happy Tenants" />
          </motion.div>
          <motion.div
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
              delay: 0.2,
            }}
          >
            <StatCard number={500} label="Verified Artisans" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
