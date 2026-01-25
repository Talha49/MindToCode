"use client"

import * as React from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CustomSoftwareHero } from "@/components/sections/custom/CustomSoftwareHero"
import { CustomSoftwareFAQ } from "@/components/sections/custom/CustomSoftwareFAQ"
import { Testimonials } from "@/components/sections/Testimonials"
import { CallToAction } from "@/components/sections/CallToAction"
import { Modal } from "@/components/ui/Modal"
import { BookingWizard } from "@/components/booking/BookingWizard"
import { Process } from "@/components/sections/Process"

export function CustomSoftwareProjectView({ faqSchema }) {
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
            <CustomSoftwareHero onBook={openBooking} />

            {/* Reusing Process */}
            <Process onBook={openBooking} />

            {/* Specialized FAQ */}
            <CustomSoftwareFAQ />

            <Testimonials />

            <CallToAction onBook={openBooking} />

            <Footer />

            <Modal
                isOpen={isBookingOpen}
                onClose={closeBooking}
                title="Consult an Architect"
                description="Let's solve your most complex technical challenges."
                className="sm:max-w-3xl"
            >
                <BookingWizard onClose={closeBooking} />
            </Modal>
        </main>
    )
}
