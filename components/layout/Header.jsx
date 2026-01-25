"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
// import { useScroll } from "@/hooks/use-scroll" // We'll build a simple scroll hook inline or separate later if needed, for now logic inline
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Layout"

export function Header({ onBook }) {
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
                isScrolled ? "bg-background/80 backdrop-blur-md border-border py-3" : "bg-background/80 backdrop-blur-md md:bg-transparent py-3 md:py-5 border-border md:border-transparent"
            )}
        >
            <Container>
                <div className="flex items-center justify-between">
                    {/* Logo Area */}
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl font-heading tracking-tight">
                        <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                            <Image
                                src="/assets/logo.png"
                                alt="MindToCode Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        MindToCode
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                        <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
                        <Link href="#process" className="hover:text-primary transition-colors">How it Works</Link>
                        <Link href="#why-us" className="hover:text-primary transition-colors">Why Us</Link>
                    </nav>

                    {/* Action Area */}
                    <div className="flex items-center gap-4">
                        <Button size="sm" onClick={onBook} className="inline-flex">Book Consultation</Button>
                    </div>
                </div>


            </Container>

        </header >
    )
}
