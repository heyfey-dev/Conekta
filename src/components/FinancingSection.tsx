import React from 'react'
import { motion } from 'framer-motion'
import {
  Coins,
  Clock,
  Key,
  Home,
  Building2,
  PieChart,
  ArrowRight,
} from 'lucide-react'
import { SectionHeading } from '@/components/UI/SectionHeading'
interface FinancingSectionProps {
  onOpenWaitlist: () => void
}
export function FinancingSection({ onOpenWaitlist }: FinancingSectionProps) {
  const cards = [
    {
      title: 'Rent Small Small',
      description:
        'Break your rent into easy weekly or bi-weekly payments that fit your budget.',
      icon: <Coins className="w-6 h-6 text-teal-600" />,
    },
    {
      title: 'Rent Now, Pay Later',
      description:
        'Move in today and spread your rent payments over flexible timelines.',
      icon: <Clock className="w-6 h-6 text-teal-600" />,
    },
    {
      title: 'Rent-to-Own',
      description: 'Every payment brings you closer to owning your dream home.',
      icon: <Key className="w-6 h-6 text-teal-600" />,
    },
    {
      title: 'Full Rent / Buy',
      description:
        'Traditional rental and purchase options with verified listings.',
      icon: <Home className="w-6 h-6 text-teal-600" />,
    },
    {
      title: 'Mortgage Financing',
      description:
        'Access competitive mortgage rates through our banking partners.',
      icon: <Building2 className="w-6 h-6 text-teal-600" />,
    },
    {
      title: 'Fractional Investment',
      description: 'Own a piece of premium real estate from just ₦50,000.',
      icon: <PieChart className="w-6 h-6 text-teal-600" />,
    },
  ]
  return (
    <section id="pricing" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Payment Options for Everyone"
          subtitle="Flexible financing that works for your lifestyle, not against it."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
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
                delay: index * 0.1,
              }}
              whileHover={{
                y: -5,
              }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group cursor-pointer"
              onClick={onOpenWaitlist}
            >
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                {card.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                {card.description}
              </p>
              <div className="flex items-center text-teal-600 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
