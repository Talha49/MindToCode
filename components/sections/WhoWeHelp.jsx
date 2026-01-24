"use client"

import * as React from "react"
import { Container, Grid, Section } from "@/components/ui/Layout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { cn } from "@/lib/utils"

export function WhoWeHelp({ onBook }) {
    const audiences = [
        {
            title: "Students & Researchers",
            description: "Need help with Assignments or University Projects?",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 10v6M2 10v6" /><path d="M22 20V10l-10-6-10 6v10" /><path d="M6 12.5V20" /><path d="M18 12.5V20" /></svg>
            ),
            features: [
                "C / C++ / Java / Python Projects",
                "Web & App Development Assignments",
                "AI Models & Data Science Tasks",
                "Code Explanation & Viva Prep"
            ],
            badge: "Academic Support",
            cta: "Get Assignment Help"
        },
        {
            title: "Business & Founders",
            description: "Looking for a developer to build your Website or App?",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
            ),
            features: [
                "Custom Websites (React/Next.js)",
                "Software & Tool Development",
                "MVP for Startups",
                "Bug Fixing & Maintenance"
            ],
            badge: "Direct Freelance",
            cta: "Start Your Project"
        }
    ]

    return (
        <Section id="who-we-help" className="relative overflow-hidden">
            <Container>
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading">Who I Can Help</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Whether you need academic mastery or business growth, I've got you covered.
                    </p>
                </div>

                <Grid cols={2} gap={8}>
                    {audiences.map((audience, i) => (
                        <Card key={i} className={cn(
                            "relative overflow-hidden border-muted transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group",
                            i === 0 ? "hover:border-primary/50" : "hover:border-accent/50"
                        )}>
                            <div className={cn(
                                "absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500",
                                i === 0 ? "bg-primary" : "bg-accent"
                            )} />

                            <CardHeader>
                                <div className="flex justify-between items-start mb-4">
                                    <div className={cn(
                                        "p-3 rounded-xl bg-background border shadow-sm",
                                        i === 0 ? "text-primary" : "text-accent"
                                    )}>
                                        {audience.icon}
                                    </div>
                                    <Badge variant={i === 0 ? "default" : "secondary"}>
                                        {audience.badge}
                                    </Badge>
                                </div>
                                <CardTitle>{audience.title}</CardTitle>
                                <CardDescription className="text-base">{audience.description}</CardDescription>
                            </CardHeader>

                            <CardContent>
                                <ul className="space-y-3">
                                    {audience.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn("shrink-0", i === 0 ? "text-primary" : "text-accent")}><polyline points="20 6 9 17 4 12" /></svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter>
                                <Button className="w-full" onClick={onBook}>
                                    {audience.cta}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </Grid>
            </Container>
        </Section>
    )
}
