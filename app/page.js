"use client"

import * as React from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { WhoWeHelp } from "@/components/sections/WhoWeHelp"
import { Services } from "@/components/sections/Services"
import { Process } from "@/components/sections/Process"
import { Testimonials } from "@/components/sections/Testimonials"
import { CallToAction } from "@/components/sections/CallToAction"
import { Modal } from "@/components/ui/Modal"
import { BookingWizard } from "@/components/booking/BookingWizard"
import { websiteSchema, organizationSchema, serviceSchema } from "@/lib/schema"
import { Founder } from "@/components/sections/Founder" // [NEW]

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = React.useState(false)

  const openBooking = () => setIsBookingOpen(true)
  const closeBooking = () => setIsBookingOpen(false)

  return (
    <main className="flex min-h-screen flex-col">
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Sticky Header with Book Action */}
      <Header onBook={openBooking} />
      
      {/* Hero with Book Action */}
      <Hero onBook={openBooking} />
            <Founder onBook={openBooking} /> {/* [NEW] */}

      <WhoWeHelp onBook={openBooking} />
      <Services />
      <Process onBook={openBooking} />
      <Testimonials />
      
      {/* CTA with Book Action */}
      <CallToAction onBook={openBooking} />
      
      <Footer />

      {/* Global Booking Modal */}
      <Modal 
        isOpen={isBookingOpen} 
        onClose={closeBooking}
        title="Book Your Free Consultation"
        description="Let's build something amazing together."
        className="sm:max-w-3xl"
      >
         <BookingWizard onClose={closeBooking} />

         
      </Modal>
    </main>
  )
}
