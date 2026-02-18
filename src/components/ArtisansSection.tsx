import React from 'react'
import { motion } from 'framer-motion'
import {
  CheckCircle2,
  Zap,
  Droplets,
  Paintbrush,
  Palette,
  Wrench,
  Shield,
  ArrowRight,
} from 'lucide-react'
import { SectionHeading } from '@/components/UI/SectionHeading'
import { Button } from '@/components/UI/Button'

interface ArtisansSectionProps {
  onOpenWaitlist: () => void
}
export function ArtisansSection({ onOpenWaitlist }: ArtisansSectionProps) {
  const benefits = [
    'Verified & background-checked professionals',
    'Transparent pricing — no hidden fees',
    '24/7 emergency services available',
    'Satisfaction guaranteed or your money back',
  ]
  const categories = [
    {
      name: 'Electricians',
      icon: <Zap className="w-6 h-6 text-teal-500" />,
    },
    {
      name: 'Plumbers',
      icon: <Droplets className="w-6 h-6 text-teal-500" />,
    },
    {
      name: 'Painters',
      icon: <Paintbrush className="w-6 h-6 text-teal-500" />,
    },
    {
      name: 'Interior Designers',
      icon: <Palette className="w-6 h-6 text-teal-500" />,
    },
    {
      name: 'General Repairs',
      icon: <Wrench className="w-6 h-6 text-teal-500" />,
    },
    {
      name: 'Security Systems',
      icon: <Shield className="w-6 h-6 text-teal-500" />,
    },
  ]
  return (
    <section id="artisans" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Trusted Professionals, One Click Away"
          subtitle="Verified artisans for every home need, whenever you need them."
        />

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: Benefits */}
          <motion.div
            className="lg:w-1/2"
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Why use Conekta Artisans?
              </h3>
              <ul className="space-y-6 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                variant="primary"
                onClick={onOpenWaitlist}
                rightIcon={<ArrowRight size={16} />}
              >
                Find an Artisan
              </Button>
            </div>
          </motion.div>

          {/* Right: Categories Grid */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categories.map((cat, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -5,
                  }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-center border border-slate-100 flex flex-col items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center">
                    {cat.icon}
                  </div>
                  <span className="font-medium text-slate-700">{cat.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
