import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2, Loader2 } from 'lucide-react'
import { Button } from '@/components/UI/Button'
interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}
export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
    }, 1500)
  }
  const resetForm = () => {
    setEmail('')
    setPhone('')
    setStatus('idle')
    onClose()
  }
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
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
                {status === 'success' ? (
                  <div className="text-center py-8">
                    <motion.div
                      initial={{
                        scale: 0,
                      }}
                      animate={{
                        scale: 1,
                      }}
                      className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle2 size={32} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      You're on the list! 🎉
                    </h3>
                    <p className="text-slate-600 mb-8">
                      Thanks for joining. We'll notify you as soon as Conekta
                      launches in your area.
                    </p>
                    <Button
                      variant="primary"
                      className="w-full"
                      onClick={resetForm}
                    >
                      Close
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="text-center mb-8">
                      <div className="text-3xl mb-2">🚀</div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        Join the Conekta Waitlist
                      </h3>
                      <p className="text-slate-500">
                        Be the first to experience the future of housing.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
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
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                          placeholder="you@example.com"
                        />
                      </div>

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
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full pl-14 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                            placeholder="800 000 0000"
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        variant="primary"
                        className="w-full mt-2"
                        isLoading={status === 'loading'}
                      >
                        Join the Waitlist
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
