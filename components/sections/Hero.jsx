"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Layout"
import { cn } from "@/lib/utils"
import { useMousePosition } from "@/hooks/use-mouse-position"

export function Hero({ onBook }) {
    // Dynamic date logic
    const nextMonth = new Date();
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    const dateString = nextMonth.toLocaleString('default', { month: 'short', year: 'numeric' });

    // Parallax Logic
    const { x, y } = useMousePosition();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    // Calculate rotation/movement based on mouse position
    // Default to center if not mounted (SSR hygiene)
    const xOffset = mounted ? (x - (typeof window !== 'undefined' ? window.innerWidth : 0) / 2) / 25 : 0;
    const yOffset = mounted ? (y - (typeof window !== 'undefined' ? window.innerHeight : 0) / 2) / 25 : 0;

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 perspective-1000">

            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/hero-bg.png"
                    alt="Background"
                    fill
                    className="object-cover object-center opacity-30 dark:opacity-20"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background" />
            </div>

            <Container className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Left Content (Text) */}
                <div className="flex-1 flex flex-col items-start text-left space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-1000">

                    <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                        Accepting New Projects for {dateString}
                    </div>

                    <div className="space-y-4 max-w-2xl">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading tracking-tight text-balance leading-tight">
                            Your Direct Partner for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-accent animate-gradient-x">
                                Tech & Development
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                            I turn complex requirements into working software. Whether you're a student needing project help or a business building an MVP—work directly with an expert.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button size="lg" onClick={onBook} className="h-12 px-8 text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                            Book a Free Consultation
                        </Button>
                        <Link href="#services">
                            <Button variant="outline" size="lg" className="h-12 px-8 text-lg glass border-primary/20 hover:bg-primary/5">
                                Explore Services
                            </Button>
                        </Link>
                    </div>

                    {/* Social Proof */}
                    <div className="pt-8 flex items-center gap-8 opacity-80 text-sm font-medium text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                            100+ Projects Delivered
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                            Top Rated Seller
                        </div>
                    </div>
                </div>

                {/* Right Content (3D Parallax Image) */}
                <div className="flex-1 flex justify-center items-center relative w-full h-[400px] md:h-[600px] perspective-1000">
                    {/* Floating Cards / Elements behind */}
                    <div
                        className="absolute top-10 right-10 bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-2xl z-0"
                        style={{ transform: `translateX(${-xOffset * 1.5}px) translateY(${-yOffset * 1.5}px) rotateY(${-xOffset * 0.1}deg)` }}
                    >
                        <div className="h-2 w-24 bg-primary/20 rounded mb-2"></div>
                        <div className="h-2 w-16 bg-primary/20 rounded"></div>
                    </div>

                    <div
                        className="absolute bottom-20 left-10 bg-accent/5 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-2xl z-0"
                        style={{ transform: `translateX(${xOffset * 1.2}px) translateY(${yOffset * 1.2}px)` }}
                    >
                        <div className="flex gap-2">
                            <div className="h-8 w-8 rounded-full bg-accent/20"></div>
                            <div className="h-2 w-20 bg-accent/20 rounded mt-3"></div>
                        </div>
                    </div>


                    {/* Main Image with Tilt */}
                    <div
                        className="relative w-64 h-64 md:w-96 md:h-96 transition-transform duration-100 ease-out z-10"
                        style={{
                            transform: `rotateX(${-yOffset * 0.5}deg) rotateY(${xOffset * 0.5}deg)`,
                            transformStyle: "preserve-3d"
                        }}
                    >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>

                        {/* The Image (Logo) */}
                        <Image
                            src="/assets/logo.png"
                            alt="3D Logo"
                            fill
                            className="object-contain drop-shadow-2xl"
                            style={{ transform: "translateZ(20px)" }}
                        />

                        {/* Floating Text Badge (In Front) */}
                        <div
                            className="absolute -bottom-6 -right-6 bg-background/80 backdrop-blur-xl border border-primary/20 p-4 rounded-2xl shadow-2xl"
                            style={{ transform: "translateZ(60px)" }}
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-3xl">🚀</span>
                                <div>
                                    <p className="font-bold text-foreground">Launch Fast</p>
                                    <p className="text-xs text-muted-foreground">MVP Specialist</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Text Badge 2 (Top Left) */}
                        <div
                            className="absolute -top-6 -left-6 bg-background/80 backdrop-blur-xl border border-accent/20 p-3 rounded-2xl shadow-2xl"
                            style={{ transform: "translateZ(40px)" }}
                        >
                            <p className="font-bold text-accent text-sm">Python & AI Expert</p>
                        </div>
                    </div>
                </div>

            </Container>
        </section>
    )
}
