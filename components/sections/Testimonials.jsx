"use client"

import * as React from "react"
import Image from "next/image"
import { Container, Grid, Section } from "@/components/ui/Layout"
import { Card, CardContent } from "@/components/ui/Card"
import { Modal } from "@/components/ui/Modal"

export function Testimonials() {
    const [selectedImage, setSelectedImage] = React.useState(null)

    // Placeholders for Fiverr Social Proof - intended to be screenshots of earnings/reviews
    const proofs = [
        { id: 1, type: "Review", client: "Startup Founder (USA)", text: "Delivered the MVP 2 days early. Exceptional code quality.", src: "/proof-1.jpg" },
        { id: 2, type: "Earning", client: "Fiverr Dashboard", text: "Consistent 5-star delivery record across 100+ orders.", src: "/proof-2.jpg" },
        { id: 3, type: "Review", client: "Graduate Student (UK)", text: "Helped me understand the entire codebase for my viva. Life saver!", src: "/proof-3.jpg" },
        { id: 4, type: "Review", client: "SaaS Business", text: "The backend architecture is scalable and robust. Highly recommended.", src: "/proof-4.jpg" },
    ]

    return (
        <Section id="reviews" variant="muted">
            <Container>
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading">Trusted by Clients Worldwide</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Real results, real earnings, and verified 5-star feedback from our global network.
                    </p>
                </div>

                <Grid cols={2} md={2} lg={4} gap={6}>
                    {proofs.map((proof) => (
                        <Card
                            key={proof.id}
                            className="cursor-pointer hover:scale-105 transition-transform duration-300 overflow-hidden group"
                            onClick={() => setSelectedImage(proof)}
                        >
                            <div className="relative aspect-video bg-muted-foreground/10">
                                {/* Placeholder for actual image */}
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-bold text-xl uppercase tracking-widest">
                                    {proof.type}
                                </div>
                                {/* Overlay to indicate click action */}
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <span className="bg-background/80 backdrop-blur text-xs px-2 py-1 rounded-full shadow-sm">View Proof</span>
                                </div>
                            </div>
                            <CardContent className="p-4">
                                <p className="text-sm font-semibold">{proof.client}</p>
                                <p className="text-xs text-muted-foreground line-clamp-2 mt-1">"{proof.text}"</p>
                            </CardContent>
                        </Card>
                    ))}
                </Grid>

                <Modal
                    isOpen={!!selectedImage}
                    onClose={() => setSelectedImage(null)}
                    title={selectedImage?.type === "Review" ? "Client Review" : "Verified Earnings"}
                    description={selectedImage?.client}
                    className="sm:max-w-3xl"
                >
                    <div className="relative aspect-video w-full bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                        <p className="text-muted-foreground">
                            (Image Placeholder: {selectedImage?.src}) <br />
                            Replace with actual screenshot in public/ folder.
                        </p>
                    </div>
                </Modal>

            </Container>
        </Section>
    )
}
