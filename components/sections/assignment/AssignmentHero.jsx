"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Layout"
import { useMousePosition } from "@/hooks/use-mouse-position"

export function AssignmentHero({ onBook }) {
    // Parallax Logic
    const { x, y } = useMousePosition();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

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
                    className="object-cover object-center opacity-30 dark:opacity-20 translate-y-10 scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/70 to-background" />
            </div>

            <Container className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Left Content (Text) */}
                <div className="flex-1 flex flex-col items-start text-left space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-1000">

                    <div className="inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-sm font-medium text-green-500 backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                        Guaranteed A+ Grades or Money Back
                    </div>

                    <div className="space-y-4 max-w-2xl">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading tracking-tight text-balance leading-tight">
                            Stuck on your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 animate-gradient-x">
                                CS Assignment?
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                            Stop struggling with syntax errors and deadlines. Get expert, plagiarism-free help for Python, Java, C++, and Web Dev projects.
                            <span className="font-semibold text-foreground"> 100% Confidential.</span>
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button size="lg" onClick={onBook} className="h-12 px-8 text-lg shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all bg-green-600 hover:bg-green-700 text-white border-none">
                            Get Help Now
                        </Button>

                    </div>

                    {/* Trust Signals */}
                    <div className="pt-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 opacity-90 text-sm font-medium text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            Plagiarism Report Included
                        </div>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            Code Explanation (Zoom)
                        </div>
                    </div>
                </div>

                {/* Right Content (3D Element) */}
                <div className="flex-1 flex justify-center items-center relative w-full h-[350px] md:h-[500px] perspective-1000 hidden md:flex">

                    <div
                        className="relative w-80 h-80 transition-transform duration-100 ease-out z-10"
                        style={{
                            transform: `rotateX(${-yOffset * 0.5}deg) rotateY(${xOffset * 0.5}deg)`,
                            transformStyle: "preserve-3d"
                        }}
                    >
                        {/* IDE Code Snippet Visual */}
                        <div className="absolute inset-0 bg-black/80 rounded-xl border border-white/10 shadow-2xl p-6 font-mono text-xs text-green-400 overflow-hidden" style={{ transform: "translateZ(20px)" }}>
                            <div className="flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <p className="opacity-50 mb-2">// Project Status: COMPLETED</p>
                            <p><span className="text-purple-400">def</span> <span className="text-blue-400">solve_assignment</span>(requirements):</p>
                            <p className="pl-4"><span className="text-purple-400">if</span> deadline == <span className="text-yellow-300">"URGENT"</span>:</p>
                            <p className="pl-8">priority = <span className="text-orange-400">True</span></p>
                            <p className="pl-8">quality = <span className="text-orange-400">"A+"</span></p>
                            <p className="pl-8"><span className="text-purple-400">return</span> deliver_success()</p>
                        </div>

                        {/* Floating Badge (Grade A+) */}
                        <div
                            className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-xl border border-green-500/20 p-4 rounded-xl shadow-2xl"
                            style={{ transform: "translateZ(60px)" }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-black text-2xl">
                                    A+
                                </div>
                                <div>
                                    <p className="font-bold text-foreground">Top Grades</p>
                                    <p className="text-xs text-muted-foreground">Consistently</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </section>
    )
}
