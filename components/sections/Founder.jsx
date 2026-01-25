"use client"

import Image from "next/image"
import { Container, Section, Grid } from "@/components/ui/Layout"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

export function Founder({ onBook }) {
    return (
        <Section id="founder" className="relative py-24 overflow-hidden bg-background">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-50 z-0" />

            <Container className="relative z-10">
                <Grid cols={1} md={2} gap={12} className="items-center">

                    {/* Left: Text & Story */}
                    <div className="space-y-8 animate-in slide-in-from-left-8 duration-700 fade-in">
                        <div className="space-y-2">
                            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-semibold text-primary bg-primary/5">
                                Meet the Developer
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-balance">
                                Not Just an Agency. <br />
                                <span className="text-primary italic">A Partner.</span>
                            </h2>
                        </div>

                        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                Hi, I'm <span className="font-semibold text-foreground">Talha Ghauri</span>.
                                Unlike traditional agencies where your project gets passed around to junior devs,
                                I personally architect and oversee every line of code.
                            </p>
                            <p>
                                With a verified history of delivering
                                <span className="text-foreground font-medium"> 500+ successful projects </span>
                                matching the standards of Silicon Valley tech giants, I bring consistency,
                                speed, and scalability to your vision.
                            </p>
                        </div>

                        <div className="pt-4 flex gap-4">
                            <Button size="lg" onClick={onBook} className="rounded-full px-8 shadow-xl shadow-primary/20">
                                Work With Me
                            </Button>
                            <a href="https://github.com/Talha49" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-input bg-background hover:bg-muted hover:text-accent-foreground h-12 w-12 transition-colors">
                                {/* Github Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                            </a>
                            <a href="https://www.linkedin.com/in/talha-ghauri-web-application-developer-a366311b5" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-input bg-background hover:bg-muted hover:text-accent-foreground h-12 w-12 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                            </a>
                        </div>

                        {/* Personal Portfolio Link */}
                        <a
                            href="https://portfolio-talha-psi.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                        >
                            <span>View my personal portfolio</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </a>
                    </div>

                    {/* Right: Visuals */}
                    <div className="relative h-auto md:h-[600px] w-full flex flex-col md:block items-center justify-center group perspective-1000 mt-12 md:mt-0 gap-3">

                        {/* Main Image Card */}
                        <div className="relative md:absolute top-0 bottom-0 left-0 right-0 m-auto h-[400px] w-[280px] md:h-[500px] md:w-[350px] bg-muted rounded-3xl overflow-hidden border-4 border-background shadow-2xl rotate-0 md:rotate-[-3deg] transition-all duration-500 z-20 group-hover:rotate-0 group-hover:scale-105">
                            <Image
                                src="/assets/my3.png"
                                alt="Talha Ghauri"
                                fill
                                className="object-cover"
                                priority
                                quality={90}
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                                <p className="font-heading font-bold text-xl">Talha Ghauri</p>
                                <p className="text-sm opacity-90">Lead Engineer & Founder</p>
                            </div>
                        </div>

                        {/* Floating Interaction Shot 1 - Closer on desktop */}
                        <div className="relative md:absolute top-10 right-10 md:right-8 h-32 w-48 md:h-40 md:w-56 bg-white rounded-xl shadow-xl border overflow-hidden rotate-0 md:rotate-[6deg] z-30 transition-all duration-700 group-hover:translate-x-4 group-hover:-rotate-3 hover:!z-40 hover:!scale-125 hidden md:block">
                            <Image
                                src="/assets/my1.png"
                                alt="Workflow"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Floating Interaction Shot 2 - Closer on desktop */}
                        <div className="relative md:absolute bottom-20 left-4 md:left-8 h-36 w-32 md:h-48 md:w-40 bg-white rounded-xl shadow-xl border overflow-hidden rotate-0 md:rotate-[-12deg] z-10 transition-all duration-700 group-hover:-translate-x-4 group-hover:rotate-6 hover:!z-40 hover:!scale-125 hidden md:block">
                            <Image
                                src="/assets/my2.png"
                                alt="Workspace"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Decorative Circle */}
                        <div className="absolute inset-0 m-auto h-[300px] w-[300px] md:h-[500px] md:w-[500px] bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse pointer-events-none" />
                    </div>

                </Grid>
            </Container>
        </Section>
    )
}
