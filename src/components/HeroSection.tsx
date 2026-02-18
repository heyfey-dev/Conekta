import React, { Children } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/UI/Button'

interface HeroSectionProps {
  onOpenWaitlist: () => void
}
export function HeroSection({ onOpenWaitlist }: HeroSectionProps) {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-stone-50">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-50/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left pt-10 lg:pt-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-medium mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-teal-500"></span>
              The Future of Housing in Africa
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight"
            >
              Your Complete <br />
              <span className="text-teal-600">Housing Ecosystem</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl font-semibold text-teal-600/80 mb-4 tracking-wide"
            >
              Find. Finance. Manage. Thrive.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              From discovering your dream property to flexible payment plans and
              trusted artisans — Conekta connects every step of your housing
              journey.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenWaitlist}
                rightIcon={<ArrowRight size={18} />}
              >
                Join the Waitlist
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document.getElementById('how-it-works')?.scrollIntoView({
                    behavior: 'smooth',
                  })
                }
              >
                Explore How It Works
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-2 text-sm text-slate-500"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="font-medium">Join 2,000+ early adopters</span>
            </motion.div>
          </motion.div>

          {/* Right Visual - Abstract Illustration */}
          <motion.div
            className="lg:w-1/2 w-full h-[400px] lg:h-[600px] relative hidden lg:block"
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
          >
            <div className="relative w-full h-full">
              {/* Abstract Building Shapes */}
              <div
                className="absolute top-1/4 right-10 w-64 h-80 bg-teal-100 rounded-3xl transform rotate-3 animate-float opacity-80"
                style={{
                  animationDelay: '0s',
                }}
              ></div>
              <div
                className="absolute top-1/3 right-32 w-56 h-64 bg-amber-100 rounded-3xl transform -rotate-6 animate-float opacity-80"
                style={{
                  animationDelay: '1s',
                }}
              ></div>
              <div className="absolute top-20 right-48 w-48 h-48 bg-teal-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>

              {/* Floating Cards */}
              <motion.div
                className="absolute top-1/3 left-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 max-w-[200px] z-20"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Status</div>
                    <div className="text-sm font-bold text-slate-800">
                      Rent Paid
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-1/4 right-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 max-w-[220px] z-20"
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center text-white font-bold">
                    24
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Next Payment</div>
                    <div className="text-sm font-bold text-slate-800">
                      Due in 5 days
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute top-10 right-10 w-4 h-4 rounded-full bg-amber-400"></div>
              <div className="absolute bottom-20 left-20 w-6 h-6 rounded-full bg-teal-500"></div>
              <div className="absolute top-1/2 right-0 w-3 h-3 rounded-full bg-slate-300"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
