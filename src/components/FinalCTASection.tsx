import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/UI/Button'

interface FinalCTASectionProps {
  onOpenWaitlist: () => void
}
export function FinalCTASection({ onOpenWaitlist }: FinalCTASectionProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-teal-600 to-teal-800 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500 rounded-full mix-blend-overlay filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
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
          className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white"
        >
          Ready to Start Your Housing Journey?
        </motion.h2>

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
            delay: 0.1,
          }}
          className="text-xl text-teal-50 mb-10 max-w-2xl mx-auto"
        >
          Join thousands of Nigerians already transforming how they find,
          finance, and manage their homes.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
          }}
        >
          <Button
            variant="accent"
            size="lg"
            className="px-10 py-6 text-lg rounded-2xl shadow-xl shadow-amber-900/20"
            onClick={onOpenWaitlist}
          >
            Join the Waitlist — It's Free
          </Button>
          <p className="mt-4 text-sm text-teal-200/80">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
