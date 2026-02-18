import React from 'react'
import { motion } from 'framer-motion'
import {
  Wrench,
  CreditCard,
  Bell,
  FileText,
  BarChart3,
  Users,
  ArrowRight,
} from 'lucide-react'
import { SectionHeading } from '@/components/UI/SectionHeading'
import { Button } from '@/components/UI/Button'

interface PropertyManagementSectionProps {
  onOpenWaitlist: () => void
}
export function PropertyManagementSection({
  onOpenWaitlist,
}: PropertyManagementSectionProps) {
  const features = [
    {
      title: 'Maintenance Requests',
      description: 'Submit and track repair requests with real-time updates.',
      icon: <Wrench className="w-6 h-6 text-teal-600" />,
    },
    {
      title: 'Online Payments',
      description: 'Pay rent and utilities securely from your phone.',
      icon: <CreditCard className="w-6 h-6 text-teal-600" />,
    },
    {
      title: 'Smart Notifications',
      description: 'Never miss a payment deadline or maintenance update.',
      icon: <Bell className="w-6 h-6 text-teal-600" />,
    },
    {
      title: 'Document Storage',
      description: 'Keep leases, receipts, and documents organized digitally.',
      icon: <FileText className="w-6 h-6 text-teal-600" />,
    },
    {
      title: 'Expense Tracking',
      description: 'Monitor spending with detailed financial reports.',
      icon: <BarChart3 className="w-6 h-6 text-teal-600" />,
    },
    {
      title: 'Community Portal',
      description: 'Connect with neighbors and building management.',
      icon: <Users className="w-6 h-6 text-teal-600" />,
    },
  ]
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Smart Property Management"
          subtitle="Everything you need to manage your property in one place."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
              className="bg-stone-50 rounded-2xl p-6 border border-slate-100 hover:border-teal-200 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" onClick={onOpenWaitlist}>
            Get Started with Management Tools{' '}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
