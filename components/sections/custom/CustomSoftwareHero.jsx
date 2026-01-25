"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Layout"
import { useMousePosition } from "@/hooks/use-mouse-position"

export function CustomSoftwareHero({ onBook }) {
    const { x, y } = useMousePosition();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const xOffset = mounted ? (x - (typeof window !== 'undefined' ? window.innerWidth : 0) / 2) / 25 : 0;
    const yOffset = mounted ? (y - (typeof window !== 'undefined' ? window.innerHeight : 0) / 2) / 25 : 0;

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 perspective-1000">
            {/* Background - Technical, Data-driven */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/hero-bg.png"
                    alt="Background"
                    fill
                    className="object-cover object-center opacity-10 hue-rotate-180 translate-y-10 scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
            </div>

            <Container className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Text Content */}
                <div className="flex-1 flex flex-col items-start text-left space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-1000">
                    <div className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-400 backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-full bg-orange-500 mr-2 animate-pulse"></span>
                        Enterprise Grade Solutions
                    </div>

                    <div className="space-y-4 max-w-2xl">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading tracking-tight text-balance leading-tight">
                            Scalable Custom <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500 animate-gradient-x">
                                Software & SaaS
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                            We build complex, secure, and data-intensive web applications. From internal CRM tools to customer-facing SaaS platforms, we architect for scale.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button size="lg" onClick={onBook} className="h-12 px-8 text-lg shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all bg-orange-600 hover:bg-orange-700 text-white border-none">
                            Consult Solutions Architect
                        </Button>
                    </div>

                    {/* Trust List */}
                    <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm font-medium text-muted-foreground opacity-90">
                        <div className="flex items-center gap-2">
                            <span className="text-orange-500">✓</span> Cloud Native (AWS/Vercel)
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-orange-500">✓</span> High Security (OWASP Top 10)
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-orange-500">✓</span> Legacy System Modernization
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-orange-500">✓</span> Real-time Data processing
                        </div>
                    </div>
                </div>

                {/* 3D Visual - Server Architecture */}
                <div className="flex-1 flex justify-center items-center relative w-full h-[350px] md:h-[500px] perspective-1000 hidden md:flex">
                    <div
                        className="relative w-96 h-96 transition-transform duration-100 ease-out z-10"
                        style={{
                            transform: `rotateX(${-yOffset * 0.5}deg) rotateY(${xOffset * 0.5}deg)`,
                            transformStyle: "preserve-3d"
                        }}
                    >
                        {/* Central Core (Database) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-orange-900/20 border border-orange-500/30 rounded-full backdrop-blur-md flex items-center justify-center animate-pulse" style={{ transform: "translateZ(0px) translate(-50%, -50%)" }}>
                            <div className="w-32 h-32 border border-orange-500/50 rounded-full flex items-center justify-center">
                                <span className="text-orange-400 font-mono text-xs">CORE DATA</span>
                            </div>
                        </div>

                        {/* Satellite Nodes (Microservices) */}
                        {[0, 90, 180, 270].map((deg, i) => (
                            <div
                                key={i}
                                className="absolute w-20 h-20 bg-background/80 border border-white/10 rounded-xl backdrop-blur-xl shadow-lg flex items-center justify-center top-1/2 left-1/2"
                                style={{
                                    transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-140px) rotate(-${deg}deg) translateZ(${30 + i * 10}px)`
                                }}
                            >
                                <div className="w-2 h-2 rounded-full bg-green-500 mb-2"></div>
                            </div>
                        ))}

                        {/* Connecting Lines (CSS trick utilizing borders/pseudo elements would be complex, simplifying with just floating elements) */}

                        {/* Uptime Badge */}
                        <div
                            className="absolute bottom-0 -right-4 bg-white/95 text-black backdrop-blur-xl p-4 rounded-xl shadow-2xl border border-orange-500/20"
                            style={{ transform: "translateZ(100px)" }}
                        >
                            <p className="text-xs text-muted-foreground uppercase font-semibold">System Uptime</p>
                            <p className="font-bold text-xl text-green-600">99.99% ✅</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
