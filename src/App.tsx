import React, { useState } from 'react'
import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { StatsSection } from './components/StatsSection'
import { FinancingSection } from '@/components/FinancingSection'
import { HowItWorksSection } from '@/components/HowItWorksSection'
// import { ArtisansSection } from '@/components/ArtisansSection'
// import { PropertyManagementSection } from '@/components/PropertyManagement'
// import { FinalCTASection } from '@/components/FinalCTASection'
import { Footer } from '@/components/Footer'
import { WaitlistModal } from '@/components/WaitlistModal'


export default function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const openWaitlist = () => setIsWaitlistOpen(true)
  const closeWaitlist = () => setIsWaitlistOpen(false)
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar onOpenWaitlist={openWaitlist} />

      <main>
        <HeroSection onOpenWaitlist={openWaitlist} />
        <StatsSection />
        <FinancingSection onOpenWaitlist={openWaitlist} />
        <HowItWorksSection />
        {/* <ArtisansSection onOpenWaitlist={openWaitlist} />
        <PropertyManagementSection onOpenWaitlist={openWaitlist} />
        <FinalCTASection onOpenWaitlist={openWaitlist} /> */}
      </main>

      <Footer />

      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </div>
  )
}
