import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/UI/Button'
import { useForm, ValidationError } from '@formspree/react'

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [state, handleSubmit] = useForm("mnjbdvkl")

  const resetAndClose = () => {
    onClose()
    window.location.reload() // optional: resets Formspree state cleanly
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-full hover:bg-slate-100"
              >
                <X size={20} />
              </button>

              <div className="p-8">
                {state.succeeded ? (
                  <div className="text-center py-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle2 size={32} />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      You're on the list! 🎉
                    </h3>
                    <p className="text-slate-600 mb-8">
                      Thanks for joining. We'll notify you as soon as we launch in your area.
                    </p>

                    <Button variant="primary" className="w-full" onClick={resetAndClose}>
                      Close
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="text-center mb-8">
                      <div className="text-3xl mb-2">🚀</div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        Join the Waitlist
                      </h3>
                      <p className="text-slate-500">
                        Be the first to experience the future of housing.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-slate-700 mb-1"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                          placeholder="you@example.com"
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-slate-700 mb-1"
                        >
                          Phone Number
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-3.5 text-slate-400 text-sm">
                            +234
                          </span>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            className="w-full pl-14 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                            placeholder="800 000 0000"
                          />
                        </div>
                        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                      </div>

                      <Button
                        type="submit"
                        variant="primary"
                        className="w-full mt-2"
                        isLoading={state.submitting}
                        disabled={state.submitting}
                      >
                        {state.submitting ? 'Joining...' : 'Join the Waitlist'}
                      </Button>

                      <p className="text-xs text-center text-slate-400 mt-4">
                        We respect your privacy. No spam, ever.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
