"use client"

import * as React from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { BusinessWebHero } from "@/components/sections/business/BusinessWebHero"
import { BusinessWebFAQ } from "@/components/sections/business/BusinessWebFAQ"
import { Testimonials } from "@/components/sections/Testimonials"
import { CallToAction } from "@/components/sections/CallToAction"
import { Modal } from "@/components/ui/Modal"
import { BookingWizard } from "@/components/booking/BookingWizard"
import { Process } from "@/components/sections/Process"

export function BusinessWebProjectView({ faqSchema }) {
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
            <BusinessWebHero onBook={openBooking} />

            {/* Reusing Process (Strategy -> Design -> Dev -> Launch) */}
            <Process onBook={openBooking} />

            {/* Specialized FAQ */}
            <BusinessWebFAQ />

            <Testimonials />

            <CallToAction onBook={openBooking} />

            <Footer />

            <Modal
                isOpen={isBookingOpen}
                onClose={closeBooking}
                title="Upgrade Your Online Presence"
                description="Let's build a website that drives real business results."
                className="sm:max-w-3xl"
            >
                <BookingWizard onClose={closeBooking} />
            </Modal>
        </main>
    )
}
