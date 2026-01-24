"use client"

import * as React from "react"
import { Container, Grid, Section } from "@/components/ui/Layout"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { cn } from "@/lib/utils"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function Services() {
    const technicalServices = [
        {
            title: "Coding Assignments",
            description: "Help with syntax, logic, and debugging in Python, C++, Java, and JavaScript.",
            icon: "Terminal"
        },
        {
            title: "University Projects",
            description: "Full-stack web apps, software projects, and capstone implementation support.",
            icon: "Code2"
        },
        {
            title: "AI & Data Science",
            description: "Machine Learning models, Python data analysis, and AI project support.",
            icon: "Bot"
        },
        {
            title: "Project Reports",
            description: "Assistance with technical documentation and explanation for your viva.",
            icon: "FileText"
        }
    ]

    const devServices = [
        {
            title: "Custom Websites",
            description: "Professional portfolios, landing pages, and business websites using React/Next.js.",
            icon: "Laptop"
        },
        {
            title: "Mobile & Web Apps",
            description: "Functional applications tailored to your specific business requirements.",
            icon: "Rocket"
        },
        {
            title: "Backend & Systems",
            description: "Robust APIs, database integration (SQL), and backend logic in Node.js/Python.",
            icon: "LayoutDashboard"
        },
        {
            title: "Scripting & Automation",
            description: "Automate boring tasks with custom Python scripts and tools.",
            icon: "Search"
        }
    ]

    return (
        <Section id="services" variant="muted">
            <Container>
                <ScrollReveal>
                    <div className="text-center space-y-4 mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading">My Services & Tech Stack</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            I work with a wide range of technologies to deliver exactly what you need.
                        </p>
                    </div>

                    <Tabs defaultValue="guidance" className="flex flex-col items-center">
                        <TabsList className="grid w-full max-w-[400px] grid-cols-2 mb-8">
                            <TabsTrigger value="guidance">For Students</TabsTrigger>
                            <TabsTrigger value="development">For Business</TabsTrigger>
                        </TabsList>

                        <TabsContent value="guidance" className="w-full">
                            <Grid cols={2} md={2} lg={4} gap={6}>
                                {technicalServices.map((service, i) => (
                                    <ServiceCard key={i} {...service} index={i} />
                                ))}
                            </Grid>
                        </TabsContent>

                        <TabsContent value="development" className="w-full">
                            <Grid cols={2} md={2} lg={4} gap={6}>
                                {devServices.map((service, i) => (
                                    <ServiceCard key={i} {...service} index={i} delay={i} />
                                ))}
                            </Grid>
                        </TabsContent>
                    </Tabs>
                </ScrollReveal>
            </Container>
        </Section>
    )
}

function ServiceCard({ title, description, icon, index, delay = 0 }) {
    // Icons mapping (using simple SVG for zero-dependency or lucide if installed - logic below uses SVG placeholders)
    // In a real app with lucide-react installed, we'd import them.
    // For now, I'll use a generic SVG with slight variations or just the same one for simplicity/speed, 
    // or strictly text if "icon" string is just a label.
    // Let's make a simple icon switcher based on the name for visual variety.

    const getIcon = (name) => {
        switch (name) {
            case "Code2": return <><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></>;
            case "Terminal": return <><polyline points="4 17 10 11 4 5" /><line x1="12" x2="20" y1="19" y2="19" /></>;
            case "Search": return <><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></>;
            case "FileText": return <><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></>;
            case "Rocket": return <><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></>;
            case "Laptop": return <><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" /></>;
            case "Bot": return <><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></>;
            case "LayoutDashboard": return <><rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" /></>;
            default: return <circle cx="12" cy="12" r="10" />;
        }
    }

    return (
        <Card className="h-full hover:shadow-lg transition-all border-none shadow-sm bg-background/50 backdrop-blur-sm">
            <CardHeader>
                <div className="mb-4 h-10 w-10 text-primary flex items-center justify-center bg-primary/10 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {getIcon(icon)}
                    </svg>
                </div>
                <CardTitle className="text-lg">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
        </Card>
    )
}
