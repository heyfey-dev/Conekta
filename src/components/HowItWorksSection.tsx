import React from 'react'
import { motion } from 'framer-motion'
import { Search, Wallet, Home, Sparkles } from 'lucide-react'
import { SectionHeading } from '@/components/UI/SectionHeading'
export function HowItWorksSection() {
  const steps = [
    {
      title: 'Discover',
      description:
        'Browse thousands of verified properties across Lagos and beyond.',
      icon: <Search className="w-6 h-6 text-teal-600" />,
    },
    {
      title: 'Finance',
      description: 'Choose a payment plan that fits your budget and lifestyle.',
      icon: <Wallet className="w-6 h-6 text-teal-600" />,
    },
    {
      title: 'Move In',
      description: 'Complete your paperwork digitally and get your keys.',
      icon: <Home className="w-6 h-6 text-teal-600" />,
    },
    {
      title: 'Thrive',
      description: 'Access maintenance, artisans, and community tools.',
      icon: <Sparkles className="w-6 h-6 text-teal-600" />,
    },
  ]
  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="How Conekta Works"
          subtitle="Four simple steps to your perfect home experience."
        />

        <div className="relative mt-16">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-8 left-0 w-full h-0.5 bg-teal-100 -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
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
                  delay: index * 0.2,
                }}
                className="relative flex flex-col items-center text-center lg:items-center"
              >
                {/* Connecting Line (Mobile) */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden absolute top-16 left-1/2 w-0.5 h-full bg-teal-100 -translate-x-1/2 -z-10" />
                )}

                <div className="w-16 h-16 rounded-full bg-white border-4 border-teal-50 shadow-sm flex items-center justify-center mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl w-full">
                  <div className="w-10 h-10 mx-auto bg-teal-50 rounded-full flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
