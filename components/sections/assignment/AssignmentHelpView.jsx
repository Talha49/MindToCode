"use client"

import * as React from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { AssignmentHero } from "@/components/sections/assignment/AssignmentHero"
import { AssignmentFAQ } from "@/components/sections/assignment/AssignmentFAQ"
import { Testimonials } from "@/components/sections/Testimonials"
import { CallToAction } from "@/components/sections/CallToAction"
import { Modal } from "@/components/ui/Modal"
import { BookingWizard } from "@/components/booking/BookingWizard"
import { Process } from "@/components/sections/Process"

export function AssignmentHelpView({ faqSchema }) {
    const [isBookingOpen, setIsBookingOpen] = React.useState(false)

    const openBooking = () => setIsBookingOpen(true)
    const closeBooking = () => setIsBookingOpen(false)

    return (
        <main className="flex min-h-screen flex-col">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Reusing Main Header */}
            <Header onBook={openBooking} />

            {/* Targeted Hero */}
            <AssignmentHero onBook={openBooking} />

            {/* Reusing Process Section (Generic enough: Discovery -> Strategy -> Dev -> Launch) */}
            <Process onBook={openBooking} />

            {/* Targeted FAQ */}
            <AssignmentFAQ />

            {/* Social Proof */}
            <Testimonials />

            {/* Final CTA */}
            <CallToAction onBook={openBooking} />

            <Footer />

            {/* Global Booking Modal */}
            <Modal
                isOpen={isBookingOpen}
                onClose={closeBooking}
                title="Get Help With Your Assignment"
                description="Tell us about your project requirements and deadline."
                className="sm:max-w-3xl"
            >
                <BookingWizard onClose={closeBooking} />
            </Modal>
        </main>
    )
}
