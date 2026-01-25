"use client"

import * as React from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { MvpHero } from "@/components/sections/mvp/MvpHero"
import { MvpFAQ } from "@/components/sections/mvp/MvpFAQ"
import { Testimonials } from "@/components/sections/Testimonials"
import { CallToAction } from "@/components/sections/CallToAction"
import { Modal } from "@/components/ui/Modal"
import { BookingWizard } from "@/components/booking/BookingWizard"
import { Process } from "@/components/sections/Process"

export function MvpProjectView({ faqSchema }) {
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
            <MvpHero onBook={openBooking} />

            {/* Reusing Process (Phase 1: Discovery, Phase 2: Build, Phase 3: Launch) */}
            <Process onBook={openBooking} />

            {/* Specialized FAQ */}
            <MvpFAQ />

            <Testimonials />

            <CallToAction onBook={openBooking} />

            <Footer />

            <Modal
                isOpen={isBookingOpen}
                onClose={closeBooking}
                title="Start Your MVP"
                description="Tell us about your startup idea. We'll help you validate and build it."
                className="sm:max-w-3xl"
            >
                <BookingWizard onClose={closeBooking} />
            </Modal>
        </main>
    )
}
