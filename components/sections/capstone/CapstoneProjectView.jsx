"use client"

import * as React from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CapstoneHero } from "@/components/sections/capstone/CapstoneHero"
import { CapstoneFAQ } from "@/components/sections/capstone/CapstoneFAQ"
import { Testimonials } from "@/components/sections/Testimonials"
import { CallToAction } from "@/components/sections/CallToAction"
import { Modal } from "@/components/ui/Modal"
import { BookingWizard } from "@/components/booking/BookingWizard"
import { Process } from "@/components/sections/Process"

export function CapstoneProjectView({ faqSchema }) {
    const [isBookingOpen, setIsBookingOpen] = React.useState(false)

    const openBooking = () => setIsBookingOpen(true)
    const closeBooking = () => setIsBookingOpen(false)

    return (
        <main className="flex min-h-screen flex-col">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <Header onBook={openBooking} />

            {/* Specialized Hero */}
            <CapstoneHero onBook={openBooking} />

            {/* Reusing Process (Phase 1: Proposal, Phase 2: Code, Phase 3: Docs) */}
            <Process onBook={openBooking} />

            {/* Specialized FAQ */}
            <CapstoneFAQ />

            <Testimonials />

            <CallToAction onBook={openBooking} />

            <Footer />

            <Modal
                isOpen={isBookingOpen}
                onClose={closeBooking}
                title="Discuss Your Capstone Project"
                description="Share your topic idea or ask for suggestions. We'll help you graduate."
                className="sm:max-w-3xl"
            >
                <BookingWizard onClose={closeBooking} />
            </Modal>
        </main>
    )
}
