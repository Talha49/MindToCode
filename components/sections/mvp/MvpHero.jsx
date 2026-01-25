"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Layout"
import { useMousePosition } from "@/hooks/use-mouse-position"

export function MvpHero({ onBook }) {
    const { x, y } = useMousePosition();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const xOffset = mounted ? (x - (typeof window !== 'undefined' ? window.innerWidth : 0) / 2) / 25 : 0;
    const yOffset = mounted ? (y - (typeof window !== 'undefined' ? window.innerHeight : 0) / 2) / 25 : 0;

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 perspective-1000">
            {/* Background - Darker, Technical */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/hero-bg.png"
                    alt="Background"
                    fill
                    className="object-cover object-center opacity-10 grayscale translate-y-10 scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
            </div>

            <Container className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Text Content */}
                <div className="flex-1 flex flex-col items-start text-left space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-1000">
                    <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
                        Launch Your Startup in 4 Weeks
                    </div>

                    <div className="space-y-4 max-w-2xl">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading tracking-tight text-balance leading-tight">
                            Evaluate Your Idea <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-cyan-500 animate-gradient-x">
                                With a Real MVP
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                            Stop guessing. We build scalable, investor-ready Minimum Viable Products (MVPs) that help you validate your market and secure funding.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button size="lg" onClick={onBook} className="h-12 px-8 text-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all bg-blue-600 hover:bg-blue-700 text-white border-none">
                            Talk to an Expert
                        </Button>
                    </div>

                    {/* Trust List */}
                    <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm font-medium text-muted-foreground opacity-90">
                        <div className="flex items-center gap-2">
                            <span className="text-blue-500">✓</span> Full IP Ownership (No Equity)
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-blue-500">✓</span> Scalable Architecture (Next.js)
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-blue-500">✓</span> Fixed Price & Timeline
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-blue-500">✓</span> Post-Launch Support
                        </div>
                    </div>
                </div>

                {/* 3D Visual - Dashboard/metrics */}
                <div className="flex-1 flex justify-center items-center relative w-full h-[350px] md:h-[500px] perspective-1000 hidden md:flex">
                    <div
                        className="relative w-96 h-80 transition-transform duration-100 ease-out z-10"
                        style={{
                            transform: `rotateX(${-yOffset * 0.5}deg) rotateY(${xOffset * 0.5}deg)`,
                            transformStyle: "preserve-3d"
                        }}
                    >
                        {/* Main App Window */}
                        <div className="absolute inset-0 bg-background/50 border border-white/20 rounded-xl backdrop-blur-xl shadow-2xl p-4 overflow-hidden" style={{ transform: "translateZ(20px)" }}>
                            {/* Fake header */}
                            <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <div className="w-32 h-2 bg-white/10 rounded-full" />
                            </div>
                            {/* Content */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-2 space-y-2">
                                    <div className="h-24 bg-blue-500/10 rounded border border-blue-500/20" />
                                    <div className="h-24 bg-white/5 rounded" />
                                </div>
                                <div className="space-y-2">
                                    <div className="h-12 bg-white/5 rounded" />
                                    <div className="h-12 bg-white/5 rounded" />
                                    <div className="h-24 bg-white/5 rounded" />
                                </div>
                            </div>
                        </div>

                        {/* Speed Badge */}
                        <div
                            className="absolute -top-6 -left-6 bg-blue-600/90 text-white backdrop-blur-xl p-3 rounded-xl shadow-2xl"
                            style={{ transform: "translateZ(60px)" }}
                        >
                            <p className="font-bold text-sm flex items-center gap-2">
                                ⚡ Ship in 4 Weeks
                            </p>
                        </div>

                        {/* Revenue Badge */}
                        <div
                            className="absolute -bottom-6 -right-6 bg-white/95 text-black backdrop-blur-xl p-4 rounded-xl shadow-2xl border border-green-500/20"
                            style={{ transform: "translateZ(80px)" }}
                        >
                            <p className="text-xs text-muted-foreground uppercase font-semibold">User Growth</p>
                            <p className="font-bold text-xl text-green-600">+1,240% 📈</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
